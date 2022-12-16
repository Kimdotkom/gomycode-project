//Require mongoose
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

//Create schema
const Schema = mongoose.Schema;

const user = mongoose.model("User");

//Create annonce schema
const annonceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    phone: Number,
    prix: Number,
    governement: {
      type: String,
      required: false,
    },
    images: String,

    postedBy: 
      {
        type: ObjectId,
        ref: "User",
        required: true,
      },
    
  },
  {
    timestamps: true,
  }
);

//export schema
module.exports = Annonce = mongoose.model("Annonce", annonceSchema);
