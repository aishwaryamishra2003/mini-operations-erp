const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Reservation = sequelize.define("Reservation", {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  reservedQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  reservedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Reservation;