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
  // console.log(req.body);
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
    res.status(201).json(saveOrder);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not place order, some error occurred" });
    console.log(error);
  }
};

const getOrderById = async (req, res) => {
  const {id} = req.params

  const order = await Order.findById(id).populate('user','name email');
  if(order){
    res.status(200).json(order);
  }
  else{
    res.status(500).json({ message: "Could not find order"});
  }
}

module.exports = {addOrder,getOrderById}