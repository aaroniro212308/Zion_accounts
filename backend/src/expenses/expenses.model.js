const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expensesId: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  expenses: [{
    subtitle: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    }
  }],
  date: {
    type: Date,
    required: true,
  },
  totalamount: {
    type: Number,
    required: true,
  },
  receivedBy: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: Array,
  },
 
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
