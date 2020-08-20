const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  titel: String,
  inhoud_kort: String,
  inhoud_lang: String,
  datum: String,
  prijs: String,
  locatie: String,
  _id: String,
});

const Event = mongoose.model('events', eventSchema);

module.exports = Event;
