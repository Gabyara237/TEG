// toda la configuracion de express

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();

//Import routings
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const ticketRoutes = require("./router/ticket");
const countryRoutes = require("./router/country");
const newsletterRoutes = require("./router/newsletter");
const serviceRoute = require("./router/service");

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure static folder
app.use(express.static("uploads"));

//Configure Header HTTP - CORS
app.use(cors());

//Configure routings

app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, ticketRoutes);
app.use(`/api/${API_VERSION}`, countryRoutes);
app.use(`/api/${API_VERSION}`, newsletterRoutes);
app.use(`/api/${API_VERSION}`, serviceRoute);

module.exports = app;
