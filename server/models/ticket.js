const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const TicketSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  Active: Boolean,
  created_at: Date,
  date: Date,
  status: String,
  location: String,
  published: Boolean,
  ownerTicket: String,
  serviceProvider: String,
});

TicketSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Ticket", TicketSchema);
