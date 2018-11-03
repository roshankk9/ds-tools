var request=require("request");
var json2csv=require("json2csv")
var fs=require("fs")
var url="http://swapi.co/api/films/?1"
var data=[];


function getData(){
	
	request({url:url,json: true},function(error,response,body){
		body.results.forEach(function(name){
			data.push({Url:name.url,Film_name:name.title,Director:name.director,Producer:name.producer,Crawl:name.opening_crawl})			
       })

	 	if(body.next === undefined | body.next === null){
	 			
			json2csv({data:data},function(error,csv){
			fs.writeFile("movie_names.csv",csv)
			})		
		}
		else{
			url=body.next
			getData()
		}
	})
}
getData()