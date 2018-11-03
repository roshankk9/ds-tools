shinyServer(function(input,output){
  
  output$image<-renderUI({
    index<-which(character==input$name)
    HTML(paste('<img src=',images[index],'/>'),sep="")
    
  })
  
  
})