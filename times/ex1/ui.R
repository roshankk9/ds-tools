shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="script.js"
      )
    ),
    HTML("<h1>NYT Books Info by Publications</h1>"),
    #sliderInput('year',"Select any year",min = 2009,max=2015 ,value=2009,format = "####")
    selectInput("list","Select List name",choices =en_l_name ),

    tableOutput("lists") 
    
  )
)