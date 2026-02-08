// models/Book.model.js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  fileUrl: { type: String, required: true },
  coverImage: String,
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = model("Book", bookSchema);
