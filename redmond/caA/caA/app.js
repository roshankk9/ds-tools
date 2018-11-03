var request = require('request');
var json2csv = require('json2csv');
var md5 = require('js-md5');
var fs = require('fs');

var public_key = 'efeef6f2a8bf87efc8e4f4cde8341ce3'
var private_key = '629539efca222152397cb48142d32f0d2ca50033'
var ts = Date.now();
var hash = md5(ts + private_key + public_key)

var url = 'http://gateway.marvel.com/v1/public/characters?offset=40&series=832&ts='+ts+'&apikey='+public_key+'&hash='+hash;

var data = [];

request({url: url, json: true},function(error,response,body){
	body.data.results.forEach(function(character){
		var image_existence = character.thumbnail.path.replace(/(.+image_not_available$)/,'no image');
		if(image_existence != 'no image'){
			data.push({name: character.name, img_src: character.thumbnail.path + '/portrait_uncanny.' + character.thumbnail.extension});
		}
	});
	json2csv({data: data},function(error,csv){
		fs.appendFile('characterInfo.csv',csv)
	});
});