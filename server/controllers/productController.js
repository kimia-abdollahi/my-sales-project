const Product = require('../models/productModel');
const Log = require('../models/logModel');

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    const log = new Log({
      action: 'create',
      entityType: 'Product',
      entityId: newProduct._id,
      createdBy: req.body.createdBy,
      details: `Product ${newProduct.name} created.`,
    });
    await log.save();

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      { status: 'deleted' },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const log = new Log({
      action: 'delete',
      entityType: 'Product',
      entityId: id,
      createdBy: req.body.createdBy,
      details: `Product ${product.name} soft deleted.`,
    });
    await log.save();

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
};

module.exports = { createProduct, deleteProduct };
