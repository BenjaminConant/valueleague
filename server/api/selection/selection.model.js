'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SelectionSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  stock: {type: Schema.Types.ObjectId, ref:'Stock'},
  game: {type: Schema.Types.ObjectId, ref:'Game'},
  isWinner: Boolean
});

module.exports = mongoose.model('Selection', SelectionSchema);