var request = require('request');
var fs = require('fs');

var json2csv = require('json2csv');

var url = 'https://data.usajobs.gov/api/Search?ResultsPerPage=500&Keyword=Software'

	request({
		url: url,
		json: true,
		headers: {
				'Host': 'data.usajobs.gov',
				'User-Agent': 'your email here',
				'Authorization-Key': 'your token here'
		}
				}, function(error, response, body){
					var letseeall = [];
						//console.log(body.SearchResult.SearchResultItems);
					body.SearchResult.SearchResultItems.forEach(function(job){
						letseeall.push({ Posting_Date: job.MatchedObjectDescriptor.PublicationStartDate, 
							Application_Deadline: job.MatchedObjectDescriptor.ApplicationCloseDate,
							Position: job.MatchedObjectDescriptor.PositionTitle, 
								Job_Category: job.MatchedObjectDescriptor.JobCategory[0].Name,
								Institution: job.MatchedObjectDescriptor.OrganizationName, 
									Department: job.MatchedObjectDescriptor.DepartmentName, 
									Schedule: job.MatchedObjectDescriptor.PositionSchedule[0].Name,
									Position_Type: job.MatchedObjectDescriptor.PositionOfferingType[0].Name,
									User_Area: job.MatchedObjectDescriptor.UserArea.Details.WhoMayApply.Name,
								Requirements: job.MatchedObjectDescriptor.QualificationSummary, 
								URI: job.MatchedObjectDescriptor.PositionURI, 							
							Location: job.MatchedObjectDescriptor.PositionLocation[0].LocationName,
							Country: job.MatchedObjectDescriptor.PositionLocation[0].CountryCode,
						Longitude: job.MatchedObjectDescriptor.PositionLocation[0].Longitude, 
						Latitude: job.MatchedObjectDescriptor.PositionLocation[0].Latitude
						})
					});
						fs.writeFile('letseeall.json', JSON.stringify(letseeall))
							json2csv({data: letseeall}, function(error, csv){
								fs.writeFile('letseeall.csv', csv); //append after first time
				});	
	});