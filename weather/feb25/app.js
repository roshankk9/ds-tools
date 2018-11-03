var request=require("request");


var url<-"http://swapi.co/api/people/1/"
request({url,json: true},function(error,response,body){
	console.log(body);
});