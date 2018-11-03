var request= require("request")
var url="http://api.tvmaze.com/search/shows?q=mens"
request({url:url,json:true},function(error,response,body){

body.forEach(function(names){

	console.log(names.show.name)
})

})