const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const { items, address } = req.body;

    const userId = req.user.id;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Items are required' });
    }

    const newOrder = new Order({
      user: userId,
      items,
      status: 'pending',
      address,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order' });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('user');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

module.exports = { createOrder, getOrders };
