const express = require("express");
const router = express.Router();
const FundController = require("./funds.controller");
const { verifyToken } = require("../auth/auth");

// Routes for Fund operations with token verification
router.post("/", FundController.createFund);
router.get("/", FundController.getFunds);
router.get("/:id", FundController.getFundById);
router.put("/:id", FundController.updateFund);
router.delete("/:id", FundController.deleteFund);


module.exports = router;
