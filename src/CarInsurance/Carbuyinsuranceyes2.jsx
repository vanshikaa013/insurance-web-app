import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate

function Carbuyinsuranceyes2() {
    const [selectedYear, setSelectedYear] = useState(null); // Track selected year
    const [error, setError] = useState(false); // Track error state
    const navigate = useNavigate();  // Hook for programmatic navigation

    const year = [
        "2023",
        "2024",
    ];

    const handleYearSelect = (selected) => {
        setSelectedYear(selected);
        setError(false); // Reset error when user selects a year

        // Navigate to the next page automatically when a year is selected
        navigate("/carbuyinsurancemonth");
    };

    const handleNextClick = () => {
        if (!selectedYear) {
            setError(true); // Show error if no year is selected
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
                            <img style={{ marginTop: '50%' }} src="https://i.ibb.co/jDtZB1X/Rectangle-43658-1.png" alt="car insurance banner" width='100%' />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12 left_srch">
                        <div className="p-3 shadow">
                            <Link className='mycolor' to="/carbuyinsuranceyes"><i className="fa-solid fa-arrow-left"></i> Back</Link>
                            <Link
                                className='mycolor'
                                style={{ float: 'inline-end' }}
                                to={selectedYear ? "/carbuyinsurancemonth" : "#"}
                                onClick={handleNextClick}
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                <h6>First Registration Year</h6>
                                <div>
                                    <div className='d-flex' style={{ flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'center' }}>
                                        {year.map((yearValue, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleYearSelect(yearValue)}  // Call handleYearSelect on click
                                                className={`px-4 py-3 my-color text-center ${selectedYear === yearValue ? 'selected' : ''}`}
                                                style={{
                                                    fontSize: '16px',
                                                    margin: '5px 0',
                                                    color: '#333',
                                                    width: '45%',
                                                    border: '1px solid darkgrey',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedYear === yearValue ? '#fff' : 'transparent',
                                                }}
                                            >
                                                {yearValue}
                                            </div>
                                        ))}
                                    </div>
                                     {/* Error message */}
                            {error && (
                                <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                                    Please select a year before proceeding.
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

export default Carbuyinsuranceyes2;
