const newsletter = require("../models/newsletter");
const Newsletter = require("../models/newsletter");

function suscribeEmail(req, res) {
  const { email } = req.body;

  if (!email) {
    res.status(400).send({ msg: "Ingresar email ha registrar" });
  } else {
    const newsletter = new Newsletter({
      email: email.toLowerCase(),
    });

    newsletter.save((error) => {
      if (error) {
        res.status(400).send({ msg: "El email ya se encuentra registrado" });
      } else {
        res.status(200).send({ msg: "Email registrado exitosamente" });
      }
    });
  }
}

function getEmails(req, res) {
  const { page = 1, limit = 10 } = req.query;

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  Newsletter.paginate({}, options, (error, emailStored) => {
    if (error) {
      res.status(400).send({ msg: "Error del servidor" });
    } else {
      res.status(200).send(emailStored);
    }
  });
}

function deleteEmail(req, res) {
  const { id } = req.params;

  Newsletter.findByIdAndDelete({ _id: id }, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el registro" });
    } else {
      res.status(200).send({ msg: "Eliminacion exitosa" });
    }
  });
}

module.exports = {
  suscribeEmail,
  getEmails,
  deleteEmail,
};
