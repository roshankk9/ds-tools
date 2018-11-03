var Firebase= require("firebase");
var ref= new Firebase('https://rkundalya-app1.firebaseio.com/web/data');
var request= require("request");
var data={};
function getcharacters(page){
	var url="http://swapi.co/api/people/?page="+page;
	request({url:url,json:true},function(err,response,body){
		body.results.forEach(function(names){
		data[names.name]={Height:names.height,Mass:names.mass}
		});
		if(page<9){
			getcharacters(page+1)
		}
		else{
			ref.set(data,function(){
				process.exit()
			})
			};
	});
};
getcharacters(1)
