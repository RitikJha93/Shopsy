const Order = require("../models/orderModel");
const User = require("../models/userModel");

const addOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
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
      totalPrice,
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
  const { id } = req.params

  const order = await Order.findById(id).populate('user', 'name email');
  if (order) {
    res.status(200).json(order);
  }
  else {
    res.status(500).json({ message: "Could not find order" });
  }
}

const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id)
  if (!order) {
    return res.status(404).json({ message: 'No orders found' })
  }
  try {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResults = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    }

    const updatedOrder = await order.save()
    res.status(200).json(updatedOrder)
  } catch (error) {
    res.status(404).json({ message: 'No orders found' })
  }
}

const updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id)
  if (!order) {
    return res.status(404).json({ message: 'No orders found' })
  }
  try {
    order.isDelivered = true
    if(!order.isPaid){
      order.isPaid = true
      order.paidAt = Date.now()
    }
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()
    res.status(200).json(updatedOrder)
  } catch (error) {
    res.status(404).json({ message: 'No orders found' })
  }
}

const getMyOrders = async (req, res) => {
  const order = await Order.find({ user: req.user._id })
  if (!order) {
    return res.status(404).json({ message: 'No orders found' })
  }
  try {
    res.status(200).json(order)

  } catch (error) {
    res.status(404).json({ message: 'No orders found' })

  }
}
const getAllOrders = async (req, res) => {
  const order = await Order.find({ }).populate('user','id name')
  if (!order) {
    return res.status(404).json({ message: 'No orders found' })
  }
  try {
    res.status(200).json(order)

  } catch (error) {
    res.status(404).json({ message: 'No orders found' })

  }
}



module.exports = { addOrder, getOrderById, updateOrderToPaid, getMyOrders,getAllOrders,updateOrderToDelivered }