
import React, { useState } from "react";

const SignupPage = () => {
    const [step, setStep] = useState(1); 
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",

    });
    const [otpVerified, setOtpVerified] = useState(false); 

    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEmailSubmit = () => {
        if (!formData.email) {
            alert("Please enter your email!");
            return;
        }
        // Simulate sending OTP to email (replace with API call)
        console.log("OTP sent to:", formData.email);
        setStep(2);
    };

    const handleOtpVerification = () => {
        if (!formData.otp) {
            alert("Please enter the OTP!");
            return;
        }

        //  OTP verification 
        if (formData.otp === "1234") {
            alert("OTP Verified!");
            setOtpVerified(true);
            setStep(3);
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signup completed!", formData);
        alert("Signup Successful!");
    };

    return (
        <div className="signup-card">
            <div className="row justify-content-center">
                <div className="col col-12 col-md-6 col-lg-4 form-section">

                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="signup-option-wrapper">
                                <div className="row">
                                    <div className="col col-12">
                                        <div className="logo">
                                            <img src="https://res.cloudinary.com/dkhtn7jxa/image/upload/f_auto,q_auto/v1/sevana/yyaykuertnvyn7p13iv3" alt="" />
                                        </div>
                                    </div>
                                    <div className="col col-12">
                                        <div className="signup-option manual">
                                            <h3>Enter your Email</h3>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control mb-3"
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="btn "
                                                onClick={handleEmailSubmit}
                                            >
                                                Verify
                                            </button>
                                        </div>


                                        <div className="signup-option auto">
                                            <div className="bar">
                                                <button type="button" className="btn google">Sign up with Google</button>
                                            </div>
                                            <div className="bar">
                                                <button type="button" className="btn facebook">Sign up with Facebook</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        )}
                        {step === 2 && (
                            <div>
                                <h3>Step 2: Enter OTP</h3>
                                <input
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP sent to your email"
                                    value={formData.otp}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setStep(1)}
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleOtpVerification}
                                >
                                    Verify OTP
                                </button>
                            </div>
                        )}
                        {otpVerified && step === 3 && (
                            <div>
                                <h3>Step 3: General Information</h3>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Choose a username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="form-control mb-3"
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setStep(2)}
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </form>
                </div>
                <div className="col col-12 col-md-6 col-lg-4 image-section">
                    <img
                        src="https://res.cloudinary.com/dkhtn7jxa/image/upload/f_auto,q_auto/v1/sevana/gpyygqyydvuqgqypohnc"
                        alt="Signup illustration"
                        className="img-fluid"
                    />
                </div>


            </div>
            <div className="image-section">
                <div className="image">
                    <img src="https://res.cloudinary.com/dkhtn7jxa/image/upload/f_auto,q_auto/v1/sevana/gpyygqyydvuqgqypohnc" alt="" />
                </div>

            </div>
        </div>
    );
};


export default SignupPage;
