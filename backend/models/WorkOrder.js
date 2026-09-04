const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WorkOrder = sequelize.define("WorkOrder", {
  workOrderId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  requiredQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  assignedUser: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  shortageQty: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  status: {
    type: DataTypes.ENUM(
      "Assigned",
      "In Progress",
      "Completed"
    ),
    defaultValue: "Assigned",
  },
});

module.exports = WorkOrder;