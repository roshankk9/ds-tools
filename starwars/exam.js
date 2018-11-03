var request = require('request');
var fs = require('fs');
var json2csv=require("json2csv")
var forecasts = []
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Erie&APPID=846c02ec66d72d327c64a92a835a5b05&units=imperial'

	request({url: url, json: true},function(error,response,body){
		var time = 0;
			console.log(body.main)
		})