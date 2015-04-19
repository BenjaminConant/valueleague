'use strict';

angular.module('valueleagueApp')
  .controller('MyBalanceCtrl', function ($scope, $modal, $rootScope ) {
    
    

    $scope.cashOut = function () {
    	$modal.open({
    		templateUrl: 'app/myBalance/cashOutModal.html',
    		controller: 'CashOutModalCtrl'
    	})
    }




  });
