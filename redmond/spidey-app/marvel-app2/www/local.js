$(document).ready(function(){
	$('#year').change(function(){
		$('#dateContainer').hide();
		$('#info').show();
	});
	Shiny.addCustomMessageHandler('response',function(response){
		var year;
		var spidey_dates = [];
		response.data.results.forEach(function(issue){
			var date = issue.dates[0].date.replace(/T.+$/,'');
			year = date.replace(/(\d{4})-\d{2}-\d{2}/,'$1');
			var month = date.replace(/\d{4}-(\d{2})-\d{2}/,'$1');
			var day = date.replace(/\d{4}-\d{2}-(\d{2})/,'$1');
			if(typeof spidey_dates[year+month+day] == 'undefined'){
				spidey_dates[year+month+day] = [];
				spidey_dates[year+month+day] = {title: issue.title, image: issue.thumbnail.path+'/portrait_uncanny.'+issue.thumbnail.extension, url: issue.urls[0].url};
			}else{
				spidey_dates[year+month+day] = {title: issue.title, image: issue.thumbnail.path+'/portrait_uncanny.'+issue.thumbnail.extension, url: issue.urls[0].url};
			}			
		});
		//$('#cover').empty();
		$('#dateContainer').empty();
		$('#dateContainer').append('<p>Click inside anytime to show calendar. Click on any red date to show cover.</p><input type="text" id="date" class="form-control"><div id="cover"></div>');
		$('#info').hide();
		$('#dateContainer').show();
		$('#date').datepicker({
			minDate: new Date(Number(year),00,01), 
			maxDate: new Date(Number(year),11,31),
			beforeShowDay: function(date){
				var year = date.getFullYear().toString();
				var month = (Number(date.getMonth())+1).toString();
				if(month.length == 1){
					month = '0' + month;
				}
				var day = date.getDate().toString();	
				if(typeof spidey_dates[year+month+day] != 'undefined' ){
					return [true,'match',spidey_dates[year+month+day].title];					
				}else{
					return [false,'',''];
				}				
			},
			onSelect: function(date){
				$('#cover').empty();
				var year = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3');
				var month = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$1');
				var day = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$2');
				var imagesrc = spidey_dates[year+month+day].image
				var link = spidey_dates[year+month+day].url
				$('#cover').append('<a href="'+link+'"><img src="'+imagesrc+'" /></a>')				
			}		
		});
		//$('#date').datepicker('show');
	});	
});