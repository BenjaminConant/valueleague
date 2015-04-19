
'use strict';

angular.module('valueleagueApp')
  .controller('ChooseStockCtrl', function ($http, $rootScope, $scope, $stateParams, game, $interval, $modal, $modalInstance) {
  	$scope.selectedStock = null

    $scope.openStockModal = function(g){
      $scope.select = g;
          $modal.open({
            templateUrl: "app/gameStockThumbnail/modal.html",
            scope: $scope,
            controller: "ChooseStockCtrl"
          })
        };


    $scope.selected = function(stock){
      stock.isSelected = true
      $rootScope.hasSelected = true
      $rootScope.selectedStock = stock.ticker
      console.log("In the closing function")
      
      $modalInstance.close();
      console.log($rootScope.hasSelected)

    };
   

  });
