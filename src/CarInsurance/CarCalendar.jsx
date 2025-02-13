import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, DateField } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';

function CarCalendar() {
  const [date, setDate] = useState(null);
  const [error, setError] = useState(false); // State for error handling
  const navigate = useNavigate(); // To programmatically navigate to the next page

  const handleNextClick = (e) => {
    if (!date) {
      e.preventDefault(); // Prevent navigation
      setError(true); // Show error message
    } else {
      setError(false); // Hide error if date is selected
      // Proceed to the next page if a date is selected
      navigate('/Carbuyinsuranceacdint');
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
              <Link className="mycolor" to="/carbuyinsuranceyear">
                <i className="fa-solid fa-arrow-left"></i> Back
              </Link>
              <Link
                className="mycolor"
                style={{ float: 'right' }}
                to="/Carbuyinsuranceacdint"
                onClick={handleNextClick} // Add onClick handler to validate selection
              >
                Next <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <div className="p-4">
                <h6>When do you want to register your car? (DD/MMM/YYYY)</h6>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateField value={date} />
                  <DemoItem>
                    <DateCalendar
                      value={date}
                      onChange={(newDate) => setDate(newDate)} // Set the selected date
                      views={['year', 'month', 'day']}
                    />
                  </DemoItem>
                </LocalizationProvider>

                {/* Error message */}
                {error && (
                  <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                    Please select a date before proceeding.
                  </p>
                )}

               
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export default CarCalendar;
