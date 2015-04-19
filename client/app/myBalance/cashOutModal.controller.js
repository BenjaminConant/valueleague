'use strict';

angular.module('valueleagueApp')
  .controller('CashOutModalCtrl', function ($scope, $modalInstance, $rootScope) {
    

    $scope.closeModal = function () {
    	$rootScope.currentBalance = '$0.00'
    	$modalInstance.close();
    }
  	


  });
