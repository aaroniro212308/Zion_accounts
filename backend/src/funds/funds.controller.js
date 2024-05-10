const fundService = require("./funds.service");

const createFund = async (req, res) => {
  try {
    const newFund = await fundService.createFund(req.body);
    res.status(201).json({
      success: true,
      data: newFund,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getFunds = async (req, res) => {
  try {
    const funds = await fundService.getFunds();
    res.status(200).json({
      success: true,
      data: funds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getFundById = async (req, res) => {
  try {
    const fund = await fundService.getFundById(req.params.id);
    if (!fund) {
      return res.status(404).json({
        success: false,
        message: "Fund not found",
      });
    }
    res.status(200).json({
      success: true,
      data: fund,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateFund = async (req, res) => {
  try {
    const updatedFund = await fundService.updateFund(req.params.id, req.body);
    if (!updatedFund) {
      return res.status(404).json({
        success: false,
        message: "Fund not found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedFund,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteFund = async (req, res) => {
  try {
    await fundService.deleteFund(req.params.id);
    res.status(200).json({
      success: true,
      message: "Fund deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  createFund,
  getFunds,
  getFundById,
  updateFund,
  deleteFund,
 
};
