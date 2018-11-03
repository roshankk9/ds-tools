var request=require("request")
var json2csv=require("json2csv")
var fs=require("fs")
var api=" b5f3691d4f1d9583619f998981eb3351:14:74837808"
var url="http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808"
var lists=[]
request({url:url,json:true},function(error,response,body){
		body.results.forEach(function(list){
			lists.push({Name:list.list_name})
		
			})
		json2csv({data:lists},function(error,csv){
			fs.writeFile("lists.csv",csv)

		})
})
