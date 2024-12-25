const express = require('express');
const router = express.Router();
const { createAction, getActions } = require('../controllers/actionController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/checkAdmin');

router.post('/create', authMiddleware, checkAdmin, createAction);
router.get('/', authMiddleware, getActions);

module.exports = router;
