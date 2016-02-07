app.directive('pkSum', function(){
	return {
		restrict: 'E',
		scope:{
			first: '=',
            second: '='
		},
		
		templateUrl: 'app/directives/appSummarize.html'
		
	};
});