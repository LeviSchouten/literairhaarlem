const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const EmptyWall = require('../../models/EmptyWall');

router.get('/', (req, res) => {
  EmptyWall.find((err, emptyWalls) => {
    if (err) return res.send(500).send('failed');
    res.json(emptyWalls);
  });
});

router.get('/:id', (req, res) => {
  EmptyWall.findById(req.params.id, (err, wall) => {
    if (err) return res.status(500).send('failed');
    res.json(wall);
  });
});

router.post('/', (req, res) => {
  const emptyWall = { ...req.body, _id: uuidv4() };
  new EmptyWall(emptyWall).save((err) => {
    if (err) return res.status(500).send('failed');
    res.send('created');
  });
});

module.exports = router;
