var request=require("request");
var fs=require('fs');
var cities=require("./city.json")
var json2csv = require('json2csv')


var Forecast=[];
function getForecastData(index){
	var cityY=cities[index].city
	var url="http://api.openweathermap.org/data/2.5/forecast?q="+cityY+"&APPID=6eca3756939815795f28b384d1578d82&units=imperial";

	request({url:url,json: true},function(error,response,body){
	var time=0;
		body.list.forEach(function(measurement)
		{
		var info=({city:cityY, time:time, temp:measurement.main.temp})
		Forecast.push(info)
		time = time + 3;

		
})
	if(index<4){
		getForecastData(index+1)

	}

	else{

      Jsonarray = JSON.stringify(Forecast);

      fs.writeFile('forecastsdata.json', Jsonarray);
	

	  json2csv({ data:Jsonarray}, function(error, csv){
 
	  fs.writeFile('forecastsdata.csv', csv);
      })

	}
	});



}


getForecastData(0);








