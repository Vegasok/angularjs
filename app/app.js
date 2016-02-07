	var app = angular.module('app', ['ngRoute']);		
	
	app.config(function ($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/sum.html'
			})
			.when('/:firstNumber/:secondNumber',{
				templateUrl: 'views/route.html',
				controller: 'AppCtrl'
				
			})
			.otherwise({
				redirectTo: '/'
			});
	});

	app.controller('AppCtrl', function($scope, $routeParams, $location) {

		$scope.firstNumber = +$routeParams.firstNumber;
		$scope.secondNumber = +$routeParams.secondNumber;
   		
   		$scope.changeURL = function() {
            $location.path('/'+$scope.firstNumber+'/'+$scope.secondNumber);
        }
		
	});