'use strict';

angular.module('valueleagueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game/:id',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      });
  });