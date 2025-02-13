import React, { useState } from 'react';
import './discovercountry.css';
import { Box, Button, Typography, Stepper, Step, StepLabel, IconButton } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Flag } from '@mui/icons-material';

const steps = ['Contact Details', 'Existing Policy', 'Personal Details', 'Demographic Details'];

const Discoverycountry = () => {
    const [isForwardEnabled, setIsForwardEnabled] = useState(false); // State to track if forward icon should be enabled
    const [selectedCountry, setSelectedCountry] = useState(null); // State to track selected country
    const [clickedButton, setClickedButton] = useState(null); // State to track which button was clicked
    const navigate = useNavigate(); // Hook to navigate to different pages

    const [showMore, setShowMore] = useState(false);
    const countries = [
        { name: 'Indian', code: 'IN', image: 'https://flagcdn.com/w40/in.png' },
        { name: 'Pakistani', code: 'PK', image: 'https://flagcdn.com/w40/pk.png' },
        { name: 'Emirati', code: 'AE', image: 'https://flagcdn.com/w40/ae.png' },
        { name: 'Egyptian', code: 'EG', image: 'https://flagcdn.com/w40/eg.png' },
        { name: 'Filipino', code: 'PH', image: 'https://flagcdn.com/w40/ph.png' },
        { name: 'Jordanian', code: 'JO', image: 'https://flagcdn.com/w40/jo.png' },
        { name: 'British', code: 'GB', image: 'https://flagcdn.com/w40/gb.png' },
        { name: 'Syrian', code: 'SY', image: 'https://flagcdn.com/w40/sy.png' },
        { name: 'Afghan', code: 'AF', image: 'https://flagcdn.com/w40/af.png' },
        { name: 'American', code: 'US', image: 'https://flagcdn.com/w40/us.png' },
        { name: 'Canadian', code: 'CA', image: 'https://flagcdn.com/w40/ca.png' },
        { name: 'Australian', code: 'AU', image: 'https://flagcdn.com/w40/au.png' },
        { name: 'Bangladeshi', code: 'BD', image: 'https://flagcdn.com/w40/bd.png' },
        { name: 'Nepali', code: 'NP', image: 'https://flagcdn.com/w40/np.png' },
        { name: 'Saudi Arabian', code: 'SA', image: 'https://flagcdn.com/w40/sa.png' },
        { name: 'Turkish', code: 'TR', image: 'https://flagcdn.com/w40/tr.png' },
        { name: 'German', code: 'DE', image: 'https://flagcdn.com/w40/de.png' },
        { name: 'French', code: 'FR', image: 'https://flagcdn.com/w40/fr.png' },
        { name: 'Italian', code: 'IT', image: 'https://flagcdn.com/w40/it.png' },
        { name: 'Chinese', code: 'CN', image: 'https://flagcdn.com/w40/cn.png' },
        { name: 'Japanese', code: 'JP', image: 'https://flagcdn.com/w40/jp.png' },
        { name: 'Russian', code: 'RU', image: 'https://flagcdn.com/w40/ru.png' },
        { name: 'South Korean', code: 'KR', image: 'https://flagcdn.com/w40/kr.png' },
        { name: 'Brazilian', code: 'BR', image: 'https://flagcdn.com/w40/br.png' },
        { name: 'Mexican', code: 'MX', image: 'https://flagcdn.com/w40/mx.png' },
        { name: 'South African', code: 'ZA', image: 'https://flagcdn.com/w40/za.png' },
        { name: 'Indonesian', code: 'ID', image: 'https://flagcdn.com/w40/id.png' },
        { name: 'Malaysian', code: 'MY', image: 'https://flagcdn.com/w40/my.png' },
        { name: 'Vietnamese', code: 'VN', image: 'https://flagcdn.com/w40/vn.png' },
        { name: 'Colombian', code: 'CO', image: 'https://flagcdn.com/w40/co.png' },
        { name: 'Nigerian', code: 'NG', image: 'https://flagcdn.com/w40/ng.png' },
        { name: 'Moroccan', code: 'MA', image: 'https://flagcdn.com/w40/ma.png' },
        { name: 'Thai', code: 'TH', image: 'https://flagcdn.com/w40/th.png' }
    ];
    

    // Function to handle when a country is selected from the dropdown
    const handleCountrySelect = (event) => {
        setSelectedCountry(event.target.value);
        setIsForwardEnabled(true); // Enable the forward button when a country is selected
    };

    // Function to handle when a country button is clicked
    const handleButtonClick = (country) => {
        setSelectedCountry(country.name);
        setClickedButton(country.name); // Set the clicked button
        setIsForwardEnabled(true); // Enable the forward button when a country button is clicked
    };

    // Function to handle forward button click (navigate to the next page)
    const handleForwardClick = () => {
        if (isForwardEnabled) {
            navigate('/contemi'); // Navigate to the next page
        }
    };

    // Show more countries when "Show More" is clicked
    const handleShowMore = () => {
        setShowMore(true);
    };

    return (
        <Box className='click_check' sx={{ width: '100%', padding: '20px' }}>
            {/* Stepper */}
            <Stepper activeStep={2} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* Content */}
            <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Nationality
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Discover suitable plans based on your nationality
                </Typography>

                {/* Select Tag for Nationality */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <select
                        value={selectedCountry || ''}
                        onChange={handleCountrySelect}
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            borderRadius: '4px',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            outline: 'none',
                            width: '50%',
                        }}
                    >
                        <option value="">Select a nationality</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </Box>

                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
    {countries.slice(0, 3).map((country, index) => (
        <Button
            key={index}
            className="year_bttn healthplanbtn healthmediabuttons"
            variant="outlined"
            sx={{
                flex: '0 1 calc(33.333% - 16px)', // 3 buttons per row with spacing
                maxWidth: '200px',
                padding: 1.5,
                textTransform: 'none',
                borderColor: 'rgba(0, 0, 0, 0.3)',
                backgroundColor: clickedButton === country.name ? '#003d2b' : 'transparent', // Change background on click
                color: clickedButton === country.name ? '#fff !important' : '', // Change text color on click
            }}
            onClick={() => handleButtonClick(country)} // Handle button click
        >
            <img 
                src={country.image} 
                alt={`${country.name} flag`} 
                style={{ width: '20px', marginRight: '8px' }} 
            />
            {country.name}
        </Button>
    ))}
