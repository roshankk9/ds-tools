shinyServer(function(input,output,session){
	pub_key = 'efeef6f2a8bf87efc8e4f4cde8341ce3'
  	priv_key = '629539efca222152397cb48142d32f0d2ca50033'
	observe({
		#Sys.sleep(5)		
  		ts = as.integer(Sys.time())
  		hash = digest(paste(ts,priv_key,pub_key,sep=''),serialize = FALSE)
  		url = paste('http://gateway.marvel.com:80/v1/public/series/1987/comics?dateRange=',input$year,'-01-01%2C',input$year,'-12-31&orderBy=onsaleDate&ts=',ts,'&apikey=',pub_key,'&hash=',hash,sep='')
  		response = toJSON(fromJSON(url),pretty=TRUE)
  		session$sendCustomMessage('response',response)
	})	
})