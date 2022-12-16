//Require express
const express = require("express");
const { register, login } = require("../controllers/User");
const isAuth = require("../middleware/isAuth");
const { registerValidation, validator } = require("../middleware/validator");
const User = require("../models/User");

//express routes
const router = express.Router();

//Creating routes
//test get
router.get("/test", (req, res) => {
  try {
    res.send("Hello World !");
  } catch (error) {
    console.log(error);
  }
});

//Add new user
router.post("/add-user", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get all users
router.get("/get-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get one user
router.get("/get-one/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await User.findOne({ _id });
    res.status(200).send(getUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete one user
router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await User.findByIdAndDelete({ _id });
    res.status(200).send("user deleted succusfully !");
  } catch (error) {
    res.status(400).send(error);
  }
});

//Find and update user
router.put("/update-user/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await User.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send("User updated succesfully !");
  } catch (error) {
    res.status(400).send(error);
  }
});

//user register
router.post("/register", registerValidation(), validator, register);

//user login
router.post("/login", login);

//current user
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

//exporting routes
module.exports = router;
