'use strict';

describe('Controller: AllGamesCtrl', function () {

  // load the controller's module
  beforeEach(module('valueleagueApp'));

  var AllGamesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllGamesCtrl = $controller('AllGamesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
