var request=require('request');
var fs= require('fs');
var json2csv= require('json2csv')
var url ="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population"
request({url:url},function(error,response,body){
console.log( typeof body)
fs.writeFile('cities.html',body)



})