import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Carbuyinsuranceyes() {
    const [selection, setSelection] = useState(null); // Track the selection (Yes or No)
    const [error, setError] = useState(false); // Track error state
    const navigate = useNavigate();  // Hook for programmatic navigation

    const handleSelection = (option) => {
        setSelection(option);
        setError(false); // Reset error when a selection is made

        // Navigate to the next page based on selection
        if (option === 'yes') {
            navigate("/carbuyinsu");  // Navigate to this page for 'Yes'
        } else if (option === 'no') {
            navigate("/carbuyinsuranceyes2");  // Navigate to this page for 'No'
        }
    };

    const handleNextClick = () => {
        if (!selection) {
            setError(true); // Show error if no option is selected
        } else {
            // Navigate based on selection if the user clicks "Next"
            if (selection === 'yes') {
                navigate("/carbuyinsu");
            } else if (selection === 'no') {
                navigate("/carbuyinsuranceyes2");
            }
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
                            <Link className="mycolor" to="/carbuyinsurance2">
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </Link>
                            <Link
                                className="mycolor"
                                style={{ float: 'inline-end' }}
                                to={selection ? (selection === 'yes' ? "/carbuyinsu" : "/carbuyinsuranceyes2") : "#"}
                                onClick={handleNextClick}
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                <h6>Buying a Second Hand Car?</h6>
                                <div>
                                    <div className="d-flex" style={{ flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center' }}>
                                        <div
                                            className={`px-4 py-2 my-color text-center ${selection === 'yes' ? 'selected' : ''}`}
                                            style={{
                                                fontSize: '16px',
                                                margin: '5px 0',
                                                color: '#333',
                                                width: '45%',
                                                border: '1px solid darkgrey',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                backgroundColor: selection === 'yes' ? '#fff' : 'transparent',
                                            }}
                                            onClick={() => handleSelection('yes')}  // Navigate directly on click
                                        >
                                            Yes
                                        </div>
                                        <div
                                            className={`px-4 py-3 my-color text-center ${selection === 'no' ? 'selected' : ''}`}
                                            style={{
                                                fontSize: '16px',
                                                margin: '5px 0',
                                                color: '#333',
                                                width: '45%',
                                                border: '1px solid darkgrey',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                backgroundColor: selection === 'no' ? '#fff' : 'transparent',
                                            }}
                                            onClick={() => handleSelection('no')}  // Navigate directly on click
                                        >
                                            No
                                        </div>
                                    </div>
                                     {/* Error message */}
                                    {error && (
                                        <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                                            Please select an option before proceeding.
                                        </div>
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

export default Carbuyinsuranceyes;
