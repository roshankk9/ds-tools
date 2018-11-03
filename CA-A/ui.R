shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="ca.js"
      )
    ),
    HTML("<h1>Marvel's Captain America's character (2004-2011)</h1>"),
    selectInput("name","Select a Character",choices = character),
    tableOutput('image')
    
  )#end of page
)#end of ui