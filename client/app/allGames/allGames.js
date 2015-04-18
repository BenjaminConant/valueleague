'use strict';

angular.module('valueleagueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allGames', {
        url: '/allGames',
        templateUrl: 'app/allGames/allGames.html',
        controller: 'AllGamesCtrl'
      });
  });