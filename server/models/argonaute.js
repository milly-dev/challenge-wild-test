const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const argonauteSchema = new Schema({
  name: { type: String, required: true },
});

const Argonaute = mongoose.model("Argonaute", argonauteSchema);

module.exports = Argonaute;