var request=require("request");
var json2csv=require("json2csv")
var fs=require("fs")
var url="http://swapi.co/api/people/?page=1"
var data=[];


function getData(){
	
		request({url:url,json: true},function(error,response,body){

				body.results.forEach(function(character){
				var films=""
						character.films.forEach(function(film){
						film=film.replace(/.+(\d).+/,"$1")
				 		films=films+film
				    
					})
				
						data.push({Name:character.name, Films:films})	
	            })
 	if(body.next === undefined | body.next === null)
 	{

			json2csv({data:data},function(error,csv){
				fs.writeFile('swdata.csv',csv)
		})
	}
	else{
		url=body.next
		getData()
	}
})

}

getData()