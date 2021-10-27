const express = require("express");

const { createCustomer, deleteById } = require("./controller");

const router = express.Router();

router.post("/", createCustomer);

router.delete("/:id", deleteById);

module.exports = router;