const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
// const cloudinary = require('cloudinary');

const upload = multer();
const router = express.Router();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

router.post('/', upload.single('file'), (req, res) => {
  const form = JSON.parse(JSON.stringify(req.body));
  console.log(req.file);

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
    attachments: [
      {
        filename: 'foto_' + form.name + '.png',
        content: req.file.buffer,
        contentType: 'image/png',
      },
    ],
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
