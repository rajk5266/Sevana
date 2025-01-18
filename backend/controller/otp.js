const Otp = require('../models/otp');
const sendEmail = require('../service/emailService')
require('dotenv').config();


const generate4digitOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

const generateOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const otp = generate4digitOtp();

   
        const subject = `Verify your Email`
        const htmlContent = `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
                    <div style="text-align: center; padding: 10px 0;">
                        <h2 style="color: #007BFF;">Sevana</h2>
                        <p style="font-size: 1.2em; color: #555;">Verify Your Email</p>
                    </div>
                    <p style="font-size: 1em; margin-bottom: 20px;">
                        Hello, <br>
                        Thank you for registering with Sevana! Please use the following OTP to verify your email address:
                    </p>
                    <div style="text-align: center; margin: 20px 0;">
                        <p style="font-size: 1.5em; color: #007BFF; font-weight: bold; margin: 10px 0;">${otp}</p>
                    </div>
                    <p style="font-size: 1em;">
                        If you did not request this, please ignore this email. This OTP is valid for the next 10 minutes.
                    </p>
                    <div style="margin-top: 20px; text-align: center; color: #888;">
                        <p style="font-size: 0.9em;">Need help? Contact us at <a href="mailto:support@sevana.com" style="color: #007BFF;">support@sevana.com</a></p>
                        <p style="font-size: 0.8em;">&copy; ${new Date().getFullYear()} Sevana. All rights reserved.</p>
                    </div>
                </div>
            `
            try {
                // Call the utility function to send the email
                // await sendEmail(email, subject, htmlContent);
                res.status(200).json({ success: true, message: "OTP sent successfully!" }); 
            } catch (error) {
                res.status(500).json({ success: false, message: "Error sending email.", error });
            }

};

// Verifying OTP
const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ error: "Email and OTP are required" });
    }

    try {
        // Find OTP for the given email
        const otpRecord = await Otp.findOne({ email, otp });

        if (!otpRecord) {
            return res.status(400).json({ success: false, message: "Invalid OTP or OTP expired" });
        }

        // If valid, delete the OTP record
        await Otp.deleteOne({ _id: otpRecord._id });

        res.status(200).json({ success: true, message: "OTP verified successfully!" });
    } catch (error) {
        console.error("Error verifying OTP: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { generateOtp, verifyOtp };
