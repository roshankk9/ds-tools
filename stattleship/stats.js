var request=require("request")
var fs=require("fs")
var json2csv=require("json2csv")

//url="https://www.stattleship.com/basketball/nba/game_logs" 
//url="https://www.stattleship.com/basketball/nba/team_game_logs?team_id=nba-atl" 
var url="https://www.stattleship.com/basketball/nba/injuries?player_id=nba-earl-barron"
request({url:url,
		json:true,
		headers:{
			'Content-Type': "application/json",
			'Accept': "application/vnd.stattleship.com; version=1",
			'Authorization': "Token token=1ca04532d2332e0454d0a97cffe9a7b3"
		}},function(error,response,body){
			//body.injuries.forEach(function(data){
console.log(body)
			//	console.log(data.first_name,data.last_name)
			//})
			//body.games.forEach(function(name){
				//var name=data.note
				//var fname= name.replace("/^(\w*)\s(.*)/", "$1")
				//var fname=name.substring(0, name.indexOf(" "))
		//console.log(fname,data.location_name)
			})
	//})