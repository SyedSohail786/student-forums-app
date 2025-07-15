const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createCategory, getAllCategories, deleteCategory } = require("../controllers/categoryController");

router.post("/", auth(["admin"]), createCategory);
router.get("/", getAllCategories);
router.delete("/:id", auth(["admin"]), deleteCategory);

module.exports = router;
