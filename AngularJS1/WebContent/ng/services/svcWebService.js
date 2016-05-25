(function (){
	var svcWebService = angular.module("myApp").service("svcWebService",function ($q,$timeout){
		//var url = "http://localhost:8080/webapi/"+$scope.user.username+"/"+$scope.user.password;
		/*var promise = $http.get(url);
		promise.success(function (data){
			
		})
		promise.error(function (data){
			
		})*/
		
		/*$http.get(url)
		.then(function (response){
			console.log(response.status);
		}, function(response){
			console.log(response.status);
			console.log(response.data);
		});*/
		
		this.loginUser = function(username,password) {
			var deferred = $q.defer();
			$timeout(function (){
				deferred.resolve({name:"Pavan",location:"Hyd"});
			},2000);
			
			return deferred.promise;
		}
	})	
})();