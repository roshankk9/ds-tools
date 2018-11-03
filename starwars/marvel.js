var request= require('request')
var json2csv= require('json2csv')
var fs=require('fs')
var url="http://gateway.marvel.com:80/v1/public/characters?apikey=86080b9272254a5f2b77b626749a23a86f74285e"

var data=[]



request({url:url,json:true},function(error,response,body){
 console.log(body)

					})


