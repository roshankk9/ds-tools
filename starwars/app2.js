var request=require("request");
var json2csv=require("json2csv")
var fs= require("fs")

var data=[];
for (var i = 0; i < 80; i++) {
var url="http://swapi.co/api/people/"+i+"/"
		request({url,json: true},function(error,response,body){
			body.results.forEach(function(character){

			
				 	console.log(character)
				 
				})
			
})

}

 