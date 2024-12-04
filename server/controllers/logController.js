const Log = require('../models/logModel');

const getLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching logs', error: err });
  }
};

module.exports = { getLogs };
