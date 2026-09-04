require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const workOrderRoutes = require("./routes/workOrderRoutes");
const transferRoutes = require("./routes/transferRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Models (important for sequelize.sync())
require("./models/User");
require("./models/Inventory");
require("./models/WorkOrder");
require("./models/Transfer");
require("./models/Reservation");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/workorders", workOrderRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("Mini Operations ERP API Running");
});

// Database Connection
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database Connected");

    app.listen(process.env.PORT, () => {
      console.log(
        `Server running on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.error("Database Error:", err);
  });