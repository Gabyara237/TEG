const mongoose = require("mongoose");

const CountrySchema = mongoose.Schema({
  countryname: String,
  countryflag: String,
  active: Boolean,
  tickets: Number,
  services: String,
  companys: String,
  numCompanys: Number,
  citys: String,
});

module.exports = mongoose.model("Country", CountrySchema);
