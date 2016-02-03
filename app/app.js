(function(){
	var app = angular.module('app', []);	

	app.controller('Sum', function($scope){
		$scope.firstNumber = "";
		$scope.secondNumber = "";
		$scope.sumOfTwoNumbers = function(){
			return $scope.firstNumber + $scope.secondNumber;
		}
	});
})();