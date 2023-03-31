const express = require("express");
const { addOrder, getOrderById } = require("../controllers/orderControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, addOrder);
router.route("/:id").get(protect, getOrderById);

module.exports = router;
