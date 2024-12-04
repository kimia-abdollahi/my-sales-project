const express = require('express');
const {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct, 
  getProducts,
} = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);
router.put('/:productId', updateProduct);
router.get('/:productId', getProduct);
router.delete('/:productId', deleteProduct); 
router.get('/', getProducts);


module.exports = router;
