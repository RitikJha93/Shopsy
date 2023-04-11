const express = require('express');
const { getAllProducts, getParticularProduct, getProd, deleteProduct, createProduct, updateProduct, createProductReview } = require('../controllers/productController');
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.route('/').get(getAllProducts).post(protect,admin,createProduct)
router.route('/:id/review').post(protect,createProductReview)
router.route('/:id').get(getParticularProduct).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

module.exports = router