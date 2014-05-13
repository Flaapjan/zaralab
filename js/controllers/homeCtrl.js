'use strict';



var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','login','$rootScope','$http', function($scope,login, $rootScope,$http){
		$rootScope.title = "Zaralab - Home";
		$scope.title = "Home";
	}]);

	
angular
	.module('app')
	.controller('loggedLanding',['$scope','$http', function($scope,$http){
		$scope.title = "Maintenance";
		$scope.action = "<a></a><a></a>";
		$http.get('api/role.json')
		   .then(function(res){
				$scope.pagedItems = res.data;
				console.log(res.data);
			});
	}])










