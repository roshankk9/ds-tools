var request=require("request")
var json2csv=require("json2csv")
var fs=require("fs")
var api=" b5f3691d4f1d9583619f998981eb3351:14:74837808"
var url="http://api.nytimes.com/svc/books/v3/lists/trade-fiction-paperback.json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808"
var data=[]
request({url:url,json:true},function(error,response,body){
				
     body.results.books.forEach(function(name){

     	console.log(name.title)

     })							
		
	     })	