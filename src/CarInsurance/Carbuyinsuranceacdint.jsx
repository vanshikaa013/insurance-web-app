import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate to handle redirection

function Carbuyinsuranceacdint() {
    const [selectedOption, setSelectedOption] = useState(null); // Track selected option
    const [error, setError] = useState(false); // Track error state
    const navigate = useNavigate(); // Initialize navigate for redirection

    const drivingExperienceOptions = [
        { label: 'Never met with an Accident', route: '/Carbuyinsuranceplan' },
        { label: '0-12 Months Ago', route: '/Carbuyinsuranceplan' },
    ];

    const handleOptionSelect = (option) => {
        setSelectedOption(option); // Update selected option
        setError(false); // Reset error message when user selects an option

        // Automatically navigate to the next page if either option is selected
        if (option.label === 'Never met with an Accident' || option.label === '0-12 Months Ago') {
            navigate(option.route); // Redirect immediately
        }
    };

    const handleNextClick = (e) => {
        if (!selectedOption) {
            e.preventDefault(); // Prevent navigation if no option is selected
            setError(true); // Show error message
        } else {
            // Redirect to the selected option's route if selected
            navigate(selectedOption.route);
        }
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div style={{ backgroundColor: '#f7fcff' }} className="col-lg-4 col-md-4 buy_inc">
                        <div className="p-5">
                            <h3 style={{ fontSize: '20px', fontWeight: '300' }}>Car Insurance</h3>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>Buy Car Insurance in 30 Seconds!</p>
                        </div>
                        <div className="mt-5">
                            <img  src="https://i.ibb.co/jDtZB1X/Rectangle-43658-1.png" alt="car insurance banner" width="100%" />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 left_srch">
                        <div className="p-3 shadow">
                            <Link className="mycolor" to="/carbuyinsuranceyes2"><i className="fa-solid fa-arrow-left"></i> Back</Link>
                            <Link
                                className="mycolor"
                                style={{ float: 'inline-end' }}
                                to="#"
                                onClick={handleNextClick} // Handle next button click
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            {/* Error message */}
                            {error && (
                                <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                                    Please select an option before proceeding.
                                </div>
                            )}

                            <div className="p-4">
                                <h6>How many months without any Accident?</h6>
                                <div>
                                    <div className="d-flex carbuyinmo-data" style={{ flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center' }}>
                                        {drivingExperienceOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-3 buttonsplans my-color text-center car_namesplan"
                                                style={{
                                                    fontSize: '16px',
                                                    margin: '5px 0',
                                                    width: '45%',
                                                    border: '1px solid darkgrey',
                                                    borderRadius: '5px',
                                                    textDecoration: 'none',
                                                    backgroundColor: selectedOption === option ? '#003d2b' : 'transparent',
                                                    color: selectedOption === option ? '#fff' : '#333',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => handleOptionSelect(option)} // Handle option select
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Carbuyinsuranceacdint;
