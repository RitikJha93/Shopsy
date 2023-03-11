const mongoose = require("mongoose");
const colors = require("colors");
const User = require("./models/userModel");
const Order = require("./models/orderModel");
const Product = require("./models/productModel");
const connectMongo = require("./db/db");
const dotenv = require("dotenv");
const products = require("./data/products");
const users = require("./data/users");
dotenv.config();
connectMongo();

const importData = async () => {
  try {
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts)
    console.log('Data Imported'.green.inverse);
  } catch (error) {
    console.log(`${error}`.red.inverse);

  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    console.log('Data destroyed'.green.inverse);

  } catch (error) {
    console.log(`${error}`.red.inverse);
  }
};

if(process.argv[2] == '-d'){
    destroyData();
}
else{
    importData()
}