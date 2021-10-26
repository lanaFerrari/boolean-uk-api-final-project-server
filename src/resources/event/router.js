const express = require("express");

<<<<<<< HEAD
const { getEventById, createEventWithBandAndVenue } = require("./controller");
=======
const { getEventById, getAllEvents } = require("./controller");
>>>>>>> cab00ba50a30fba334d32cdd80bf43f7b9fec229

const router = express.Router();

router.get("/:id", getEventById)

<<<<<<< HEAD
router.post("/", createEventWithBandAndVenue)
=======
router.get("/", getAllEvents);
>>>>>>> cab00ba50a30fba334d32cdd80bf43f7b9fec229

module.exports = router;