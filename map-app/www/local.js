$(document).ready(function(){
	var map = L.map('map').setView([39.8097, -98.5556], 3);
	//L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png').addTo(map);
	var layerSource = {
		user_name: 'credmond',
		type: 'cartodb',
		sublayers: [{
			sql: "SELECT * FROM countries",
			cartocss: '#countries{'+
        'polygon-fill: #FF6600'+
        'polygon-opacity: 0.7'+
        'line-color: #FFF'+
        'line-width: 0.5'+
        'line-opacity: 1'+
      '}'+

      '#countries::labels {'+
        'text-name: [admin]'+
        'text-face-name: "DejaVu Sans Book";'+
        'text-size: 10'+
        'text-label-position-tolerance: 10'+
        'text-fill: #000'+
        'text-halo-fill: #FFF'+
        'text-halo-radius: 1'+
        'text-dy: -10'+
        'text-allow-overlap: true'+
        'text-placement: point'+
        'text-placement-type: simple'+
      '}'
			
		}]
	};
var points;
cartodb.createLayer(map,layerSource).addTo(map)
});





