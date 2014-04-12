'use strict';

describe('Controller: HellorobinCtrl', function () {

  // load the controller's module
  beforeEach(module('solidChatApp'));

  var HellorobinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HellorobinCtrl = $controller('HellorobinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
