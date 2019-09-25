const user = require("../models/users");
const objectId = require("mongodb").ObjectID

module.exports = {
 getUserAddress:(req, res) => {
    user.find()
    .populate("addresses", "address")
    .then ((error, result) => {
      if(error){
        res.status(400).send({
          error
        })
      }
      else{
        res.status(200).send({
          result
        })
      }
    })
 },
    getUser: (req, res) => {
        user.find((error, result) => {
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
        })
        .populate("addresses", "address -_id")
      },  
  postUser: (req, res) => {
    const newUser = new user(req.body);
    newUser.save((error, result) => {
      if (error) {
        res.status(400).send({
          message: "user failed to create",
          error
        });
      } else {
        res.status(200).send({
          message: "user created",
          result
        });
      }
    });
  },
  deleteUser: (req, res) => {
      user.findByIdAndRemove(
          objectId(req.params.id),
          (error, result) => {
          if(error) {
              res.status(400).send({
                  massage:"user failed to delete",
                  error
              })
          }else{
              res.status(200).send({
                  message:"user delete",
                  result
              })
          }
      })
  },
  putUser: (req, res) => {
    user.findByIdAndUpdate(
        objectId(req.params.id),req.body,{new:true},
        (error, result) => {
        if(error) {
            res.status(400).send({
                massage:"user failed to update",
                error
            })
        }else{
            res.status(200).send({
                message:"user update",
                result
            })
        }
    })
  },
  // getAll:(req, res) => {
  //   user.find().populate("addresses")
  //   .then(result => {
  //     res.send(result)
  //     .catch (error => console.log(error))
  //   })
  // }
};
