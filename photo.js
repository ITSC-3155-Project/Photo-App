"use strict"; // Enforces strict mode for safer JavaScript (e.g., prevents using undeclared variables)

const mongoose = require("mongoose");

// Define the schema for comments on a photo
const commentSchema = new mongoose.Schema({
  comment: String,
  date_time: { type: Date, default: Date.now },
  user_id: mongoose.Schema.Types.ObjectId,
});

// Define the schema for photos
const photoSchema = new mongoose.Schema({
  file_name: String,
  date_time: { type: Date, default: Date.now },
  user_id: mongoose.Schema.Types.ObjectId,
  comments: [commentSchema],
});

const Photo = mongoose.model("Photo", photoSchema);

// Export the Photo model so it can be used in other files
module.exports = Photo;
