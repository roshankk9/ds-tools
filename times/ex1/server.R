shinyServer(function(input,output,session){
  
  observeEvent(input$list,{
   url<-paste("http://api.nytimes.com/svc/books/v3/lists/",input$list,".json?api-key=b5f3691d4f1d9583619f998981eb3351:14:74837808",sep="")
   response<-toJSON(fromJSON(url),pretty = TRUE)
   session$sendCustomMessage("response",response)
  
  
  })
  

   output$lists<-renderTable({
      if(!is.null(input$response)){
        fromJSON(input$response)
      }
 })
    
  })
 
  
