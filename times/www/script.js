$(document).ready(function(){
//getting data from
    Shiny.addCustomMessageHandler("response",function(response){
      var bookInfo=[] ;

    response.results.books.forEach(function(book){
      bookInfo.push({Rank:book.rank,Author:book.author,Title:book.title,Image:book.book_image});
    });
    //sending data back to shiny
    Shiny.onInputChange("response",JSON.stringify(book_info));
  });
  
});