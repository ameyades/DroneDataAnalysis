angular.module('UavOpsInterface')
.controller('BuildingProxCtrl', function ($scope, Websocket, $interval){	
	$interval(function (){
  		$scope.building = Websocket.getBuilding();
	}, 1000); 
	$scope.options = {
        chart: {
            type: "discreteBarChart",
            height: 450,
            margin: {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            showValues: true,
            duration: 500,
            xAxis: {
                axisLabel: "Time"
            },
            yAxis: {
                "axisLabel": "Meters",
                "axisLabelDistance": -10
            }
        }
    };
});