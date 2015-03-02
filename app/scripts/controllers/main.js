'use strict';

/**
 * @ngdoc function
 * @name timezonerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timezonerApp
 */
angular.module('timezonerApp')
  .controller('MainCtrl', function ($scope, $log) {

    $scope.today = function() {
      $scope.dt = new Date();
      $scope.dt.setHours(14);
      $scope.dt.setMinutes(0);
    };
    $scope.today();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.changed = function () {
      $log.log('Time changed to: ' + $scope.dt);
    };

  });
