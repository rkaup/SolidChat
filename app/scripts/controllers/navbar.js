'use strict';

angular.module('solidChatApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {'title': 'Home', 'link': '/'},
      {'title': 'Sign up!', 'link': '/register'},
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
