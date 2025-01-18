const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure the transporter
const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com", // Update to your SMTP server
    port: 587,
    auth: {
        user: process.env.SMTP_USER, // Your email (from environment variables)
        pass: process.env.SMTP_PASS, // Your SMTP password (from environment variables)
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
        from: process.env.SMTP_USER, // Sender email address
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
