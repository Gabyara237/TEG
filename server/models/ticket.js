const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  price: Number,
  active: Boolean,
  created_at: Date,
  date: Date,
  status: String,
  country: String,
  state: String,
  location: String,
  published: Boolean,
  responsible: String,
  ownerTicket: String,
  category: String,
});

module.exports = mongoose.model("Ticket", TicketSchema);
