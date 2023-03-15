const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res,next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    }
    else{
        return res.status(500).json({"message":"Not Authorized"})
    }
  } catch (error) {
    return res.status(500).json({ message: "Not Authorized" });
  }
};

module.exports = protect;
