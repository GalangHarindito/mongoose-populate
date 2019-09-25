const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var addressSchema = new Schema(
  { 
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: Number, required: true } 

  },
  {
    timestamps: true
  }
);

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
