angular.module('UavOpsInterface')
.controller('HistoryCtrl', function ($scope, Websocket, $interval){	
	
	$interval(function (){
  		$scope.altitudes = Websocket.getHistory();
	}, 100); 

//Account
	//Flight [DATE] -> New page
		//Chart of entire flight [CHART] [TAB]
		//Speed Notification (warning & breaches) [LIST] [TAB]
		//Alt Notification (warning & breaches) [TAB]
		
	//Flight [DATE] -> New page
		//Configuration

});

