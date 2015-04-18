'use strict';

describe('Directive: playerThumbnail', function () {

  // load the directive's module and view
  beforeEach(module('valueleagueApp'));
  beforeEach(module('app/playerThumbnail/playerThumbnail.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<player-thumbnail></player-thumbnail>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the playerThumbnail directive');
  }));
});