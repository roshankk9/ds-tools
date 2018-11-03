var geocoder= require("geocoder")
var points= require("./points.json")

function getcodes(index){
	var city= points[index].properties.location
	geocoder.geocode(city, function(err,data){
	points[index](data.results[0].geometry.location.lng)
	console.log(data.results[0].geometry.location.lat)

})
}
getcodes(0)