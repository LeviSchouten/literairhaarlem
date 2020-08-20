const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const getAllEvents = () => {
  return JSON.parse(
    fs.readFileSync(__dirname + '/../../data/events.json', 'utf8')
  );
};

const getEventById = (id) => {
  return getAllEvents().find((event) => event._id === id);
};

router.get('/', (req, res) => {
  try {
    res.send(getAllEvents());
  } catch (error) {
    res.send('something went wrong');
  }
});

router.get('/:id', (req, res) => {
  try {
    const event = getEventById(req.params.id);
    if (event) {
      res.send(event);
    } else {
      res.send(`No event found with id ${req.params.id}`);
    }
  } catch (error) {
    res.send('something went wrong');
  }
});

router.post('/', (req, res) => {
  const event = { ...req.body, _id: uuidv4() };
  try {
    const events = getAllEvents();
    events.push(event);
    fs.writeFileSync(
      __dirname + '/../../data/events.json',
      JSON.stringify(events)
    );
    res.send(event);
  } catch (error) {
    console.log(error);
    res.send('something went wrong');
  }
});

router.put('/:id', (req, res) => {
  try {
    const events = getAllEvents();
    const index = events.findIndex((event) => event._id === req.params.id);
    const event = events.splice(index, 1)[0];
    events.push({ ...event, ...req.body });
    res.send({ ...event, ...req.body });
  } catch (error) {
    console.log(error);
    res.send('something went wrong');
  }
});

module.exports = router;
