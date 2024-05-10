const Expense = require("./expenses.model");
const generateUniqueId = require("../common/generate-key");

const createExpense = async (expenseData) => {
  try {
    expenseData.expensesId = generateUniqueId("EXPENSES")
    const newExpense = await Expense.create(expenseData);
    return newExpense;
  } catch (error) {
    throw error;
  }
};

const getExpenses = async () => {
  try {
    const expenses = await Expense.find();
    return expenses;
  } catch (error) {
    throw error;
  }
};

const getExpenseById = async (expenseId) => {
  try {
    const expense = await Expense.findById(expenseId);
    return expense;
  } catch (error) {
    throw error;
  }
};

const updateExpense = async (expenseId, expenseData) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(expenseId, expenseData, {
      new: true,
      runValidators: true,
    });
    return updatedExpense;
  } catch (error) {
    throw error;
  }
};

const deleteExpense = async (expenseId) => {
  try {
    await Expense.findByIdAndDelete(expenseId);
  } catch (error) {
    throw error;
  }
};



module.exports = {
  createExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
