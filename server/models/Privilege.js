const mongoose = require('mongoose');

const privilegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Action' }],
});

const Privilege = mongoose.model('Privilege', privilegeSchema);

module.exports = Privilege;
