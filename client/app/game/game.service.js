'use strict';

angular.module('valueleagueApp')
  .factory('game', function ($http) {
 
 
    return {
      getDemo: function () {
        return $http.get('api/games/demo')
      },
      getAll: function () {
        return $http.get('api/games/')
      }
    };
  });
