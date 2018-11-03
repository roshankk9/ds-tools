var request = require('request');
var json2csv = require('json2csv');
var fs = require('fs');

var bookInfo = [];

function getBookInfo(year){
	var url ='http://api.nytimes.com/svc/books/v3/lists/'+year+'-01-01/hardcover-nonfiction.json?api-key='
	request({url: url, json: true},function(error,response,body){
		body.results.books.forEach(function(book){
			bookInfo.push({year: year, title: book.title, author: book.author, rank: book.rank});
		});
		if(year<2015){
			getBookInfo(year+1);
		}else{
			json2csv({data: bookInfo},function(error,csv){
				fs.writeFile('bookInfo.csv',csv);
			});
		}	
	});
}

getBookInfo(2009);
