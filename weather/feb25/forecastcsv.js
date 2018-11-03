var json2csv = require('json2csv')
var fs = require('fs')
var forecasts = require('./forecastsdata.json')

json2csv({ data:forecasts}, function(error, csv){

	fs.writeFile('forecastsdata.csv', csv);
})
//