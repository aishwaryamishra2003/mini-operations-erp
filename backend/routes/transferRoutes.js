const express = require("express");
const router = express.Router();

const {
  createTransfer,
  getTransfers,
} = require("../controllers/transferController");

router.post("/", createTransfer);
router.get("/", getTransfers);

module.exports = router;