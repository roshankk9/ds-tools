var cheerio = require('cheerio');
var fs = require('fs');

var months = {
	January: '01',
	February: '02',
	March: '03',
	April: '04',
	May: '05',
	June: '06',
	July: '07',
	August: '08',
	September: '09',
	October: '10',
	November: '11',
	December: '12'
};

var dates = [];

fs.readFile('page.html',function(err,body){
	var content = body.toString();
	var $ = cheerio.load(content);
	var table = $('.wikitable').eq(0);
	var rows = table.find('tr');
	rows.each(function(index,row){
		var date = $(row).find('td').eq(0).text();
		date = date.replace(/([a-zA-Z]+\s\d+,\s\d{4}).+/,'$1');
		if(date.search(/[a-zA-Z]+\s\d+,\s\d{4}/) !== -1){
			var year = date.replace(/[a-zA-Z]+\s\d+,\s(\d{4})/,'$1');
			var month = date.replace(/([a-zA-Z]+)\s\d+,\s\d{4}/,'$1');
			var day = date.replace(/[a-zA-Z]+\s(\d+),\s(\d{4})/,'$1');
			if(day.length === 1){
				day = '0'+day
			}
			dates.push({date: year+'-'+months[month]+'-'+day});
		}		
	});
	fs.writeFile('dates.json',JSON.stringify(dates));
});