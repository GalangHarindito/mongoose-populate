const express = require("express");
const router = express.Router();

const { 
    getUser,
    postUser,
    deleteUser,
    putUser,
    getUserAddress
 } = require("../controller/users");


router.get("/", getUser);
router.get("/byaddress",  getUserAddress)
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);



module.exports = router;
