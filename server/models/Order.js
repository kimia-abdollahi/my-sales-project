const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: String, required: true }],
  status: { type: String, default: 'pending' },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
