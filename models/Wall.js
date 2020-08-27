const mongoose = require('mongoose');

const wallSchema = new mongoose.Schema({
  titel: String,
  gedicht: String,
  auteur: String,
  locatie: String,
  imageUrl: String,
  _id: String,
});

const Wall = mongoose.model('walls', wallSchema);

module.exports = Wall;
