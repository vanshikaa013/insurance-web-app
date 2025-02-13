import React, { useState, useRef, useEffect } from 'react';
import './insurance.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom v6

function Insurancehome() {
    const [selectedBrand, setSelectedBrand] = useState(''); // Track the selected brand
    const [errorMessage, setErrorMessage] = useState(''); // Track the error message
    const dropdownRef = useRef(null); // Reference for the dropdown
    const navigate = useNavigate(); // Use navigate hook for programmatic navigation
        const [isTextRed, setIsTextRed] = useState(false);
    
    const carBrands = [
        "Toyota", "Mitsubishi", "Ford", "Honda", "BMW", "Mercedes-Benz", "Audi", "Chevrolet",
        "Nissan", "Tesla", "Hyundai", "Kia", "Volkswagen", "Porsche", "Lexus", "Mazda",
        "Subaru", "Jaguar", "Land Rover", "Ferrari", "Lamborghini", "Peugeot", "Chrysler",
        "Alfa Romeo", "Bentley", "Cadillac", "Buick", "Rolls-Royce", "Aston Martin", "Maserati"
    ];

    const handleSelectChange = (event) => {
        setSelectedBrand(event.target.value);
        setErrorMessage(''); // Clear the error message when a brand is selected
    };

    const handleProceedClick = (e) => {
        if (!selectedBrand || selectedBrand === 'Select-|-') {
            e.preventDefault(); // Prevent navigation
            setErrorMessage('Please select a car brand before proceeding.');
        }
    };

    const handleOtherClick = () => {
        setSelectedBrand(''); // Reset the selected brand
        dropdownRef.current.focus(); // Focus the dropdown to open it
    };

    // Automatically navigate to the next page when a valid brand is selected
    useEffect(() => {
        if (selectedBrand && selectedBrand !== 'Select-|-' && selectedBrand !== '') {
            navigate('/proceed'); // Programmatic navigation to the next page
        }
    }, [selectedBrand, navigate]);

    return (
        <>
            <div className="container shadow mt-5 p-3 incadd">
                <div className="row">
                    <div className="col-md-7 lightimg mt-3">
                        <div className="">
                            <img
                            style={{width:'100%',height:'460px'}}
                                src="https://i.ibb.co/jGRV435/Screenshot-2024-12-21-125701.png"
                                className="img-fluid light--mode"
                                alt="Car Insurance"
                            />
                            {/* <img
                                src="https://cdn.policybazaar.ae/pbuae/images/nds_car_banner_v2.jpg"
                                className="img-fluid light--mode"
                                alt="Car Insurance"
                            /> */}
                        </div>
                    </div>

                    <div className="col-md-5 mt-4 " >
                        <div className="insurance-form-container" style={{height:'100%'}}>
                            <h6 style={{ color: isTextRed ? 'red' : 'black' }}> Compare &{' '}
                                <span style={{ fontWeight: '800', borderBottom: '2px solid #003d2b' }}>
                                    Save Up to 30%
                                </span>
                                
                                on Car Insurance</h6>

                            <select
                                ref={dropdownRef} // Attach the ref to the dropdown
                                className={`insurance-form-dropdown in-fo-dr ${errorMessage ? 'error-border' : ''}`}
                                value={selectedBrand}
                                onChange={handleSelectChange}
                            >
                                <option value="Select-|-">Select-|-</option>
                                {/* Dynamically render the options from the carBrands array */}
                                {carBrands.map((brand) => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>

                            <div className="insurance-form-brands">
                                {/* Dynamically render the buttons from carBrands */}
                                {carBrands.slice(0, 5).map((brand) => (
                                    <button
                                        key={brand}
                                        className="insurance-form-brand-button mt-3 buttonsplans"
                                        onClick={() => setSelectedBrand(brand)}
                                    >
                                        {brand}
                                    </button>
                                ))}

                                {/* The 'Other' button always displayed last */}
                                <button
                                    className="insurance-form-brand-button mt-3"
                                    onClick={handleOtherClick}
                                >
                                    Other
                                </button>
                            </div>

                            {errorMessage && (
                                <p
                                    className="error-message"
                                    style={{
                                        color: 'red',
                                        marginTop: '5px',
                                        fontSize: '12px',
                                        float: 'inline-start',
                                    }}
                                >
                                    {errorMessage}
                                </p>
                            )}

                            {/* The Proceed button is optional here as we're navigating automatically */}
                            <button
                                className="insurance-form-proceed"
                                onClick={handleProceedClick}
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Insurancehome;
