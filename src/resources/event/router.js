const express = require("express");

const { getEventById, createEventWithBandAndVenue, getAllEvents } = require("./controller");

const router = express.Router();

router.get("/", getAllEvents);

router.get("/:id", getEventById)

router.post("/", createEventWithBandAndVenue)

module.exports = router;