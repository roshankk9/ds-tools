data<-read.csv("pract.csv",header = TRUE,stringsAsFactors = FALSE)
names<-data$Name
data$Mass<-as.numeric(data$Mass)
data$Mass[is.na(data$Mass)] = 0
data$Height<-as.numeric(data$Height)
data$Height[is.na(data$Height)] = 0
