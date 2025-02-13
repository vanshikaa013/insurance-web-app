import React, { useState } from "react";
import { Box, Button, Typography, Stepper, Step, StepLabel, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink, useNavigate } from "react-router-dom";
import './ExistingPolicy.css';

const ExistingPolicy = () => {
  const [isForwardEnabled, setIsForwardEnabled] = useState(false); // State to track if forward icon should be enabled
  const [clickedButton, setClickedButton] = useState(null); // State to track the clicked button
  const navigate = useNavigate(); // Hook to navigate to different pages

  const steps = ["Contact Details", "Existing Policy", "Personal Details", "Demographic Details"];

  const handleButtonClick = (buttonName) => {
    setIsForwardEnabled(true);  // Enable the forward icon when any button is clicked
    setClickedButton(buttonName);  // Set the clicked button
  };

  const handleForwardClick = () => {
    if (isForwardEnabled) {
      // Navigate to the next page when forward button is clicked
      navigate('/myrender'); // Replace '/nextpage' with the actual next page path
    }
  };

  return (
    <Box sx={{ padding: "16px", maxWidth: "900px", margin: "0 auto" }}>

      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
        Home &gt; Health Insurance
      </Typography>

      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box textAlign="center" sx={{ margin: "32px 0" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Do you have any existing health insurance in the UAE?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Coverage and premiums based on your policy
        </Typography>
      </Box>

      {/* Back and Forward Buttons */}
      <div className="exisiting-css">
        <NavLink to='/stepppperform'>
          <IconButton
            className="icn-exixiting-left"
            edge="start"
            aria-label="backward"
            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginRight: "16px" }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </NavLink>

        <NavLink >
          <IconButton
            className="icn-exixiting-right"
            edge="end"
            aria-label="forward"
            sx={{
              color: "#003d2b",
              backgroundColor: "#f7f7f7",
              marginLeft: "16px",
              position: 'absolute',
              top: "10px",
              left: 'auto',
              cursor: isForwardEnabled ? 'pointer' : 'not-allowed',  // Disable cursor if forward is not enabled
            }}
            disabled={!isForwardEnabled}  // Disable the forward button initially
            onClick={handleForwardClick}  // Navigate when forward icon is clicked
          >
          <ArrowForwardIosIcon /> 
          </IconButton>
        </NavLink>
      </div>

      {/* First Row of Buttons */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={9} sm={9} md={5} display="flex" justifyContent="center" alignItems="center">
          <Button
            fullWidth
            variant="outlined"
            className="healthplanbtn"
            sx={{
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #003d2b",
              backgroundColor: clickedButton === 'yes' ? '#003d2b' : 'transparent', // Change background color if this button is clicked
              color: clickedButton === 'yes' ? '#fff' : '#000', // Change text color when clicked
            }}
            onClick={() => handleButtonClick('yes')}  // Trigger the state update on button click
          >
            Yes
          </Button>
        </Grid>
        <Grid item xs={9} sm={9} md={5} display="flex" justifyContent="center" alignItems="center">
          <Button
            fullWidth
            className="healthplanbtn"
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "14px",
              padding: "10px",
              border: "1px solid #003d2b",
              backgroundColor: clickedButton === 'expired30' ? '#003d2b' : 'transparent', 
              color: clickedButton === 'expired30' ? '#fff' : '#000', 
            }}
            onClick={() => handleButtonClick('expired30')}  
          >
            The policy expired within the last 30 days
          </Button>
        </Grid>
      </Grid>

      {/* Second Row of Buttons */}
      <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={9} sm={9} md={5}>
          <Button
            fullWidth
            className="healthplanbtn"
            variant="outlined"
            sx={{
              textTransform: "none",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #003d2b",
              backgroundColor: clickedButton === 'expired30Second' ? '#003d2b' : 'transparent', // Change background color if this button is clicked
              color: clickedButton === 'expired30Second' ? '#fff' : '#000', // Change text color when clicked
            }}
            onClick={() => handleButtonClick('expired30Second')}  // Trigger the state update on button click
          >
            The policy expired within the last 30 days
          </Button>
        </Grid>
        <Grid item xs={9} sm={9} md={5}>
          <Button
            fullWidth
            className="healthplanbtn"
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "14px",
              padding: "10px",
              border: "1px solid #003d2b",
              backgroundColor: clickedButton === 'no' ? '#003d2b' : 'transparent', // Change background color if this button is clicked
              color: clickedButton === 'no' ? '#fff' : '#000', // Change text color when clicked
            }}
            onClick={() => handleButtonClick('no')}  // Trigger the state update on button click
          >
            No
          </Button>
        </Grid>
      </Grid>

    </Box>
  );
};

export default ExistingPolicy;
