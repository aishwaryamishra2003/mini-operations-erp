const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Transfer = sequelize.define("Transfer", {
  itemName: DataTypes.STRING,
  fromLocation: DataTypes.STRING,
  toLocation: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM(
      "Requested",
      "Dispatched",
      "Received"
    ),
    defaultValue: "Requested",
  },
});

module.exports = Transfer;