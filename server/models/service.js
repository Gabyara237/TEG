const mongoose = require("mongoose");

// Define a scheme for cities
const CitySchema = mongoose.Schema({
  cityname: String,
});

// Defines a scheme for countries
const CountrySchema = mongoose.Schema({
  countryName: String,
  cities: [CitySchema], // Array of objects of type CitySchema
});

// Defines the schema for the service
const ServiceSchema = mongoose.Schema({
  nameservice: String,
  countriesservices: [CountrySchema], // Array of objects of type CountrySchema
});

// Creates the models for City, Country and Service
const CityService = mongoose.model("CityService", CitySchema);
const CountryService = mongoose.model("CountryService", CountrySchema);
const Service = mongoose.model("Service", ServiceSchema);

module.exports = { CityService, CountryService, Service };
