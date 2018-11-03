var request = require('request');
var fs = require('fs');
var cities = require('./cities.json')
var forecasts = require('./forecasts.json')


function getForecast(index){
	var city = cities[index].city;
	var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID={}&units=imperial'
	request({url: url, json: true},function(error,response,body){
		var time = 0;
		body.list.forEach(function(measurement){
			var forecast = {city: city, time: time, temp: measurement.main.temp};
			forecasts.push(forecast);
			time = time +3;
		});
		if(index < 4){
			getForecast(index+1);
		}else{
			fs.writeFile('forecasts.json',JSON.stringify(forecasts));
		}
	})
};

getForecast(0);