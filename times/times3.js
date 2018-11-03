var request=require("request")
var json2csv=require("json2csv")
var fs=require("fs")
var api=" b5f3691d4f1d9583619f998981eb3351:14:74837808"
var url="http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808"

var list=[]
var data=[]

request({url:url,json:true},function(error,response,body){
	
	body.results.forEach(function(authors){
		list=authors.list_name_encoded
			var url="http://api.nytimes.com/svc/books/v3/lists.json?list-name="+list+"&api-key=b5f3691d4f1d9583619f998981eb3351%3A14%3A74837808"
			request({url:url,json:true},function(error,response,body){
				if(typeof body.results=="undefined"){
						}
						else{
							body.results.forEach(function(character){
								//data.push({serie:character.book_details})
								character.book_details.forEach(function(tt){
									data.push({title:tt.title,author:tt.author,cotributor:tt.contributor,publisher:tt.publisher,price:tt.price,age_group:tt.age_group,description:tt.description})

								})
				json2csv({data:data},function(error,csv){
				fs.writeFile("description2.csv",csv)
			      })
			})
							
		}
	     })
			

     })

})

