shinyServer(function(input,output,session){
  
  observe({
    urls="https://www.stattleship.com/basketball/nba/rosters"
    response<-GET(url=urls,add_headers(
      'Content-Type'= "application/json",
      'Accept'= "application/vnd.stattleship.com; version=1",
      'Authorization'= "Token token=1ca04532d2332e0454d0a97cffe9a7b3"),
                      query=list(team_id=input$team))
    body<-content(response,"text")
    body<-toJSON(fromJSON(body))
    session$sendCustomMessage("rosterInfo",body)
  })
  observe({
  base="nba-"
  a<-tolower(input$name)
  name=str_replace(a," ","-")
  nam=paste(base,name,sep="")
  urlss="https://www.stattleship.com/basketball/nba/stats?type=basketball_offensive_stat&stat=three_pointers_made&"
    response<-GET(url=urlss,add_headers(
      'Content-Type'= "application/json",
      'Accept'= "application/vnd.stattleship.com; version=1",
      'Authorization'= "Token token=1ca04532d2332e0454d0a97cffe9a7b3"),
      query=list(player_id=nam))
    print(response)
    body<-content(response,"text")
    print(body)
    body<-toJSON(fromJSON(body))
    session$sendCustomMessage("playername",body)
    print(input$playername)
    
  })
  output$teamRoaster<-renderTable({
    fromJSON(input$rosterInfo)
    
  })
 
})
