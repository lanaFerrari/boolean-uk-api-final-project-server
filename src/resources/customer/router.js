const express = require("express");

const { createCustomer, deleteById , getAllCustomers} = require("./controller");

const router = express.Router();

router.get("/", getAllCustomers);

router.post("/", createCustomer);

router.delete("/:id", deleteById);

module.exports = router;