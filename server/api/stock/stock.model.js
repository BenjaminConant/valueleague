'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StockSchema = new Schema({
  ticker: String,
  name: String,
  prices: Array,
  game: {type: Schema.Types.ObjectId, ref: 'Game'},
  startPrice: Number,
  currentPrice: Number,
  endPrice: Number
});

module.exports = mongoose.model('Stock', StockSchema);