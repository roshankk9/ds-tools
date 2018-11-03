$('#date').datepicker({
			minDate: new Date(1963,02,01), 
			maxDate: new Date(1963,11,31),
			beforeShowDay: function(date){
				var year = date.getFullYear().toString();
				var month = (Number(date.getMonth())+1).toString();
				if(month.length == 1){
					month = '0' + month;
				}
				var day = date.getDate().toString();
				date = year+'-'+month+'-'+day;	
				if(date == spidey_dates[0]){
					spidey_dates.shift();
					console.log('hi');
				}else{
					console.log(date + ' ' + spidey_dates[0]);
				}
				return [true,'highlight',''];
			}		
		});	