var request= require('request')
var json2csv= require('json2csv')
var fs=require('fs')
var md5=require('js-md5')
var privatekey="86080b9272254a5f2b77b626749a23a86f74285e"
var publickey="4c46345a8d8df84409d271db8a040aa8"
var ts=Date.now()
var hash=md5(ts+privatekey+publickey)
var urll="http://gateway.marvel.com/v1/public/characters?offset=20&series=832&ts="+ts+"&apikey="+publickey+"&hash="+hash;
var offset=0
var data=[]
function repeat(offset){
var url="http://gateway.marvel.com:80/v1/public/comics?offset="+offset+"&ts="+ts+"&apikey="+publickey+"&hash="+hash;
request({url:url,json:true},function(error,response,body){
	/*body.data.results.forEach(function(character){
		image_existance=character.thumbnail.path.replace(/.+image_not_available/,"NA")
		if(image_existance!=="NA"){
			var image_src=character.thumbnail.path+"/portrait_uncanny."+character.thumbnail.extension
			data.push({name:character.name, img_src:image_src})

		}
	})*/
	body.data.results.forEach(function(des){
		data.push({title:des.title,description:des.description})
		
	})
	json2csv({data:data},function(error,csv){
				fs.writeFile('ca.csv',csv)
	})
})
}
for (i =0;i<300;i=i+20){
	repeat(i)
}
