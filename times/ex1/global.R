library(shiny)
library(dplyr)
library(jsonlite)


data<-read.csv("data.csv",stringsAsFactors = FALSE,header = TRUE)
l_name<-data$List_name
en_l_name<-data$Enc_Name
names(en_l_name)<-l_name