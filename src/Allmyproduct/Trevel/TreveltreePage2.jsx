import React, { useState } from 'react';
import { TextField, Autocomplete, Box, Stepper, Step, StepLabel, Typography, IconButton, Button, Grid, ToggleButton, ToggleButtonGroup, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs'; // For date manipulation
import { Checkbox, FormControlLabel, RadioGroup, FormControl, FormLabel, Radio, } from '@mui/material';
import { Link } from 'react-router-dom';
import { Travelplan } from './Travelplan';
import './travel.css';
const countries = ['Albania', 'United States of America (USA)', 'Armenia', 'United Kingdom (UK)', 'France', 'India',];
const steps = ['Destination', 'Trip Date', 'How are you traveling?', 'Contact Details'];
export default function TravelTreePage2() {
  // active state 3
  const [formValid, setFormValid] = useState(false);
  const handleFormChange = () => {
    const inputs = document.querySelectorAll('input[required], select[required]');
    const allFilled = Array.from(inputs).every(input => input.value !== "");
    setFormValid(allFilled);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      // Handle the form submission here
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };




  // active state 2
  const [userGender, setUserGender] = useState("");  // State for user gender
  const [partnerGender, setPartnerGender] = useState("");  // State for partner gender
  const [selectedGender, setSelectedGender] = useState("");
  const [isValid, setIsValid] = useState(true); // To track if all travelers are 18 or older
  const handleTravelTypeChange = (event, newType) => {
    if (newType !== null) {
      setSelectedTravelType(newType);
      if (newType === 'With Family') {
        setNumDaughters(1); // Limit to 1 daughter
      }
    }
  };
  const [numDaughters, setNumDaughters] = useState(1);  // Track number of daughters
  const [numSons, setNumSons] = useState(1); // Track number of sons
  const [familyMembers, setFamilyMembers] = useState({
    daughter: false,
  });
  const handleDaughterIncrement = (increment) => {
    setNumDaughters((prevCount) => {
      const newCount = prevCount + (increment ? 1 : -1);
      return newCount >= 1 && newCount <= 5 ? newCount : prevCount; // Limit daughters to 5
    });
  };
  const handleSonIncrement = (increment) => {
    setNumSons((prevCount) => {
      const newCount = prevCount + (increment ? 1 : -1);
      return newCount >= 1 && newCount <= 5 ? newCount : prevCount; // Limit daughters to 5
    });
  };
  const [selectedMembers, setSelectedMembers] = useState({
    self: false,
    spouse: false,
    daughter: false,
    son: false,
  });

  const handleCheckboxChange = (member) => (event) => {
    setSelectedMembers({
      ...selectedMembers,
      [member]: event.target.checked,
    });
  };
  const handleTravelerCountChange = (increment) => {
    if (selectedTravelType !== 'With Family') {
      setNumTravelers((prevCount) => {
        const newCount = prevCount + (increment ? 1 : -1);
        if (newCount >= 1 && newCount <= 10) {
          // Update travelersDOB to match the new traveler count
          setTravelersDOB((prevDOBs) => {
            if (increment) {
              return [...prevDOBs, null]; // Add a new DOB input
            } else {
              return prevDOBs.slice(0, -1); // Remove the last DOB input
            }
          });
          return newCount;
        }
        return prevCount;
      });
    }
  };
  const [selectedTravelType, setSelectedTravelType] = useState(null);
  const [numTravelers, setNumTravelers] = useState(1);
  // Handle Date of Birth change for travelers
  const handleDOBChange = (index, newDate) => {
    const updatedDOB = [...travelersDOB];
    updatedDOB[index] = newDate;
    setTravelersDOB(updatedDOB);
    validateAge(updatedDOB); // Check if the traveler is 18 or older
  };
  // Calculate age from date of birth
  const calculateAge = (dob) => {
    if (dob) {
      const today = dayjs();
      return today.diff(dob, 'year');
    }
    return null;
  };
  // Validate if all travelers are 18 years or older
  const validateAge = (updatedDOB) => {
    const allValid = updatedDOB.every((dob) => {
      const age = calculateAge(dob);
      return age >= 18;
    });
    setIsValid(allValid); // Set validation status based on all travelers' ages
  };
  const [selfDOB, setSelfDOB] = useState(null);
  const [selfGender, setSelfGender] = useState(null);
  const [spouseDOB, setSpouseDOB] = useState(null);
  const [spouseGender, setSpouseGender] = useState(null);
  const [daughtersDOB, setDaughtersDOB] = useState([]);
  const [sonsDOB, setSonsDOB] = useState([]);
  const handleDaughterDOBChange = (index, dob) => {
    setDaughtersDOB((prev) => {
      const updated = [...prev];
      updated[index] = dob;
      return updated;
    });
  };

  const handleSonDOBChange = (index, dob) => {
    setSonsDOB((prev) => {
      const updated = [...prev];
      updated[index] = dob;
      return updated;
    });
  };




  // active state1
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [travelersDOB, setTravelersDOB] = useState([null]); // Date of Birth array for each traveler
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const currentDate = dayjs().startOf('day'); // Current date at midnight
  // Handle plan selection
  const handlePlanChange = (event, newPlan) => {
    if (newPlan !== null) setSelectedPlan(newPlan);
  };
  // Handle start date selection
  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
    if (endDate && newDate.isAfter(endDate)) {
      setEndDate(null); // Reset end date if it's before the start date
    }
  };
  // Handle end date selection (for Single Trip Plan)
  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // Calculate trip duration
  const calculateTripDuration = () => {
    if (selectedPlan === 'Single Trip Plan') {
      if (!startDate || !endDate) return ''; // No duration if dates are missing
      const durationInDays = endDate.diff(startDate, 'day');
      const durationInMonths = Math.ceil(durationInDays / 30); // Convert to months (approx)
      if (durationInMonths > 12) return 'Up to 12 months'; // Limit to 12 months
      return `${durationInDays} days`; // Show exact duration in days
    }
    if (selectedPlan === 'Multi-Trip Plan') {
      if (multiTripDates.length === 0) return ''; // No duration if no dates are selected

      // Calculate the total duration by adding days between all selected dates
      let totalDurationInDays = 0;
      for (let i = 0; i < multiTripDates.length - 1; i++) {
        totalDurationInDays += multiTripDates[i + 1].diff(multiTripDates[i], 'day');
      }

      // Optionally, you can add 12 months to the last selected date (for 12 months max duration)
      const endDateForMulti = multiTripDates[multiTripDates.length - 1].add(12, 'month');
      const durationInDaysWithMax = endDateForMulti.diff(multiTripDates[0], 'day');

      return `${totalDurationInDays} days (Up to 12 months)`; // Show total duration for multiple trips
    }

    return '';
  };
  const renderDiscountOption = () => {
    // Get the trip duration in days
    const durationText = calculateTripDuration();
    let durationInDays;

    // Extract the number of days from the returned text (if applicable)
    if (durationText.includes('days')) {
      durationInDays = parseInt(durationText.split(' ')[0], 10); // Parse the numeric part
    }

    // Conditionally render the discount checkbox if duration <= 90
    if (durationInDays && durationInDays >= 90) {
      return (
        <Typography
          variant="body1"
          className="text-center py-4"
          sx={{ fontSize: '20px', color: '#003d2b' }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          Apply for discount
        </Typography>
      );
    }

    return null; // Don't render anything if the condition isn't met
  };

  const [multiTripDates, setMultiTripDates] = useState([]);
  const handleMultiTripDateChange = (newDate) => {
    if (newDate) {
      // Agar date already selected hai, toh usse remove karo
      if (multiTripDates.some(date => date.isSame(newDate, 'day'))) {
        setMultiTripDates(multiTripDates.filter(date => !date.isSame(newDate, 'day')));
      } else {
        // Agar date select nahi ki gayi, toh usse add karo
        setMultiTripDates([newDate]);
      }
    }
  };










  //ACTvie state 0
  const [selectedCountry, setSelectedCountry] = useState(null);
  // Handle country selection
  const handleCountryChange = (event, newValue) => {
    setSelectedCountry(newValue);
    if (newValue) {
      setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }
  };




  // stepper
  const [activeStep, setActiveStep] = useState(0);
  // Go to the next step
  const handleNextClick = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };
  // Go back to the previous step
  const handleBackClick = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  return (
    <>
      <div style={{ backgroundColor: '#f5f9ff', marginBottom: '0px' }} className="container-fulid">
        <div className="container travel2" style={{ boxShadow: 'none' }}>
          <div className='travelclasaerrowpo'>
          </div>
          <Box sx={{ backgroundColor: '#fff', width: '80%', margin: '0px auto', borderRadius: '12px', paddingTop: '40px', boxShadow: '0 6px 16px rgba(0, 101, 255, .15)' }}>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ display: 'flex', justifyContent: 'center' }}>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>
                    <Button
                      disabled // Disable clicking on the step labels
                      sx={{
                        color: activeStep === index ? 'primary.main' : 'text.primary',
                        fontWeight: activeStep === index ? 'bold' : 'normal',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          cursor: 'default', // Prevent cursor change on hover
                        },
                      }}
                    >
                      {label}
                    </Button>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ marginTop: 2 }}>
              {activeStep === 0 && (
                <>
                  <Typography variant="h6" sx={{ fontSize: '16px' }} className='py-3 text-center'>Which country are you traveling from?</Typography>
                  <Autocomplete
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    disablePortal
                    id="country-select"
                    className='pb-4'
                    options={countries}
                    renderInput={(params) => <TextField {...params} label="Select Origin Country" />}
                    fullWidth
                  />
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Typography variant="h6" className='text-center py-4 ' sx={{ fontSize: '20px', fontWeight: '600', color: '#003d2b' }}>Select the Plan type
                  </Typography>
                  <ToggleButtonGroup
                    className='travelparts py-3'
                    value={selectedPlan}
                    exclusive
                    onChange={handlePlanChange}
                    fullWidth
                    sx={{ marginBottom: 2, justifyContent: 'center' }}
                  >
                    <ToggleButton className='ToggleButtonme' style={{ maxWidth: '200px', border: '2px solid #003d2b', margin: '0px 10px' }} value="Single Trip Plan">Single Trip Plan</ToggleButton>
                    <ToggleButton className='ToggleButtonme' style={{ maxWidth: '200px', border: '2px solid #003d2b', margin: '0px 10px' }} value="Multi-Trip Plan">Multi-Trip Plan</ToggleButton>
                  </ToggleButtonGroup>
                  {selectedPlan === 'Single Trip Plan' && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <p style={{ fontSize: '20px', color: '#003d2b', fontWeight: '600' }} className='text-center py-3'>What are your trip dates?</p>
                      <Grid className='travelpartonebutton' sx={{ justifyContent: 'center' }} container spacing={2}>
                        <Grid className='ToggleButtonmename' item xs={12} sm={6}>
                          <DatePicker
                            className='ToggleButtonmenamedhjd'
                            value={startDate}
                            onChange={handleStartDateChange}
                            label="Start Date"
                            minDate={currentDate} // Disable past dates for Start Date
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </Grid>
                        <Grid className='ToggleButtonmename' item xs={12} sm={6}>
                          <DatePicker
                            className='ToggleButtonmenamedhjd'
                            label="End Date"
                            value={endDate}
                            onChange={handleEndDateChange}
                            minDate={startDate || currentDate} // Disable dates before the Start Date
                            renderInput={(params) => <TextField required {...params} fullWidth />}
                          />
                        </Grid>
                      </Grid>

                      <Typography variant="body1" className='text-center py-4' sx={{ fontSize: '20px', color: '#003d2b' }}>
                        Trip Duration: {calculateTripDuration()}
                      </Typography>

                      {/* {calculateTripDuration() <= 90 && (
                        <Typography variant="body1" className="text-center py-4" sx={{ fontSize: '20px', color: '#003d2b' }}>
                          <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                          Apply for discount
                        </Typography>
                      )} */}
                      <div>
                        {/* Other component content */}
                        {renderDiscountOption()}
                      </div>
                    </LocalizationProvider>
                  )}
                  <div className='py-3' style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                    {selectedPlan === 'Multi-Trip Plan' && (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <p style={{ fontSize: '20px', color: '#003d2b', fontWeight: '600' }} className='text-center py-3'>
                          Select your trip dates
                        </p>
                        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
                          <Grid className='ToggleButtonmename' item xs={12} sm={6}>
                            <DatePicker
                              className='ToggleButtonmenamedhjd'
                              label="Select a Date"
                              value={null}
                              onChange={(newDate) => handleMultiTripDateChange(newDate)}
                              minDate={currentDate} // Disable past dates
                              renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                          </Grid>
                        </Grid>

                        <Typography variant="body1" className='text-center py-4' sx={{ fontSize: '20px', color: '#003d2b' }}>
                          Trip Date : {multiTripDates.map(date => date.format('YYYY-MM-DD')).join(', ')}
                        </Typography>
                      </LocalizationProvider>
                    )}

                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <Typography variant="h6" className='text-center py-4' style={{ fontSize: '16px', fontWeight: '600', color: '#003d2b' }}>How are you traveling?</Typography>
                  <ToggleButtonGroup
                    value={selectedTravelType}
                    exclusive
                    onChange={handleTravelTypeChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    disabled={!isValid} // Disable if not valid
                    className='travelpart3'
                  >
                    <ToggleButton className='travelsecondtpebuttton' value="Individual/Group">Individual/Group</ToggleButton>
                    <ToggleButton className='travelsecondtpebuttton' value="With Family">With Family</ToggleButton>
                  </ToggleButtonGroup>
                  {/* Individual/Group Travel Type */}
                  {selectedTravelType === 'Individual/Group' && (
                    <>
                      <div className='travelpart3med' style={{ width: '90%', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
                        <div className='travelpart3medf' style={{ width: '60%' }}>
                          <Typography className='text-center py-3' style={{ fontSize: '20px', fontWeight: '600', color: '#003d2b' }} variant="h6">How many people are traveling?</Typography>
                        </div>
                        <Box className='travelpart3meds' sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'end', marginBottom: 2 }}>
                          <Button className='btntravelpaert Buttons p-0' onClick={() => handleTravelerCountChange(false)}><i className="fa-solid fa-minus mycolor"></i></Button>
                          <Typography variant="body1" sx={{ margin: '0 16px', color: '#000', fontSize: '16px' }}>
                            {numTravelers}
                          </Typography>
                          <Button className='btntravelpaert btntravelpaertr p-0' onClick={() => handleTravelerCountChange(true)}><i className="fa-solid fa-plus mycolor"></i></Button>
                        </Box>
                      </div>

                      <LocalizationProvider className='trevelformmee' dateAdapter={AdapterDayjs}>
                        <Grid container spacing={2}>
                          {travelersDOB.map((dob, index) => (
                            <Grid className='dhbdjsjdbdhdn' sx={{ width: '500px' }} item xs={12} sm={4} key={index}>
                              <div style={{ fontSize: '12px', color: '#000', paddingBottom: '10px' }}>Traveller {index + 1}</div>
                              <DatePicker
                                label={`Traveler ${index + 1} Date of Birth`}
                                value={dob}
                                onChange={(newDate) => handleDOBChange(index, newDate)}
                                minDate={currentDate.subtract(100, 'year')} // Allow realistic birth dates
                                maxDate={currentDate.subtract(18, 'year')} // Disallow future dates
                                renderInput={(params) => <TextField {...params} fullWidth />}
                              />
                              {dob && (
                                // <Typography variant="body2" sx={{ marginTop: 1 }}>
                                //   Age: {calculateAge(dob)} years
                                //   <Checkbox
                                //     checked={checked}
                                //     onChange={handleChange}
                                //     inputProps={{ 'aria-label': 'controlled' }}
                                //   /> Apply for discount
                                // </Typography>
                                <>
                                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                                    Age: {calculateAge(dob)} years
                                    {/* Checkbox conditionally shown if age is between 20 and 35 */}
                                    {calculateAge(dob) >= 20 && calculateAge(dob) <= 35 && (
                                      <span>
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange}
                                          inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        Apply for discount
                                      </span>
                                    )}

                                  </Typography>
                                </>
                              )}
                            </Grid>
                          ))}
                        </Grid>
                      </LocalizationProvider>
                    </>
                  )}
                  {/* With Family Travel Type */}
                  {selectedTravelType === 'With Family' && (
                    <Typography variant="body1">
                      <Box sx={{ padding: 3, maxWidth: '90%', margin: '0 auto', flexDirection: 'column' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: '16px', fontWeight: '600', color: '#003d2b' }}>
                          Enter Member Details
                        </Typography>

                        {/* Self Checkbox */}
                        <FormControlLabel
                          control={<Checkbox checked={selectedMembers.self} onChange={handleCheckboxChange('self')} />}
                          label="Self"
                        />
                        {selectedMembers.self && (
                          <Box sx={{ paddingLeft: 3, marginBottom: 2 }}>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Date of Birth"
                                  type="date"
                                  InputLabelProps={{ shrink: true }}
                                  fullWidth
                                  onChange={(e) => setSelfDOB(e.target.value)} // Handle self DOB
                                />
                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DatePicker
                                    label="Date of Birth"
                                    value={selfDOB}
                                    minDate={currentDate.subtract(100, 'year')} // Allow realistic birth dates
                                    maxDate={currentDate.subtract(20, 'year')}
                                    onChange={(newValue) => setSelfDOB(e.target.value)} // Handle self DOB
                                    inputFormat="DD/MM/YYYY" // Show date format
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                  />
                                </LocalizationProvider> */}
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FormControl>
                                  <FormLabel sx={{ fontSize: '14px', color: '#000' }}>Gender</FormLabel>
                                  <RadioGroup row onChange={(e) => setSelfGender(e.target.value)}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                  </RadioGroup>
                                </FormControl>
                                {/* <FormControl>
                                  <FormLabel sx={{ fontSize: '14px', color: '#000' }}>Gender</FormLabel>
                                  <RadioGroup
                                    row
                                    value={userGender}  // Bind to userGender state
                                    onChange={(e) => {
                                      const selectedGender = e.target.value;
                                      setUserGender(selectedGender);  // Set user gender
                                      setPartnerGender(selectedGender === 'male' ? 'female' : 'male');  // Set partner gender opposite
                                    }}
                                  >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                  </RadioGroup>
                                </FormControl> */}
                              </Grid>
                            </Grid>
                          </Box>
                        )}

                        {/* Spouse Checkbox */}
                        <FormControlLabel
                          control={<Checkbox checked={selectedMembers.spouse} onChange={handleCheckboxChange('spouse')} />}
                          label="Spouse"
                        />
                        {selectedMembers.spouse && (
                          <Box sx={{ paddingLeft: 3, marginBottom: 2 }}>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Grid item xs={12} sm={6}>
                                <TextField
                                  label="Date of Birth"
                                  type="date"
                                  InputLabelProps={{ shrink: true }}
                                  fullWidth
                                  onChange={(e) => setSpouseDOB(e.target.value)} // Handle spouse DOB
                                />
                                
                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DatePicker
                                    label="Date of Birth"
                                    value={spouseDOB}
                                    minDate={currentDate.subtract(100, 'year')} // Allow realistic birth dates
                                    maxDate={currentDate.subtract(20, 'year')}
                                    onChange={(newValue) => setSpouseDOB(newValue)} // Handle self DOB
                                    inputFormat="DD/MM/YYYY" // Show date format
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                  />
                                </LocalizationProvider> */}
                              </Grid>
                              <Grid item xs={12} sm={6}>
                              <FormControl>
                                  <FormLabel sx={{ fontSize: '14px', color: '#000' }}>Gender</FormLabel>
                                  <RadioGroup row onChange={(e) => setSpouseGender(e.target.value)}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                  </RadioGroup>
                                </FormControl>
                                {/* <FormControl>
                                  <FormLabel sx={{ fontSize: '14px', color: '#000' }}>Gender</FormLabel>
                                  <RadioGroup
                                    row
                                    value={partnerGender}  // Bind to partnerGender state
                                    onChange={(e) => {
                                      const selectedGender = e.target.value;
                                      setPartnerGender(selectedGender);  // Set partner gender
                                      setUserGender(selectedGender === 'male' ? 'female' : 'male');  // Set user gender opposite
                                    }}
                                  >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                  </RadioGroup>
                                </FormControl> */}
                              </Grid>
                            </Grid>
                          </Box>
                        )}

                        {/* Daughter Checkbox */}
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                          <FormControlLabel
                            control={<Checkbox checked={selectedMembers.daughter} onChange={handleCheckboxChange('daughter')} />}
                            label="Daughter"
                          />
                          {selectedMembers.daughter && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                              <Button className='btncounter' variant="contained" onClick={() => handleDaughterIncrement(false)}><i className="fa-solid fa-minus"></i></Button>
                              <Typography variant="body1" sx={{ margin: '0 16px' }}><b>{numDaughters}</b></Typography>
                              <Button className='btncounter' variant="contained" onClick={() => handleDaughterIncrement(true)}><i className="fa-solid fa-plus"></i></Button>
                            </Box>
                          )}
                        </div>

                        {/* Render Daughter Details */}


                        {selectedMembers.daughter && (
                          <Box sx={{ paddingLeft: 3, marginBottom: 2, }}>
                            {Array.from({ length: numDaughters }).map((_, index) => (
                              <div className='mt-3 w-100'>
                                <TextField
                                  sx={{ marginBottom: '10px' }}
                                  key={index}
                                  label={`Daughter ${index + 1} Date of Birth`}
                                  type="date"
                                  InputLabelProps={{ shrink: true }}
                                  fullWidth
                                  onChange={(e) => handleDaughterDOBChange(index, e.target.value)} // Handle daughter DOB
                                />
                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <DatePicker
                                    label="Date of Birth"
                                    minDate={currentDate.subtract(100, 'year')} // Allow realistic birth dates
                                    maxDate={currentDate.subtract(2, 'year')}
                                    onChange={(newValue) => setDaughtersDOB(newValue)} // Handle spouse DOB
                                    inputFormat="DD/MM/YYYY" // Show date format
                                    renderInput={(params) => <TextField {...params} fullWidth />} // Use Material UI TextField for input
                                  />
                                </LocalizationProvider> */}

                              </div>
                            ))}
                          </Box>
                        )}


                        {/* Son Checkbox */}
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                          <FormControlLabel
                            control={<Checkbox checked={selectedMembers.son} onChange={handleCheckboxChange('son')} />}
                            label="Son"
                          />
                          {selectedMembers.son && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                              <Button className='btncounter' variant="contained" onClick={() => handleSonIncrement(false)}><i className="fa-solid fa-minus"></i></Button>
                              <Typography variant="body1" sx={{ margin: '0 16px' }}><b>{numSons}</b></Typography>
                              <Button className='btncounter' variant="contained" onClick={() => handleSonIncrement(true)}><i className="fa-solid fa-plus"></i></Button>
                            </Box>
                          )}
                        </div>

                        {/* Render Son Details */}
                        {selectedMembers.son && (
                          <Box sx={{ paddingLeft: 3, marginBottom: 2 }}>
                            {Array.from({ length: numSons }).map((_, index) => (
                              <TextField
                                sx={{ marginBottom: '10px' }}
                                key={index}
                                label={`Son ${index + 1} Date of Birth`}
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                onChange={(e) => handleSonDOBChange(index, e.target.value)} // Handle son DOB
                              />
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Typography>
                  )}
                </>
              )}
              {activeStep === 3 && (
                <>
                  <h6 className='text-center' style={{ fontSize: '16px', fontWeight: '600', color: '#003d2b' }}>Please Fill Your Contact Details</h6>
                  <form onSubmit={handleSubmit}>
                    <div className="row mx-auto" style={{ display: 'flex', justifyContent: 'center' }}>
                      <div className="col-12 col-md-5 dhdjdnfbfj">
                        <input
                          required
                          type="text"
                          className="form-control input-field"
                          placeholder="Full Name"
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="col-12 col-md-5 dhdjdnfbfj">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control input-field"
                            placeholder="Email"
                            required
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row py-4 mx-auto hfndsjsb" style={{ display: 'flex', justifyContent: 'center' }}>
                      <div className="col-12 col-md-5 dhdjdnfbfj">
                        <div className="input-group input-group-travel  " >
                          <span className="input-group-text input-prefix " >+971</span>
                          <input
                            type="text"
                            className="form-control input-field group-travelsa"
                            style={{ paddingLeft: '70px' }}
                            placeholder="Mobile Number"
                            required
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-5 dhdjdnfbfj">
                        <select
                          className="form-selecttravel form-select input-field "
                          required
                          onChange={handleFormChange}
                        >
                          <option value="">Nationality</option>
                          <option value="UAE">UAE</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      {formValid && (
                        <Link to='/travelplanform'>
                          <button
                            type="submit"
                            className="btn btn-primary submit-button"
                          >
                            View Quotes
                          </button>
                        </Link>
                      )}
                      <p className="form-note mt-2">
                        <small>We don’t spam</small>
                      </p>
                    </div>
                  </form>
                </>
              )}

              <Box className="travelclasaerrow" sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
                <IconButton onClick={handleBackClick} disabled={activeStep === 0}>
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextClick}
                  disabled={
                    (activeStep === 0 && !selectedCountry) ||
                    (activeStep === 1 && !selectedPlan) ||
                    (activeStep === 1 && selectedPlan === 'Single Trip Plan' && (!startDate || !endDate)) ||
                    (activeStep === 1 && selectedPlan === 'Multi-Trip Plan' && multiTripDates.length === 0) ||
                    (activeStep === 2 && !selectedTravelType) ||
                    (activeStep === 2 && selectedTravelType === 'Individual/Group' && travelersDOB.some(dob => !dob)) ||
                    (activeStep === 2 && selectedTravelType === 'With Family' && (
                      (!selectedMembers.self || !selfDOB || !selfGender) || // Self validation
                      (selectedMembers.spouse && (!spouseDOB || !spouseGender)) || // Spouse validation
                      (selectedMembers.daughter && (
                        numDaughters === 0 || // At least one daughter selected
                        Array.from({ length: numDaughters }).some((_, index) => !daughtersDOB[index]) // Validate all daughters' DOB
                      )) ||
                      (selectedMembers.son && (
                        numSons === 0 || // At least one son selected
                        Array.from({ length: numSons }).some((_, index) => !sonsDOB[index]) // Validate all sons' DOB
                      ))
                    ))
                  }
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <button
                onClick={handleNextClick}
                disabled={
                  (activeStep === 0 && !selectedCountry) ||
                  (activeStep === 1 && !selectedPlan) ||
                  (activeStep === 1 && selectedPlan === 'Single Trip Plan' && (!startDate || !endDate)) ||
                  (activeStep === 1 && selectedPlan === 'Multi-Trip Plan' && multiTripDates.length === 0) ||
                  (activeStep === 2 && !selectedTravelType) ||
                  (activeStep === 2 && selectedTravelType === 'Individual/Group' && travelersDOB.some(dob => !dob)) ||
                  (activeStep === 2 && selectedTravelType === 'With Family' && (
                    (!selectedMembers.self || !selfDOB || !selfGender) || // Self validation
                    (selectedMembers.spouse && (!spouseDOB || !spouseGender)) || // Spouse validation
                    (selectedMembers.daughter && (
                      numDaughters === 0 || // At least one daughter selected
                      Array.from({ length: numDaughters }).some((_, index) => !daughtersDOB[index]) // Validate all daughters' DOB
                    )) ||
                    (selectedMembers.son && (
                      numSons === 0 || // At least one son selected
                      Array.from({ length: numSons }).some((_, index) => !sonsDOB[index]) // Validate all sons' DOB
                    ))
                  )) ||
                  (activeStep === 3)
                }
                className="btn mb-3"
                style={{ width: '100%' }}
              >
                Next
              </button>
            </div>
            {/* <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <button
                onClick={handleNextClick}
                disabled={
                  (activeStep === 0 && !selectedCountry) ||
                  (activeStep === 1 && !selectedPlan) ||
                  (activeStep === 1 && selectedPlan === 'Single Trip Plan' && (!startDate || !endDate)) ||
                  (activeStep === 1 && selectedPlan === 'Multi-Trip Plan' && multiTripDates.length === 0) ||
                  (activeStep === 2 && !selectedTravelType) ||
                  (activeStep === 2 && selectedTravelType === 'Individual/Group' && travelersDOB.some(dob => !dob)) ||
                  (activeStep === 2 && selectedTravelType === 'With Family' && !Object.values(selectedMembers).some(value => value === true))
                }
                className="btn mb-3"
                style={{ width: '100%' }}
              >
                Next
              </button>
            </div> */}
          </Box>
        </div>
      </div>
    </>
  );
}