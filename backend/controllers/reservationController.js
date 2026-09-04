const Reservation = require("../models/Reservation");

const createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);

    res.status(201).json(reservation);
  } catch (error) {
    console.error("CREATE ERROR:", error);
    console.error("MESSAGE:", error.message);

    if (error.parent) {
      console.error("DB ERROR:", error.parent.message);
    }

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll();

    res.json(reservations);
  } catch (error) {
    console.error("GET ERROR:", error);
    console.error("MESSAGE:", error.message);

    if (error.parent) {
      console.error("DB ERROR:", error.parent.message);
    }

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createReservation,
  getReservations,
};