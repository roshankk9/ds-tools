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
    HTML("<h1> StattleShip App showing Injuries by Team </h1>"),
    selectInput("team","Select a Team",choices = slugs),
    tableOutput("teamRoaster")
      ))
  )
)