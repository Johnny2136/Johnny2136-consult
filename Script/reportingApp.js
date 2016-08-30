'use strict';

var reportingApp = angular.module('reportingApp', []);

function repoCtrl($scope, $http) {

        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/demoapp/collections/applications?apiKey=ED6t0jIvp7Q9dZLFTUXi6aMr8kUDjxFj'

        }).success(function(data, status) {
            $scope.periodic = data;
        });

  

/*

        $http({
            method: 'POST',
	    data: JSON.stringify({"catagory": " IV","txdate": "2014-05-01","activity": "codeing","hours": "8","comment": "yada yada yada","mission": "CST","country": "USA","post": "DC","user": "Johnny"}),
	    contentType: "application/json",
            url: 'https://api.mongolab.com/api/1/databases/apptest/collections/timekeepingEntries?apiKey=sXsYo54JNRbcU9mm5RHrCGqd21hOY2lC'
        }).success(function(data, status) {
            alert("data was successfully added");
        }).error(function(data, status, headers, config) {
		alert("there was an error adding data");
    });
*/

}

