'use strict';

/**
 * @ngdoc function
 * @name timezonerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timezonerApp
 */
angular.module('timezonerApp')
  .controller('MainCtrl', function ($scope, $log, timezones) {

    $scope.timezones = timezones;

    $scope.selectedTimezone = 'UTC';

    $scope.today = function() {
      $scope.momentTime = moment.tz("2015-03-02 12:00:00", "UTC");
      console.log($scope.momentTime);
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

    $scope.changeTimezone = function() {
      $scope.momentTime = $scope.momentTime.clone().tz($scope.selectedTimezone);
      console.log($scope.momentTime.format());
      console.log($scope.momentTime);
    };

    // from library
    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

  });
