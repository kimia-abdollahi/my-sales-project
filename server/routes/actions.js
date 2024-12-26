const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/checkAdmin');

const { createAction, getActions } = require('../controllers/Action');

router.post('/create', authMiddleware, checkAdmin, createAction);
router.get('/', authMiddleware, getActions);

module.exports = router;
