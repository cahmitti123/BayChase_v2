import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmitti.chouaib@gmail.com',
    pass: 'syjujeaiaghnefgx',
  }
});

const createWelcomeEmail = (recipientName: string) => {
  return `
    Dear ${recipientName},

    Welcome to Bay Chaser!

    Thank you for choosing Bay Chaser as your gateway to Morocco's hidden waves. With our years of surf expertise, we are dedicated to providing you with exceptional service and unforgettable surfing experiences.

    Our services include guided surf tours, personalized coaching sessions, and accommodation options tailored to your needs.

    Feel free to explore our website for more information, and don't hesitate to contact us if you have any questions or need assistance.

    Best Regards,
    The Bay Chaser Team
  `;
};

export const mailOptions = (recipientEmail: string, recipientName: string) => ({
  from: 'ahmitti.chouaib@gmail.com',
  to: recipientEmail,
  subject: 'Welcome to Bay Chaser!',
  text: createWelcomeEmail(recipientName)
});

export const sendWelcomeEmail = (recipientEmail: string, recipientName: string) => {
  const mail = mailOptions(recipientEmail, recipientName);

  transporter.sendMail(mail, function(error, info){
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Welcome Email sent to', recipientEmail);
    }
  });
};