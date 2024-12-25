const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/Order');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);

module.exports = router;
