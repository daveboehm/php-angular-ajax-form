var app = angular.module('app', []);

app.controller('contactController', function ($scope, $http) {
	$scope.user = {};
	$scope.submitted = false;
	$scope.success = false;
	$scope.error = false;

	$scope.errors = {
		required: 'This field is required',
		format: 'Invalid format'
	}

	var param = function(data) {
		var returnString = '';
		for (d in data) {
			if (data.hasOwnProperty(d)) {
				returnString += d + '=' + data[d] + '&';
			}
		}
		return returnString.slice(0, returnString.length - 1);
	};
	$scope.submitform = function() {
		$http({
			method: 'POST',
			url: '/php/process.php',
			data: param($scope.user),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).success(function(data) {
			if (!data.success) {
				$scope.submitted = true;
				$scope.error = true;
			} else {
				$scope.submitted = true;
				$scope.success = true;
			}
		});
	};
});