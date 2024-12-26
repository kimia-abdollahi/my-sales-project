const express = require('express');
const router = express.Router();
const { createBusiness, getBusinesses, updateBusiness, deleteBusiness } = require('../controllers/businessController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createBusiness);
router.get('/', authMiddleware, getBusinesses);
router.put('/:id', authMiddleware, updateBusiness);
router.delete('/:id', authMiddleware, deleteBusiness);

module.exports = router;
