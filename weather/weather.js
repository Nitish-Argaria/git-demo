const request = require('request');

var getWeather = (lat,lng,callback)=>{


request({
	url : `https://api.darksky.net/forecast/5b45396ea908620e12d49f91580f5232/${lat},${lng}`,
	json : true
} ,(error,response,body)=>{
	if(error)
	{
		//console.log('Unable to connect to forcast.io server');
		callback('Unable to connect to forcast.io server');
		//console.log(response);
	}
	else if(response.statusCode === 400)      //body.code can also be used for this
	{
		//console.log('Unable to fetch weather');
		callback('Unable to fetch weather');
		//console.log(response);
	}
	else if(!error&& response.statusCode === 200){
		//console.log(body.currently.temperature);
		callback(undefined,{
			temperature: body.currently.temperature,
			apparentTemperature : body.currently.apparentTemperature
		});
		//callback(`It is ${body.currently.temperature} but it feels like ${body.currently.apparentTemperature}`);

}
	else{
		//console.log("Unable to fetch weather");
		callback("Unable to fetch weather");
	}
});

};
module.exports.getWeather = getWeather;
