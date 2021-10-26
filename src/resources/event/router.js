const express = require("express");

const { getEventById, createEventWithBandAndVenue } = require("./controller");

const router = express.Router();

router.get("/:id", getEventById)

router.post("/", createEventWithBandAndVenue)

module.exports = router;