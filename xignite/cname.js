var request= require("request")

var url="http://globalcurrencies.xignite.com/xGlobalCurrencies.json/ListCurrencies"
request({url:url,json:true},function(error,response,body){
	console.log(body)
})