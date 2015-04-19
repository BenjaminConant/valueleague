'use strict';

angular.module('valueleagueApp')
  .controller('StandingsCtrl', function ($scope) {
    $scope.leaders = [
    {
    	standing: "Standing",
    	name:"Name",
    	score: "Score"
    },
    {
    	standing: "1",
    	name:"Steve",
    	score: "500"
    },
    {
    	standing: "2",
    	name:"Katrina",
    	score: "388"
    },
    {
    	standing: "3",
    	name:"Ben",
    	score: "350"
    },
    {
    	standing: "4",
    	name:"Patrick",
    	score: "310"
    },
    {
    	standing: "6",
    	name:"Evan",
    	score: "290"
    },
    {
    	standing: "6",
    	name:"Anirban",
    	score: "150"
    }
    ];

  });
