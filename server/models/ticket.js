const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const TicketSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  active: Boolean,
  created_at: Date,
  date: Date,
  status: String,
  location: String,
  published: Boolean,
  ownerTicket: String,
  serviceProvider: String,
  priority: String,
});

module.exports = mongoose.model("Ticket", TicketSchema);
