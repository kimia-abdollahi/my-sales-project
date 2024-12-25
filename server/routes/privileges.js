const express = require('express');
const router = express.Router();
const { createPrivilege, getPrivileges } = require('../controllers/Privilege');
const { authMiddleware } = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/checkAdmin');

router.post('/create', authMiddleware, checkAdmin, createPrivilege);
router.get('/', authMiddleware, getPrivileges);

module.exports = router;
