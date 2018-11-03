var request=require("request")
var fs=require("fs")
var json2csv=require("json2csv")

url="GET https://www.stattleship.com/baseball/mlb/stat_leaders"

request({url:url,
		json:true,
		headers:{
			'Content-Type': "application/json",
			'Accept': "application/vnd.stattleship.com; version=1",
			'Authorization': "Token token=1ca04532d2332e0454d0a97cffe9a7b3"
		}},function(error,response,body){

			console.log(body.players)
	})