const express = require("express");

const router = express.Router();

const {
  createReservation,
  getReservations,
} = require("../controllers/reservationController");

const authMiddleware =
  require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  createReservation
);

router.get(
  "/",
  authMiddleware,
  getReservations
);

module.exports = router;