'use strict';

var adminApp = angular.module('adminApp', []);

function repACtrl($scope, $http) {

        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/apptest/collections/userProfiles?apiKey=sXsYo54JNRbcU9mm5RHrCGqd21hOY2lC'

        }).success(function(data, status) {
            $scope.periodic = data;
        });
$http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/apptest/collections/timekeepingEntries?apiKey=sXsYo54JNRbcU9mm5RHrCGqd21hOY2lC'

        }).success(function(data, status) {
            $scope.periodic = data;
        });
}