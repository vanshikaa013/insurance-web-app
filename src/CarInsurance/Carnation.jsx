import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Carnation() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showAll, setShowAll] = useState(false); // State to toggle show more countries
    const [error, setError] = useState(''); // State to track error message
    const navigate = useNavigate(); // Hook to navigate programmatically

    const countries = [
        { code: 'AD', label: 'Andorra' },
        { code: 'AE', label: 'United Arab Emirates' },
        { code: 'AF', label: 'Afghanistan' },
        { code: 'AG', label: 'Antigua and Barbuda' },
        { code: 'AL', label: 'Albania' },
        { code: 'AM', label: 'Armenia' },
        { code: 'AO', label: 'Angola' },
        { code: 'AR', label: 'Argentina' },
        { code: 'AS', label: 'American Samoa' },
        { code: 'AT', label: 'Austria' },
        { code: 'AU', label: 'Australia' },
        { code: 'AW', label: 'Aruba' },
        { code: 'AX', label: 'Aland Islands' },
        { code: 'AZ', label: 'Azerbaijan' },
        { code: 'BA', label: 'Bosnia and Herzegovina' },
        { code: 'BB', label: 'Barbados' },
        { code: 'BD', label: 'Bangladesh' },
        { code: 'BE', label: 'Belgium' },
        { code: 'BF', label: 'Burkina Faso' },
        { code: 'BG', label: 'Bulgaria' },
        { code: 'BH', label: 'Bahrain' },
        { code: 'PM', label: 'Saint Pierre and Miquelon' },
        // Add more countries here...
    ];

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        setError(''); // Clear error when a country is selected
        navigate('/carbuyinsu'); // Navigate to the next page
    };

    const handleShowMoreClick = () => {
        setShowAll(!showAll); // Toggle the showAll state to show or hide more countries
    };

    const handleNextClick = (e) => {
        if (!selectedCountry) {
            e.preventDefault(); // Prevent navigation
            setError('Please select a country before proceeding.'); // Show error message
        }
    };

    const displayedCountries = showAll ? countries : countries.slice(0, 8); // Show 8 countries initially

    return (
        <div className="container mt-3 carnation">
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

                <div className="col-lg-8 col-md-12 col-sm-12  left_srch">
                    <div className="p-3 shadow">
                        <Link className="mycolor" to="/carform">
                            <i className="fa-solid fa-arrow-left"></i> Back
                        </Link>

                        <Link
                            className="mycolor"
                            style={{ float: 'inline-end' }}
                            to="/carbuyinsu"
                            onClick={handleNextClick}
                        >
                            <i className="fa-solid fa-arrow-right"></i> Next
                        </Link>

                        <div className="p-4">
                            <h6 style={{ color: error ? 'red' : 'initial' }}>Nationality</h6>

                            <Autocomplete
                                id="country-select-demo"
                                options={countries}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                value={selectedCountry}
                                onChange={(event, newValue) => {
                                    setSelectedCountry(newValue);
                                    setError(''); // Clear error when a country is selected
                                }}
                                renderOption={(props, option) => (
                                    <Box
                                        component="li"
                                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                        {...props}
                                    >
                                        <img
                                            loading="lazy"
                                            width="20"
                                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                            alt=""
                                        />
                                        {option.label} ({option.code})
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password',
                                        }}
                                        style={{
                                            borderColor: error ? 'red' : 'initial',
                                            borderWidth: error ? '1px' : 'initial',
                                        }}
                                    />
                                )}
                            />

                            {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}

                            <div
                                className="d-flex carnation-data "
                                style={{ flexWrap: 'wrap', justifyContent: 'space-around' }}
                            >
                                {displayedCountries.map((country, index) => (
                                    <div
                                        key={index}
                                        className="my-color text-center buttonsplans mt-4 px-4 py-3"
                                        style={{
                                            fontSize: '12px',
                                            margin: '5px 0',
                                            cursor: 'pointer',
                                            width: '49%',
                                            border: '1px solid grey',
                                            borderRadius: '5px',
                                            
                                        }}
                                        onClick={() => handleCountryClick(country)}
                                    >
                                        <img
                                            loading="lazy"
                                            width="20"
                                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                            alt=""
                                        />
                                        &nbsp;{country.label}
                                    </div>
                                ))}
                            </div>

                            {countries.length > 8 && (
                                <div className="text-center mt-3">
                                    <button style={{backgroundColor:'#fff',border:'none',color:'#003d2b',float:'right'}}
                                        className="btn-outline-primary"
                                        onClick={handleShowMoreClick}
                                    >
                                        {showAll ? 'Show Less' : 'Show More'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carnation;
