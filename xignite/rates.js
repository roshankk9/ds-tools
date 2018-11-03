var request= require("request")

var url="http://globalcurrencies.xignite.com/xGlobalCurrencies.json/GetRealTimeRate?Symbol=EURUSD&_token=F6C75D04C6A14C51B189EB8F53488FD7"

request({url:url,json:true},function(error,response,body){
	console.log(body)
})