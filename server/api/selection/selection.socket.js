/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Selection = require('./selection.model');

exports.register = function(socket) {
  Selection.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Selection.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('selection:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('selection:remove', doc);
}