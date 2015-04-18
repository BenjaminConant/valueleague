'use strict';

angular.module('valueleagueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myBalance', {
        url: '/myBalance',
        templateUrl: 'app/myBalance/myBalance.html',
        controller: 'MyBalanceCtrl'
      });
  });