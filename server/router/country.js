const express = require("express");
const CountryController = require("../controllers/country");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/country", [md_auth.asureAuth], CountryController.createCountry);
api.get("/countries", [md_auth.asureAuth], CountryController.getCountries);
api.delete(
  "/country/:id",
  [md_auth.asureAuth],
  CountryController.deleteCountry
);

module.exports = api;
