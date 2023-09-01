const nodemailer = require('nodemailer');
const { throwHttpError } = require('.');

require('dotenv').config();
const { BASE_URL, MAILBOX_PASSWORD } = process.env;

async function sendVerificationEmail(email, verificationCode) {
    const mailServer = {
        host: 'smtp.ukr.net',
        port: 465,
        secure: true,
        auth: {
            user: 'yuriy.aza@ukr.net',
            pass: MAILBOX_PASSWORD,
        },
    };

    const mailContent = {
        to: email,
        from: 'yuriy.aza@ukr.net',
        subject: 'Confirm of you registration',
        html: `
            <p>Please click on the link below to confirm your registration:</p>
             <a href="${BASE_URL}/api/users/verify/${verificationCode}" target="_blank">Verify email </a>
        `,
    };

    try {
        const mailer = nodemailer.createTransport(mailServer);
        await mailer.sendMail(mailContent);
    }
    catch {
        throwHttpError(500, 'Error sending a verification email');
    }
}

module.exports = { sendVerificationEmail };
