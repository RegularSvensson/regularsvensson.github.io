'use strict';

/* App Module */

var cvApp = angular.module('cvApp', ['ngRoute', 'cvAppControllers']);

cvApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: '/app/views/home.html',
		controller: 'HomeController'
	})
	.when('/about', {
		templateUrl: '/app/views/about.html',
		controller: 'AboutController'
	})
	.otherwise({
		redirectTo: '/home'
	});
}]);