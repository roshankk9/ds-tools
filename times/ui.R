shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="script.js"
      )
    ),
    HTML("<h1>Start of Year Nonfiction Bestsellers</h1>"),
    #sliderInput('year',"Select any year",min = 2009,max=2015 ,value=2009,format = "####")
    selectInput("year","Select Year",choices = 2009:2015),

    tableOutput("list") 
    
  )
)