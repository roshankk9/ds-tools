library(shiny)
library(jsonlite)
library(curl)
library(httr)
library(stringr)
data<-read.csv("movie_names.csv",stringsAsFactors = FALSE,header = TRUE)
movie_names<-data$Film_name
description<-data$Description
Url<-data$Url
names(Url)<-movie_names