const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
