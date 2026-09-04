const WorkOrder = require("../models/WorkOrder");

const createWorkOrder = async (req, res) => {
  try {
    const workOrder = await WorkOrder.create(req.body);

    res.status(201).json(workOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getWorkOrders = async (req, res) => {
  try {
    const workOrders = await WorkOrder.findAll();

    res.json(workOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createWorkOrder,
  getWorkOrders,
};