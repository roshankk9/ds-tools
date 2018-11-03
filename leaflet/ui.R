shinyUI(
  fluidPage(
    tags$head(
      tags$script(
        src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"
        ),
      tags$script(
        src="http://maps.stamen.com/js/tile.stamen.js?v1.3.0"
      ),
      tags$script(
        src="local.js"
      ),
      tags$link(
        href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css",
        rel="stylesheet"
      ),
      tags$link(
        href="style.css",
        rel="stylesheet"
      )
    ),
    HTML("<h1>Temperature and Forecast application</h1>"),
    textInput("city","type in city name"),
    actionButton("submit","submit"),
    fluidRow(
      column(
        4,
        HTML('<div id="map"></div>')
      ),
      column(
        4,
        actionButton("forecasst","Forecast"),
        tableOutput("forecaste")
        
      ),
      column(
        4,
        actionButton("tempp","Present_Temp"),
        tableOutput("temp")
        
      )
    )#end of row
  )#end of fluid page
)#end of page