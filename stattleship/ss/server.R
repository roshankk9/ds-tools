shinyServer(function(input,output,session){
  
  observe({
    urls="https://www.stattleship.com/basketball/nba/injuries"
    response<-GET(url=urls,add_headers(
      'Content-Type'= "application/json",
      'Accept'= "application/vnd.stattleship.com; version=1",
      'Authorization'= "Token token=1ca04532d2332e0454d0a97cffe9a7b3"),
      query=list(team_id=input$team))
    body<-content(response,"text")
    body<-toJSON(fromJSON(body))
    session$sendCustomMessage("injuries",body)
  })
  output$teamRoaster<-renderTable({
    if(!is.null(input$injuries)){
      
    fromJSON(input$injuries)
    }
  })
 
})
