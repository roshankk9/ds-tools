$(document).ready(function(){
  Shiny.addCustomMessageHandler("fuel",function(body){
    var data=[]
    body.fuel_stations.forEach(function(names){
		  data.push({Name:names.station_name})
	    })
    Shiny.onInputChange("fuel",JSON.stringify(data));
  })
  Shiny.addCustomMessageHandler("loc",function(body){
    var data2=[]
    data2.push({Name:body.outputs.utility_name})
    Shiny.onInputChange("loc",JSON.stringify(data2));
  })
})