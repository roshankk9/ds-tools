$(document).ready(function(){
  var planes = [
		["7C6B07",-40.99497,174.50808],
		["7C6B38",-41.30269,173.63696],
		["7C6CA1",-41.49413,173.5421],
		["7C6CA2",-40.98585,174.50659],
		["C81D9D",-40.93163,173.81726],
		["C82009",-41.5183,174.78081],
		["C82081",-41.42079,173.5783],
		["C820AB",-42.08414,173.96632],
		["C820B6",-41.51285,173.53274]
		];

        var map = L.map('map').setView([-41.3058, 174.82082], 8);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

		for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
		}
  Shiny.addCustomMessageHandler("weather",function(body){
    map.setView([body.coord.lat[0],body.coord.lon[0]]);
    city.setLang([body.coord.lat[0],body.coord.lon[0]]);
    map.addLayer(city);
  });
  Shiny.addCustomMessageHandler("forecast",function(body){
    var forecasts=[];
    var city=body.city.name;
		body.list.forEach(function(measurement){
		  var date_time=measurement.dt_txt;
		  var date=date_time.substring(0, date_time.indexOf(" "));
		  var time=date_time.substring(11,16);
		  var temp_f=measurement.main.temp;
		  var temp_c=(measurement.main.temp- 32)* 5/9;
			var forecast = {City_Name: city, Date :date, Time: time, Temp_C: temp_c, Temp_F: temp_f};
			forecasts.push(forecast);

		});
  Shiny.onInputChange("forecast",JSON.stringify(forecasts));
})  ;
  
  Shiny.addCustomMessageHandler("temperature",function(body){
    var p_temp=[];
    var Temp = {Temperature: body.main.temp, Humidity :body.main.humidity, 
                Pressure: body.main.pressure, Min_temp:body.main.temp_min, Max_temp : body.main.temp_max};
		p_temp.push(Temp);

	
  Shiny.onInputChange("temperature",JSON.stringify(p_temp));
})  ;

});