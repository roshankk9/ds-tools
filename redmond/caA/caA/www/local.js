$(document).ready(function(){
	Shiny.addCustomMessageHandler('response',function(body){
		var data = [];
		body.data.results.forEach(function(character){
			var image_existence = character.thumbnail.path.replace(/(.+image_not_available$)/,'no image');
			if(image_existence != 'no image'){
				data.push({name: character.name, img_src: character.thumbnail.path + '/portrait_uncanny.' + character.thumbnail.extension});
			}
		});
		Shiny.onInputChange('data',data);
	});
});