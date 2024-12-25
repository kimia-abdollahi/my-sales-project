const Privilege = require('../models/privilege');

const createPrivilege = async (req, res) => {
  try {
    const { name, actions } = req.body;

    const newPrivilege = new Privilege({ name, actions });
    await newPrivilege.save();

    res.status(201).json(newPrivilege);
  } catch (error) {
    res.status(500).json({ message: 'Error creating privilege' });
  }
};

const getPrivileges = async (req, res) => {
  try {
    const privileges = await Privilege.find().populate('actions');
    res.status(200).json(privileges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching privileges' });
  }
};

module.exports = { createPrivilege, getPrivileges };
