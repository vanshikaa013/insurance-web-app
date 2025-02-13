import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./healthform.css"; // Assuming you still want to keep custom CSS

const Healthform = () => {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Using the useNavigate hook for navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    let isValid = true;
    let newErrors = {};

    // Validate Name with min and max length
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    } else if (formData.name.length > 50) {
      newErrors.name = "Name must not exceed 50 characters";
      isValid = false;
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate Mobile
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number should be 10 digits";
      isValid = false;
    }

    setErrors(newErrors);

    // If form is valid, navigate to the next page (Premiums)
    if (isValid) {
      navigate("/premiums"); // Navigate to the "/premiums" route
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Block numbers in the name field
    if (name === "name" && /\d/.test(value)) {
      return; // Prevent changing if the input contains numbers
    }

    // Block non-numeric characters in the mobile field
    if (name === "mobile" && /[^0-9]/.test(value)) {
      return; // Prevent changing if the input contains non-numeric characters
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="sm" className="mt-5">
      {/* Step Navigation */}
      <Box display="flex" alignItems="center" mb={4}>
        <div className="step text-center">
          <Typography className="step_main" variant="body2" color="success.main">
            Contact Details
          </Typography>
          <div className="circle circle_details border mb-2 mx-auto mt-2">1</div>
        </div>

        {/* Progress Line */}
        <Box flex="1" height="2px" bgcolor="grey.300" mx={2} />

        <div className="step text-center">
          <Typography className="step_main" variant="body2">
            Existing Policy
          </Typography>
          <div className="circle circle_details border mb-2 mx-auto mt-2">2</div>
        </div>

        {/* Progress Line */}
        <Box flex="1" height="2px" bgcolor="grey.300" mx={2} />

        <div className="step text-center">
          <Typography className="step_main" variant="body2">
            Personal Details
          </Typography>
          <div className="circle circle_details border mb-2 mx-auto mt-2">3</div>
        </div>

        {/* Progress Line */}
        <Box flex="1" height="2px" bgcolor="grey.300" mx={2} />

        <div className="step text-center">
          <Typography className="step_main" variant="body2">
            Demographic Details
          </Typography>
          <div className="circle circle_details border mb-2 mx-auto mt-2">4</div>
        </div>
      </Box>

      {/* Form Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4">Enter Your Details</Typography>
        <Typography variant="body2" color="textSecondary">
          Your personal data is safe with us!
        </Typography>
      </Box>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box width="100%" maxWidth={600}>
            {/* Name Field */}
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              error={Boolean(errors.name)}
              helperText={errors.name}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            {/* Mobile Field */}
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
              error={Boolean(errors.mobile)}
              helperText={errors.mobile}
            />
          </Box>
        </Box>

        {/* Legal Notice */}
        <Box textAlign="center" mt={2}>
          <Typography variant="caption" color="textSecondary">
            By Clicking on "Continue", I declare that I am a resident of UAE and
            holding a valid Visa and agree to the website{" "}
            <a href="#" className="text-decoration-none">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-decoration-none">
              Terms of Use
            </a>
            .
          </Typography>
        </Box>

        {/* Continue Button */}
        <Box textAlign="center" mt={4}>
          <Button
            style={{ backgroundColor: "#003d2b", padding: "10px", textTransform: "none" }}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Continue
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Healthform;
