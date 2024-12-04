const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  action: { type: String, required: true },
  entityType: { type: String, required: true },
  entityId: { type: mongoose.Schema.Types.ObjectId, refPath: 'entityType', required: true },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
  details: { type: String },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
