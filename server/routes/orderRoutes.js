const express = require("express");
const { addOrder, getOrderById, updateOrderToPaid, getMyOrders, getOrders } = require("../controllers/orderControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, addOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/order/myorders").get(protect, getMyOrders)
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
