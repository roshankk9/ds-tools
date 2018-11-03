shinyUI(
	fluidPage(
		tags$head(
			tags$link(
				href='style.css',
				rel='stylesheet'
			)
		),
		HTML('<h1>Which Movies Were They In?</h1>'),
		selectInput('character','select character',choices=names),
		fluidRow(
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('four'),
				HTML('</div>'),
				HTML('<p class="caption">The Phantom Menace</p>')
			),			
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('five'),
				HTML('</div>'),
				HTML('<p class="caption">Attack of the Clones</p>')
			),			
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('six'),
				HTML('</div>'),
				HTML('<p class="caption">Revenge of the Sith</p>')
			),			
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('one'),
				HTML('</div>'),
				HTML('<p class="caption">A New Hope</p>')
			)
		),#end of row
		fluidRow(
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('two'),
				HTML('</div>'),
				HTML('<p class="caption">The Empire Strikes Back</p>')
			),
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('three'),
				HTML('</div>'),
				HTML('<p class="caption">Return of the Jedi</p>')
			),
			column(
				1,
				HTML('<div class="movie">'),
				uiOutput('seven'),
				HTML('</div>'),
				HTML('<p class="caption">The Force Awakens</p>')
			)
		)#end of row
	)#end of page
)#end of UI