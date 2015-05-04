'use strict';

/**
 * @ngdoc function
 * @name clockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clockApp
 */
angular.module('clockApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
