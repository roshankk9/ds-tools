shinyUI(
  fluidPage(
    HTML("<h1> Starwars Character's Height</h1>"),
    column(3,
    selectInput("Cname","Select first Actor",choices = as.character(names),selected =names[1])),
    column(3,
    selectInput("Cname2","Select second Actor",choices = as.character(names),selected =names[2])),
    column(3,
    selectInput("Cname3","Select third Actor",choices = as.character(names),selected =names[3])),
    column(3,
    selectInput("Cname4","Select forth Actor",choices = as.character(names),selected =names[4])),
    
    plotOutput("plot")
    
  )
)
