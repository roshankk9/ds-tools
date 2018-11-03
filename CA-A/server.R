shinyServer(function(input,output,session){
  privatekey="86080b9272254a5f2b77b626749a23a86f74285e"
  publickey="4c46345a8d8df84409d271db8a040aa8"
  ts=as.integer(Sys.time())
  hash=digest(paste(ts,privatekey,publickey,sep=""),serialize = FALSE)
  url=paste("http://gateway.marvel.com/v1/public/characters?offset=0&series=832&ts=",ts,"&apikey=",publickey,"&hash=",hash,sep="")
  response<-toJSON(fromJSON(url),pretty = TRUE)
  session$sendCustomMessage("response",response)
  output$image<-renderTable({
    (fromJSON(input$data))
    print(fromJSON(input$data))
    
  })
  output
 
  
})