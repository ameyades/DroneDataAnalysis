angular.module('UavOpsInterface')
.service('Websocket', function (){

	var ws;
	var speed = [{
		key: "x velocity",
		values: []

	}];
	var altitude = [{  // graphing purposes
	 	key: "Altitude",
	 	values: [
	 		{ "label" : "0" , "value" : 10 },
	 		{ "label" : "1" , "value" : 20 },
	 		{ "label" : "3" , "value" : 10 }
	 	]
	 }];
	var warnings = [];
	var notifications = [];
	var overallCount = 0;

	// speed = [{ 
	// 	key: "Cumulative Return",
	// 	values: [
	// 		{ "label" : "A" , "value" : -29.765957771107 },
	// 		{ "label" : "B" , "value" : 0 },
	// 		{ "label" : "C" , "value" : 32.807804682612 }
	// 	]
	// }];


	return {
	     create: function (){ 

	    	// configure the websocket and incoming data flow
			ws = new WebSocket('ws://localhost:5001');
			ws.onmessage = function (event) {

			 	var jsonData = JSON.parse(event.data);

				if(jsonData.type === 'data'){			
	
					var pushVal = { "label" : time/1000 , "value" : jsonData.altitude};
					altitude[0].values.push(pushVal);
					if (altitude[0].values.length > 15)
					{
						altitude[0].values.shift();
					}
					console.log(jsonData);
				}
				else if(jsonData.type === 'notification'){

					// push warning here
					console.log(jsonData);
				}
				else{
					console.log('invalid websocket data');
				}
			}
	    },

	    // all getters
	    getSpeed: function(){ return speed; },
	    getNumSpeed: function(){ return speed.length;},
	    getAltitude: function(){ return altitude; },
	    getNumAltitude: function(){ return altitude.length;},
	    //getWarnings: function(){ return warnings; }
	    getNotifications: function(){ return notifications; }
	};
});