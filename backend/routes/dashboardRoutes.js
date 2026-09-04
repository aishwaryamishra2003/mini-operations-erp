const express = require("express");
const router = express.Router();

const Inventory =
require("../models/Inventory");

const WorkOrder =
require("../models/WorkOrder");

const Transfer =
require("../models/Transfer");

const Reservation =
require("../models/Reservation");

router.get("/", async (req, res) => {
  const inventory =
    await Inventory.count();

  const workOrders =
    await WorkOrder.count();

  const transfers =
    await Transfer.count();

  const reservations =
    await Reservation.count();

  res.json({
    inventory,
    workOrders,
    transfers,
    reservations,
  });
});

module.exports = router;