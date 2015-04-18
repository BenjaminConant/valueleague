'use strict';

angular.module('valueleagueApp')
  .directive('gameThumbnail', function ($location) {
    return {
      templateUrl: 'app/gameThumbnail/gameThumbnail.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	scope.goToGame = function (id) {
      		$location.path('/game/' + id )
      	}
      		
      	}
      }
    }
  );