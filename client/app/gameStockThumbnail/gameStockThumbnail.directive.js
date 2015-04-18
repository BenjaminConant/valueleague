'use strict';

angular.module('valueleagueApp')
  .directive('gameStockThumbnail', function () {
    return {
      templateUrl: 'app/gameStockThumbnail/gameStockThumbnail.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });