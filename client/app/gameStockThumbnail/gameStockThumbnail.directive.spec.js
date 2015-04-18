'use strict';

describe('Directive: gameStockThumbnail', function () {

  // load the directive's module and view
  beforeEach(module('valueleagueApp'));
  beforeEach(module('app/gameStockThumbnail/gameStockThumbnail.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-stock-thumbnail></game-stock-thumbnail>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gameStockThumbnail directive');
  }));
});