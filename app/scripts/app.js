'use strict';

/**
 * @ngdoc overview
 * @name zyringApp
 * @description
 * # zyringApp
 *
 * Main module of the application.
 */
angular
  .module('zyringApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cities/:cityName', {
        templateUrl: 'views/apartment.html',
        controller: 'ApartmentCtrl'
      })
      .when('/apartment/:apartmentId', {
        templateUrl: 'views/singleApartment.html',
        controller: 'singleApartmentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAn4dP7cpbQ6YRDo64k8ZIYUot3d_r64wg',
      v: '3.17',
      libraries: 'weather, goemetry, visualization'
    });
  });

