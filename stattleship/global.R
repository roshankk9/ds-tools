library(shiny)
library(jsonlite)
library(curl)
library(httr)
library(stringr)
data<-read.csv("data.csv",stringsAsFactors = FALSE,header=TRUE)
names<-data$Name
slugs<-data$Slug
names(slugs)<-names
# names is a r function that allows names to saved in a vector