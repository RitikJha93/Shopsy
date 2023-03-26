const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

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
        _id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        isAdmin: userExist.isAdmin,
        token: generateToken(userExist._id),
      });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Some error occurred" });
    console.log(error);
  }
};
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  //if all the fields are empty
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ 'message': "Please fill in all the input fields" });
  }

  //if email is already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res
      .status(400)
      .json({ 'message': "User with this email already exists" });
  }

  //salting the password
  var salt = bcrypt.genSaltSync(10);

  //if there is no error while signing up then a create a new user model
  try {
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    //saving the user
    const result = user.save();

    //if the user gets registered then res the document
    if (result) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(400).json({ 'message': "Failed to create the user" });
  }
};

const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  try {
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    }
  } catch (error) {
    res.status(500).json({ 'message': "User not found" });
  }
};
module.exports = { authUser, registerUser, getProfile };
