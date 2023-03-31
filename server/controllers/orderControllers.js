const Order = require("../models/orderModel");

const addOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalprice,
  } = req.body;

  if (!orderItems) {
    return res.status(400).json({ message: "No orders" });
  }

  try {
    const newOrder = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalprice,
    });

    const saveOrder = await newOrder.save();
    res.json(201).json(saveOrder);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not place order, some error occurred" });
  }
};

module.exports = {addOrder}