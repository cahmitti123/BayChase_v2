import nodemailer from 'nodemailer';
import { promisify } from 'util';

// Configure the transporter for Hotmail
export const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'baychaser.club@outlook.com',
    pass: 'Baychaser@2024.',
  }
});

// Create the welcome email content
const createWelcomeEmail = (recipientName: string): string => {
  return `
    Dear ${recipientName},

    Welcome to Bay Chaser!

    Thank you for choosing Bay Chaser as your gateway to Morocco's hidden waves. With our years of surf expertise, we are dedicated to providing you with exceptional service and unforgettable surfing experiences.

    Our services include guided surf tours, personalized coaching sessions, and accommodation options tailored to your needs.

    We will contact you as soon as possible to assist you with any questions or arrangements you may need.

    Feel free to explore our website for more information, and don't hesitate to contact us if you have any questions or need assistance.

    Best Regards,
    The Bay Chaser Team
  `;
};

// Define the mail options for the welcome email
export const mailOptions = (recipientEmail: string, recipientName: string) => ({
  from: 'baychaser.club@outlook.com',
  to: recipientEmail,
  subject: 'Welcome to Bay Chaser!',
  text: createWelcomeEmail(recipientName)
});

// Define the mail options for the notification email
const notificationMailOptions = (recipientEmail: string, recipientName: string) => ({
  from: 'baychaser.club@outlook.com',
  to: 'baychaser.club@outlook.com',
  subject: 'New Lead Notification',
  text: `You have a new lead:
  
  Name: ${recipientName}
  Email: ${recipientEmail}

  Please follow up with the client as soon as possible.
  
  Best,
  The Bay Chaser Team`
});

// Promisify the sendMail function
const sendMail = promisify(transporter.sendMail.bind(transporter));

// Send the welcome email and the notification email
export const sendWelcomeEmail = async (recipientEmail: string, recipientName: string) => {
  const welcomeMail = mailOptions(recipientEmail, recipientName);
  const notificationMail = notificationMailOptions(recipientEmail, recipientName);

  try {
    // Send the welcome email to the client
    const welcomeInfo = await sendMail(welcomeMail);

    // Send the notification email to yourself
    const notificationInfo = await sendMail(notificationMail);

    return { success: true, welcomeInfo, notificationInfo };
  } catch (error) {
    console.log('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
