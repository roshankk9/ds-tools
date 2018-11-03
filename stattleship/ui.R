shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="script.js"
      )
    ),
    fluidRow(
      column(
        4,
    HTML("<h1> StattleShip App</h1>"),
    selectInput("team","Select a Team",choices = slugs),
    tableOutput("teamRoaster"),
    textInput("name","select a player name",value = "Earl-Barron"),
    tableOutput("info")
      ))
  )
)