const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);
