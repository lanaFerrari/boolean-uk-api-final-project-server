const express = require("express");

const { editVenueWithId, getAllVenues } = require("./controller");

const router = express.Router();

router.put("/:id", editVenueWithId);

router.get("/", getAllVenues);

module.exports = router;