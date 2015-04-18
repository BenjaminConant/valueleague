/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Game = require('../api/game/game.model');
var Selection = require('../api/selection/selection.model');
var Stock = require('../api/stock/stock.model');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var stocks = require('./stocks.js');


// Stock.find({}).remove(function() {


// var api_token = '6E10075F14A6447E94C8700F8CF7116A';

// var RequestObj = function (token,ticker) {
//     this.host ='http://globalquotes.xignite.com',
//     this.type ='/v3/xGlobalQuotes.json/GetBars?',
//     this.token = '_token=' + token,
//     this.identifier = '&IdentifierType=Symbol',
//     this.ticker = '&Identifier=' + ticker,
//     this.starttime = '&StartTime=' + '4/17/2015 9:30 AM',
//     this.endtime = '&EndTime=4/17/2015 4:00 PM',
//     this.precision = '&Precision=Minutes',
//     this.periods = '&Period=' + '30',
//     this.fields = '&_Fields=Security.Symbol,Security.Name,Bars.Open,Bars.Close,Bars.StartTime,Bars.EndTime,Bars.StartDate'
// }

// RequestObj.prototype.combine = function () {
//     var req = ''
//     for (var k in this) { if (k != 'combine') req += this[k]; }
//     return req
// }





// var getStockPrices = function() {
//   var tickers = stocks;
//   var promises = tickers.map(function(ticker){
//     var reqObj = new RequestObj(api_token, ticker);
//     return request(reqObj.combine());
//   })

//   return Promise.settle(promises).then(function(stockData){
   
//     stockData.forEach(function(stock) {
//       // console.log("createing stock", stock);
//       var stockBody = JSON.parse(stock._settledValue[1]);


//       //console.log("createing stock", stockBody);

//       Stock.create({
//          ticker: stockBody.Security.Symbol,
//          name: stockBody.Security.Name,
//          prices: stockBody.Bars,
//          startPrice: stockBody.Bars[0].Open,
//          endPrice: stockBody.Bars[stockBody.Bars.length - 1].Close
//       })

//     });


//   })

// }

// // var StockSchema = new Schema({
// //   ticker: String,
// //   name: String,
// //   prices: Object,
// //   game: {type: Schema.Types.ObjectId, ref: 'Game'},
// //   startPrice: Number,
// //   currentPrice: Number,
// //   endPrice: Number
// // });



// getStockPrices();

// });

// var GameSchema = new Schema({
//   name: String,
//   info: String,
//   active: Boolean, 
//   date: String, 
//   stocks: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
//   winner: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
//   complete: Boolean 
// });


var demoGame = new Game ({
  name: "demoGame", 
  date: "April 17th 2015",
  complete: false
});

var gameNextWeek1 = new Game ({
  date: "April 20th 2015", 
  complete: false
})

var gameNextWeek2 = new Game ({
  date: "April 21th 2015", 
  complete: false
})


var gameNextWeek3 = new Game ({
  date: "April 22th 2015", 
  complete: false
})


var gameNextWeek4 = new Game ({
  date: "April 23th 2015", 
  complete: false
})



var gameNextWeek5 = new Game ({
  date: "April 24th 2015", 
  complete: false
})



Game.find({}).remove(function(){
  demoGame.save();
  gameNextWeek1.save();
  gameNextWeek2.save();
  gameNextWeek3.save();
  gameNextWeek4.save();
  gameNextWeek5.save();
})


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});