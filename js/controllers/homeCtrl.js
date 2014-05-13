var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','login','$rootScope','$http', function($scope,login, $rootScope,$http){
		$rootScope.title = "Zaralab - Home";
		$scope.title = "Home";
		$scope.items = ['Home','About','Contact'];
		
		
	}]);












