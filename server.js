//Require express
const express = require("express");

//Create instance from express
const app = express();

//Require dotenv
require("dotenv").config();

//Middleware bodyparser
app.use(express.json());

//Require function connect
const connect = require("./config/ConnectDB");
connect();

//import router express
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/annonce", require("./routes/annonceRoute"));

//Create PORT
const PORT = process.env.PORT;

//Listen to the PORT
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server Is Running On PORT : ${PORT}`);
});

//Import the main Passport and Express-Session library
const passport = require("passport");
const session = require("express-session");

//Import the secondary "Strategy" library
const LocalStrategy = require("passport-local").Strategy;

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
// This is the basic express session({..}) initialization.
app.use(passport.initialize());
// init passport on every route call.
app.use(passport.session());
// allow passport to use "express-session".

authUser = (user, password, done) => {
  console.log(`Value of "User" in authUser function ----> ${user}`); //passport will populate, user = req.body.username
  console.log(`Value of "Password" in authUser function ----> ${password}`); //passport will popuplate, password = req.body.password
};
