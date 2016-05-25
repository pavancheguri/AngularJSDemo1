(function (){
	var myCtrl = angular.module("myApp").controller("loginController", function ($scope,$location,svcWebService,$timeout) {
		
		$scope.user = {
				username: "",
				password: ""
		}
		
		var validation = function(){
			$scope.invalid.username = $scope.user.username.length > 0? false : true;
			$scope.invalid.password = $scope.user.password.length > 0? false : true;
			
			return !$scope.invalid.username && !$scope.invalid.password;
		}
		
		$scope.invalid = {
				username: false,
				password: false
		}
		
		$scope.login = function(){
			console.log("Username "+$scope.user.username);
			console.log("Password "+$scope.user.password);
			if( validation() == true ){
				console.log("we are valid");
				
				svcWebService.loginUser($scope.user.username,$scope.user.password).then( function(data){
					$location.url("/settings");
				}, function (data){
					console.log("Service Failed");
					$location.url("/login");
				})
				
				
			}
			else{
				console.error("failed validation");
			}
		}
		
		$scope.details = function(){
			$location.url("/details");
		}
	})
})();