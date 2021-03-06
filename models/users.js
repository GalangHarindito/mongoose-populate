const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const objectId = require("mongodb").ObjectID

var userSchema = new Schema(
  {
    name: String,
    password: String,
    email: String,
    phoneNumber: String,
    addresses: [
      {
        type: Schema.Types.ObjectId,
        ref: "address"
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
