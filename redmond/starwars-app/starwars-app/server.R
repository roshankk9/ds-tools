shinyServer(function(input,output){
	v<-reactiveValues()
	observe({
		row = which(swdata$name == input$character)
		v$films<-unlist(strsplit(as.character(swdata$films[row]),split=''))
		print(v$films)
	})
	output$one<-renderUI({
		if('1' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
	output$two<-renderUI({
		if('2' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
	output$three<-renderUI({
		if('3' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
	output$four<-renderUI({
		if('4' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
	output$five<-renderUI({
		if('5' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
	output$six<-renderUI({
		if('6' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
	output$seven<-renderUI({
		if('7' %in% v$films){
			HTML('<img src="check.png" />')
		}else{
			''
		}
	})
})