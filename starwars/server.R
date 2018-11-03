shinyServer(function(input,output,session){
 
  observeEvent(input$movie,{
  url=input$movie
  body<-toJSON(fromJSON(url),pretty = TRUE)
  session$sendCustomMessage("info",body)
  })
  observeEvent(input$movie,{
    if(!is.null(input$info)){
      a<-(fromJSON(input$info))
      c<-a$characters
      l<-length(a$characters)
      s<-sample(l,1)
      url=c[s]
      body<-toJSON(fromJSON(url),pretty = TRUE)
      session$sendCustomMessage("info2",body)
      
    }
  })
  output$table<-renderTable({
    if(!is.null(input$info2)){
         fromJSON(input$info2)
    }
  })
})
