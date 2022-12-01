const {generateToken} = require("../config/token");
const {validateAdmin} = require("../middlewares/auth");
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

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.get("/allUsers", validateAdmin, (req, res) => {
  Users.findAll().then((users) => {
    res.status(200).send(users);
  });
});

router.delete("/delete/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id } })
    .then(() => res.status(204).send("Deleted User"))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;