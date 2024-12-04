const Category = require('../models/categoryModel');

const createCategory = async (req, res) => {
  const { name, description, parentId } = req.body; 

  try {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = new Category({ name, description, parentId }); // اضافه کردن parentId
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Error creating category', error: err });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
};

module.exports = { createCategory, getCategories };
