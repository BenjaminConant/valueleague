'use strict';

angular.module('valueleagueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mastercard', {
        url: '/mastercard',
        templateUrl: 'app/mastercard/mastercard.html',
        controller: 'MastercardCtrl'
      });
  });