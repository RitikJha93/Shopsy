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
        return res.status(500).json({message:"Not Authorized"})
    }
  } catch (error) {
    return res.status(500).json({ message: "Not Authorized" });
  }
};

const admin = async (req, res,next) => {
  console.log(req.user.isAdmin);
  if(req.user && req.user.isAdmin){
    next();
    console.log('admin');
  }
  else{
    return res.status(500).json({ message: "Not authorized as an Admin"});
  }
} 
module.exports = {protect,admin};
