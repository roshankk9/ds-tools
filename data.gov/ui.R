shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="script.js"
      )
    ),
textInput("city","Enter the name of city"),
selectInput("lat","select latitude",choices = 30:60,selected = 51),
selectInput("lan","select latitude",choices = -50:-94,selected = 51),
actionButton("submit","Submit"),
tableOutput("table")
)
  )
