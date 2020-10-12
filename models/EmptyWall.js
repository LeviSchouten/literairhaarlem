const mongoose = require('mongoose');

const emptyWallSchema = new mongoose.Schema({
  locatie: String,
  imageUrl: String,
  informatie: String,
  _id: String,
});

const EmptyWall = mongoose.model('empty-walls', emptyWallSchema);

module.exports = EmptyWall;
