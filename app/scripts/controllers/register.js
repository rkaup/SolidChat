'use strict';

angular.module('solidChatApp')
  .controller('RegisterCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.register = function() {
      window.alert('Yeah! ' + $scope.user.username);
    };
  });
