'use strict';

describe('Directive: gameThumbnail', function () {

  // load the directive's module and view
  beforeEach(module('valueleagueApp'));
  beforeEach(module('app/gameThumbnail/gameThumbnail.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-thumbnail></game-thumbnail>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gameThumbnail directive');
  }));
});