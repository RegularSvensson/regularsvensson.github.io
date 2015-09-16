'use strict';

/* Controllers */

var cvAppControllers = angular.module('cvAppControllers', []);

cvAppControllers.controller('HomeController', ['$scope', '$http', function($scope, $http) {
	$http.get('/app/info/info.min.json').success(function(data) {
		$scope.info = data;
	});
	console.log("I'm in home! :D")
}]);

cvAppControllers.controller('AboutController', ['$scope', '$http', function($scope, $http) {
	$http.get('/app/info/info.min.json').success(function(data) {
		$scope.info = data;
	});
	console.log("I'm in about! :D")
}]);