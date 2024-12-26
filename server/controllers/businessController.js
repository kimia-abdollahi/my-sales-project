const Business = require('../models/Business');

const createBusiness = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newBusiness = new Business({ name, description });
    await newBusiness.save();

    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Error creating business', error });
  }
};

const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching businesses', error });
  }
};

const updateBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedBusiness = await Business.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }

    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ message: 'Error updating business', error });
  }
};

const deleteBusiness = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBusiness = await Business.findByIdAndDelete(id);
    if (!deletedBusiness) {
      return res.status(404).json({ message: 'Business not found' });
    }

    res.status(200).json({ message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting business', error });
  }
};

module.exports = { createBusiness, getBusinesses, updateBusiness, deleteBusiness };
