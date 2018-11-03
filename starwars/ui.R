shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="script.js"
      )
    ),
    HTML("<h1>Random Starwars characters by movie name</h1>"),
    selectInput("movie","Select a movie to see one of the Character",choices = Url),
    tableOutput("table")
)
)
