const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure the transporter
const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com", //  SMTP server
    port: 587,
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
    },
});

/**
 * Function to send an email
 * @param {string} to - Recipient's email address
 * @param {string} subject - Email subject
 * @param {string} htmlContent - HTML content for the email
 * @returns {Promise} - Resolves with email info or rejects with error
 */
const sendEmail = async (to, subject, htmlContent) => {
    const mailOptions = {
        from: process.env.SMTP_USER, 
        to,
        subject,
        html: htmlContent,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

module.exports = sendEmail;
