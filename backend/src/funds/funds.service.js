const Fund = require("./funds.model");
const generateUniqueId = require("../common/generate-key");

const createFund = async (FundData) => {
  try {
    FundData.fundsId = generateUniqueId("FUND")
    const newFund = await Fund.create(FundData);
    return newFund;
  } catch (error) {
    throw error;
  }
};

const getFunds = async () => {
  try {
    const Funds = await Fund.find();
    return Funds;
  } catch (error) {
    throw error;
  }
};

const getFundById = async (FundId) => {
  try {
    const Fund = await Fund.findById(FundId);
    return Fund;
  } catch (error) {
    throw error;
  }
};

const updateFund = async (FundId, FundData) => {
  try {
    const updatedFund = await Fund.findByIdAndUpdate(FundId, FundData, {
      new: true,
      runValidators: true,
    });
    return updatedFund;
  } catch (error) {
    throw error;
  }
};

const deleteFund = async (FundId) => {
  try {
    await Fund.findByIdAndDelete(FundId);
  } catch (error) {
    throw error;
  }
};



module.exports = {
  createFund,
  getFunds,
  getFundById,
  updateFund,
  deleteFund,
};
