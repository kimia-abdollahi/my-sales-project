const express = require('express');
const router = express.Router();
const { createCustomer, getCustomers, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createCustomer);
router.get('/', authMiddleware, getCustomers);
router.put('/:id', authMiddleware, updateCustomer);
router.delete('/:id', authMiddleware, deleteCustomer);

module.exports = router;
