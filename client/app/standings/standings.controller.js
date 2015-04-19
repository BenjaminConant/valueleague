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
    	name:"Ben",
    	stockSym:"MYL",
    	stockName:"Mylan N.V.",
    	Change:"4.56%",
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
    	name:"Steve",
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
    	standing: "5",
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
