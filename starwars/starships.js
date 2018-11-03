var request=require("request");
var json2csv=require("json2csv")
var fs=require("fs")
var url="http://swapi.co/api/starships/?1"
var data=[];


function getData(){
	
	request({url:url,json: true},function(error,response,body){
		body.results.forEach(function(names){
			data.push({Name:names.name,Model:names.model,Crew:names.crew,Passengers:names.passengers,Consumables:names.consumables,Rating:names.hyperdrive_rating,Menufacturet:names.manufacturer})
			})

	 	if(body.next === undefined | body.next === null){
	 		json2csv({data:data},function(error,csv){
			fs.writeFile("starships.csv",csv)
			})		
		}
		else{
			url=body.next
			getData()
		}
	})

}

getData()