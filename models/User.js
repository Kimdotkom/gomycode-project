//Require mongoose
const mongoose = require("mongoose");

//Create schema
const Schema = mongoose.Schema;

//Create user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    phone: Number,
    role: {
      type: String,
      Default: "Particulier",
    },
    annonces: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Annonce",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//export schema
module.exports = User = mongoose.model("User", userSchema);
