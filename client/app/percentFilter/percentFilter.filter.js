'use strict';

angular.module('valueleagueApp')
  .filter('percentFilter', function ($filter) {
    return function (input, decimals) {
      
      if (typeof input === 'number') {
      	return $filter('number')(input * 100, decimals) + '%';
      } else {
      	return input
      }
 
    };
  });
