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

async function getCountries(req, res) {
  const { role } = req.query;
  let response = null;
  if (role === undefined) {
    response = await Country.find(); //Me muestra todos los usuarios
  } else {
    response = await Country.find({ role }); // Regresa activos o inactivos
  }
  res.status(200).send(response);
}

function deleteCountry(req, res) {
  const { id } = req.params;
  Country.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el pais" });
    } else {
      res.status(200).send({ msg: "Pais eliminado" });
    }
  });
}

module.exports = {
  createCountry,
  getCountries,
  deleteCountry,
};
