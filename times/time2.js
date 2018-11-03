var request=require("request")
var json2csv=require("json2csv")
var fs=require("fs")
var api=" b5f3691d4f1d9583619f998981eb3351:14:74837808"
var url="http://api.nytimes.com/svc/books/v3/lists/2009-01-01/Hardcover-Fiction.json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808"

var lists=[]
function getBookInfo(year){
var url="http://api.nytimes.com/svc/books/v3/lists/"+year+"-01-01/Hardcover-Fiction.json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808"


request({url:url,json:true},function(error,response,body){
	
			body.results.books.forEach(function(authors){
				lists.push({Year:year,Rank:authors.rank,Author:authors.author,Title:authors.title,Contributor:authors.contributor,Description:authors.description})
			})
			if(year<2015){
							getBookInfo(year+1)

			}
			else{
				console.log("Done")
			}
			json2csv({data:lists},function(error,csv){
				fs.writeFile("description.csv",csv)
			})
	})

}
getBookInfo(2009)