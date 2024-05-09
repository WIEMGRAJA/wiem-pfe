const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    res.json({ user, role: user.role }); // Return user and role
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      number: req.body.number,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role // Assign role from request body
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json({ user: savedUser, role: savedUser.role }); // Return user and role
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      number: req.body.number,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role // Assign role from request body
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;