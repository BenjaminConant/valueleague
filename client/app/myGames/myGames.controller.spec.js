'use strict';

describe('Controller: MyGamesCtrl', function () {

  // load the controller's module
  beforeEach(module('valueleagueApp'));

  var MyGamesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyGamesCtrl = $controller('MyGamesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
