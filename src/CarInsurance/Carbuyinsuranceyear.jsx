import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use for programmatic navigation
import { Link } from 'react-router-dom';

function Carbuyinsuranceyear() {
    const year = [
        "0-6 month",
        "6-12 month",
        "1-2 Years",
        "Above 2 Years",
    ];

    const [selectedOption, setSelectedOption] = useState(null); // Track selected option
    const [error, setError] = useState(false); // Track if error should be shown
    const navigate = useNavigate(); // For programmatic navigation

    // This function handles clicking on an option
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Set the selected option
        setError(false); // Hide error when an option is selected

        // Navigate to the corresponding page
        if (option === "0-6 month" || option === "6-12 month"|| option === "1-2 Years" || option === "Above 2 Years") {
            navigate("/carcalender");
        } 
    };

    // Handle the "Next" button click, only proceed if an option is selected
    const handleNextClick = (e) => {
        if (!selectedOption) {
            e.preventDefault(); // Prevent navigation if no option is selected
            setError(true); // Show error message
        } else {
            setError(false); // Hide error if option is selected
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
                            <Link className="mycolor" to="/carbuyinsurancemonth">
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                            <Link
                                className="mycolor"
                                style={{ float: 'inline-end' }}
                                to="/carcalender"
                                onClick={handleNextClick} // Handle next button click
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                <h6>UAE Driving Exp.</h6>

                                <div>
                                    <div className="d-flex carbuyinyo-data" style={{ flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center' }}>

                                        {year.map((option, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleOptionClick(option)} // Handle option click
                                                className="px-4 buttonsplans my-color py-2 text-center"
                                                style={{
                                                    fontSize: '16px',
                                                    margin: '5px 0',
                                                    color: '#333',
                                                    width: '40%',
                                                    border: '1px solid darkgrey',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
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
        </>
    );
}

export default Carbuyinsuranceyear;
