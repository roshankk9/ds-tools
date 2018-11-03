shinyServer(function(input,output,session){
  
  observeEvent(input$submit,{
    url=paste("http://api.openweathermap.org/data/2.5/weather?q=",URLencode(input$city),"&appid=846c02ec66d72d327c64a92a835a5b05&units=imperial",sep="")
    response<-toJSON(fromJSON(url))
    session$sendCustomMessage("weather",response)
    
  })
  
  observeEvent(input$forecasst,{
    url=paste("http://api.openweathermap.org/data/2.5/forecast?q=",URLencode(input$city),"&appid=846c02ec66d72d327c64a92a835a5b05&units=imperial",sep="")
    response<-toJSON(fromJSON(url))
    session$sendCustomMessage("forecast",response)
    })
  
  observeEvent(input$tempp,{
    url=paste("http://api.openweathermap.org/data/2.5/weather?q=",URLencode(input$city),"&appid=846c02ec66d72d327c64a92a835a5b05&units=imperial",sep="")
    response<-toJSON(fromJSON(url))
    session$sendCustomMessage("temperature",response)
  })
  
  
  output$forecaste<-renderTable({
    if(!is.null(input$forecast)){
      fromJSON(input$forecast)
    }
  })
  output$temp<-renderTable({
    if(!is.null(input$temperature)){
      fromJSON(input$temperature)
    }
  })
  
  
})