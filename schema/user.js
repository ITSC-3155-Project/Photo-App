"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  location: String,
  description: String,
  occupation: String,
  login_name: String,   // NEW for Sprint 3
  password: String      // NEW for Sprint 3
});

const User = mongoose.model("User", userSchema);

module.exports = User;
