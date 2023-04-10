const Product = require("../models/productModel");
const uploadImage = require("../utils/uploadImage");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ 'message': 'Something went wrong' });
  }
};

const getParticularProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ 'message': 'Unable to find product' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(404).json({ message: 'Unable to find product' });
  }
};

const createProduct = async (req, res) => {
  const { name, price, image, brand, category, countInStock, numReviews, description } = req.body;
  let cloudinaryImage;
  if (image) {
    cloudinaryImage = await uploadImage(image)
  }
  console.log(cloudinaryImage);
  try {
    const product = new Product({ name, price, user:req.user._id, image: cloudinaryImage, brand, category, countInStock, numReviews, description })
    const createdProduct = await product.save()
    res.status(200).json(createdProduct)
  } catch (error) {
    res.status(404).json({ message: 'Unable to create product' });
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { name, price, image, brand, category, countInStock, description } = req.body;
  let cloudinaryImage;
  if (image) {
    cloudinaryImage = uploadImage(image)
  }

  const product = await Product.findById(req.params.id)
  if(!product) {
    return res.status(404).json({ message: 'Product not found'})
  }
  try {
    
    product.name = name || product.name
    product.price = price || product.price
    product.image = cloudinaryImage || product.image
    product.brand = brand || product.brand
    product.category = category || product.category
    product.countInStock = countInStock || product.countInStock
    product.description = description || product.description
    product.countInStock = countInStock || product.countInStock

    const updatedProduct = await product.save()
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(404).json({ message: 'Unable to find product' });
  }
};


module.exports = { getAllProducts, getParticularProduct, deleteProduct, createProduct ,updateProduct};
