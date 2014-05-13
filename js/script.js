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
					login: ['$http', function($http){//Use with json data
						return $http.get('api/loginData.json').then(function(response){
							return response.data;
						})
					}]
				}
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
			.state('logout', {
				url: '/logout',
				templateUrl: 'templates/logout.html',
				controller: 'LogoutController'
			})
			.state('home.roleMaintenance', {
				url: 'roleMaintenance',
				templateUrl: 'templates/maintenance.html',
				controller: 'loggedLanding'
			})
			
	}])
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	