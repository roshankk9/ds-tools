$(document).ready(function(){
  //getting file from shiny server
  Shiny.addCustomMessageHandler("response",function(body){
    var dat=[];
    body.data.results.forEach(function(character){
     image_existance=character.thumbnail.path.replace(/.+image_not_available/,"NA");
		  if(image_existance!=="NA"){
			  var image_src=character.thumbnail.path+"/portrait_uncanny."+character.thumbnail.extension;
			dat.push({name:character.name, img_src:image_src});

		}
    });
    //Sending file back to shiny
    Shiny.onInputChange("data",JSON.stringify(dat));
  });
});