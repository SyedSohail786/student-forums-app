const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getMessagesByQuestion,
  createMessage,
} = require("../controllers/messageController");

router.get("/:questionId", getMessagesByQuestion);
router.post("/:questionId", auth(["student", "admin"]), createMessage);

module.exports = router;
