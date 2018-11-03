var request=require("request")
var fs=require("fs")
var url="https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json?api_key=8d7fChyTf97P0Gkf672i2JjVk3bGfdebDqPxNqhT&location=Erie"
var url2="https://developer.nrel.gov:443/api/windexchange/schoolprojects?api_key=8d7fChyTf97P0Gkf672i2JjVk3bGfdebDqPxNqhT"
var url3="https://developer.nrel.gov/api/census_rate/v3.json?api_key=8d7fChyTf97P0Gkf672i2JjVk3bGfdebDqPxNqhT&region=tract&id=101&lat=39&lon=-92"
var url4="https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=8d7fChyTf97P0Gkf672i2JjVk3bGfdebDqPxNqhT&fuel_type=E85,ELEC&state=PA&city=Erie&limit=2"
request({url:url,json:true},function(error,response,body){

	//console.log(body.body.fuel_stations)
	//body.fuel_stations.forEach(function(names){
		//console.log(body)
		//console.log(names.station_name)
	//})

	//body.forEach(function(name){
	//	console.log(name.ProjectName)
	//})
    console.log(body)
	//console.log(body.outputs.utility_name)
})