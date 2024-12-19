const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');



exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      user = new User({
        name,
        email,
        password: hashedPassword,
      });
      await user.save();
  
      res.status(201).json({ msg: 'Registration successful. You can now log in.' });
    } catch (err) {
      res.status(500).json({ msg: 'Server error', error: err.message });
    }
  };
  
  exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Email or password is incorrect' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Email or password is incorrect' });
      }
  
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({
        msg: 'Login successful',
        token,
      });
    } catch (err) {
      res.status(500).json({ msg: 'Server error', error: err.message });
    }
  };
  
  

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Error in server', error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, updatedAt: Date.now() },
      { new: true }
    );

    res.json({ msg: `User's information has been edited successfully`, user });
  } catch (err) {
    res.status(500).json({ msg: 'Error in server', error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Unauthorized access' });
    }

    const { userId } = req.params;
    await User.findByIdAndDelete(userId);

    res.json({ msg: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Error in server', error: err.message });
  }
};
