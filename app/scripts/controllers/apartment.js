'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
.controller('ApartmentCtrl', ['$scope', '$routeParams', 'Apartments', function ($scope, $routeParams, apartments) {
    $scope.cityName = $routeParams.cityName;
    $scope.listings = apartments.listing.get({city: $scope.cityName});
    console.log($scope.listings);
}]);
