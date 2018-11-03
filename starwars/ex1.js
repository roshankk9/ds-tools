var request= require('request')
var json2csv= require('json2csv')
var fs=require('fs')
var md5=require('js-md5')
var privatekey="86080b9272254a5f2b77b626749a23a86f74285e"
var publickey="4c46345a8d8df84409d271db8a040aa8"
var ts=Date.now()
var hash=md5(ts+privatekey+publickey)
var offset=0
var data=[]
var offset


var url="http://gateway.marvel.com:80/v1/public/characters/1009368/series?startYear=2002&seriesType=collection&orderBy=-title&ts="+ts+"&apikey="+publickey+"&hash="+hash;

	request({url:url,json:true},function(error,response,body){
 	var total=(body.data.total)
	body.data.results.forEach(function(name){
		name.creators.items.forEach(function(fname){
		console.log(fname.name,fname.role)
	})
	
	})
})


  	