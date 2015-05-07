'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
.controller('singleApartmentCtrl', ['$scope', '$routeParams', 'Apartments', function ($scope, $routeParams, apartments) {
    $scope.map = {center: {latitude: 47.6, longitude: -122}, zoom: 10};
    $scope.apartmentId = $routeParams.apartmentId;
    $scope.listing = apartments.apartment.get({apartmentId: $scope.apartmentId});




}]);
