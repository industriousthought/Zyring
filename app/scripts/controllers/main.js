'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
var app = angular.module('zyringApp')
.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.cities = [
        {'name': 'Seattle',
        'img': '/#/images/Space_Needle002.jpg'},
        {'name': 'Redmond',
        'img': '/images/Bicycle_Capital_of_the_Northwest.JPG'},
        {'name': 'Bellvue',
        'img': '/images/Aerial_Bellevue_Washington_November_2011.jpg'},
        {'name': 'Tacoma',
        'img': '/images/Montage_of_Tacoma,_cir._early_2012.jpg'},
        {'name': 'Kirkland',
        'img': '/images/Aerial_Kirkland_Washington_November_2011.JPG'},
        {'name': 'Olympia',
        'img': '/images/Olympia_old_cap_aug_05.jpg'}
    ];
}]);
