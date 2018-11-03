$(document).ready(function(){
 var data=[]//getting file from shiny server
  Shiny.addCustomMessageHandler("info",function(body){
    body.characters.forEach(function(char){
      data.push({characters:char})
    })
  Shiny.onInputChange("info",JSON.stringify(data));
  })
  Shiny.addCustomMessageHandler("info2",function(body){
        var name=[]

      name.push({Char:body.name})

  Shiny.onInputChange("info2",JSON.stringify(name));
  })

});
