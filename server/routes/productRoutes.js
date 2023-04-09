const express = require('express');
const { getAllProducts, getParticularProduct, getProd, deleteProduct } = require('../controllers/productController');
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get('/',getAllProducts)

router.route('/:id').get(getParticularProduct).delete(protect,admin,deleteProduct)

module.exports = router