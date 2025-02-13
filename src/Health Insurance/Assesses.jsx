import React, { useState } from 'react';
import './assesses.css';
import { Box, Button, Typography, Stepper, Step, StepLabel, Grid, IconButton } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const steps = ['Contact Details', 'Existing Policy', 'Personal Details', 'Demographic Details'];

const Assesses = () => {
    const navigate = useNavigate();
    const [isForwardEnabled, setIsForwardEnabled] = useState(false); // State to track if forward icon should be enabled
    const [selectedSalary, setSelectedSalary] = useState(null); // State to track selected salary

    const salaryOptions = [
        'Upto 4000',
        '4001-5000',
        '5001-6000',
        '6001-7000',
        '7001-8000',
        '8001-9000',
        '9001-10000',
        '10001-11000',
        'Above 12000',
    ];

    const handleSelect = (range) => {
        setSelectedSalary(range); // Set the selected salary
        setIsForwardEnabled(true); // Enable forward button once a salary is selected
    };

    const handleForwardClick = () => {
        if (isForwardEnabled) {
            navigate('/country');
        }
    };

    return (
        <Box sx={{ width: '100%', padding: '20px' }}>
            {/* Stepper */}
            <Stepper activeStep={2} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* Content */}
            <Box
                sx={{
                    marginTop: 4,
                    textAlign: 'center',
                }}
                className='assesflex'
            >
                <Typography variant="h6" gutterBottom>
                    Salary (AED per month)
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Assesses your policy eligibility
                </Typography>

                {/* Salary Options (Row 1) */}
                <Grid style={{ textAlign: 'center' }} >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 3,
                            marginTop: 2,
                            width: '100% !important',
                        }}
                    >
                        {salaryOptions.slice(0, 3).map((range, index) => (
                            <Button
                                key={index}
                                className="year_bttn healthplanbtn healthmediabuttons" 
                                variant="outlined"
                                onClick={() => handleSelect(range)} // Select salary range
                                sx={{
                                    flex: '0 1 calc(33.333% - 16px)', // 3 buttons per row with spacing
                                    maxWidth: '200px',
                                    padding: 1.5,
                                    textTransform: 'none',
                                    borderColor: 'rgba(0, 0, 0, 0.3)',
                                    backgroundColor: selectedSalary === range ? '#003d2b' : 'transparent', // Change background if selected
                                    color: selectedSalary === range ? '#fff !important' : 'initial', // Change text color if selected
                                }}
                            >
                                {range}
                            </Button>
                        ))}
                    </Box>
                </Grid>

                {/* Salary Options (Row 2) */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        marginTop: 2,
                        width: '100% !important',
                    }}
                >
                    {salaryOptions.slice(3, 6).map((range, index) => (
                        <Button
                            key={index}
                            className="year_bttn healthplanbtn healthmediabuttons"
                            variant="outlined"
                            onClick={() => handleSelect(range)} // Select salary range
                            sx={{
                                flex: '0 1 calc(33.333% - 16px)', // 3 buttons per row with spacing
                                maxWidth: '200px',
                                padding: 1.5,
                                textTransform: 'none',
                                borderColor: 'rgba(0, 0, 0, 0.3)',
                                backgroundColor: selectedSalary === range ? '#003d2b' : 'transparent', // Change background if selected
                                color: selectedSalary === range ? '#fff !important' : 'initial', // Change text color if selected
                            }}
                        >
                            {range}
                        </Button>
                    ))}
                </Box>

                {/* Salary Options (Row 3) */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        marginTop: 2,
                        width: '100% !important',
                    }}
                >
                    {salaryOptions.slice(6, 9).map((range, index) => (
                        <Button
                            key={index}
                            className="year_bttn healthplanbtn healthmediabuttons"
                            variant="outlined"
                            onClick={() => handleSelect(range)} // Select salary range
                            sx={{
                                flex: '0 1 calc(33.333% - 16px)', // 3 buttons per row with spacing
                                maxWidth: '200px',
                                padding: 1.5,
                                textTransform: 'none',
                                borderColor: 'rgba(0, 0, 0, 0.3)',
                                backgroundColor: selectedSalary === range ? '#003d2b' : 'transparent', // Change background if selected
                                color: selectedSalary === range ? '#fff !important' : 'initial', // Change text color if selected
                            }}
                        >
                            {range}
                        </Button>
                    ))}
                </Box>

                {/* Navigation Buttons */}
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        justifyContent: 'space-between',
                        maxWidth: '65%',
                        marginX: 'auto',
                    }}
                >
                    <NavLink to='/myrender'>
                        <IconButton
                            aria-label="backward"
                            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginRight: "16px" }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </NavLink>

                    <NavLink>
                        <IconButton
                            sx={{
                                color: "#003d2b",
                                backgroundColor: "#f7f7f7",
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
    );
};

export default Assesses;
