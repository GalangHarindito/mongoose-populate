const Address = require("../models/address");
const User = require("../models/users");

module.exports = {
  addAddress: async (req, res) => {
    const address = await Address.create({
        address :
        { 
            address : req.body.address,
            city: req.body.city,
            country: req.body.country,
            postalCode: req.body.postalCode
        }  
    });
    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { addresses: address._id } },
      { new: true }
    );
        res.status(200).send({
            message:"Created new adress",
            user
        })
  },
  getAddress: (req, res) => {
    Address.find((error, result) => {
      if (error) {
        res.status(400).send({
          message: "user failed to display",
          error
        });
      } else {
        res.status(200).send({
          message: "Display all user",
          result
        });
      }
    });
  }
}