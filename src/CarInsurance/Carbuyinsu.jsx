import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Carbuyinsu() {
    const [selectedCountry, setSelectedCountry] = useState(null); // State for selected country
    const [error, setError] = useState(false); // State for error handling
    const navigate = useNavigate(); // For programmatic navigation

    const countries = [
        "India",
        "United States",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "Japan",
        "United Kingdom",
    ];

    const handleCountryClick = (country) => {
        setSelectedCountry(country); // Set selected country
        setError(false); // Clear error message when a country is selected

        // Automatically navigate to the next page when a country is selected
        navigate("/carbuyinsurance2"); // Navigate to the next page
    };

    const handleNextClick = () => {
        if (!selectedCountry) {
            setError(true); // Show error if no country is selected
        } else {
            navigate("/carbuyinsurance2"); // Navigate to the next page if a country is selected
        }
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div
                        style={{ backgroundColor: '#f7fcff' }}
                        className="col-lg-4 col-md-4 buy_inc"
                    >
                        <div className="p-5">
                            <h3 style={{ fontSize: '20px', fontWeight: '300' }}>Car Insurance</h3>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>
                                Buy Car Insurance in 30 Seconds!
                            </p>
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
                            <button
                                className="btn-link mycolor"
                                style={{
                                    textDecoration: 'none',
                                    border: 'none',
                                    backgroundColor: '#fff',
                                }}
                                onClick={() => navigate("/carnation")}
                            >
                                <i className="fa-solid fa-arrow-left"></i> Back
                            </button>
                            <button
                                className="btn-link mycolor"
                                style={{
                                    float: 'inline-end',
                                    color: '#007bff',
                                    border: 'none',
                                    textDecoration: 'none',
                                    backgroundColor: '#fff',
                                    cursor: 'pointer',
                                }}
                                onClick={handleNextClick}
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </button>

                            <div className="p-4">
                                <h6>Where do you want to register your car?</h6>
                                <p className="pt-3 mycolor" style={{ fontSize: '12px' }}>
                                    Currently Selected: {selectedCountry || 'None'}
                                </p>
                                {error && (
                                    <p
                                        style={{
                                            color: 'red',
                                            fontSize: '14px',
                                            marginTop: '10px',
                                        }}
                                    >
                                        Please select a country before proceeding.
                                    </p>
                                )}
                                <div>
                                    <div
                                        className="mt-2 d-flex carnation-data"
                                        style={{
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-around',
                                            alignContent: 'center',
                                        }}
                                    >
                                        {countries.map((country, index) => (
                                            <div
                                                key={index}
                                                className="px-4 my-color py-2 text-center buttonsplans"
                                                onClick={() => handleCountryClick(country)}
                                                style={{
                                                    fontSize: '16px',
                                                    margin: '5px 0',
                                                    width: '40%',
                                                    color: '#003d2b',
                                                    border: '1px solid darkgrey', // Border stays for all countries
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    backgroundColor: 'transparent', // Keep background transparent
                                                    transition: '0.3s',
                                                }}
                                            >
                                                {country}
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

export default Carbuyinsu;
