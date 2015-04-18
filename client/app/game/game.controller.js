'use strict';

angular.module('valueleagueApp')
  .controller('GameCtrl', function ($scope, $stateParams, game, $interval) {
  	$scope.counter = 0; 

  
  	$scope.stocks;
  	console.log($stateParams.id);
   	game.findById($stateParams.id).success(function(game){
   		console.log(game);
   		$scope.game = game;
   		console.log("the stocks", $scope.game.stocks);


   	}).error(function(err){
   		console.log(err);
   	})

   	$scope.runDemo = function () {
   			
	  	$interval(function(){
	  			$scope.counter++

	  	}, 1000, $scope.game.stocks[0].prices.length - 1);


   	}

   

  });
