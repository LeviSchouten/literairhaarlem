const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const Event = require('../../models/Event');

router.get('/', (req, res) => {
  res.send([
    {
      _id: '123',
      datum: 'woensdag, april 25, 2020',
      titel: 'Nieuw evenenment titel',
      inhoud_kort:
        'Hier dan een wat kortere tekst over het evenement maar net genoeg om de lezer geinteresseert te maken om meer te lezen.',
    },
  ]);
  // Event.find((err, events) => {
  //   if (err) return res.send(500).send('failed');
  //   res.json(events);
  // });
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) return res.status(500).send('failed');
    res.json(event);
  });
});

router.post('/', (req, res) => {
  const event = { ...req.body, _id: uuidv4() };
  new Event(event).save((err) => {
    if (err) return res.status(500).send('failed');
    res.send('created');
  });
});

router.delete('/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id, (err, event) => {
    if (err) return res.status(500).send('failed');
    res.json(event);
  });
});

router.put('/:id', (req, res) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) return res.status(500).send('failed');

    event = { ...event, ...req.body };
    event.save((err) => {
      if (err) return res.status(500).send('failed');
      res.json(event);
    });
  });
});

module.exports = router;
