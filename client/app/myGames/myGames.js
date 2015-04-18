'use strict';

angular.module('valueleagueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myGames', {
        url: '/myGames',
        templateUrl: 'app/myGames/myGames.html',
        controller: 'MyGamesCtrl'
      });
  });