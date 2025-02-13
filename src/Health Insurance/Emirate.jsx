import React, { useState } from 'react';
import './assesses.css';
import { Box, Button, Typography, Stepper, Step, StepLabel, IconButton } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const steps = ['Contact Details', 'Existing Policy', 'Personal Details', 'Demographic Details'];

const Emirate = () => {
    const [isForwardEnabled, setIsForwardEnabled] = useState(false); // State to track if forward icon should be enabled
    const [selectedEmirate, setSelectedEmirate] = useState(null); // State to track selected emirate
    const navigate = useNavigate(); // Hook to navigate to different pages

    const salaryOptions = [
        'Dubai',
        'Sharjah',
        'Abu Dhabi',
        'Ras Al Khaimah',
        'AL Ain',
        'Ajman',
        'Fujairah',
        'Umm Al Quwain'
    ];

    // Function to handle when an emirate button is clicked
    const handleButtonClick = (emirate) => {
        setSelectedEmirate(emirate);
        setIsForwardEnabled(true); // Enable the forward button when an emirate is selected
    };

    // Function to handle forward button click (navigate to the next page)
    const handleForwardClick = () => {
        if (isForwardEnabled) {
            navigate('/tailored'); // Navigate to the next page (adjust the path as needed)
        }
    };

    return (
        <>

            <Box className='mirate-mediass' sx={{ width: '100%', padding: '20px' }}>
                {/* Stepper */}
                <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                 <div className="container mt-4">
                    <div className="text-center">
                        <h6 style={{fontSize:'1.1rem'}}>Which emirate is your visa issued from?</h6>
                        <p> Explore plans by your emirate</p>
                    </div>
                 </div>

                {/* Content */}
                <Box sx={{  textAlign: 'center' }}>
                    
                    

                    {/* Salary Options (Row 1) */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                        {salaryOptions.slice(0, 3).map((emirate, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                className='healthplanbtn healthmediabuttons'
                                sx={{
                                    flex: '0 1 calc(50% - 16px)', // 2 buttons per row with spacing
                                    maxWidth: '200px',
                                    padding: 1.5,
                                    textTransform: 'none',
                                    borderColor: 'rgba(0, 0, 0, 0.3)',
                                    backgroundColor: selectedEmirate === emirate ? '#003d2b' : 'transparent', // Change background on selection
                                    color: selectedEmirate === emirate ? '#fff !important' : 'black', // Change text color on selection
                                }}
                                onClick={() => handleButtonClick(emirate)} // Set the selected emirate when button is clicked
                            >
                                {emirate}
                            </Button>
                        ))}
                    </Box>

                    {/* Salary Options (Row 2) */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                        {salaryOptions.slice(3, 6).map((emirate, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                className='healthplanbtn healthmediabuttons'
                                sx={{
                                    flex: '0 1 calc(50% - 16px)', // 2 buttons per row with spacing
                                    maxWidth: '200px',
                                    padding: 1.5,
                                    textTransform: 'none',
                                    borderColor: 'rgba(0, 0, 0, 0.3)',
                                    backgroundColor: selectedEmirate === emirate ? '#003d2b' : 'transparent', // Change background on selection
                                    color: selectedEmirate === emirate ? '#fff !important' : 'black', // Change text color on selection
                                }}
                                onClick={() => handleButtonClick(emirate)} // Set the selected emirate when button is clicked
                            >
                                {emirate}
                            </Button>
                        ))}
                    </Box>

                    {/* Salary Options (Row 3) */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                        {salaryOptions.slice(6, 6).map((emirate, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                className='healthplanbtn healthmediabuttons'
                                sx={{
                                    flex: '0 1 calc(50% - 16px)', // 2 buttons per row with spacing
                                    maxWidth: '200px',
                                    padding: 1.5,
                                    textTransform: 'none',
                                    borderColor: 'rgba(0, 0, 0, 0.3)',
                                    backgroundColor: selectedEmirate === emirate ? '#003d2b' : 'transparent', // Change background on selection
                                    color: selectedEmirate === emirate ? '#fff !important' : 'black', // Change text color on selection
                                }}
                                onClick={() => handleButtonClick(emirate)} // Set the selected emirate when button is clicked
                            >
                                {emirate}
                            </Button>
                        ))}
                    </Box>

                    {/* Salary Options (Row 4) */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                        {salaryOptions.slice(6, 9).map((emirate, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                className='healthplanbtn healthmediabuttons'
                                sx={{
                                    flex: '0 1 calc(50% - 16px)', // 2 buttons per row with spacing
                                    maxWidth: '200px',
                                    padding: 1.5,
                                    textTransform: 'none',
                                    borderColor: 'rgba(0, 0, 0, 0.3)',
                                    backgroundColor: selectedEmirate === emirate ? '#003d2b' : 'transparent', // Change background on selection
                                    color: selectedEmirate === emirate ? '#fff !important' : 'black', // Change text color on selection
                                }}
                                onClick={() => handleButtonClick(emirate)} // Set the selected emirate when button is clicked
                            >
                                {emirate}
                            </Button>
                        ))}
                    </Box>

                    {/* Navigation Buttons */}
                    <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'space-between', maxWidth: '50%', marginX: 'auto' }}>
                        <NavLink to='/country'>
                            <IconButton
                                edge="start"
                                aria-label="backward"
                                sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginRight: "16px" }}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                        </NavLink>

                        {/* Forward Button */}
                        <NavLink>
                            <IconButton
                                edge="end"
                                aria-label="forward"
                                sx={{
                                    color: "#003d2b",
                                    cursor: isForwardEnabled ? 'pointer' : 'not-allowed',  // Disable cursor if forward is not enabled
                                }}
                                disabled={!isForwardEnabled}  // Disable the forward button initially
                                onClick={handleForwardClick}  // Navigate when forward icon is clicked
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </NavLink>
                    </Box>
                    
                </Box>
                
             



            </Box>

        </>


    );
};

export default Emirate;
