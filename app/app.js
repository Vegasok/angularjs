(function(){

	var app = angular.module('app', []);	
	
	app.controller('Sum', function($scope){
		$scope.firstNumber = "";
		$scope.secondNumber = "";

		$scope.$watch('firstNumber + secondNumber', function() {
    		$scope.sumOfTwoNumbers = $scope.firstNumber + $scope.secondNumber;
    	});	
	});
})();