</Box>


                {/* Country Buttons (Row 2) */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                    {countries.slice(3, 6).map((country, index) => (
                        <Button
                        key={index}
                        className="year_bttn healthplanbtn healthmediabuttons"
                        variant="outlined"
                        sx={{
                            flex: '0 1 calc(33.333% - 16px)', // 3 buttons per row with spacing
                            maxWidth: '200px',
                            padding: 1.5,
                            textTransform: 'none',
                            borderColor: 'rgba(0, 0, 0, 0.3)',
                            backgroundColor: clickedButton === country.name ? '#003d2b' : 'transparent', // Change background on click
                            color: clickedButton === country.name ? '#fff !important' : '', // Change text color on click
                        }}
                        onClick={() => handleButtonClick(country)} // Handle button click
                    >
                        <img 
                            src={country.image} 
                            alt={`${country.name} flag`} 
                            style={{ width: '20px', marginRight: '8px' }} 
                        />
                        {country.name}
                    </Button>
                    ))}
                </Box>

                {/* "Show More" Button */}
                {!showMore && (
                    <Box textAlign="center" mt={2}>
                        <Button
                            variant="text"
                            sx={{
                                textTransform: 'none',
                                color: 'blue',
                            }}
                            onClick={handleShowMore}
                        >
                            Show More
                        </Button>
                    </Box>
                )}

                {/* Country Buttons (Show More) */}
                {showMore && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                        {countries.slice(6, 33).map((country, index) => (
                              <Button
                              key={index}
                              className="year_bttn healthplanbtn healthmediabuttons"
                              variant="outlined"
                              sx={{
                                  flex: '0 1 calc(33.333% - 16px)', // 3 buttons per row with spacing
                                  maxWidth: '200px',
                                  padding: 1.5,
                                  textTransform: 'none',
                                  borderColor: 'rgba(0, 0, 0, 0.3)',
                                  backgroundColor: clickedButton === country.name ? '#003d2b' : 'transparent', // Change background on click
                                  color: clickedButton === country.name ? '#fff !important' : '', // Change text color on click
                              }}
                              onClick={() => handleButtonClick(country)} // Handle button click
                          >
                              <img 
                                  src={country.image} 
                                  alt={`${country.name} flag`} 
                                  style={{ width: '20px', marginRight: '8px' }} 
                              />
                              {country.name}
                          </Button>
                        ))}
                    </Box>
                )}

                {/* Navigation Buttons */}
                <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'space-between', maxWidth: '50%', marginX: 'auto' }}>



                    <NavLink to='/yourpolicy'>
                        <IconButton
                            className=""
                            edge="start"
                            aria-label="backward"
                            sx={{ color: "#003d2b", backgroundColor: "#f7f7f7", marginRight: "16px" }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </NavLink>

                    <NavLink>
                        <IconButton
                            className=""
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
    );
};

export default Discoverycountry;
