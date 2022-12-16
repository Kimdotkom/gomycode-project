const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
const User = require("../models/User");

const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: " you must be logged in " });
  }
  const token = authorization.replace(" Bearer ", " ");
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: " you must be logged in 2" });
    }
  
  const { _id } = payload;
  User.findById(_id).then((userdata) => {
    req.user = userdata;
    next();
  });
});
}
module.exports = requireLogin;
