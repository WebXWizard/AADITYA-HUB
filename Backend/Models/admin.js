const { Schema, model } = require("../connection");
const adminSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = model("admin", adminSchema);
