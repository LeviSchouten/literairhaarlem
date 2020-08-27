const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const Wall = require('../../models/Wall');

router.get('/', (req, res) => {
  Wall.find((err, walls) => {
    if (err) return res.send(500).send('failed');
    res.json(walls);
  });
});

router.get('/:id', (req, res) => {
  Wall.findById(req.params.id, (err, wall) => {
    if (err) return res.status(500).send('failed');
    res.json(wall);
  });
});

router.post('/', (req, res) => {
  const wall = { ...req.body, _id: uuidv4() };
  new Wall(wall).save((err) => {
    if (err) return res.status(500).send('failed');
    res.send('created');
  });
});

module.exports = router;
