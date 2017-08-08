var app = angular.module("libApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider.when("/input", {
		controller: "ctrlInput",
		templateUrl: "views/input.html"
	}).when("/display",{
		controller: 'ctrlDisplay',
		templateUrl:"views/display.html"
	});
});

app.controller("ctrlInput", function ($scope, libService, $location) {
	$scope.words = [];

	$scope.setWords = function () {
		libService.setWords($scope.words);
		$location.url("/display");
	};
});

app.controller("ctrlDisplay", function ($scope, libService) {
	$scope.storyWords = libService.getWords();
});