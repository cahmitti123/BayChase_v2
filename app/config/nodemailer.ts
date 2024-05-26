import nodemailer from 'nodemailer';

const email = 'baychaser.club@gmail.com'
const pass = 'Baychaser@2024.'

export const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: email,
            pass
        }

    }
)

export const mailOptions = {
    from:email,
    to:'ahmitti.chouaib@gmail.com'
}