var cheerio = require('cheerio');
var fs = require('fs');
var locations = [];
fs.readFile('page.html',function(err,body){
	var content = body.toString();
	var $ = cheerio.load(content);
	var table = $('.wikitable').eq(0);
	var rows = table.find('tr').slice(2,68);
	var city;
	rows.each(function(index,row){
		var td = $(row).find('td');
		var href = $(row).find('td').eq(1).find('a').attr('href');
		if(typeof href !== 'undefined'){
			href = href.replace(/\/wiki\/(.+)/,'$1');
			href = href.replace(/_/g,' ');
			locations.push({location: href});
			city = href;
		}else if(typeof href === 'undefined' && td.length > 1){
			locations.push({location: td.eq(1).text()});	
		}else if(typeof href === 'undefined' && td.length ===1){
			locations.push({location: city});
		}	
	});
	fs.writeFile('locations.json',JSON.stringify(locations));
});