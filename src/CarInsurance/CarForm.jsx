import React, { useState } from "react";
import { TextField, Button, Typography, Box, MenuItem, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import "./CarForm.css";

const countryCodes = [
  { code: "+971", country: "UAE", length: 9 },
  { code: "+91", country: "India", length: 10 },
  { code: "+1", country: "USA", length: 10 },
  { code: "+44", country: "UK", length: 10 },
  { code: "+61", country: "Australia", length: 9 },
];

const CarForm = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [countryCode, setCountryCode] = useState("+971");
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  // To store validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    dob: "",
    mobileNumber: "",
  });

  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    if (!name) newErrors.name = "Name is required";
    else if (name.length < 2) newErrors.name = "Name must be at least 2 characters";
    else if (name.length > 50) newErrors.name = "Name must be less than 50 characters";
    else if (!/^[a-zA-Z\s]+$/.test(name)) newErrors.name = "Name must contain only letters";

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";

    if (!dob) newErrors.dob = "Date of Birth is required";
    if (!mobileNumber) newErrors.mobileNumber = "Mobile number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed to the next page if form is valid
      navigate("/carnation"); // Redirect to /carnation page
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/, ""); // Remove non-numeric characters
    const selectedCountry = countryCodes.find((code) => code.code === countryCode);
    const maxLength = selectedCountry ? selectedCountry.length : 10;

    // Allow the number to be entered only up to the max length for the selected country
    if (value.length <= maxLength) {
      setMobileNumber(value);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Remove non-alphabetic characters
    setName(value);
  };

  return (
    <>
      <Box className="container" sx={{ marginTop: 5 }}>
        <Box className="form-container row">
          {/* Left Section */}
          <Box className="col-lg-4 col-md-4 buy_inc" sx={{ backgroundColor: "#f7fcff", padding: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 300 }}>
              Car Insurance
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 300, marginTop: 1 }}>
              Buy Car Insurance in 30 Seconds!
            </Typography>
            <Box sx={{ marginTop: 5 }}>
              <img
                src="https://i.ibb.co/jDtZB1X/Rectangle-43658-1.png"
                alt="car insurance banner"
                width="100%"
              />
            </Box>
          </Box>

          {/* Right Section */}
          <Box className="col-md-7">
            {/* Back Link */}
            <Link
              className="mycolor"
              to="/specify"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                color: "#007bff",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <i className="fas fa-arrow-left"></i> Back
            </Link>

            <Typography variant="h6" sx={{ marginBottom: 3, marginTop: "20px" }}>
              Please Fill Your Details
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                {/* Name Field */}
                <TextField
                  label="Your Name"
                  placeholder="Your Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={handleNameChange} // Update the onChange handler to filter only alphabetic characters
                  error={!!errors.name} // Apply red border if error exists
                  helperText={errors.name} // Show error message
                />
                {/* Email Field */}
                <TextField
                  label="Email"
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email} // Apply red border if error exists
                  helperText={errors.email} // Show error message
                />
                {/* Date of Birth Field */}
                <TextField
                  // label="Date of Birth"
                  variant="outlined"
                  type="date"
                  fullWidth
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  error={!!errors.dob} // Apply red border if error exists
                  helperText={errors.dob} // Show error message
                />
                {/* Mobile Number Field */}
                <TextField
                  placeholder="Mobile Number"
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  value={mobileNumber}
                  onChange={handleMobileNumberChange} // Use custom handler for mobile number
                  error={!!errors.mobileNumber} // Apply red border if error exists
                  helperText={errors.mobileNumber} // Show error message
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextField
                          select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{
                            width: "80px",
                            marginRight: "10px",
                            "& .MuiInputBase-input": {
                              padding: "0px",
                            },
                          }}
                        >
                          {countryCodes.map((option) => (
                            <MenuItem key={option.code} value={option.code}>
                              {option.code}
                            </MenuItem>
                          ))}
                        </TextField>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Declaration */}
              <Typography
                variant="body2"
                sx={{
                  marginBottom: 3,
                  color: "#666",
                  textAlign: "center",
                }}
              >
                By clicking on "Proceed", I declare that I am a resident of UAE
                and holding a valid Visa and agree to the website{" "}
                <a href="#" className="mycolor">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="mycolor">
                  Terms of Use
                </a>
                .
              </Typography>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  padding: "5px",
                  backgroundColor: "#003d2b",
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#bee2b1",
                  },
                }}
              >
                Proceed
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CarForm;
