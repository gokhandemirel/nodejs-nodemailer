const express = require('express');
const nodemailer = require('nodemailer');
const port = 3000;

const app = express();

const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
        user: "username",
        pass: "password",
    },
});

const mailOptions = {
    from: 'from email address',
    to: "to email address",
    subject: `subject`,
    html: `html`
};

app.get('/', (req, res) => {
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.json(err);
        } else {
            res.json(info);
        }
    });
});

app.listen(port);