const express = require("express");
const {
  authUser,
  registerUser,
  getProfile,
  updateUserProfile,
} = require("../controllers/userController");
const {protect, admin} = require("../middleware/authMiddleware");
const { getAllUsers } = require("../controllers/orderControllers");
const router = express.Router();

router.post("/login", authUser);
router.post("/register", registerUser);
router.route('/').get(protect,admin,getAllUsers)
router.route("/profile").get(protect, getProfile).put(protect, updateUserProfile)
module.exports = router;
