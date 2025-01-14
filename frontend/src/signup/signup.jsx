
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (formData.password !== formData.confirmPassword) {
    //         alert("Passwords do not match!");
    //         return;
    //     }
    //     console.log("Signup completed!", formData);
    //     alert("Signup Successful!");
    // };

    return (
        <div className="row d-flex justify-content-center">
            <div className="col col-12 col-md-8 ">
                <div className="signup-card-wrapper">
                    <div className="signup-card">
                        <div className="row justify-content-center">
                            <div className="col col-12 col-md-6  form-section">

                                <form >
                                    {step === 1 && (
                                        <div className="signup-option-wrapper step step-1">
                                            <div className="row">
                                                <div className="col col-12">
                                                    <div className="logo">
                                                        <img src="https://res.cloudinary.com/dkhtn7jxa/image/upload/f_auto,q_auto/v1/sevana/yyaykuertnvyn7p13iv3" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col col-12">
                                                    <div className="signup-option-inner-wrapper">
                                                        <div className="signup-option manual">
                                                            <h3>Set up your account</h3>
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

                                        </div>


                                    )}
                                    {step === 2 && (
                                        <div className=" step step-2">
                                            <div className="otp-section">
                                                <div className="input-section">
                                                    <input
                                                        type="text"
                                                        name="otp"
                                                        placeholder="Enter OTP sent to your email"
                                                        value={formData.otp}
                                                        onChange={handleChange}
                                                        className="form-control mb-3"
                                                        required
                                                    />
                                                </div>
                                                <div className="button-section">
                                                    <div className="buttons back-btn">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            onClick={() => setStep(1)}
                                                        >
                                                            Back
                                                        </button>
                                                    </div>
                                                    <div className="buttons verify-btn">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            onClick={handleOtpVerification}
                                                        >
                                                            Verify OTP
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    )}
                                    {otpVerified && step === 3 && (
                                        <div className="step step-3">
                                            <h4>Complete your Profile</h4>
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
                                                type="date"
                                                name="dob"
                                                placeholder="Enter your date of birth"
                                                value={formData.dob}
                                                onChange={handleChange}
                                                className="form-control mb-3"
                                                required
                                                onfocus="(this. type='date')" 
                                            />
                                      
                                            <select
                                                id="sex"
                                                name="sex"
                                                value={formData.sex}
                                                onChange={handleChange}
                                                required
                                                style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
                                            >
                                                <option value="">Select Sex</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
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
                            <div className="col col-12 col-md-6 image-section">
                                <div className="img-wrapper">
                                    <img
                                        src="https://res.cloudinary.com/dkhtn7jxa/image/upload/f_auto,q_auto/v1/sevana/gpyygqyydvuqgqypohnc"
                                        alt="Signup illustration"
                                        className="img-fluid"
                                    />
                                </div>

                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};


export default SignupPage;