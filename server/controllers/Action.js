const Action = require('../models/Action');

const createAction = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newAction = new Action({ name, description });
    await newAction.save();

    res.status(201).json(newAction);
  } catch (error) {
    res.status(500).json({ message: 'Error creating action' });
  }
};

const getActions = async (req, res) => {
  try {
    const actions = await Action.find();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching actions' });
  }
};

module.exports = { createAction, getActions };
