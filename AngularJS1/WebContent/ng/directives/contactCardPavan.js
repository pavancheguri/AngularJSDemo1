(function(){
	var contactCardPavan = angular.module("myApp").directive("contactCardPavan",function(){
		return {
			restrict: "E",
			replace: true,
			scope : {},
			templateUrl: "ng/templates/ccPavan.html",
			transclude:true,
			controller: function ($scope){
				$scope.collapse= false;
				$scope.toggleCollapse= function(){
					$scope.collapse = !$scope.collapse;
				}
			}
		}
	})
})();