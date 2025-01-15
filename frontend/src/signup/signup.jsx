
import React, { useState } from "react";

const SignupPage = () => {
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState("");
    // const handleOptionChange = (e) => {
    //     setSelectedOption(e.target.value);
    //   };
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        fullName: "",

        weightUnit: 'kg',
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

    const handleWeightUnitChange = (e) => {
        const newUnit = e.target.value;
        let convertedWeight = formData.weight;

        // Convert weight between kg and lbs
        if (newUnit === "lbs" && formData.weight) {
            convertedWeight = (formData.weight * 2.20462).toFixed(2); // Convert kg to lbs
        } else if (newUnit === "kg" && formData.weight) {
            convertedWeight = (formData.weight / 2.20462).toFixed(2); // Convert lbs to kg
        }

        setFormData({ ...formData, weightUnit: newUnit, weight: convertedWeight });
    };

    const handleBasicInfo = (e) => {
        setStep(4);
    }
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
                                                        type="password"
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
                                            <div className="input-wrapper name">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="form-control mb-3"
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last name"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="form-control mb-3"
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper dob">
                                                <label htmlFor="">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    placeholder="Enter your date of birth"
                                                    value={formData.dob}
                                                    onChange={handleChange}
                                                    className="form-control mb-3"
                                                    required

                                                />
                                            </div>
                                            <div className="input-wrapper gender">
                                                <div className="sex">
                                                    <select
                                                        id="sex"
                                                        name="sex"
                                                        value={formData.sex}
                                                        onChange={handleChange}
                                                        required
                                                        style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
                                                    >
                                                        <option value="">Sex</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Intersex</option>
                                                    </select>
                                                </div>
                                                <div className="gender">
                                                    <select
                                                        id="gender"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                        required
                                                        style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
                                                    >
                                                        <option value="">Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="transmale">Trans Male</option>
                                                        <option value="transfemale">Trans Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input-wrapper">
                                                <div className="weight">
                                                    <input
                                                        type="number"
                                                        id="weight"
                                                        name="weight"
                                                        value={formData.weight}
                                                        onChange={handleChange}
                                                        required
                                                        style={{ flex: "1", padding: "8px", marginTop: "5px" }}
                                                        placeholder={`Enter weight in ${formData.weightUnit}`}
                                                    />
                                                    <select
                                                        name="weightUnit"
                                                        value={formData.weightUnit}
                                                        onChange={handleWeightUnitChange}
                                                        style={{ padding: "8px" }}
                                                    >
                                                        <option value="kg">kg</option>
                                                        <option value="lbs">lbs</option>
                                                    </select>
                                                </div>
                                                <div className="height">
                                                    <input
                                                        type="number"
                                                        name="height"
                                                        placeholder="Height in cm"
                                                        value={formData.height}
                                                        onChange={handleChange}
                                                        className="form-control mb-3"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="button-section">
                                                <div className="back-btn">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        onClick={() => setStep(2)}
                                                    >
                                                        Back
                                                    </button>
                                                </div>
                                                <div className="submit-btn">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success"
                                                        onClick={handleBasicInfo}
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {otpVerified && step === 4 && (
                                        <div className="step step-4">
                                            <h2 style={{ marginBottom: "15px" }}>Understanding You:Body, Mind & Spirit</h2>
                                            <h3>What best describes your body type ?</h3>
                                            <div style={{ marginBottom: "10px" }}>
                                                <label style={{ display: "block", marginBottom: "5px" }}>
                                                    <input
                                                        type="radio"
                                                        name="body-type"
                                                        value="slim"
                                                        checked={selectedOption === "slim"}
                                                        onChange={(e) => setSelectedOption(e.target.value)}
                                                    />
                                                    Slim
                                                </label>
                                                <label style={{ display: "block", marginBottom: "5px" }}>
                                                    <input
                                                        type="radio"
                                                        name="body-type"
                                                        value="athletic"
                                                        checked={selectedOption === "athletic"}
                                                        onChange={(e) => setSelectedOption(e.target.value)}
                                                    />
                                                    Athletic
                                                </label>
                                                <label style={{ display: "block", marginBottom: "5px" }}>
                                                    <input
                                                        type="radio"
                                                        name="body-type"
                                                        value="average"
                                                        checked={selectedOption === "average"}
                                                        onChange={(e) => setSelectedOption(e.target.value)}
                                                    />
                                                    Average
                                                </label>
                                                <label style={{ display: "block", marginBottom: "5px" }}>
                                                    <input
                                                        type="radio"
                                                        name="body-type"
                                                        value="curvy"
                                                        checked={selectedOption === "curvy"}
                                                        onChange={(e) => setSelectedOption(e.target.value)}
                                                    />
                                                    Curvy
                                                </label>
                                                <label style={{ display: "block", marginBottom: "5px" }}>
                                                    <input
                                                        type="radio"
                                                        name="body-type"
                                                        value="overweight"
                                                        checked={selectedOption === "overweight"}
                                                        onChange={(e) => setSelectedOption(e.target.value)}
                                                    />
                                                    Overweight
                                                </label>
                                                
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => alert(`Your favourite programming language is: ${selectedOption}`)}
                                                style={{
                                                    padding: "10px 15px",
                                                    backgroundColor: "#4CAF50",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "5px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Submit
                                            </button>
                                            <div className="questions">
                                                <div className="quest-sec">

                                                </div>
                                            </div>
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