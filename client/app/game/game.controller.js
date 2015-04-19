'use strict';

angular.module('valueleagueApp')
  .controller('GameCtrl', function ($scope, $stateParams, game, $interval, $modal) {
  	$scope.counter = 0; 

  
  	$scope.stocks;
  	console.log($stateParams.id);
   	game.findById($stateParams.id).success(function(game){
   		console.log(game);
   		$scope.game = game;
      $scope.game.stocks.forEach(function(stock) {
            stock.percentReturn = stock.ticker;
      });
   		console.log("the stocks", $scope.game.stocks);


   	}).error(function(err){
   		console.log(err);
   	})

   	$scope.runDemo = function () {
   			
	  	$interval(function(){
	  			$scope.counter++
          $scope.game.stocks.forEach(function(stock) {
            stock.percentReturn = (stock.prices[$scope.counter].Open - stock.startPrice) / stock.startPrice;
            console.log(stock);
          });

    

	  	}, 1000, $scope.game.stocks[0].prices.length - 1);


   	}


    $scope.openStockModal = function(g){
      $scope.select = g;
          $modal.open({
            templateUrl: "app/gameStockThumbnail/modal.html",
            scope: $scope,
            controller: "ChooseStockCtrl"
          })
        };


      $scope.hasSelected = false;
    $scope.selected = function(stock){
      $scope.hasSelected = true;
      $scope.selectedStock = stock.ticker;
      console.log($scope.hasSelected)
    };

   

  });
