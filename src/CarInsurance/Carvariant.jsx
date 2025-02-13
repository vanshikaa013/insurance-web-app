import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Carvariant() {
    const [selectedVariant, setSelectedVariant] = useState(''); // Track the selected variant
    const [errorMessage, setErrorMessage] = useState(''); // Track the error message
    const navigate = useNavigate(); // Navigate hook for programmatic navigation

    // List of car variants
    const carVariants = [
        'SV 1.5L', 'SV 1.6L', 'SV 1.8L', 'SV 2.0L', 'X 1.5L', 'X 1.6L', 'X 2.0L'
    ];

    // Handle variant selection and auto-navigate to the next page
    const handleVariantClick = (variant) => {
        setSelectedVariant(variant);
        setErrorMessage(''); // Clear the error message
        navigate('/specify'); // Automatically navigate to the next page
    };

    // Handle next button click with validation
    const handleNextClick = (e) => {
        if (!selectedVariant) {
            e.preventDefault(); // Prevent navigation if no variant is selected
            setErrorMessage('Please select a car variant before proceeding.');
        } else {
            navigate('/specify'); // Navigate to the next page
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
                            <img
                                src="https://i.ibb.co/jDtZB1X/Rectangle-43658-1.png"
                                alt="car insurance banner"
                                width="100%"
                            />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 left_srch">
                        <div className="p-3 shadow">
                            <Link className="mycolor" to="/carname">
                                <i className="fa-solid fa-arrow-left"></i> back
                            </Link>

                            <Link
                                className="mycolor"
                                style={{ float: 'inline-end' }}
                                to="/specify"
                                onClick={handleNextClick} // Handle Next button click
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                {/* Change text color to red when error occurs */}
                                <h6 style={{ color: errorMessage ? 'red' : 'black' }}>Select Car Variant</h6>

                                {/* List of car variants dynamically rendered */}
                                <div className="insurance-form-brands">
                                    {carVariants.map((variant, index) => (
                                        <button
                                            key={index}
                                            className={`car_names buttonsplans mt-3 ${selectedVariant === variant ? 'selected' : ''}`}
                                            onClick={() => handleVariantClick(variant)} // Handle variant selection and auto-navigation
                                            style={{
                                                padding: '10px 20px',
                                                borderRadius: '5px',
                                                color: '#003d2b',
                                                backgroundColor: 'transparent', // Keep background transparent
                                                border: selectedVariant === variant ? '1px solid #000' : '1px solid #ccc', // Apply black border on click, gray by default
                                                outline: 'none', // Remove the default focus outline
                                            }}
                                            onMouseEnter={(e) => {
                                                if (selectedVariant !== variant) {
                                                    e.target.style.border = '1px solid #003d2b'; // Apply hover effect (green border)
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (selectedVariant !== variant) {
                                                    e.target.style.border = '1px solid #ccc'; // Reset to default border color
                                                }
                                            }}
                                        >
                                            {variant}
                                        </button>
                                    ))}
                                </div>

                                {/* Error message */}
                                {errorMessage && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errorMessage}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carvariant;
