const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const expenseRoutes = require("./src/expenses/expenses.routes");
const userRoutes = require("./src/users/users.routes");
const FundRoutes = require("./src/funds/funds.routes");
// const expenseRoutes = require("./src/expenses/expenses.routes");


const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/expenses", expenseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/funds", FundRoutes);
// app.use("/api/expenses", expenseRoutes);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectToDatabase();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
});
