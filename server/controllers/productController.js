const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({'message':'Something went wrong'});
  }
};

const getParticularProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({'message':'Unable to find product'});
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'Product deleted successfully'})
  } catch (error) {
    res.status(404).json({message:'Unable to find product'});
  }
};


module.exports = {getAllProducts,getParticularProduct,deleteProduct};
