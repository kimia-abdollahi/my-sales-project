const express = require('express');
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategory,
} = require('../controllers/categoryController'); 

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.put('/:id', updateCategory); 
router.delete('/:id', deleteCategory);
router.get('/:id', getCategory);

module.exports = router;
