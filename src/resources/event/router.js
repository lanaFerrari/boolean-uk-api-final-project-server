const express = require("express");

const { getEventById } = require("./controller");

const router = express.Router();

router.get("/:id", getEventById)

module.exports = router;