const express = require("express");
const ServiceController = require("../controllers/service");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/service", [md_auth.asureAuth], ServiceController.createService);
api.get("/services", [md_auth.asureAuth], ServiceController.getServices);
api.delete(
  "/service/:id",
  [md_auth.asureAuth],
  ServiceController.deleteService
);

module.exports = api;
