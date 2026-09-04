const express = require("express");

const router = express.Router();

const {
  createInventory,
  getInventory,
} = require("../controllers/inventoryController");

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

// Operations user only

router.post(
  "/",
  authMiddleware,
  roleMiddleware(
    "OPERATIONS",
    "ADMIN"
  ),
  createInventory
);

router.get(
  "/",
  authMiddleware,
  getInventory
);

module.exports = router;