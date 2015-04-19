'use strict';

angular.module('valueleagueApp')
  .controller('StandingsCtrl', function ($scope) {
    $scope.leaders = [
    {
    	standing: "Standing",
    	name:"Name",
    	stockSym:"Symbol",
    	stockName:"Stcok Name",
    	Change:"Change",
    	score: "Score",
    	titleRow: true
    },
    {
    	standing: "1",
    	name:"Steve",
    	stockSym:"YUM",
    	stockName:"Yum Brands Inc",
    	Change:"0.67%",
    	score: "500"
    },
    {
    	standing: "2",
    	name:"Katrina",
    	stockSym:"ZTS",
    	stockName:"Zoetis Inc",
    	Change:"-0.17%",
    	score: "400"
    },
    {
    	standing: "3",
    	name:"Ben",
    	stockSym:"ZMH",
    	stockName:"Zimmer Holdings Inc",
    	Change:"-0.72%",
    	score: "350"
    },
    {
    	standing: "4",
    	name:"Patrick",
    	stockSym:"ZION",
    	stockName:"Zions Bancorp",
    	Change:"-0.82%",
    	score: "300"
    },
    {
    	standing: "500",
    	name:"Evan",
    	stockSym:"XYL",
    	stockName:"Xylem Inc",
    	Change:"-1.44%",
    	score: "250"
    },
    {
    	standing: "6",
    	name:"Anirban",
    	stockSym:"YHOO",
    	stockName:"Yahoo Inc",
    	Change:"-2.12%",
    	score: "150"
    }
    ];

  });
