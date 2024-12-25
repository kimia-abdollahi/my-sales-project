const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  privileges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Privilege',
    },
  ],
});

module.exports = mongoose.model('Role', roleSchema);
