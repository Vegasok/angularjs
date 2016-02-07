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
   		

   		 function createPath(separator) {
            separator = separator || '/';

            return separator + $scope.firstNumber + separator + $scope.secondNumber;
        };

        function changeURL(path) {
            $location.url(path);
        }

        $scope.changeURL = _.compose(changeURL, createPath);   		
		
	});