import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Vehiclespecification() {
    const [selectedSpec, setSelectedSpec] = useState(''); // Track the selected specification
    const [errorMessage, setErrorMessage] = useState(''); // Track the error message
    const navigate = useNavigate(); // Navigate hook for programmatic navigation

    // Handle button click to select the vehicle specification and auto-navigate to the next page
    const handleSpecificationClick = (spec) => {
        setSelectedSpec(spec);
        setErrorMessage(''); // Clear the error message when an option is selected
        navigate('/carform'); // Automatically navigate to the next page when a specification is selected
    };

    // Handle 'Next' button click with validation
    const handleNextClick = (e) => {
        if (!selectedSpec) {
            e.preventDefault(); // Prevent navigation if no specification is selected
            setErrorMessage('Please select a vehicle specification before proceeding.');
        } else {
            navigate('/carform'); // Proceed to the next page if a specification is selected
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
                            <Link className='mycolor' to="/carvar"><i className="fa-solid fa-arrow-left"></i> back</Link>
                            <Link
                                className='mycolor'
                                style={{ float: 'inline-end' }}
                                to="/carform"
                                onClick={handleNextClick} // Handle Next button click
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                <h6 style={{ color: errorMessage ? 'red' : 'black' }}>What is Your Vehicle's Specification?</h6>
                                
                                {/* Buttons to select vehicle specification */}
                                <div className="insurance-form-brands">
                                    <button
                                        className="car_names car_namesplan buttonsplans mt-3"
                                        onClick={() => handleSpecificationClick('GCC Spec')}
                                        style={{
                                            border: selectedSpec === 'GCC Spec' ? '2px solid green' : '1px solid #ccc',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            backgroundColor: selectedSpec === 'GCC Spec' ? '#fff' : 'transparent',
                                            outline: 'none', // Remove default outline
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.border = '1px solid #003d2b'; // Change border to #003d2b on hover
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedSpec !== 'GCC Spec') {
                                                e.target.style.border = '1px solid #ccc'; // Reset border on mouse leave
                                            }
                                        }}
                                    >
                                        GCC Spec
                                    </button>
                                    <button
                                        className="car_names car_namesplan buttonsplans mt-3"
                                        onClick={() => handleSpecificationClick('Non-Gcc Spec/Modified')}
                                        style={{
                                            border: selectedSpec === 'Non-Gcc Spec/Modified' ? '2px solid #003d2b' : '1px solid #ccc',
                                            padding: '10px 20px',
                                            borderRadius: '5px',
                                            backgroundColor: selectedSpec === 'Non-Gcc Spec/Modified' ? '#fff' : 'transparent',
                                            outline: 'none', // Remove default outline
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.border = '1px solid #003d2b'; // Change border to #003d2b on hover
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedSpec !== 'Non-Gcc Spec/Modified') {
                                                e.target.style.border = '1px solid #ccc'; // Reset border on mouse leave
                                            }
                                        }}
                                    >
                                        Non-Gcc Spec/Modified
                                    </button>
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

export default Vehiclespecification;
