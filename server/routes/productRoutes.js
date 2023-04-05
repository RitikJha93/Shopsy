const express = require('express');
const { getAllProducts, getParticularProduct, getProd } = require('../controllers/productController');
const router = express.Router();

router.get('/',getAllProducts)

router.get('/:id',getParticularProduct)

module.exports = router