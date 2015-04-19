'use strict';

var _ = require('lodash');
var Game = require('./game.model');
var Stock = require('../stock/stock.model');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var stocks = require('../../config/stocks.js');

// Get list of games
exports.index = function(req, res) {
  Game.find(function (err, games) {
    if(err) { return handleError(res, err); }
    return res.json(200, games);
  });
};

var api_token = '6E10075F14A6447E94C8700F8CF7116A';

var RequestObj = function (token,tickers) {
    this.host ='http://superquotes.xignite.com',
    this.type ='/xSuperQuotes.json/GetQuotes?',
    this.token = '_token=' + token,
    this.identifier = '&IdentifierType=Symbol',
    this.ticker = '&Identifiers=' + tickers,
    this.fields = '&_Fields=Last,Identifier,Name'
}
RequestObj.prototype.combine = function () {
    var req = ''
    for (var k in this) { if (k != 'combine') req += this[k]; }
    return req
}

// Get a single game
exports.show = function(req, res) {
  Game.findById(req.params.id)
  .populate('stocks')
  .exec(function(err, game){
    if (game) {
      console.log('the game is: ',game);
      if (game.name === "demoGame") {
        if (game.stocks.length > 0) {
          console.log("we got to inside the wrong thing");
          res.json(200, game);
        } else {
          console.log("we got to inside the right thing");
          Stock.find(function(err, stocks){
            game.stocks = stocks;
            game.save(function(err, game) {
              Game.findById(game.id)
              .populate('stocks')
              .exec(function(err, game){
                res.json(200, game);
              })
            })
          })
        }
      } else {
        // make the api request
        var tickers = stocks;
        var reqObj = new RequestObj(api_token, tickers);
        console.log(reqObj.combine());
        request(reqObj.combine()).then(function(stockData){
          // check promise object...
          var stockBody = JSON.parse(stockData[stockData.length - 1]);
          //console.log(stockBody)
          // game.stocks = stockBody;
          // console.log(game);
          var newGame = {
            name: game.name,
            info: game.info,
            active: game.active,
            date: game.date,
            stocks: stockBody,
            winner: game.winner,
            complete: game.complete
          };
          res.json(200, newGame)   
        });
      }
    } else {
      res.json(200, "no game");
    }
  }) 
};

// Creates a new game in the DB.
exports.create = function(req, res) {
  Game.create(req.body, function(err, game) {
    if(err) { return handleError(res, err); }
    return res.json(201, game);
  });
};

// Updates an existing game in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Game.findById(req.params.id, function (err, game) {
    if (err) { return handleError(res, err); }
    if(!game) { return res.send(404); }
    var updated = _.merge(game, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, game);
    });
  });
};

// Deletes a game from the DB.
exports.destroy = function(req, res) {
  Game.findById(req.params.id, function (err, game) {
    if(err) { return handleError(res, err); }
    if(!game) { return res.send(404); }
    game.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}