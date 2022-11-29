const express = require("express");
const { validateAdmin } = require("../middlewares/auth");
const router = express.Router();
const Property = require("../models/Properties")

router.post("/add", validateAdmin, (req,res) =>{
    Property.create(req.body)
    .then((property) => res.send (property));
  });

module.exports = router;