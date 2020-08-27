require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

const events = require('./routes/api/events');
const walls = require('./routes/api/walls');
const contact = require('./routes/api/contact');

app.use(bodyParser.json());

app.use('/api/events', events);
app.use('/api/walls', walls);
app.use('/api/contact', contact);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
