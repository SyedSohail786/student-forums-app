const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
  const { category, text } = req.body;
  const question = await Question.create({
    category,
    text,
    user: req.user.id,
  });
  res.status(201).json(question);
};

exports.getQuestionsByCategory = async (req, res) => {
  const questions = await Question.find({ category: req.params.categoryId }).populate("user", "name");
  res.json(questions);
};

exports.getQuestionById = async (req, res) => {
  const question = await Question.findById(req.params.id);
  res.json(question);
};

exports.deleteQuestion = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ msg: "Question deleted" });
};
