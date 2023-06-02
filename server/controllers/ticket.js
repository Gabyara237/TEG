const Ticket = require("../models/ticket");

//Creacion de Ticket
function createTicket(req, res) {
  const ticket = new Ticket({ ...req.body, active: false });
  ticket.created_at = new Date();
  console.log(ticket);

  ticket.save((error, ticketStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear ticket" });
    } else {
      res.status(201).send(ticketStored);
    }
  });
}

//Obtener todos los tickets creados

function getTickets(req, res) {
  //configuraciones para la paginacion de los tickets
  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
    sort: { created_at: "desc" },
  };

  Ticket.paginate({}, options, (error, ticketsStored) => {
    if (error) {
      res.status(400).send({ msg: "Error al obtener los tickets" });
    } else {
      res.status(200).send(ticketsStored);
    }
  });
}

//Actualización de Ticket
function updateTicket(req, res) {
  const { id } = req.params;
  const ticketData = req.body;

  Ticket.findByIdAndUpdate({ _id: id }, ticketData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el Ticket" });
    } else {
      res.status(200).send({ msg: "Ticket actualizado Exitosamente" });
    }
  });
}

//Eliminación de Ticket
function deleteTicket(req, res) {
  const { id } = req.params;

  Ticket.findOneAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar Ticket" });
    } else {
      res.status(200).send({ msg: "Ticket eliminado exitosamente" });
    }
  });
}

//Obtener un Ticket por su ID

function getTicket(req, res) {
  const { id } = req.params;

  Ticket.findOne({ _id: id }, (error, ticketStored) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor" });
    } else if (!ticketStored) {
      res.status(400).send({ msg: "El ticket no existe" });
    } else {
      res.status(200).send(ticketStored);
    }
  });
}

module.exports = {
  createTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  getTicket,
};
