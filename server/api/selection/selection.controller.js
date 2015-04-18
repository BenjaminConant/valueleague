'use strict';

var _ = require('lodash');
var Selection = require('./selection.model');

// Get list of selections
exports.index = function(req, res) {
  Selection.find(function (err, selections) {
    if(err) { return handleError(res, err); }
    return res.json(200, selections);
  });
};

// Get a single selection
exports.show = function(req, res) {
  Selection.findById(req.params.id, function (err, selection) {
    if(err) { return handleError(res, err); }
    if(!selection) { return res.send(404); }
    return res.json(selection);
  });
};

// Creates a new selection in the DB.
exports.create = function(req, res) {
  Selection.create(req.body, function(err, selection) {
    if(err) { return handleError(res, err); }
    return res.json(201, selection);
  });
};

// Updates an existing selection in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Selection.findById(req.params.id, function (err, selection) {
    if (err) { return handleError(res, err); }
    if(!selection) { return res.send(404); }
    var updated = _.merge(selection, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, selection);
    });
  });
};

// Deletes a selection from the DB.
exports.destroy = function(req, res) {
  Selection.findById(req.params.id, function (err, selection) {
    if(err) { return handleError(res, err); }
    if(!selection) { return res.send(404); }
    selection.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}