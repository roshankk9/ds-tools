var request=require("request")
var fs=require("fs")
var json2csv=require("json2csv")

var url="https://www.stattleship.com/baseball/mlb/rosters?team_id=mlb-phi"
request({url:url,
		json:true,
		headers:{
			'Content-Type': "application/json",
			'Accept': "application/vnd.stattleship.com; version=1",
			'Authorization': "Token token=1ca04532d2332e0454d0a97cffe9a7b3"
		}},function(error,response,body){
			body.players.forEach(function(player){

				console.log(player.name)
			})

	})