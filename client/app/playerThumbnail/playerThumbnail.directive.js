'use strict';

angular.module('valueleagueApp')
  .directive('playerThumbnail', function () {
    return {
      templateUrl: 'app/playerThumbnail/playerThumbnail.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });