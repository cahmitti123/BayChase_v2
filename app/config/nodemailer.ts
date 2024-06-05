// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
export const transporter = nodemailer.createTransport({
  host: 'live.smtp.mailtrap.io',
  port: 587,
  secure: false, // use SSL
  auth: {
    user: 'api',
    pass: '6f5bb6a3c2e5781512cea87b3a16db95',
  }
});

// Configure the mailoptions object
export const mailOptions = {
  from: 'info@demomailtrap.com',
  to: 'ahmitti.chouaib@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});