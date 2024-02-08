import nodemailer from 'nodemailer';

const email = 'baychaiser.club@gmaiil.com'
const pass = 'baychaser@@2024'

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
    to:email
}