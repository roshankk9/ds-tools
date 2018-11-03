var request = require('request');
var fs = require('fs');
var cities = require('./cities.json')
var json2csv=require("json2csv")
var forecasts = []


function getForecast(index){
	var city = cities[index].city;
	var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID={846c02ec66d72d327c64a92a835a5b05}&units=imperial',URLencode(input$city),
	var url=  "http://api.openweathermap.org/data/2.5/weather?q=""&appid=846c02ec66d72d327c64a92a835a5b05&units=imperial"
	request({url: url, json: true},function(error,response,body){
		var time = 0;
		body.list.forEach(function(measurement){
			var forecast = {city: city, time: time, temp: measurement.main.temp};
			forecasts.push(forecast);
			time = time +3;
		});
		console.log(index+" "+city)
		setTimeout(function(){
			if(index < 99){
				getForecast(index+1);
			}
			else{
				fs.writeFile('forecasts.json',JSON.stringify(forecasts));
				json2csv({data:forecasts},function(error,csv){
				fs.writeFile('forecasts.csv',csv)
		    })
	  }
	  } ,2000);
	})// end of request
};// end of get forecast

