import React, { useState, useRef } from 'react';
import './Carname.css';
import { Link, useNavigate } from 'react-router-dom';

function Carname() {
    const [selectedCar, setSelectedCar] = useState(''); // Track the selected car
    const [errorMessage, setErrorMessage] = useState(''); // Track the error message
    const [showMore, setShowMore] = useState(false); // Manage the visibility of extra cars
    const dropdownRef = useRef(null); // Reference for the dropdown
    const navigate = useNavigate(); // Navigate hook for programmatic navigation

    // Car models array (dynamic list)
    const carModels = [
        'Altina', 'Sunny', 'X-Trail', 'Sentra', 'Kicks', 'Pathfinder', 'Maxima'
    ];

    // Handle car selection change from dropdown
    const handleSelectChange = (event) => {
        setSelectedCar(event.target.value);
        setErrorMessage(''); // Clear the error message when a car is selected
    };

    // Handle 'Next' button click with validation
    const handleProceedClick = (e) => {
        if (!selectedCar || selectedCar === 'Select your Car') {
            e.preventDefault(); // Prevent navigation if no car is selected
            setErrorMessage('Please select a car before proceeding.');
        } else {
            navigate('/carvar'); // Proceed to the next page
        }
    };

    // Handle car button click (select car and navigate)
    const handleCarButtonClick = (car) => {
        setSelectedCar(car);
        setErrorMessage(''); // Clear the error message when a car is selected
        navigate('/carvar'); // Redirect to the next page immediately after selecting a car
    };

    // Toggle the visibility of extra cars (Show More/Show Less)
    const handleShowMoreClick = () => {
        setShowMore(!showMore); // Toggle the 'showMore' state
    };

    // Split the car models into two sections (initial 4 and remaining)
    const initialCars = carModels.slice(0, 4);
    const additionalCars = carModels.slice(4);

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
                            <Link className="mycolor" to="/proceed">
                                <i className="fa-solid fa-arrow-left"></i> back
                            </Link>
                            <Link
                                className="mycolor"
                                style={{ float: 'inline-end' }}
                                to="/carvar"
                                onClick={handleProceedClick}
                            >
                                <i className="fa-solid fa-arrow-right"></i> Next
                            </Link>

                            <div className="p-4">
                                {/* Change text color to red when error occurs */}
                                <h6 style={{ color: errorMessage ? 'red' : 'black' }}>Select your Car</h6>
                                <select
                                    ref={dropdownRef}
                                    className={`insurance-form-dropdown ${errorMessage ? 'error-border' : ''}`}
                                    value={selectedCar}
                                    onChange={handleSelectChange}
                                >
                                    <option value="Select your Car">Select your Car</option>
                                    {carModels.map((car, index) => (
                                        <option key={index} value={car}>
                                            {car}
                                        </option>
                                    ))}
                                </select>

                                <div className="insurance-form-brands">
                                    {/* Render the first 4 cars */}
                                    {initialCars.map((car, index) => (
                                        <button
                                            key={index}
                                            className="car_names buttonsplans mt-3"
                                            onClick={() => handleCarButtonClick(car)}
                                        >
                                            {car}
                                        </button>
                                    ))}

                                    {/* Conditionally render the remaining cars when "Show More" is clicked */}
                                    {showMore && additionalCars.map((car, index) => (
                                        <button
                                            key={index}
                                            className="car_names mt-3"
                                            onClick={() => handleCarButtonClick(car)}
                                        >
                                            {car}
                                        </button>
                                    ))}
                                </div>

                                {/* Show More/Show Less link */}
                                <div className="mt-5">
                                    <a
                                        className="mycolor"
                                        style={{ fontSize: '12px', float: 'inline-end' }}
                                        href="#next"
                                        onClick={handleShowMoreClick}
                                    >
                                        {showMore ? 'Show Less' : 'Show More'}
                                    </a>
                                </div>

                                {/* Error message */}
                                {errorMessage && (
                                    <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carname;
