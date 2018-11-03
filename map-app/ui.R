shinyUI(
	fluidPage(
		tags$head(
			tags$link(
				href = 'http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css',
				rel = 'stylesheet'
			),
			tags$link(
				href = 'style.css',
				rel = 'stylesheet'
			),
			tags$script(
				src='http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js'
			),
			tags$script(
				src='local.js'
			)
		),
		selectInput("decade","Select the Decade", choices = seq(1870,2000,10)),
		HTML('<h1>Baseball Map</h1>'),
		HTML('<div id="map"></div>')
	)
)