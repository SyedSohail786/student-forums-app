const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createQuestion,
  getQuestionsByCategory,
  getQuestionById,
  deleteQuestion
} = require("../controllers/questionController");

router.post("/", auth(["student"]), createQuestion);
router.get("/category/:categoryId", getQuestionsByCategory);
router.get("/:id", getQuestionById);
router.delete("/:id", auth(["admin"]), deleteQuestion);

module.exports = router;
