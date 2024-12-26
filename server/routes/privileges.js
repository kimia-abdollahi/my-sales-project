const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const checkAdmin = require('../middlewares/checkAdmin');

const { createPrivilege, getPrivileges } = require('../controllers/Privilege');

router.post('/create', authMiddleware, checkAdmin, createPrivilege);
router.get('/', authMiddleware, getPrivileges);

module.exports = router;
