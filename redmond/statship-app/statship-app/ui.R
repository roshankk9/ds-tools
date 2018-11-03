shinyUI(
	fluidPage(
		HTML('<h1>Yardage by Team, 2015 Season</h1>'),
		selectInput('team','select team:',choices=teams$x, selected='nfl-atl'),
		plotOutput('plot'),
    HTML('<p>Data from <a href="https://www.stattleship.com/">Stattleship</a></p>')
	)
)