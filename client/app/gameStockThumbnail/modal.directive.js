'use strict';

angular.module('valueleagueApp')
  .directive('modalDirective', function ($modal) {
    return {
      templateUrl: 'app/gameStockThumbnail/modal.html',
      restrict: 'A',
      controller: "ChooseStockCtrl",
      link: function (scope, element, attrs) {
      scope.dismiss = function() {
          element.modal('hide');
      };	
      }
    };
  });