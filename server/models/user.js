const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  avatar: String,
  firstname: String,
  username: String,
  lastname: String,
  datebirth: Date,
  email: {
    type: String,
    unique: true,
  },
  phonenumber: String,
  country: String,
  city: String,
  password: String,
  role: String,
  active: Boolean,
  avatar: String,
  state: String,
  companyname: String,
  balance: Number,
  expertise: String,
});

module.exports = mongoose.model("User", UserSchema);
