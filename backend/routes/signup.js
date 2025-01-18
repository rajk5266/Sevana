const express = require('express');
const router = express.Router();

const otpController = require('../controller/otp')

router.post('/signup/email-verification', otpController.generateOtp );


module.exports = router;
 