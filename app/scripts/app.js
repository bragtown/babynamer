'use strict';

angular.module('babynamerApp', [
  'firebase',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/boy', {
        templateUrl: 'views/boy.html',
        controller: 'BoyCtrl'
      }).when('/girl', {
        templateUrl: 'views/girl.html',
        controller: 'GirlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
