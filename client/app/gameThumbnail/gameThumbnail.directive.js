'use strict';

angular.module('valueleagueApp')
  .directive('gameThumbnail', function () {
    return {
      templateUrl: 'app/gameThumbnail/gameThumbnail.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });