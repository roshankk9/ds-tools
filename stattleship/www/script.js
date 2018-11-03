$(document).ready(function(){
  Shiny.addCustomMessageHandler("rosterInfo",function(body){
    var rosteInfo=[];
      body.players.forEach(function(player){
				rosteInfo.push({name:player.name,position:player.position_name});
			});
  Shiny.onInputChange("rosterInfo",JSON.stringify(rosteInfo));
  });
   Shiny.addCustomMessageHandler("playername",function(body){
    var gamesinfo=[];
      body.games.forEach(function(Name){
				gamesinfo.push({PName:Name.title});
			});
			console.log(gamesinfo)
  Shiny.onInputChange("playername",JSON.stringify(gamesinfo));
  });
});