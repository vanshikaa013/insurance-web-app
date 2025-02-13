

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
    Grid,
    Avatar,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = ['Destination', 'Trip date', 'Travellers', 'Contact details'];
const popularDestinations = [
    { name: 'Albania', imageUrl: 'albania_image_url' },
    { name: 'United States of America (USA)', imageUrl: 'usa_image_url' },
    { name: 'Armenia', imageUrl: 'armenia_image_url' },
    { name: 'United Kingdom (UK)', imageUrl: 'uk_image_url' },
    { name: 'France', imageUrl: 'france_image_url' },
    { name: 'India', imageUrl: 'india_image_url' },
];

const TreveltreePage1 = () => {
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, p: 3, borderRadius: 3, boxShadow: 3, bgcolor: '#f9fbff', textAlign: 'center' }}>
          
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <IconButton onClick={handleBack} disabled={activeStep === 0}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Stepper activeStep={activeStep} alternativeLabel style={{width: "700px"}}>
                    {steps.map((label, index) => (
                        <Step key={index} >
                            <StepLabel
                                sx={{
                                    '& .MuiStepLabel-label': { fontSize: '0.875rem', color: activeStep === index ? '#4caf50' : 'inherit' },
                                    '& .MuiStepIcon-root': { color: activeStep >= index ? '#4caf50' : 'rgba(0,0,0,0.38)' }
                                }}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <IconButton onClick={handleNext} disabled={activeStep === steps.length - 1}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>

            {activeStep === 0 && (
                <>
                    <Typography variant="h6" gutterBottom>Which country are you traveling from?</Typography>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
                        <InputLabel>Select Origin Country</InputLabel>
                        <Select defaultValue="" label="Select Origin Country">
                            {popularDestinations.map((destination) => (
                                <MenuItem key={destination.name} value={destination.name}>
                                    {destination.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
            )}

            {activeStep === 0 && (
                <>
                    <Typography variant="subtitle1" fontWeight="bold">Popular Destinations (Based on your search history)</Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        {popularDestinations.map((destination, index) => (
                            <Grid item xs={4} sm={2} key={index}>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Avatar src="https://cdn.policybazaar.ae/common/destinationCountry/(USA).png" sx={{ width: 60, height: 60, mb: 1, boxShadow: 3 }} />
                                    <Typography variant="caption" color="text.secondary">{destination.name}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default TreveltreePage1;













