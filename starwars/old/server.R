shinyServer(function(input,output){
  
output$plot<-renderPlot({
  
  ndata<-data%>%
  filter(input$Cname==data$Name)
  mas = ndata$Mass
  ndata2<-data%>%
  filter(input$Cname2==data$Name)
  mas = ndata$Mass
  ndata3<-data%>%
  filter(input$Cname3==data$Name)
  mas = ndata$Mass
  ndata4<-data%>%
  filter(input$Cname4==data$Name)
  mas = ndata$Mass
  
  ndata3<- rbind(ndata2,ndata,ndata3,ndata4)
  
  ggplot()+geom_bar(data=ndata3,aes(x=Name,y=Mass),stat = "identity")
  #+coord_flip()
  

    
  
})  
  
  
})