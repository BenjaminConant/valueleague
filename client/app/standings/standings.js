'use strict';

angular.module('valueleagueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('standings', {
        url: '/standings',
        templateUrl: 'app/standings/standings.html',
        controller: 'StandingsCtrl'
      });
  });