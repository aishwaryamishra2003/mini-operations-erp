const Transfer = require("../models/Transfer");

const createTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.create(req.body);

    res.status(201).json(transfer);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll();

    res.json(transfers);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createTransfer,
  getTransfers,
};