library(stringr)
swdata<-read.csv('swdata.csv',stringsAsFactors=FALSE,header=TRUE)
names<-sort(swdata$name)
names<-str_replace(names,'é','e')
