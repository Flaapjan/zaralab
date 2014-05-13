var ctrl = angular
	.module('app');
	ctrl.controller('homeCtrl',['$scope','login','$rootScope','$http', function($scope,login, $rootScope,$http){
		$rootScope.title = "Zaralab - Home";
		$scope.title = "Home";
		$scope.items = ['Home','About','Contact'];
		$scope.login = login;
		
		$scope.save = function(){
			alert(JSON.stringify($scope.login));
			//$http.post('api/loginData.json',login);
		};
		
		
		
		//alert(login[0]['username']);
		$scope.testProp = 'Foo title';
		$scope.test = function(params){
			if (params.modelProp) {
				$rootScope.title = $scope[params.modelProp];
				return;
			}
			if (params.text){
				$rootScope.title = params.text;
			}
		};
		
		
		$scope.testBad = function(modelProp, text){
			if (modelProp) {
				$rootScope.title = $scope[modelProp];
				return;
			}
			if (text){
				$rootScope.title = text;
			}
		};
		
		var obj = new Object();
		obj.name = 'Carel';
		obj.surname = 'Lubbe';
		
		var person = {
			name : 'Flaapjan',
			surname : 'van der Berg'
		};
		
		var foo = [];
		foo['name'] = 'Foo';
		foo['surname'] = 'Bar';
		
		for(var prop in obj) {
			console.log('obj.' + prop + ' = ' + obj[prop]);
		}
		
		for(var prop in person) {
			console.log('person.' + prop + '=' + person[prop]);
		}
		
		for(var prop in foo) {
			console.log('foo.' + prop + '=' + foo[prop]);
		}
		
	}]);
	ctrl.controller('homeTestCtrl',['$scope', function($scope){
		
	}]);












