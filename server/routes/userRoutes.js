const express = require("express");
const {
  authUser,
  registerUser,
  getProfile,
  updateUserProfile,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/login", authUser);

router.post("/register", registerUser);
router.route("/profile").get(protect, getProfile).put(protect, updateUserProfile)
module.exports = router;
