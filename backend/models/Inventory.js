const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inventory = sequelize.define("Inventory", {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  batchNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  physicalQty: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },

  reservedQty: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
});

module.exports = Inventory;