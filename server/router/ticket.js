const express = require("express");
const TicketController = require("../controllers/ticket");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/ticket", [md_auth.asureAuth], TicketController.createTicket);
api.get("/ticket", [md_auth.asureAuth], TicketController.getTickets);
api.patch("/ticket/:id", [md_auth.asureAuth], TicketController.updateTicket);
api.delete("/ticket/:id", [md_auth.asureAuth], TicketController.deleteTicket);
api.get("/ticket/:id", [md_auth.asureAuth], TicketController.getTicket);

module.exports = api;
