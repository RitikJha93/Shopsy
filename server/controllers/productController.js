const Product = require("../models/productModel");
const uploadImage = require("../utils/uploadImage");

const getAllProducts = async (req, res) => {
  const keyword = req.query.keyword ? { 
    name: { $regex:req.query.keyword,$options : 'i' } 
  } : {}
  try {
    const products = await Product.find({...keyword});
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
  console.log(image);
  let cloudinaryImage;
  if (image) {
    cloudinaryImage = await uploadImage(image)
  }
  console.log(cloudinaryImage);
  try {
    const product = new Product({ name, price, user: req.user._id, image: cloudinaryImage, brand, category, countInStock, numReviews, description })
    const createdProduct = await product.save()
    res.status(200).json(createdProduct)
  } catch (error) {
    res.status(404).json({ message: 'Unable to create product' });
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { name, price, image, brand, category, countInStock, description } = req.body;
  const product = await Product.findById(req.params.id)
  console.log(typeof (image), product.image);
  let cloudinaryImage;
  if (image == product.image) {
    console.log('same');
  } else {
    cloudinaryImage = await uploadImage(image)
    console.log('new');
  }

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
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
    console.log(error);
  }
};

const createProductReview = async (req, res) => {
  const { rating, comment } = req.body
  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString())
    if (alreadyReviewed) {
      return res.status(400).json({ message: 'Review already added' })
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    }

    product.reviews.push(review)
    product.numReviews = product.reviews.length

    product.rating = product.reviews.reduce((acc, item) => acc + item.rating, 0) / product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review Added' })
  } else {
    res.status(400).json({ message: 'Product Not found' })

  }
}
module.exports = { getAllProducts, getParticularProduct, deleteProduct, createProduct, updateProduct, createProductReview };
