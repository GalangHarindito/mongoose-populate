const express = require("express");
const router = express.Router();

const {
    addAddress,
    getAddress
} = require("../controller/address");


router.post("/",  addAddress);
router.get("/", getAddress)




module.exports = router;