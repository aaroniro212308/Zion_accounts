const express = require("express");
const router = express.Router();
const expenseController = require("./expenses.controller");
const { verifyToken } = require("../auth/auth");

// Routes for expense operations with token verification
router.post("/", expenseController.createExpense);
router.get("/", expenseController.getExpenses);
router.get("/:id", expenseController.getExpenseById);
router.put("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.deleteExpense);


module.exports = router;
