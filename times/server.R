shinyServer(function(input,output,session){
  
  observe({
  url=paste("http://api.nytimes.com/svc/books/v3/lists/",input$year,"-01-01/Hardcover-Fiction.json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808",sep="")
  response<-toJSON(fromJSON(url),pretty = TRUE)
  session$sendCustomMessage("response",response)
  # getting data from java script
  #fromJSON(input$bookInfo)

 
  
    
})
 
  
})