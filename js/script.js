var app = angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl',
				resolve: {
					/*login: ['Login', function(Login){//services/login.js
						return Login.get();
					}]*/
					login: ['$http', function($http){//Use with json data
						return $http.get('api/loginData.json').then(function(response){
							return response.data;
						})
					}]
				}
				/*,
				controller: ['$scope', function(a){
					a.title = "Home";
					a.items = ['Home','About','Contact'];
				}]*/
			})
			.state('home.test', {
				url: '',
				templateUrl: 'data/homeNote.html',
				controller: 'aboutCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
			.state('contacts', {
				url: '/contacts',
				templateUrl: 'templates/contacts.html',
				controller: 'contactCtrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
	}])
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	