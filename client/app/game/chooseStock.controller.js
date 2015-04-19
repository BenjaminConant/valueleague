
'use strict';

angular.module('valueleagueApp')
  .controller('ChooseStockCtrl', function ($http, $scope, $stateParams, game, $interval, $modal, $modalInstance) {

  	$scope.hasSelected = false;
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
      console.log("In the closing function")
      setTimeout(function(){
     	 $modalInstance.close();
      }, 4500)
      $scope.hasSelected = true
      console.log($scope.hasSelected)

    };
   

  });
