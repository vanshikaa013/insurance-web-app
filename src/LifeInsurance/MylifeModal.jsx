import React from "react";
import {
  Box,
  Typography,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const MylifeModal = () => {
  const [gender, setGender] = React.useState("");
  const [smoke, setSmoke] = React.useState("");

  const handleGenderChange = (event, newGender) => {
    setGender(newGender);
  };

  const handleSmokeChange = (event, newSmoke) => {
    setSmoke(newSmoke);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "20px auto",
        padding: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography variant="h6" textAlign="center" marginBottom={3}>
        Basic Details
      </Typography>

      {/* Gender and Smoke Selection */}
      <Grid container spacing={2} marginBottom={3}>
        {/* Gender */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" marginBottom={1}>
            Select Your Gender
          </Typography>
          <ToggleButtonGroup
            value={gender}
            exclusive
            onChange={handleGenderChange}
            fullWidth
            aria-label="gender"
          >
            <ToggleButton value="male" aria-label="male">
              Male
            </ToggleButton>
            <ToggleButton value="female" aria-label="female">
              Female
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        {/* Smoke */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" marginBottom={1}>
            Do You Smoke?
          </Typography>
          <ToggleButtonGroup
            value={smoke}
            exclusive
            onChange={handleSmokeChange}
            fullWidth
            aria-label="smoke"
          >
            <ToggleButton value="yes" aria-label="yes">
              Yes
            </ToggleButton>
            <ToggleButton value="no" aria-label="no">
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>

      {/* Email Address */}
      <Box marginBottom={3}>
        <Typography variant="subtitle1" marginBottom={1}>
          Email Address
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email"
          type="email"
        />
      </Box>

      {/* Date of Birth */}
      <Box marginBottom={3}>
        <Typography variant="subtitle1" marginBottom={1}>
          Date Of Birth
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      {/* Submit Button */}
      <Box textAlign="center">
      <Link to='/lifeplan'>
      <Button
          variant="contained"
          sx={{
            backgroundColor: "#003d2b",
            color: "#fff",
            width: "100%",
            padding: "12px",
            "&:hover": {
              backgroundColor: "#002a1d",
            },
          }}
        >
          View Plan
        </Button>
      </Link>
      </Box>
    </Box>
  );
};

export default MylifeModal;
