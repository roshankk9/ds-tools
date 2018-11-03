var dates= require('./dates')
var locations= require("./locations")
var fs= require("fs")
var points=[]

for(i =0; i<dates.length;i++){
points.push({
	type:"Feature",
	geometry:{
		type:"Point",
		cordinates:[]
	},
	properties:{
		date:dates[i].date,
		location:locations[i].Location
	}
})

}
fs.writeFile("points.json",JSON.stringify(points))