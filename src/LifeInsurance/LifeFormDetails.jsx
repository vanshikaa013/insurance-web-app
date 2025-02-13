import React, { useState } from 'react';
import { TextField, Button, Grid, Stepper, Step, StepLabel, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LifeFormDetails = () => {
    // Define the two steps in the form
    const steps = ['Personal Details', 'Medical Details'];

    // State to manage selected option (Yes/No)
    const [selectedOption, setSelectedOption] = useState(null);

    // Function to handle button click
    const handleButtonClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Form Section */}
                <div className="col-md-7 shadow p-2">
                    <div className="container p-2 mt-3">
                        {/* Horizontal Stepper with two steps */}
                        <Stepper activeStep={0} alternativeLabel>
                            {steps.map((label, index) => (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>

                    <div className="container p-2">
                        <h6>Personal Details</h6>
                    </div>

                    <form action="" className="">
                        <Grid container spacing={3}>
                            {/* First Row with Title Dropdown */}
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': {} }}>
                                    <InputLabel>Title</InputLabel>
                                    <Select
                                        label="Title"
                                        defaultValue=""
                                    >
                                        <MenuItem value="Mr.">Mr.</MenuItem>
                                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                                        <MenuItem value="Dr.">Dr.</MenuItem>
                                        <MenuItem value="Prof.">Prof.</MenuItem>
                                        <MenuItem value="Mx.">Mx.</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* First Name Field */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            {/* Middle Name (optional) */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Middle Name (optional)"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            {/* Last Name Field */}
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            {/* Nationality Dropdown */}
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': {} }}>
                                    <InputLabel>Nationality</InputLabel>
                                    <Select
                                        label="Nationality"
                                        defaultValue=""
                                    >
                                        <MenuItem value="UAE">UAE</MenuItem>
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="Pakistan">Pakistan</MenuItem>
                                        <MenuItem value="USA">USA</MenuItem>
                                        <MenuItem value="UK">UK</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Emirate of Residence Dropdown */}
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': {} }}>
                                    <InputLabel>Emirate of Residence</InputLabel>
                                    <Select
                                        label="Emirate of Residence"
                                        defaultValue=""
                                    >
                                        <MenuItem value="Dubai">Dubai</MenuItem>
                                        <MenuItem value="Sharjah">Sharjah</MenuItem>
                                        <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                                        <MenuItem value="Ajman">Ajman</MenuItem>
                                        <MenuItem value="Fujairah">Fujairah</MenuItem>
                                        <MenuItem value="Ras Al Khaimah">Ras Al Khaimah</MenuItem>
                                        <MenuItem value="Umm Al Quwain">Umm Al Quwain</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': {} }}>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        label="Gender"
                                        defaultValue=""
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Mobile Number"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': {} }}>
                                    <InputLabel>Marital Status</InputLabel>
                                    <Select
                                        label="Marital Status"
                                        defaultValue=""
                                    >
                                        <MenuItem value="Single">Single</MenuItem>
                                        <MenuItem value="Married">Married</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Annual Income (ZAR)"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label=""
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" sx={{ '& .MuiOutlinedInput-root': {} }}>
                                    <InputLabel>Profession Type</InputLabel>
                                    <Select
                                        label="Profession Type"
                                        defaultValue=""
                                    >
                                        <MenuItem value="Engineer">Engineer</MenuItem>
                                        <MenuItem value="Doctor">Doctor</MenuItem>
                                        <MenuItem value="Teacher">Teacher</MenuItem>
                                        <MenuItem value="Artist">Artist</MenuItem>
                                        <MenuItem value="Chef">Chef</MenuItem>
                                        <MenuItem value="Entrepreneur">Entrepreneur</MenuItem>
                                        <MenuItem value="Scientist">Scientist</MenuItem>
                                        <MenuItem value="Designer">Designer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label=""
                                    type="file"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Emirates ID Number"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Emirates ID Expiry"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ '& .MuiOutlinedInput-root': {} }} // Further reduced padding
                                />
                            </Grid>

                            {/* Added Paragraph before Buttons */}
                            <Grid item xs={12}>
                                <Typography variant="body2" color="black" fontSize='12px' paragraph>
                                    Are you currently or have been entrusted with prominent public functions by a government, country, or by an international organization? For example, Heads of State or Government, senior or influential politicians, senior government, judicial or military officials, or senior executives of state-owned corporations, or are you closely associated with or an immediate family member of such politically exposed persons? (The definition is not intended to cover middle ranking or more junior individuals in the foregoing categories).
                                </Typography>
                            </Grid>

                            {/* Yes/No Buttons */}
                            <Grid item xs={12} container spacing={2} justifyContent="flex-start">
                                <Grid item>
                                    <Button
                                        style={{
                                            borderRadius: '30px',
                                            padding: '2px',
                                            backgroundColor: selectedOption === 'Yes' ? '#003d2b' : 'transparent',  // Set background color
                                            border: selectedOption === 'Yes' ? 'none' : '2px solid #003d2b' // Set border color when not selected
                                        }}
                                        variant={selectedOption === 'Yes' ? 'contained' : 'outlined'}
                                        color={selectedOption === 'Yes' ? 'default' : 'default'}  // Keep color default
                                        sx={{
                                            color: selectedOption === 'Yes' ? '#fff' : '#003d2b'  // Set text color to white if selected, otherwise to #003d2b
                                        }}
                                        onClick={() => handleButtonClick('Yes')}
                                    >
                                        Yes
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        style={{
                                            borderRadius: '30px',
                                            padding: '2px',
                                            backgroundColor: selectedOption === 'No' ? '#003d2b' : 'transparent',  // Set background color
                                            border: selectedOption === 'No' ? 'none' : '2px solid #003d2b' // Set border color when not selected
                                        }}
                                        variant={selectedOption === 'No' ? 'contained' : 'outlined'}
                                        color={selectedOption === 'No' ? 'default' : 'default'}  // Keep color default
                                        sx={{
                                            color: selectedOption === 'No' ? '#fff' : '#003d2b'  // Set text color to white if selected, otherwise to #003d2b
                                        }}
                                        onClick={() => handleButtonClick('No')}
                                    >
                                        No
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12}>
                            <hr style={{border:'1px solid gray',width:'100%'}} />
                                <Link to='/lifemedical'>
                                <Button
                                    variant="contained"
                                    sx={{
                                        float:'inline-end',
                                        backgroundColor: '#003d2b',  // Set background color to #003d2b
                                        color: '#fff',               // Set text color to white (#fff)
                                        '&:hover': {
                                            backgroundColor: '#002a1d', // Optionally set a darker color for hover effect
                                        }
                                    }}
                                >
                                    Submit
                                </Button>
                                </Link>
                            </Grid>

                        </Grid>
                    </form>
                </div>

                {/* Sidebar or Content Section */}
                <div className="col-md-5 col-sm-12 mt-3">
                    <div className="shadow p-3">
                        <h6>Premium Summary</h6>
                        <hr />

                        <div className="d-flex gap-3">
                            <div className="">
                                <img width='60px' className='rounded' src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/hayah-insurer.png" style={{ border: '1px solid grey' }} alt="" />
                            </div>
                            <div style={{ marginTop: '-10px' }} className="">
                                <h6>HAYAH Insurance (Previously AXA GCIC)</h6>
                                <p style={{ fontSize: '11px', color: '#000' }}>Term Life Protect</p>
                            </div>
                        </div>

                        <div className="mt-3">
                            <span style={{ fontSize: '13px' }}>Life Cover (ZAR)  <span style={{ float: 'inline-end' }}>500,000</span> </span> <br />
                            <span style={{ fontSize: '13px' }}>Policy Term (Years)  <span style={{ float: 'inline-end' }}>15</span> </span>
                        </div>

                        <div className="mt-2">
                            <p class="">
                                <a style={{ textAlign: 'left' }} class="btn btn-primary w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    3 Rider(s) <span style={{ float: 'inline-end' }}><i class="fa-solid fa-chevron-down"></i></span>
                                </a>
                            </p>
                            <div class="collapse mt-2" id="collapseExample">
                                <div class="card card-body">
                                    <h6 style={{ fontSize: '11px' }}><i class="fa-solid fa-circle-check"></i> Temporary Life Cover ZAR 500,000  <span style={{ float: 'inline-end' }}>Included</span> </h6> <br />
                                    <h6 style={{ fontSize: '11px' }}><i class="fa-solid fa-circle-check"></i> Temporary Life Cover ZAR 500,000  <span style={{ float: 'inline-end' }}>Included</span> </h6> <br />
                                    <h6 style={{ fontSize: '11px' }}><i class="fa-solid fa-circle-check"></i> Temporary Life Cover ZAR 500,000  <span style={{ float: 'inline-end' }}>Included</span> </h6> <br />


                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h6 style={{ fontSize: '13px' }}>Base Premium  <span style={{ float: 'inline-end' }}>ZAR 277.64 <span style={{ fontSize: '10px' }}>/ Yearly</span></span> </h6> <br />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeFormDetails;
