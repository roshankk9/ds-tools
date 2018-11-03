$(document).ready(function(){
//getting data from

    Shiny.addCustomMessageHandler("response",function(response){
      var bookInfo=[] ;
      response.results.books.forEach(function(name){
     	bookInfo.push({Name:name.title})

    })	
    console.log(bookInfo)
  Shiny.onInputChange("response",JSON.stringify(bookInfo));
  });
  
});