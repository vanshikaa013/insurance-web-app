import React, { useState } from 'react';
import './carmodel.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Carmodel() {
    const [showMore, setShowMore] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const [isBorderRed, setIsBorderRed] = useState(false);
    const [isTextRed, setIsTextRed] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const currentYear = new Date().getFullYear(); // Get the current year
    const yearRange = []; // Array to hold the year range

    // Generate year range from current year to 1992
    for (let year = currentYear; year >= 1992; year--) {
        yearRange.push(year);
    }

    // Function to toggle visibility of additional years
    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    // Handle year selection from dropdown or buttons
    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setIsBorderRed(false); // Reset the border color when a year is selected
        setIsTextRed(false); // Reset the text color when a year is selected

        // Redirect to the next page when a year is selected
        navigate('/carname');
    };

    // Handle Next button click with validation
    const handleNextClick = (e) => {
        if (!selectedYear) {
            setIsBorderRed(true); // Set the border to red if no year is selected
            setIsTextRed(true); // Set the text to red if no year is selected
            e.preventDefault(); // Prevent navigation if no year is selected
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
                            <a className="mycolor" href="/car"><i className="fa-solid fa-arrow-left"></i> back</a>

                            {/* Next Button with validation */}
                            <Link
                                className="mycolor"
                                style={{ float: 'inline-end' }}
                                to={selectedYear ? "/carname" : "#"}
                                onClick={handleNextClick} // Handle Next button click
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                {/* Change text color if no year is selected */}
                                <h6 style={{ color: isTextRed ? 'red' : 'black' }}>Search your Car Model year</h6>

                                {/* Year selection dropdown */}
                                <select
                                    className={`insurance-form-dropdown ${isBorderRed ? 'red-border' : ''}`}
                                    value={selectedYear}
                                    onChange={(e) => handleYearSelect(e.target.value)} // Handle select change
                                >
                                    <option value="">Select-|-</option>
                                    {/* Dynamically render the options from the yearRange array */}
                                    {yearRange.map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>

                                {/* Year selection buttons */}
                                <div className="insurance-form-brands mt-3">
                                    {yearRange.slice(0, 6).map(year => (  // Display first 6 years
                                        <button
                                            key={year}
                                            className="insurance-form-brand-button buttonsplans"
                                            onClick={() => handleYearSelect(year)} // Handle year selection
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                {/* Show additional years when 'Show More' is clicked */}
                                {showMore && (
                                    <div className="insurance-form-brands mt-3">
                                        {yearRange.slice(6).map(year => ( // Display remaining years when Show More is clicked
                                            <button
                                                key={year}
                                                className="insurance-form-brand-button"
                                                onClick={() => handleYearSelect(year)} // Handle year selection
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Show More link */}
                                <div className="mt-5">
                                    <a
                                        className="mycolor"
                                        style={{ fontSize: '12px', float: 'inline-end' }}
                                        onClick={handleShowMore}
                                        href="#next"
                                    >
                                        {showMore ? 'Show Less' : 'Show More'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
        </>
    );
}

export default Carmodel;
