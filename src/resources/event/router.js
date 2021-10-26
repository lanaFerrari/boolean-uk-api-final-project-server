const express = require("express");

const { getEventById, getAllEvents } = require("./controller");

const router = express.Router();

router.get("/:id", getEventById)

router.get("/", getAllEvents);

module.exports = router;