var request=require("request")
var fs=require("fs")
var Firebase= require("firebase");

var ref= new Firebase('https://rkundalya-app2.firebaseio.com/web/data');

var teamInfo=require("./teamInfo.json")
var rosters={}
function getRoaster(index){
	var slug=teamInfo[index].slug
	var teamname=teamInfo[index].name.replace(/\./g,"")
	teamname=teamname.replace(/ /g,"")
	rosters[teamname]={}
	var url="https://www.stattleship.com/baseball/mlb/rosters?team_id="+slug

	request({url:url,
			json:true,
			headers:{
				'Content-Type': "application/json",
				'Accept': "application/vnd.stattleship.com; version=1",
				'Authorization': "Token token=1ca04532d2332e0454d0a97cffe9a7b3"
			}},function(error,response,body){
	body.players.forEach(function(names){
		var player=names.name.replace(/\./g,"")
		var player=player.replace(/ /g,"")

	rosters[teamname][player]={position:names.position_name,salary:names.salary}
	})
if(index<teamInfo.length-1){
	getRoaster(index+1)
}
else{
	ref.set(rosters,function(){
process.exit()
	})
}
})
}
getRoaster(0)