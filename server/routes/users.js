const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.put('/update', authMiddleware, updateUser);
router.delete('/:userId', authMiddleware, deleteUser);

module.exports = router;
