const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  const hashedPassword = bcrypt.compareSync(password, userExist.password);
  try {
    if (hashedPassword) {
      res.status(200).json({
        _id:userExist._id,
        name:userExist.name,
        email:userExist.email,
        isAdmin:userExist.isAdmin,
        token:null
      });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Some error occurred" });
    console.log(error);
  }
};
const registerUser = () => {};

module.exports = { authUser, registerUser };
