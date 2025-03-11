const { Schema, model } = require("../connection");
const userSchema = new Schema({
  name: String,
  category: String,
  email: String,
  password: String,
  phone: Number,
});

module.exports = model("user", userSchema);
