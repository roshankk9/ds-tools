shinyServer(function(input,output,session){
  
  

  observeEvent(input$submit,{
    url=paste("https://developer.nrel.gov/api/census_rate/v3.json?api_key=8d7fChyTf97P0Gkf672i2JjVk3bGfdebDqPxNqhT&region=tract&id=101&lat=",input$lat,"&lon=",input$lan,sep="")     
    url2=paste("https://developer.nrel.gov/api/census_rate/v3.json?api_key=8d7fChyTf97P0Gkf672i2JjVk3bGfdebDqPxNqhT&region=tract&id=101&location=",input$city,sep="")     
    response<-toJSON(fromJSON(url2))
    session$sendCustomMessage("loc",response)
    
  })
  
 
})