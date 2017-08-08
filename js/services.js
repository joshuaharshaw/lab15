var app = angular.module("libApp");


app.service("libService", function () {
	var myWords;
	this.setWords = function (words) {
		myWords = words;

		console.log(myWords);
	};

	this.getWords = function () {
		return myWords;
	};
});