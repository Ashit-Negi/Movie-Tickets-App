const express = require("express");
const router = express.Router();
const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

//route for register

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email }); // this is to find that email already exists or not
    if (userExists) {
      return res.send({
        success: false,
        message: "user is already exists",
      });
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;
    console.log(salt);
    const newUser = await User(req.body);

    await newUser.save();

    res.send({
      success: true,
      message: "user Registered Successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    // to find email is already in db or not
    const user = await User.findOne({ email: req.body.email });
    console.log(user)

    if (!user) {
      return res.send({
        success: false,
        message: "You are not registered Please register first",
      });
    }
    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(validpassword)
    if (!validpassword) {
      return res.send({
        success: false,
        message: "Sorry invalid password",
      });
    }
    const token = jwt.sign({userId : user._id} , `${process.env.SECRET_KEY}` )
    res.send({
      success: true,
      message: "user Logged in",
      user:user,
      token: token,
    });
  } catch (error) {
    console.log(error)
  }
});

router.get("/get-current-user",authMiddleware, async(req , res)=>{
  const user = await User.findById(req.body.userId).select("-password")
  console.log(user)


  res.send({
    success : true,
    message : "User Authorized for Protected Route",
    data : user,
  })
})


module.exports = router;

