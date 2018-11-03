var request=require("request")
var json2csv=require("json2csv")
var fs=require("fs")

var url="https://www.stattleship.com/basketball/nba/stats?type=basketball_offensive_stat&stat=three_pointers_made&player_id=nba-stephen-curry"
var data=[]

request({
		url:url,
		json:true,
		headers:{
			'Content-Type': "application/json",
			'Accept': "application/vnd.stattleship.com; version=1",
			'Authorization': "Token token=1ca04532d2332e0454d0a97cffe9a7b3"
		}},
		function(error,response,body){
			body.away_teams.forEach(function(names){
				console.log(names.name)
			})
		})




		//json2csv({data:data},function(error,csv){
		//	fs.writeFile("data.csv",csv)
		//})