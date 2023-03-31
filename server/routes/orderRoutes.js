const express = require("express");
const { addOrder } = require("../controllers/orderControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, addOrder);

module.exports = router;
