'use strict';

angular.module('valueleagueApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
     {'title': 'Home', 'link': '/'},
     {'title': 'Games', 'link': '/allGames'},
     {'title': 'My Games', 'link': '/myGames'},
     {'title': 'My Balance', 'link': '/myBalance'},
      {'title': 'Standings', 'link': '/standings'},
     ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });