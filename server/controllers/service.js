const Service = require("../models/service");

//Creación de servicio

function createService(req, res) {
  const service = new Service({ ...req.body, active: false });
  console.log(service);

  service.save((error, serviceStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear servicio" });
    } else {
      res.status(200).send(serviceStored);
    }
  });
}

async function getServices(req, res) {
  const { category } = req.query;
  let response = null;
  if (category === undefined) {
    response = await Service.find(); //Me muestra todos los usuarios
  } else {
    response = await Service.find({ category }); // Regresa activos o inactivos
  }
  res.status(200).send(response);
}

function deleteService(req, res) {
  const { id } = req.params;
  Service.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el servicio" });
    } else {
      res.status(200).send({ msg: "Servicio eliminado" });
    }
  });
}

module.exports = {
  createService,
  getServices,
  deleteService,
};
