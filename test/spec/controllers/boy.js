'use strict';

describe('Controller: BoyCtrl', function () {

  // load the controller's module
  beforeEach(module('babynamerApp'));

  var BoyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoyCtrl = $controller('BoyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
