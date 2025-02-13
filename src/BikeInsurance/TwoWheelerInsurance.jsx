import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './twowheeler.css';

const TwoWheelerInsurance = () => {
    const [bikeNumber, setBikeNumber] = useState(""); // state to hold the input value
    const [isValid, setIsValid] = useState(true); // state to manage input validity
    const [showError, setShowError] = useState(false); // state to handle error visibility
    const navigate = useNavigate(); // Initialize useNavigate

    // Regex for the format "XX-99-XX-9999"
    const bikeNumberRegex = /^[A-Za-z]{2}-\d{2}-[A-Za-z]{2}-\d{4}$/;

    const handleInputChange = (e) => {
        const value = e.target.value;

        // Update the bike number and check validity
        setBikeNumber(value);

        // Test the value against the regex pattern
        if (bikeNumberRegex.test(value)) {
            setIsValid(true); // If the value matches the pattern, it's valid
        } else {
            setIsValid(false); // If it doesn't match, set it as invalid
        }

        // Reset error message if the user starts typing again
        if (value !== "" && showError) {
            setShowError(false);
        }
    };

    const handleViewPriceClick = () => {
        // If the input is invalid or empty, show error and change border color
        if (bikeNumber === "" || !isValid) {
            setShowError(true);
        } else {
            // If valid, navigate to the '/bikeplan' page
            navigate('/bikeplaann');
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 box_one col-sm-12 col-xs-12">
                        <img className='kapil-Img' src="https://static.pbcdn.in/twowheeler-cdn/images/kapil.jpg" width='90%' alt="" />
                    </div>

                    <div className="col-md-6 col-sm-12 py-5 col-xs-12">
                        <div className="">
                            <p className='buy_two' style={{ fontSize: '22px', color: '#000', fontWeight: '300' }}>Buy your two-wheeler insurance in </p>
                        </div>

                        <div className="mt-2">
                            <span className='' style={{ fontWeight: '700', marginBottom: '20px' }}>  60 seconds!** <span><img width='20px' src="https://twowheeler.policybazaar.com/assets/img/fastIcon-home.svg" alt="" /></span> </span>
                            <p className='mt-2' style={{ color: '#000' }}>Plan starting <span style={{ fontSize: '20px', fontWeight: '600', color: '#003d2b' }}>@ ₹1.3/day*</span></p>
                        </div>

                        <div className="mt-3">
                            <input
                                className='shadow'
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    borderRadius: '6px',
                                    // Conditional styling for the border color
                                    border: showError || !isValid ? '1px solid red' : '1px solid darkgrey'
                                }}
                                type="text"
                                placeholder='Enter Bike Number: (eg. UP-15-AB-1234)'
                                value={bikeNumber}
                                onChange={handleInputChange}
                            />
                            {/* Display error message if input doesn't match the pattern */}
                            {(showError || (!isValid && bikeNumber)) && (
                                <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                                    Please enter the bike number in the correct format (eg. XX-99-XX-9999).
                                </p>
                            )}
                        </div>

                        <div className="mt-3 text-center">
                            <button
                                className='price_vbtn'
                                onClick={handleViewPriceClick} // Trigger the validation on click
                            >
                                View Price
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TwoWheelerInsurance;
