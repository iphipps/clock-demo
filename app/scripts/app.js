'use strict';

/**
 * @ngdoc overview
 * @name clockApp
 * @description
 * # clockApp
 *
 * Main module of the application.
 */
angular
  .module('clockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
