import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import './BikeForm.css';

const BikeDetails2 = () => {
  const [selectedYear, setSelectedYear] = useState(""); // State for selected year
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city
  const [selectedEngineCapacity, setSelectedEngineCapacity] = useState(""); // State for selected engine capacity
  const [selectedUaeDrivingExperience, setSelectedUaeDrivingExperience] = useState(""); // State for selected UAE driving experience
  const [errorYear, setErrorYear] = useState(false); // State to show error for model year
  const [errorCity, setErrorCity] = useState(false); // State to show error for registration city
  const [errorEngineCapacity, setErrorEngineCapacity] = useState(false); // State to show error for engine capacity
  const [errorUaeDrivingExperience, setErrorUaeDrivingExperience] = useState(false); // State to show error for UAE driving experience
  const navigate = useNavigate();

  const generateYears = () => {
    const years = [];
    for (let year = 2024; year >= 1992; year--) {
      years.push(year);
    }
    return years;
  };

  // Handle form submission and validation
  const handleViewQuotesClick = () => {
    let formValid = true;

    // Validate Model Year
    if (!selectedYear) {
      setErrorYear(true); // Show error for model year if not selected
      formValid = false;
    }

    // Validate Registration City
    if (!selectedCity) {
      setErrorCity(true); // Show error for registration city if not selected
      formValid = false;
    }

    // Validate Engine Capacity
    if (!selectedEngineCapacity) {
      setErrorEngineCapacity(true); // Show error for engine capacity if not selected
      formValid = false;
    }

    // Validate UAE Driving Experience
    if (!selectedUaeDrivingExperience) {
      setErrorUaeDrivingExperience(true); // Show error for UAE driving experience if not selected
      formValid = false;
    }

    if (formValid) {
      // Proceed with navigation if all validations pass
      navigate("/bikerto");
    }
  };

  return (
    <>
      <Paper
        className="bikenav-detail"
        elevation={2}
        sx={{
          padding: "1.5rem",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        {/* Header */}
        <Typography
          variant="p"
          fontWeight="600"
          sx={{
            fontSize: {
              xs: "1rem", // Mobile font size
              sm: "1.2rem", // Tablet font size
              md: "1.1rem", // Desktop font size
            },
          }}
        >
          Secure your bike in a few easy clicks
        </Typography>

        {/* Model Year */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel
            id="model-year-label"
            sx={{
              fontSize: {
                xs: "0.7rem", // Mobile font size
                sm: "0.8rem", // Tablet font size
                md: "0.8rem", // Desktop font size
              },
            }}
          >
            Model Year
          </InputLabel>
          <Select
            labelId="model-year-label"
            label="Model Year"
            id="model-year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            sx={{
              fontSize: "0.85rem",
              height: "2.9rem",
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color when focused
                },
                "&.Mui-focused .MuiInputLabel-root": {
                  color: "#003D2B", // Change label color when focused
                },
              },
            }}
          >
            {generateYears().map((year) => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
          {/* Error message below Model Year */}
          {errorYear && !selectedYear && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                mt: 1,
                fontSize: "0.75rem", // Adjust size for the error message
              }}
            >
              Please select a Model Year before proceeding.
            </Typography>
          )}
        </FormControl>

        {/* Registration City */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel
            id="registration-city-label"
            sx={{
              fontSize: {
                xs: "0.7rem", // Mobile font size
                sm: "0.8rem", // Tablet font size
                md: "0.8rem", // Desktop font size
              },
            }}
          >
            Registration City
          </InputLabel>
          <Select
            labelId="registration-city-label"
            label="Registration City"
            id="registration-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            sx={{
              fontSize: "0.85rem",
              height: "2.9rem",
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color when focused
                },
                "&.Mui-focused .MuiInputLabel-root": {
                  color: "#003D2B", // Change label color when focused
                },
              },
            }}
          >
            <MenuItem value="Dubai">Dubai</MenuItem>
            <MenuItem value="Sharjha">Sharjha</MenuItem>
            <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
            <MenuItem value="Ras Al Khaimah">Ras Al Khaimah</MenuItem>
            <MenuItem value="Al Ain">Al Ain</MenuItem>
            <MenuItem value="Ajman">Ajman</MenuItem>
            <MenuItem value="Furjairah">Furjairah</MenuItem>
            <MenuItem value="Umm Al Quwain">Umm Al Quwain</MenuItem>
          </Select>
          {/* Error message below Registration City */}
          {errorCity && !selectedCity && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                mt: 1,
                fontSize: "0.75rem", // Adjust size for the error message
              }}
            >
              Please select a Registration City before proceeding.
            </Typography>
          )}
        </FormControl>

        {/* Engine Capacity */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel
            id="engine-capacity-label"
            sx={{
              fontSize: {
                xs: "0.7rem", // Mobile font size
                sm: "0.8rem", // Tablet font size
                md: "0.8rem", // Desktop font size
              },
            }}
          >
            Engine Capacity
          </InputLabel>
          <Select
            labelId="engine-capacity-label"
            label="Engine Capacity"
            id="engine-capacity"
            value={selectedEngineCapacity}
            onChange={(e) => setSelectedEngineCapacity(e.target.value)}
            sx={{
              fontSize: "0.85rem",
              height: "2.9rem",
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color when focused
                },
                "&.Mui-focused .MuiInputLabel-root": {
                  color: "#003D2B", // Change label color when focused
                },
              },
            }}
          >
            <MenuItem value="Up to 100cc">Up to 100cc</MenuItem>
            <MenuItem value="101cc to 150cc">101cc to 150cc</MenuItem>
            <MenuItem value="151cc to 200cc">151cc to 200cc</MenuItem>
            <MenuItem value="201cc to 250cc">201cc to 250cc</MenuItem>
            <MenuItem value="251cc to 300cc">251cc to 300cc</MenuItem>
            <MenuItem value="301cc to 350cc">301cc to 350cc</MenuItem>
            <MenuItem value="Above 350cc">Above 350cc</MenuItem>
          </Select>
          {/* Error message below Engine Capacity */}
          {errorEngineCapacity && !selectedEngineCapacity && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                mt: 1,
                fontSize: "0.75rem", // Adjust size for the error message
              }}
            >
              Please select an Engine Capacity before proceeding.
            </Typography>
          )}
        </FormControl>

        {/* UAE Driving Experience */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel
            id="uae-driving-experience-label"
            sx={{
              fontSize: {
                xs: "0.7rem", // Mobile font size
                sm: "0.8rem", // Tablet font size
                md: "0.8rem", // Desktop font size
              },
            }}
          >
            UAE Driving Experience
          </InputLabel>
          <Select
            labelId="uae-driving-experience-label"
            label="UAE Driving Experience"
            id="uae-driving-experience"
            value={selectedUaeDrivingExperience}
            onChange={(e) => setSelectedUaeDrivingExperience(e.target.value)}
            sx={{
              fontSize: "0.85rem",
              height: "2.9rem",
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#003D2B", // Change border color when focused
                },
                "&.Mui-focused .MuiInputLabel-root": {
                  color: "#003D2B", // Change label color when focused
                },
              },
            }}
          >
            <MenuItem value="0 - 6 Months">0 - 6 Months</MenuItem>
            <MenuItem value="6 - 12 Months">6 - 12 Months</MenuItem>
            <MenuItem value="1 - 2 Years">1 - 2 Years</MenuItem>
            <MenuItem value="2 - 3 Years">2 - 3 Years</MenuItem>
            <MenuItem value="3 - 4 Years">3 - 4 Years</MenuItem>
            <MenuItem value="4 - 5 Years">4 - 5 Years</MenuItem>
            <MenuItem value="Above 5 Years">Above 5 Years</MenuItem>
          </Select>
          {/* Error message below UAE Driving Experience */}
          {errorUaeDrivingExperience && !selectedUaeDrivingExperience && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                mt: 1,
                fontSize: "0.75rem", // Adjust size for the error message
              }}
            >
              Please select your UAE Driving Experience before proceeding.
            </Typography>
          )}
        </FormControl>

        {/* Disclaimer */}
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: "0.6rem",
              sm: "0.7rem",
              md: "0.68rem",
            },
            mt: 2,
            color: "gray",
          }}
        >
          By Clicking on "View Quotes", I declare that I am a resident of UAE and holding a valid Visa and agree to the website{" "}
          <a href="/" style={{ color: "#003d2b", textDecoration: "none" }}>
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/" style={{ color: "#003d2b", textDecoration: "none" }}>
            Terms of Use
          </a>
          .
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            gap: "1rem",
            flexDirection: {
              xs: "column",  // Stack buttons on mobile
              sm: "row",     // Arrange buttons horizontally on tablets and larger
            },
          }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              fontSize: {
                xs: "0.6rem", // Mobile font size
                sm: "0.7rem",    // Tablet font size
                md: "0.7rem",  // Desktop font size
                flex: "1",
                backgroundColor: '#003D2B',
                color: "white"
              },
              '&:hover': {
                backgroundColor: '#bee2b1', // Background color on hover
                borderColor: '#bee2b1',     // Border color on hover
                color: '#ffffff',           // Text color on hover
              },
            }}
            onClick={handleViewQuotesClick} // Trigger validation and navigation
          >
            View Quotes
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default BikeDetails2;
