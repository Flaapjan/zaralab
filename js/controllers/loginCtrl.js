'use strict';

angular
	.module('app')
	.controller('loginCtrl3',['$scope','loginService', function($scope,loginService){
		$scope.login = function(user){
			//console.log('enter function');
			loginService.login(user); //Call login Service
		}
	}])



angular
	.module('app')
	.controller('loginCtrl2', ["$scope", function($scope){
		$scope.title = 'Login'
	}]);
angular
	.module('app')
	.directive('watchChange', function() {
		return {
			scope: {
				onchange: '&watchChange'
			},
			link: function(scope, element, attrs) {
				element.on('input', function() {
					scope.$apply(function () {
						scope.onchange();
					});
				});
			}
		};
	})
	.controller('loginCtrl', ["$scope", '$sce', '$http', function($scope, $sce, $http){
		$scope.title = 'Login';
		$scope.usernamePlaceholder = 'Username';
		$scope.passwordPlaceholder = 'Password';
		$scope.passReq = 'true';
		$scope.userReq = 'true';
		
		$scope.url = 'login.php';
		
		$scope.login = function() {
			
			$http.post($scope.url, { "username" : $scope.keyUser, "password" : $scope.keyPass }).
			success(function(data, status) {
				$scope.status = status;
				$scope.data = data;
				$scope.result = data;
				$scope.html = data;
				$scope.trustedHtml = $sce.trustAsHtml($scope.html);
				
			})
			.
			error(function(data, status) {
				$scope.data = data || "Request failed";
				$scope.status = status;			
			});
			
		};
	}]);

function SearchCtrl($scope, $sce, $http) {
	$scope.url = 'search.php';
		
	$scope.search = function() {
		
		$http.post($scope.url, { "data" : $scope.keywords}).
		success(function(data, status) {
			$scope.status = status;
			$scope.data = data;
			$scope.result = data;
			$scope.html = data;
			$scope.trustedHtml = $sce.trustAsHtml($scope.html);
		})
		.
		error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;			
		});
		
	};
}
		