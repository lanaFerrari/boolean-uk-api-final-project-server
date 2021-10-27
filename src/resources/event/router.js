const express = require("express");

const { getEventById, createEventWithBandAndVenue, getAllEvents } = require("./controller");

const router = express.Router();

router.get("/:id", getEventById)

router.post("/", createEventWithBandAndVenue)

router.get("/", getAllEvents);

module.exports = router;