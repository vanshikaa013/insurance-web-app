import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Carbuyinsurancemonth() {
    const [selectedOption, setSelectedOption] = useState(null); // State to track selected option
    const [error, setError] = useState(false); // State for error handling
    const navigate = useNavigate(); // For programmatic navigation

    const drivingExperienceOptions = [
        { label: '0-6 months', route: '/carbuyinsuranceyear' },
        { label: '6-12 months', route: '/carbuyinsuranceyear' },
        { label: '1-2 Years', route: '/carcalender' },
        { label: '2-3 Years', route: '/carcalender' },
        { label: '3-4 Years', route: '/carcalender' },
        { label: '4-5 Years', route: '/carcalender' },
        { label: 'Above 5 Years', route: '/carcalender' },
    ];

    // This function will handle clicking on any option and will navigate to the selected option's route
    const handleOptionClick = (option) => {
        setSelectedOption(option.label); // Set the selected option by label
        setError(false); // Clear error when an option is selected

        // Navigate to the route associated with the selected option
        navigate(option.route);
    };

    const handleNextClick = (e) => {
        if (!selectedOption) {
            e.preventDefault(); // Prevent navigation
            setError(true); // Show error message if no option is selected
        } else {
            setError(false); // Clear error if option is selected
        }
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 buy_inc" style={{ backgroundColor: '#f7fcff' }}>
                        <div className="p-5">
                            <h3 style={{ fontSize: '20px', fontWeight: '300' }}>Car Insurance</h3>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>Buy Car Insurance in 30 Seconds!</p>
                        </div>
                        <div className="mt-5">
                            <img
                                style={{ width: '100%', maxWidth: '300px', margin: '0 auto', display: 'block' }}
                                src="https://i.ibb.co/jDtZB1X/Rectangle-43658-1.png"
                                alt="car insurance banner"
                            />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 left_srch">
                        <div className="p-3 shadow">
                            <button
                                className="btn-link mycolor"
                                style={{
                                    textDecoration: 'none',
                                    border: 'none',
                                    backgroundColor: '#fff',
                                }}
                                onClick={() => navigate("/carbuyinsuranceyes2")}
                            >
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </button>

                            {/* Next button always clickable */}
                            <button
                                className="btn-link mycolor"
                                style={{
                                    float: 'inline-end',
                                    color: '#007bff',
                                    cursor: 'pointer',
                                    border: 'none',
                                    backgroundColor: '#fff',
                                }}
                                onClick={handleNextClick}
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </button>

                            <div className="p-4">
                                <h6>UAE Driving Exp.</h6>
                                <div className="d-flex flex-wrap justify-content-between carbuyinmo-data">
                                    {drivingExperienceOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleOptionClick(option)} // Set the selected option on click
                                            className="px-4 buttonsplans py-2 text-center my-color button-year"
                                            style={{
                                                
                                                fontSize: '16px',
                                                margin: '5px 0',
                                                color: selectedOption === option.label ? 'white' : '#333',
                                                width: '48%',  // Adjusted width to allow responsiveness
                                                border: '1px solid darkgrey', // Border style
                                                borderRadius: '5px',
                                                backgroundColor: selectedOption === option.label ? '#003d2b' : 'transparent', // Background color change
                                                transition: '0.3s',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>

                                {/* Error message */}
                                {error && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px', float: 'left' }}>
                                        Please select a driving experience before proceeding.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add some custom CSS to improve responsiveness */}
            <style>
                {`
                @media (max-width: 768px) {
                    .buy_inc {
                        text-align: center;
                    }
                    .buy_inc img {
                        max-width: 100%;
                    }
                    .col-lg-8 {
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                    .carbuyinmo-data .button-year {
                        width: 100% !important;  /* Ensure the width takes 100% */
                        margin-bottom: 10px; /* Add margin between the buttons */
                    }
                }
                `}
            </style>
        </>
    );
}

export default Carbuyinsurancemonth;
