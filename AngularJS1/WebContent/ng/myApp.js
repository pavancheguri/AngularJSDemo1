(function (){
	var myApp = angular.module("myApp",["ngRoute"]).config(function ($routeProvider){
		$routeProvider
		.when("/login",{templateUrl : "ng/views/login.html", controller : "loginController"})
		.when("/settings" ,{templateUrl : "ng/views/settings.html", controller: "loginController" })
		.when("/details",{templateUrl : "ng/views/details.html", controller : "loginController"})
		.otherwise({redirectTo: "/login"})
	})
})();//IIFE - Immediately invoked function expression