const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Handle form submissions at the /contact route
app.post('/contact', (req, res) => {
  const { fullName, email, mobile, subject, message } = req.body;

  // Create a transporter to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address (sender)
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  // Define the email options
  const mailOptions = {
    from: email, // The email address of the user submitting the form
    to: process.env.RECIPIENT_EMAIL, // The recipient's email address
    subject: `Contact Form Submission: ${subject}`,
    text: `
      Message: ${message}
      From: ${fullName}
      Email: ${email}
      Mobile: ${mobile}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending message, please try again later.' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Message sent successfully!' });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
