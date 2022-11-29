const {generateToken} = require("../config/token");

const express = require("express");
const router = express.Router();
const Users = require("../models/User")


router.post("/register", (req,res) =>{
  Users.create(req.body)
  .then((users) => res.send (users));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({
    where: { email },
  }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        admin: user.admin,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

// router.put("/admin/:id", setAdminis);

// router.put("/user/:id", setUserr);

// router.put("/:id", updateUser);

// router.delete("/:id", deleteUser);

// router.get("/", getUsers)

// router.get("/:id", getSingleUser);

module.exports = router;