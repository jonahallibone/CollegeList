'use strict';

/**
 * @ngdoc function
 * @name collegeListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeListApp
 */
angular.module('collegeListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
