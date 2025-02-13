import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Carbuyinsurance2() {
    const [selectedOption, setSelectedOption] = useState(null); // State for selected option
    const [error, setError] = useState(false); // State for error handling
    const navigate = useNavigate(); // For programmatic navigation

    const handleOptionClick = (option) => {
        setSelectedOption(option); // Set selected option
        setError(false); // Clear error when an option is selected

        // Automatically navigate to the next page when an option is selected
        navigate("/carbuyinsurancemonth"); // Navigate to the next page
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
                            <button
                                className="btn-link mycolor"
                                style={{
                                    textDecoration: 'none',
                                    border: 'none',
                                    backgroundColor: '#fff',
                                }}
                                onClick={() => navigate("/carbuyinsu")}
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
                                <h6>Where do you want to register your car?</h6>
                                <p className="pt-3 mycolor" style={{ fontSize: '12px' }}>Is your Car Brand New?</p>
                                <div>
                                    <div className="d-flex" style={{ flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center' }}>
                                        <div
                                            className="px-4 mt-3 py-3 my-color text-center buttonsplans"
                                            style={{
                                                fontSize: '16px',
                                                margin: '5px 0',
                                                color: selectedOption === 'no' ? 'white' : '#333',
                                                width: '40%',
                                                border: '1px solid darkgrey',
                                                borderRadius: '5px',
                                                backgroundColor: selectedOption === 'no' ? '#003d2b' : 'transparent',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleOptionClick('no')}
                                        >
                                            No
                                        </div>
                                        <div
                                            className="px-4 my-color mt-3 py-3 text-center buttonsplans"
                                            style={{
                                                fontSize: '16px',
                                                margin: '5px 0',
                                                color: selectedOption === 'yes' ? 'white' : '#333',
                                                width: '40%',
                                                border: '1px solid darkgrey',
                                                borderRadius: '5px',
                                                backgroundColor: selectedOption === 'yes' ? '#003d2b' : 'transparent',
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => handleOptionClick('yes')}
                                        >
                                            Yes
                                        </div>

                                    </div>

                                    {/* Error message */}
                                    {error && (
                                        <p
                                            style={{
                                                color: 'red',
                                                fontSize: '14px',
                                                marginTop: '10px',
                                            }}
                                        >
                                            Please select an option before proceeding.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carbuyinsurance2;
