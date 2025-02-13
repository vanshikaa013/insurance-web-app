import { Box, Grid, Paper, TextField, Typography, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FrontForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [nationality, setNationality] = useState(""); // New state for nationality
    const [nameError, setNameError] = useState(false);
    const [nameAlphaError, setNameAlphaError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [birthDateError, setBirthDateError] = useState(false);
    const [nationalityError, setNationalityError] = useState(false); // Error state for nationality
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleNameChange = (e) => {
        const value = e.target.value;

        // Prevent entering numbers or special characters
        if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
            return; // Prevent the default behavior if a number or special character is entered
        }

        setName(value);

        // Validate name length
        if (value.length < 2 || value.length > 50) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        // Check if name only contains alphabetic characters and spaces
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(value)) {
            setNameAlphaError(true);
        } else {
            setNameAlphaError(false);
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;

        if (/[^0-9]/.test(value)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }

        if (value.length <= 10 && !/[a-zA-Z]/.test(value)) {
            setPhoneNumber(value);
        }
    };

    const handleBirthDateChange = (e) => {
        const value = e.target.value;
        setBirthDate(value);

        const selectedDate = new Date(value);
        const currentDate = new Date();
        if (selectedDate > currentDate) {
            setBirthDateError(true);
        } else {
            setBirthDateError(false);
        }
    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Check if all conditions are met and no errors exist
        if (
            nameError ||
            nameAlphaError ||
            emailError ||
            phoneError ||
            birthDateError ||
            nationality === "" || // Check if nationality is selected
            name === "" ||
            email === "" ||
            phoneNumber === "" ||
            birthDate === ""
        ) {
            setFormError("Please fill in all required fields correctly.");
        } else {
            setFormError(""); // Clear form error message
            // Reset all error states as the form is valid
            setNameError(false);
            setNameAlphaError(false);
            setEmailError(false);
            setPhoneError(false);
            setBirthDateError(false);
            setNationalityError(false);

            navigate('/bikedetainav'); // Navigate to the next page after successful form submission
        }
    };

    return (
        <Paper
            elevation={2}
            sx={{
                padding: "1.5rem",
                backgroundColor: "white",
                borderRadius: "8px",
            }}
        >
            <Typography variant="subtitle1" gutterBottom align="start">
                Secure your bike in a few easy clicks
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
                {formError && (
                    <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                        {formError}
                    </Typography>
                )}

                <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                    error={submitted && (nameError || nameAlphaError || name === "")}
                    helperText={
                        submitted &&
                        (nameError
                            ? "Name must be between 2 and 50 characters"
                            : nameAlphaError
                            ? "Name must only contain alphabetic characters and spaces"
                            : name === ""
                            ? "Name is required"
                            : "")
                    }
                    InputProps={{
                        style: {
                            fontSize: '0.7rem',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            fontSize: '0.7rem',
                        },
                    }}
                />

                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={handleEmailChange}
                    error={submitted && emailError || email === ""}
                    helperText={submitted && (emailError ? "Please enter a valid email address" : email === "" ? "Email is required" : "")}
                    InputProps={{
                        style: {
                            fontSize: '0.7rem',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            fontSize: '0.7rem',
                        },
                    }}
                />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            type="date"
                            variant="outlined"
                            margin="normal"
                            value={birthDate}
                            onChange={handleBirthDateChange}
                            error={submitted && birthDateError || birthDate === ""}
                            helperText={submitted && (birthDateError ? "Birthdate cannot be in the future" : birthDate === "" ? "Birthdate is required" : "")}
                            InputProps={{
                                style: {
                                    fontSize: '0.7rem',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontSize: '0.7rem',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            select
                            label="Nationality"
                            variant="outlined"
                            margin="normal"
                            value={nationality}
                            onChange={handleNationalityChange}
                            error={submitted && nationality === ""}
                            helperText={submitted && nationality === "" ? "Nationality is required" : ""}
                            InputProps={{
                                style: {
                                    fontSize: '0.7rem',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontSize: '0.7rem',
                                },
                            }}
                        >
                            <MenuItem value="UAE">UAE</MenuItem>
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>

                <TextField
                    fullWidth
                    label="Mobile Number"
                    type="tel"
                    variant="outlined"
                    margin="normal"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    error={submitted && phoneError || phoneNumber === ""}
                    helperText={submitted && (phoneError ? "Please enter only digits (No alphabetic characters or special symbols)" : phoneNumber === "" ? "Phone number is required" : "")}
                    InputProps={{
                        style: {
                            fontSize: '0.8rem',
                        },
                    }}
                    InputLabelProps={{
                        style: { fontSize: '0.7rem' },
                    }}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: "#003d2b",
                        "&:hover": {
                            backgroundColor: "#bee2b1",
                        },
                    }}
                    type="submit"
                >
                    Proceed
                </Button>

                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        textAlign: "start",
                        fontSize: "0.6rem",
                        color: "gray",
                    }}
                >
                    By clicking on "Proceed", I declare that I am a resident of
                    UAE and holding a valid Visa and agree to the website{" "}
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "#003d2b" }}
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="#"
                        style={{ textDecoration: "none", color: "#003d2b" }}
                    >
                        Terms of Use
                    </a>
                    .
                </Typography>
            </Box>
        </Paper>
    );
};

export default FrontForm;
