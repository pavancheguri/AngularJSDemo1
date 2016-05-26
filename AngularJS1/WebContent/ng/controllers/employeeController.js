(function(){
	angular.module("myApp").controller("employeeController",function($scope){
		$scope.employees = [{empno: 1, email: "person_1", alias: "person1", location: "hyd", role: "developer", sel:false},
		                    {empno: 2, email: "person_2", alias: "person2", location: "pune", role: "developer", sel:false},
		                    {empno: 3, email: "person_3", alias: "person3", location: "goa", role: "developer", sel:false},
		                    {empno: 4, email: "person_4", alias: "person1", location: "delhi", role: "developer", sel:false},
		                    {empno: 5, email: "person_5", alias: "person1", location: "pune", role: "developer", sel:false},
		                    {empno: 6, email: "person_6", alias: "person1", location: "pune", role: "developer", sel:false},
		                    {empno: 7, email: "person_7", alias: "person1", location: "pune", role: "developer", sel:false},
		                    {empno: 8, email: "person_8", alias: "person1", location: "pune", role: "developer", sel:false},
		                    {empno: 9, email: "person_9", alias: "person1", location: "pune", role: "developer", sel:false},
		                    {empno: 10, email: "person_10", alias: "person1", location: "pune", role: "developer", sel:false},
		                   ];
	
	 $scope.btnDisable = false;
	$scope.saveChanges = function(){
		$scope.employees = $scope.employees.filter(function(el,ix){
			return el.sel == false;
		});
	}
	$scope.saveChange = function(e){
		$scope.employees = $scope.employees.filter(function(el,ix){
			return el.empno != e.empno;
		});
	}
	})
})();