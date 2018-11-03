var geocoder = require('geocoder');
var points = require('./points.json');


function getCoords(index){
	var city = points[index].properties.location;
	geocoder.geocode(city,function(err,data){
		console.log(data.results[0].geometry.location.lng);
		console.log(data.results[0].geometry.location.lat);
	});
}


getCoords(0);
