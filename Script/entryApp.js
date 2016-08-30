'use strict';

var entryApp = angular.module('entryApp', []);

function entryCtrl($scope, $http) {
	var profile = {"firstName":"","lastName":""};

        $scope.profile = profile

	$scope.postData = function() {
alert(JSON.stringify($scope.profile));

        $http({
            method: 'POST',
	    data: JSON.stringify($scope.profile),
	    contentType: "application/json",
            url: 'https://api.mongolab.com/api/1/databases/demoapp/collections/applications?apiKey=ED6t0jIvp7Q9dZLFTUXi6aMr8kUDjxFj'
        }).success(function(data, status) {
            alert("data was successfully added");

        }).error(function(data, status, headers, config) {
		alert("there was an error adding data");
    });


	}

}

function StaticCtrl($scope) {
    $scope.countries = {
    "WHA": {
        "USA": [
            "DC"
        ],
        "Brazil": [
            "Brasilia",
            "Recife",
            "Rio de Janiero",
            "Sao Paulo"
        ],
        "Mexico": [
            "Ciudad Juarez",
            "Guadalajara",
            "Hermosillo",
            "Matamoros",
            "Merida",
            "Mexico City",
            "Monterrey",
            "Nogales",
            "Nuevo Laredo",
            "Tijuana"
        ]
    },
    "EAP": {
        "China": [
            "Beijing",
            "Shanghai",
            "Beijing",
            "Chengdu",
            "Guangzhou",
            "Shanghai",
            "Shenyang",
            "Wuhan"
        ]
    },
    "SCA": {
        "India": [
            "Chennai/Madras",
            "Hyderabad",
            "Kolkata",
            "Mumbai/Bombay",
            "New Delhi"
        ]
    }
};
}