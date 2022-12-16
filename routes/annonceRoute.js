//Require express
const express = require("express");
const Annonce = require("../models/Annonce");

//express routes
const router = express.Router();

const mongoose = require("mongoose");
const isAuth = require("../middleware/isAuth");
const { addAnnonce, getAnnonces, getOneAnnonce, myAnnonces, deleteAnnonce, updateAnnonce } = require("../controllers/annonce");


//Add new annonce
router.post("/addAnnonce", isAuth, addAnnonce);


//Get all annonces
router.get("/get-annonces", getAnnonces);


//Get one annonce
router.get("/get-one/:id", getOneAnnonce);



//Get annonces posted by the user
router.get("/myAnnonces",isAuth, myAnnonces);


//Delete one annonce
router.delete("/delete/:_id", deleteAnnonce);



//Find and update annonce
router.put("/updateAnnonce/:_id", updateAnnonce);




//exporting routes
module.exports = router;
