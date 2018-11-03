var Firebase= require("firebase")
var ref= new Firebase('https://rkundalya-app1.firebaseio.com/web/data');

ref.once("value",function(data){
for(key in data.val()){
console.log(key)
	}
	process.exit()


})