const express = require("express");
const countryController = require("../controllers/country");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/country", [md_auth.asureAuth], countryController.createCountry);

module.exports = api;
