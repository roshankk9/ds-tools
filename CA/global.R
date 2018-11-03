library(shiny)
library(rvest)
file<-read.csv("characterInfo.csv",stringsAsFactors = FALSE,header = TRUE)
images<-file$img_src
character<-file$name
