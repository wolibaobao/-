angular.module('my', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
			url: "/index",
			templateUrl: "template/index.html"
	})

	.state('bottom', {
			url: "/bottom",
			templateUrl: "template/bottom.html"
	})
	.state('index.home', {
			url: "/index.home",
			templateUrl: "template/home.html"
	})
	.state('index.about', {
			url: "/index.about",
			templateUrl: "template/about.html"
	})
	$urlRouterProvider.when("", "/index/index.home")

 							
}])