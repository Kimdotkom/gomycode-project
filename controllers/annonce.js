const Annonce = require("../models/Annonce");
const User = require("../models/User");

//Add new annonce
exports.addAnnonce = async (req, res) => {
  try {
    const { name, description, phone, prix, governement, images } = req.body;
    const newAnnonce = new Annonce({
      name,
      description,
      phone,
      prix,
      governement,
      images,
      postedBy: req.user,
    });
    await newAnnonce.save();
    await User.updateOne({ _id }, { $set: { annonces: _id } });
    res.status(200).send(newAnnonce);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Get all annonces
exports.getAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.find({})
      .sort({ createdAt: -1 })
      .populate("postedBy", "_id name");
    res.status(200).send(annonces);
    
  } catch (error) {
    res.status(400).send(error);
  }
};

//Get one annonce
exports.getOneAnnonce = async (req, res) => {
  try {
    const { id } = req.params;
    const getAnnonce = await Annonce.findById(id);
    if (!getAnnonce) {
      res.status(400).send({ error: "no such annonce" });
    }
    res.status(200).send(getAnnonce);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Get annonces posted by the user
exports.myAnnonces = async (req, res) => {
  try {
    const getAnnonceUser = await Annonce.find({ postedBy: req.user }).sort({ createdAt: -1 })
    .populate("postedBy", "_id name");
    res.status(200).send(getAnnonceUser);
    
  } catch (error) {
    res.status(400).send(error);
  }
};

//Delete one annonce
exports.deleteAnnonce = async (req, res) => {
  try {
    const { _id } = req.params;
    await Annonce.findByIdAndDelete({ _id });
    res.status(200).send("annonce deleted succusfully !");
  } catch (error) {
    res.status(400).send(error);
  }
};

//Find and update annonce
exports.updateAnnonce = async (req, res) => {
  try {
    const { _id } = req.params;
    await Annonce.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send("Annonce updated succesfully !");
  } catch (error) {
    res.status(400).send(error);
  }
};
