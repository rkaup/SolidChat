'use strict';

angular.module('solidChatApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/HelloRobin', {
        templateUrl: 'views/hellorobin.html',
        controller: 'HellorobinCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
