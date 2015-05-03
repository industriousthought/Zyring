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
    $scope.listings = apartments.listing.query({city: $scope.cityName});
    $scope.changePage = function() {

    };
    $scope.itemsPerPage = 9;
    $scope.currentPage = 1;

    $scope.pageCount = function()  {
        return Math.ceil($scope.listings.length / $scope.itemsPerPage);
    }

    $scope.listings.$promise.then(function() {
        $scope.totalItems = $scope.listings.length;
        $scope.$watch('currentPage + itemsPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filterdListings = $scope.listings.slice(begin, end);
        })
    })


}]);
