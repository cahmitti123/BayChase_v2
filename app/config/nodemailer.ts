import nodemailer from 'nodemailer';
import { promisify } from 'util';

export const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'baychaser.club@outlook.com',
    pass: 'Baychaser@2024.',
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
  from: 'baychaser.club@outlook.com',
  to: recipientEmail,
  subject: 'Welcome to Bay Chaser!',
  text: createWelcomeEmail(recipientName)
});

const sendMail = promisify(transporter.sendMail.bind(transporter));

export const sendWelcomeEmail = async (recipientEmail: string, recipientName: string) => {
  const mail = mailOptions(recipientEmail, recipientName);
  try {
    const info: any = await sendMail(mail);
    console.log('Welcome Email sent:', info.response);
    return { success: true, info };
  } catch (error) {
    console.log('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};