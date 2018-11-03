var cheerio= require("cheerio")
var fs=require("fs")
var json2csv=require('json2csv')
fs.readFile('city.html',function(error,body){
	var $=cheerio.load(body);
	var rows=$(".wikitable").eq(0).find("tr").slice(1)
		rows.each(function(i,row){
	var city=$(row).find('td').eq(1).text();
	city=city.replace(/\[\/d\]/,"")
	console.log(city)
	


	})


})