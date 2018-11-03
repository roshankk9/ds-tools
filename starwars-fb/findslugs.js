var request=require("request")
var fs=require("fs")
var url="https://www.stattleship.com/baseball/mlb/teams"
var teamInfo=[]
request({url:url,
		json:true,
		headers:{
			'Content-Type': "application/json",
			'Accept': "application/vnd.stattleship.com; version=1",
			'Authorization': "Token token=1ca04532d2332e0454d0a97cffe9a7b3"
		}},function(error,response,body){
 
 body.teams.forEach(function(team){
teamInfo.push({slug:team.slug,name:team.name})
 })
fs.writeFile("teamInfo.json",JSON.stringify(teamInfo))
})
