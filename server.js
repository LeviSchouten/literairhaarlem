require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const app = express();

const events = require('./routes/api/events');

app.use(bodyParser.json());

app.use('/api/events', events);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
