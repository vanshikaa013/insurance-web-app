import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Stepper,
    Step,
    StepLabel,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Typography,
    FormControlLabel,
    Checkbox,
} from "@mui/material";

const LifeInsureMedical = () => {
    const steps = ["Personal Details", "Medical Details"];

    // State to manage the responses for each question
    const [responses, setResponses] = useState({
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
    });

    // Function to handle button click for each question
    const handleResponseChange = (question, response) => {
        setResponses((prev) => ({ ...prev, [question]: response }));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Form Section */}
                <div className="col-md-7 shadow p-3">
                    <div className="container p-2 mt-3">
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label, index) => (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>

                    <div className="container p-2">
                        <h6>Medical Details</h6>
                    </div>

                    <form className="mt-3">
                        <Grid container spacing={3}>
                            {/* Smoking Question */}
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Do You Smoke</InputLabel>
                                    <Select label="Do You Smoke" defaultValue="">
                                        <MenuItem value="Yes">Yes</MenuItem>
                                        <MenuItem value="No">No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Height and Weight */}
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Height (in cms)"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Weight (in kgs)"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>

                    {/* Health Questions */}
                    <div className="mt-4">
                        <h6>Health Questionnaire</h6>
                        <form>
                            <Grid container spacing={2}>
                                {[
                                    {
                                        id: "q1",
                                        question: "1. Have you been hospitalized in the last 3 years?",
                                    },
                                    {
                                        id: "q2",
                                        question:
                                            "2. Do you plan to see a doctor or obtain medical advice within the next 6 months?",
                                    },
                                    { id: "q3", 
                                    question: "3. Have you ever used recreational drugs?" },
                                    {
                                        id: "q4",
                                        question:
                                            "4. Do you have any illness or injury that affects your ability to work?",
                                    },
                                    {
                                        id: "q5",
                                        question:
                                            "5. Have you ever suffered from or are you currently suffering from any medical condition?",
                                    },
                                ].map(({ id, question }) => (
                                    <Grid item xs={12} key={id}>
                                        <Typography variant="body1">{question}</Typography>
                                        <div>
                                            <Button
                                                style={{
                                                    border: '1px solid #003d2b',
                                                    marginTop:'5px',
                                                    backgroundColor: responses[id] === "No" ? '#003d2b' : 'transparent',
                                                    color: responses[id] === "No" ? '#fff' : '#003d2b', // White text if selected
                                                }}
                                                variant={responses[id] === "No" ? "contained" : "outlined"}
                                                onClick={() => handleResponseChange(id, "No")}
                                            >
                                                No
                                            </Button>

                                            <Button
                                                style={{
                                                    border: '1px solid #003d2b',
                                                    marginTop:'5px',
                                                    backgroundColor: responses[id] === "Yes" ? '#003d2b' : 'transparent',
                                                    color: responses[id] === "Yes" ? '#fff' : '#003d2b', // White text if selected
                                                    marginLeft: '10px',
                                                }}
                                                variant={responses[id] === "Yes" ? "contained" : "outlined"}
                                                onClick={() => handleResponseChange(id, "Yes")}
                                            >
                                                Yes
                                            </Button>

                                        </div>
                                    </Grid>
                                ))}

                                {/* Declaration Checkbox */}
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="I declare that I have answered the above health questions as honestly as possible."
                                    />
                                </Grid>
                            </Grid>

                            {/* Proceed Button */}
                            <div className="mt-4">
                                <Button variant="contained" color="primary" fullWidth>
                                    Proceed
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sidebar Section */}
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

export default LifeInsureMedical;
