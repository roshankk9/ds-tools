shinyServer(function(input,output,session){
	public_key <- 'efeef6f2a8bf87efc8e4f4cde8341ce3'
	private_key <- '629539efca222152397cb48142d32f0d2ca50033'
	ts <- as.integer(Sys.time())
	hash <- digest(paste(ts,private_key,public_key,sep=''),serialize=FALSE)
	url <- paste('http://gateway.marvel.com/v1/public/characters?offset=0&series=832&ts=',ts,'&apikey=',public_key,'&hash=',hash,sep='')
	response <- toJSON(fromJSON(url),pretty=TRUE)
	session$sendCustomMessage('response',response)

	observe({
		print(str(input$data))
	})
})