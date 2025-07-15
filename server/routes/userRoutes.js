const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getAllUsers, deleteUser } = require("../controllers/userController");

router.get("/", auth(["admin"]), getAllUsers);
router.delete("/:id", auth(["admin"]), deleteUser);

module.exports = router;
