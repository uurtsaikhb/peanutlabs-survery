var app = angular.module('myApp', []);
	app.controller('MyCtrl', ['$scope', function () {
	  $scope.myVal = 'HelloWorld';
	}])
