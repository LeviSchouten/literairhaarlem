const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();

const events = require('./routes/api/events');

app.use(bodyParser.json());

app.use('/api/events', events);

app.listen(port, () => console.log(`Server started on port ${port}`));
