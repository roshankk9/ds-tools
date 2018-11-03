var fs=require('fs')
var json2csv= require('json2csv')
var cheerio= require('cheerio')

fs.readFile('cities.html', function(error,body){
var content=body.toString();
var $ =cheerio.load(content);
var rows=($('.wikitable').eq(0).find('tr').slice(1))

rows.each(function(i,row){

var city=$(row).find('td').eq(1).text()
city=city.replace(/\[\d+\]/,"")
city.push({city:city})

})

fs.writeFile('cities.json', JSON.stringify(cities));

});

