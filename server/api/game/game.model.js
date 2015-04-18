'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  info: String,
  active: Boolean, 
  date: String, 
  stocks: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
  winner: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
  complete: Boolean 
},{strict: false});

module.exports = mongoose.model('Game', GameSchema);