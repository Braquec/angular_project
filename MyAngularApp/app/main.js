(function () {
    'use strict';
    var moduloApp = angular.module('app');

    //moduloApp.controller('Controlador', function ($scope, $http) {

    //    $http.get('phones/phones.json').then(function (response) {
    //        $scope.phones = response.data.records;
    //    });

    //    //$http.get("http://www.w3schools.com/angular/customers.php").then(function (response) {
    //    //    $scope.names = response.data.records;
    //    //});

    //});

    moduloApp.controller('Controlador', ['$scope', '$http', function ($scope, $http) {
        var url = "app/phones/phones.json";
        $http.get(url).success(function (data) {
            $scope.phones = data;
        });
    }]);

})();
