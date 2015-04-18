'use strict';

describe('Controller: MyBalanceCtrl', function () {

  // load the controller's module
  beforeEach(module('valueleagueApp'));

  var MyBalanceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyBalanceCtrl = $controller('MyBalanceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
