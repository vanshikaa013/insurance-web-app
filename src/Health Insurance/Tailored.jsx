import React, { useState } from 'react';
import './Tailored.css';
import {
    Box,
    Button,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Grid,
} from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const steps = ['Contact Details', 'Existing Policy', 'Personal Details', 'Demographic Details'];

const Tailored = () => {
    const [gender, setGender] = useState(''); // Track gender selection
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initially disable the button
    const [maritalStatus, setMaritalStatus] = useState(''); // Track marital status
    const [divorceOrWidow, setDivorceOrWidow] = useState(''); // Track divorce/widow selection
    const [birthDate, setBirthDate] = useState(''); // Track date of birth selection

    // Handle gender selection
    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender); // Set the selected gender
    };

    // Handle marital status selection
    const handleMaritalStatusSelect = (status) => {
        setMaritalStatus(status); // Set the selected marital status
        setDivorceOrWidow(''); // Reset divorce/widow selection when marital status changes
    };

    // Handle divorce/widow selection (only when married)
    const handleDivorceOrWidowSelect = (status) => {
        setDivorceOrWidow(status); // Set the selected divorce/widow option
    };

    // Handle Date of Birth selection
    const handleDateChange = (event) => {
        setBirthDate(event.target.value); // Set the selected birth date
    };

    // Check if all conditions are met to enable the "Continue" button
    const isContinueButtonEnabled = gender && maritalStatus && birthDate;

    return (
        <>


            <Box sx={{ width: '100%', padding: '10px', marginTop: '30px' }}>
                {/* Stepper */}
                <Stepper activeStep={3} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/* Content */}

                 <div className="container text-center mt-4">
                         <div className="">
                            <h6 style={{fontSize:'1.1rem'}}> You're almost done! Just a few more details</h6>
                         </div>
                 </div>

                <Box
                    sx={{
                        textAlign: 'center',
                        width: '30%',
                        margin: '0 auto',
                    }}
                >
                    {/* <Typography className='mt-4  few_det' variant="h6" gutterBottom>
                        You're almost done! Just a few more details
                    </Typography> */}
                    <Typography  variant="subtitle1" color="textSecondary" gutterBottom>
                        Tailored coverage for your needs
                    </Typography>
                </Box>
            </Box>

            <div className="container tailriodform">
                <div className="row">
                    {/* Gender Selection */}
                    <div className="col-md-12 ">
                        <h6 style={{ textAlign: 'center' }} className='mb-3'>Gender</h6>
                    </div>
                    <div className="col-md-12 text-center">
                        <button
                         id='healthplanbtn'
                            type="button"
                            className={`my_gender ${gender === 'Male' ? 'selected' : ''}` }
                            onClick={() => handleGenderSelect('Male')}
                        >
                            Male
                        </button>
                        <button
                        id='healthplanbtn'
                            type="button"
                            className={`my_gender ${gender === 'Female' ? 'selected' : ''}`}
                            onClick={() => handleGenderSelect('Female')}
                        >
                            Female
                        </button>
                    </div>

                    {/* Marital Status */}
                    <div className="col-md-12 mt-3">
                        <h6 style={{ textAlign: 'center' }} className=''>Marital Status</h6>
                    </div>

                    <div className="col-md-12 mt-3 text-center">
                        <button
                         id='healthplanbtn'
                            type="button"
                            className={`my_gender ${maritalStatus === 'Single' ? 'selected' : ''}`}
                            onClick={() => handleMaritalStatusSelect('Single')}
                        >
                            Single
                        </button>
                        <button
                         id='healthplanbtn'
                            type="button"
                            className={`my_gender ${maritalStatus === 'Married' ? 'selected' : ''}`}
                            onClick={() => handleMaritalStatusSelect('Married')}
                        >
                            Married
                        </button>
                    </div>

                    {/* Optional: Divorced and Widow for Married */}
                    {maritalStatus === 'Married' && (
                        <div className="col-md-12 mt-3 text-center">
                            <button
                                type="button"
                                className={`my_gender ${divorceOrWidow === 'Divorced' ? 'selected' : ''}`}
                                onClick={() => handleDivorceOrWidowSelect('Divorced')}
                            >
                                Divorced
                            </button>
                            <button
                                type="button"
                                className={`my_gender ${divorceOrWidow === 'Widow' ? 'selected' : ''}`}
                                onClick={() => handleDivorceOrWidowSelect('Widow')}
                            >
                                Widow
                            </button>
                        </div>
                    )}

                    {/* Date of Birth (show for both Single and Married) */}
                    {(maritalStatus === 'Single' || maritalStatus === 'Married') && (
                        <>
                            <div className="col-md-12 mt-3">
                                <h6 style={{ textAlign: 'center' }} className=''>Date of Birth</h6>
                            </div>

                            <div className="col-md-12 mt-2 text-center">
                                <input
                                    type="date"
                                    className="bday_date"
                                    id="example-date-input"
                                    value={birthDate}
                                    onChange={handleDateChange}
                                    required
                                />
                                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
            'DesktopDatePicker',
        ]}
      ></DemoContainer>
                               <DemoItem label="Desktop variant">
          <DesktopDatePicker  className="bday_date healthmediabuttons" defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
</LocalizationProvider> */}
                            </div>
                        </>
                    )}

                    {/* Continue Button */}
                    <div className="col-md-12 mt-4 text-center">

                        <NavLink to='/contemi'>
                            <button className='con_bttn-plan'>
                                Back
                            </button>
                        </NavLink>

                        <NavLink to='/healthplan'>
                            <button
                                className='con_bttn-plan'
                                disabled={!isContinueButtonEnabled} // Disable if any field is not filled
                            >
                                Continue
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tailored;
