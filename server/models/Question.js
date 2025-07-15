const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  text: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Question", questionSchema);
