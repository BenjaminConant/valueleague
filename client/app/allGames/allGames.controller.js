'use strict';

angular.module('valueleagueApp')
  .controller('AllGamesCtrl', function ($scope, game) {
    $scope.message = 'Hello';
    $scope.demoGame = [];
    $scope.games =[];

	game.getAll().success(function(games){
		
		games.forEach(function(game) {
			if (game.name === "demoGame") {
				$scope.demoGame.push(game)
			} else {
				$scope.games.push(game);
			}
		});
		console.log($scope.games);
		console.log($scope.demoGame);

	}).error(function(err){
		console.log(err);
	})
  });
