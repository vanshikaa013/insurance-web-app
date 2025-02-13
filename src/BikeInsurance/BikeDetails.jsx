import React from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Grid,
} from "@mui/material";
import BikeNav from "./BikeNav";
import BikeContent from "./BikeContent";
import BikeDetails2 from "./BikeDetails2";
import './BikeForm.css';
const BikeDetails = () => {
  return (
    <>
    <BikeNav/>
    <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", sm: "80%", md: "90%" },
            padding: "1rem",
            backgroundColor: "#F3F7FE",
          }}
        >
          <Grid container spacing={3}>
            {/* Left Section with 60% Width */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end", // Push content to the bottom
                  alignItems: "center", // Center content horizontally
                  height: "100%", // Ensure the Box takes up the full height of the container
                  textAlign: "center",
                }}
              >
                <img
                  src="https://cdn.policybazaar.ae/seo/images/bike-insurance-banner1.jpg"
                  alt="Bike Insurance Illustration"
                  style={{ maxWidth: "100%", height: "auto", marginBottom: "5rem" }}
                />

                {/* Icons Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  {[{
                    icon: "https://cdn.policybazaar.ae/seo/images/lowest-premium.svg",
                    title: "Lowest Premiums",
                  }, {
                    icon: "https://cdn.policybazaar.ae/seo/images/easy-documentation.svg",
                    title: "Easy Documentation",
                  }, {
                    icon: "https://cdn.policybazaar.ae/seo/images/claim-assistance.svg",
                    title: "Claim Assistance",
                  }].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        margin: { xs: "10px 0", sm: "0 10px" },
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                        height: "3rem",
                        padding: "1.7rem 0.5rem ",
                        width: "100%", // Ensures each box takes full width on smaller screens
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{
                          width: "1.5rem", // Default size for large screens
                          marginRight: "10px",
                          maxWidth: "100%", // Make the image responsive within its container
                          height: "auto", // Maintain the aspect ratio of the image
                        }}
                      />
                      <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Right Section with 40% Width */}
            <Grid item xs={12} md={5}>
                {/* <FrontForm /> */}
                <BikeDetails2/>
            </Grid>
          </Grid>
        </Paper>
    <BikeContent/>
    </>
  );
};

export default BikeDetails;
