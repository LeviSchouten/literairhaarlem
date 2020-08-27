const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const defaultResponse = {
    from: process.env.EMAIL_ADDRESS,
    to: req.body.email,
    subject: 'Literair Haarlem',
    text: 'bedankt voor u inzending, we komen zo snel mogelijk bij u terug.',
    replyTo: process.env.EMAIL_ADDRESS,
  };

  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_ADDRESS,
    subject: req.body.name,
    text: req.body.message,
    replyTo: req.body.email,
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      res.status(500).send('failed');
    } else {
      transporter.sendMail(defaultResponse, (err, response) => {
        if (err) {
          res.status(500).send('failed');
        } else {
          res.send('success');
        }
      });
    }
  });
});

module.exports = router;
