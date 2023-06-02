const Country = require("../models/country");

//Creación de paises a operar

function createCountry(req, res) {
  const country = new Country({ ...req.body, active: false });
  console.log(country);

  country.save((error, countryStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear país" });
    } else {
      res.status(200).send(countryStored);
    }
  });
}

module.exports = {
  createCountry,
};
