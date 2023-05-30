const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Red-Pepper server is running"));

module.exports = router;
