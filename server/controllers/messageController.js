const Message = require("../models/Message");

exports.getMessagesByQuestion = async (req, res) => {
  const messages = await Message.find({ question: req.params.questionId }).populate("user", "name");
  res.json(messages);
};

exports.createMessage = async (req, res) => {
  const { text } = req.body;
  const message = await Message.create({
    question: req.params.questionId,
    user: req.user.id,
    text,
  });
  res.status(201).json(message);
};
