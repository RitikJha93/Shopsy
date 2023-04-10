const express = require("express");
const { addOrder, getOrderById, updateOrderToPaid, getMyOrders, getOrders, getAllOrders } = require("../controllers/orderControllers");
const {protect, admin} = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, addOrder).get(protect,admin,getAllOrders)
router.route("/:id").get(protect, getOrderById);
router.route("/order/myorders").get(protect, getMyOrders)
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
