const express = require("express");

const { editVenueWithId } = require("./controller");

const router = express.Router();

router.put("/:id", editVenueWithId);

module.exports = router;