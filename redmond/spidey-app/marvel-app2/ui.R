shinyUI(
	fluidPage(
		tags$head(
			tags$script(
				src='jquery-ui.min.js'
			),
			tags$script(
				src='local.js'
			),
			tags$link(
				href='jquery-ui.min.css',
				rel = 'stylesheet'
			),
			tags$link(
				href='style.css',
				rel = 'stylesheet'
			)
		),
		HTML('<h1>The Amazing Spider-Man by Year</h1>'),
		HTML('<p>Data provided by Marvel. © 2014 Marvel</p>'),
		selectInput('year','select year:',choices=1963:1998),
		HTML('<p id="info">Getting Info...</p>'),
		HTML('<div id="dateContainer">'),		
		HTML('</div>')
	)#end page
)#end UI