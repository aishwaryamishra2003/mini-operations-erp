const Inventory = require("../models/Inventory");

const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);

    res.status(201).json(inventory);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getInventory = async (req, res) => {
  try {
    const inventory =
      await Inventory.findAll();

    const result = inventory.map((item) => ({
      ...item.toJSON(),
      availableQty:
        item.physicalQty -
        item.reservedQty,
    }));

    res.json(result);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createInventory,
  getInventory,
};