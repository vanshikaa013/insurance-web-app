import React from 'react'
// import './carplan.css'
// import './carplan.css'
import { useState } from 'react';
import { Box, Button, FormControlLabel, Radio, RadioGroup, Slider, TextField, Typography } from '@mui/material';
import FilterPlansModal from './FilterPlansModal';
import LifePriceTag from './LifePriceTag';


const LifePlan = () => {
  const [fileDetails, setFileDetails] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Generate URL for the file
      setFileDetails({
        name: file.name,
        size: (file.size / 1024).toFixed(2), // File size in KB
        url: fileURL,
        type: file.type,
      });
    }
  };

  const handleDelete = () => {
    setFileDetails(null); // Clear file details
  };

  const handleEdit = () => {
    alert("Edit functionality can be implemented here!"); // Placeholder for edit functionality
  };


  const [familyData, setFamilyData] = useState({
    self: { gender: "Male", dob: "2005-02-10" },
    spouse: { gender: "", dob: "" },
    sons: [{}],
    daughters: [{}],
    father: { dob: "" },
    mother: { dob: "" },
  });


  const handleInputChange = (field, subField, index, value) => {
    setFamilyData((prev) => {
      const updated = { ...prev };
      if (field === "sons" || field === "daughters") {
        updated[field][index][subField] = value;
      } else {
        updated[field][subField] = value;
      }
      return updated;
    });
  };

  const addFamilyMember = (field) => {
    setFamilyData((prev) => ({
      ...prev,
      [field]: [...prev[field], {}],
    }));
  };


  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };



  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };



  const [activeModal, setActiveModal] = useState(null); // State to track the active modal

  const handleModalOpen = (modalName) => {
    setActiveModal(modalName); // Set the active modal
  };

  const handleModalClose = () => {
    setActiveModal(null); // Close the modal
  };



  const [value, setValue] = useState(100000);

  // Slider value change handler
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  // Min button handler
  const handleMinClick = () => {
    if (value > 100000) {
      setValue(value - 50000); // Decrease by 50,000
    }
  };

  // Max button handler
  const handleMaxClick = () => {
    if (value < 10000000) {
      setValue(value + 50000); // Increase by 50,000
    }
  };


  const handleChange = (event) => {
    // Update the value as the user types
    const numericValue = event.target.value.replace(/,/g, ""); // Remove commas for parsing
    setValue(Number(numericValue) || 0); // Parse as a number or default to 0
  };


  const [years, setYears] = useState(5);

  // Function to handle the slider change
  const handleYearsSliderChange = (event, newYears) => {
    setYears(newYears);
  };

  // Function for the Min button (Decreasing years)
  const handleDecreaseYears = () => {
    if (years > 5) {
      setYears(years - 1); // Decrease by 1 year
    }
  };

  // Function for the Max button (Increasing years)
  const handleIncreaseYears = () => {
    if (years < 45) {
      setYears(years + 1); // Increase by 1 year
    }
  };





  const getModalTitle = (modalName) => {
    switch (modalName) {
      case "lifeCover":
        return <p className='m-0'>Life Cover Details</p>;
      case "policyTerm":
        return <p className='m-0'>Policy Term</p>;
      case "paymentFrequency":
        return <p className='m-0'>Payment Frequency</p>;
      case "sort":
        return "Sort Details";
      case "allFilters":
        return "All Filters";
      default:
        return "";
    }
  };

  const getModalContent = (modalName) => {
    switch (modalName) {
      case "lifeCover":
        return (<>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {/* Top Center Value */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center", // Vertically center the content
                  border: "2px solid #003d2b",
                  borderRadius: "0.2rem",
                }}
              >
                <Box
                  sx={{
                    padding: "12px 16px", // Adjusted padding for better alignment
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                    height: "40px", // Set height to match the TextField height
                    display: "flex",
                    alignItems: "center", // Center vertically
                  }}
                >
                  <h6 className="m-0" style={{ fontSize: "0.8rem", margin: 0 }}>ZAR</h6>
                </Box>

                {/* Input Field with no border and adjusted height */}
                <TextField
                  value={value.toLocaleString()} // Format the number with commas
                  onChange={handleChange} // Handle updates
                  placeholder="Enter amount"
                  inputProps={{
                    "aria-label": "Formatted number input",
                  }}
                  fullWidth
                  variant="standard" // Remove the border
                  sx={{
                    "& .MuiInput-root": {
                      border: "none", // Remove the default border from the input
                    },
                    "& .MuiInput-input": {
                      height: "40px", // Set height for the input field to match the "ZAR" box
                    },
                  }}
                />
              </Box>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                width: "100%",
              }}
            >
              {/* Left Min Button */}
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "##8B9EB4" }}>Min</p>

                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#DDE8F5",
                    color: "#000",
                    padding: "0.5rem", // No extra padding
                    minWidth: "auto",
                    fontSize: "1.2rem",
                    lineHeight: "0.7rem"
                  }}
                  onClick={handleMinClick}
                >
                  -
                </Button>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "##8B9EB4", textAlign: "center" }}>ZAR 100,000</p>

              </div>
              {/* Slider */}
              <Slider
                defaultValue={50}
                value={value}
                min={100000}
                max={10000000}
                step={50000}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                aria-label="Default"
                sx={{
                  height: 8, // Adjust height
                  '& .MuiSlider-thumb': {
                    height: 24, // Thumb size
                    width: 24,
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: 'gray', // Set the rail color to gray
                  },
                  '& .MuiSlider-track': {
                    height: 8, // Track height
                  },
                }}
              />


              {/* Right Max Button */}
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "##8B9EB4" }}>Max</p>
                <Button variant="contained" sx={{
                  bgcolor: "#DDE8F5",
                  color: "#000",
                  padding: "0.4rem", // No extra padding
                  minWidth: "auto",
                  fontSize: "1rem",
                  lineHeight: "0.8rem"
                }} onClick={handleMaxClick}>
                  +
                </Button>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "##8B9EB4 ", textAlign: "center" }}>ZAR 10,000,000</p>

              </div>
            </Box>
          </Box>

        </>);
      case "policyTerm":
        return (<>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {/* Top Center Value */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  border: "2px solid #003d2b",
                  borderRadius: "0.2rem",
                }}
              >
                <Box
                  sx={{
                    padding: "12px 16px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h6 className="m-0" style={{ fontSize: "0.8rem", margin: 0 }}>Years</h6>
                </Box>

                {/* Displaying the Years in TextField */}
                <TextField
                  value={years} // Show the years as the value
                  onChange={handleInputChange} // Handle updates
                  placeholder="Enter years"
                  inputProps={{
                    "aria-label": "Formatted number input",
                  }}
                  fullWidth
                  variant="standard" // Remove the border
                  sx={{
                    "& .MuiInput-root": {
                      border: "none", // Remove the default border from the input
                    },
                    "& .MuiInput-input": {
                      height: "40px", // Set height for the input field to match the "ZAR" box
                    },
                  }}
                />
              </Box>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                width: "100%",
              }}
            >
              {/* Left Min Button */}
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "#8B9EB4" }}>Min</p>

                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#DDE8F5",
                    color: "#000",
                    padding: "0.5rem",
                    minWidth: "auto",
                    fontSize: "1.2rem",
                    lineHeight: "0.7rem"
                  }}
                  onClick={handleDecreaseYears}
                >
                  -
                </Button>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "#8B9EB4", textAlign: "center" }}>Years 5</p>
              </div>

              {/* Slider */}
              <Slider
                defaultValue={years}
                value={years}
                min={5} // Minimum value for years
                max={45} // Maximum value for years
                step={1} // Step size of 1 year
                onChange={handleYearsSliderChange}
                valueLabelDisplay="auto"
                aria-label="Years Slider"
                sx={{
                  height: 8,
                  '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: 'gray',
                  },
                  '& .MuiSlider-track': {
                    height: 8,
                  },
                }}
              />

              {/* Right Max Button */}
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "#8B9EB4" }}>Max</p>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#DDE8F5",
                    color: "#000",
                    padding: "0.4rem",
                    minWidth: "auto",
                    fontSize: "1rem",
                    lineHeight: "0.8rem"
                  }}
                  onClick={handleIncreaseYears}
                >
                  +
                </Button>
                <p className='p-0 m-0' style={{ fontSize: "0.7rem", color: "#8B9EB4", textAlign: "center" }}>Years 45</p>
              </div>
            </Box>
          </Box>

        </>);
      case "paymentFrequency":
        return (<>


          <RadioGroup dioGroup row >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap', // Allows wrapping to the next line
                gap: '10px', // Space between the boxes
              }}
            >
              {/* Monthly Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Monthly"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Monthly</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>

              {/* Annually Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Annually"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Annually</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>

              {/* One-time Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="One-time"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>One-time</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>

              {/* Half Yearly Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Half Yearly"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Half Yearly</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>

              {/* Quarterly Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Quarterly"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Quarterly</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>
            </Box>
          </RadioGroup>


        </>);
      case "sort":
        return (<>

          <RadioGroup row>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap', // Allows wrapping to the next line
                gap: '10px', // Space between the boxes
                width: '100%',
              }}
            >
              {/* Relevance Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Relevance"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Relevance</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>

              {/* Premium High to Low Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Premium High to Low"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Premium High to Low</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>

              {/* Premium Low to High Box */}
              <Box
                sx={{
                  border: '1px solid #003d2b',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '40px',
                  width: '45%', // Takes 45% width for each radio button box
                  '&.Mui-checked': {
                    borderColor: 'blue', // Change border color when selected
                  },
                }}
              >
                <FormControlLabel
                  value="Premium Low to High"
                  control={<Radio sx={{ fontSize: '0.7rem' }} />} // Adjust radio button size
                  label={<span style={{ fontSize: '0.8rem', margin: 0 }}>Premium Low to High</span>} // Adjust label font size
                  sx={{
                    paddingLeft: 0,
                    margin: 0,
                  }}
                />
              </Box>
            </Box>
          </RadioGroup>


        </>);
      case "allFilters":
        return (<>
          {/* <FilterPlansModal /> */}
        </>);
      default:
        return null;
    }
  };



  return (
    <div className='Carbuyinsuranceplandesk11'>
      <div className="container mt-4  Carbuyinsuranceplandesk1">
        <div className="row m-0">
          <div className="col-md-9 display ">

            <div id="myTabContent">

              <div className="container mt-4">
                {/* Navigation Section */}
                <div className="nav d-flex align-items-center justify-content-between p-2 rounded-3 border shadow-sm lifemediaheader">
                  {/* Life Cover */}
                  <div
                    className="header"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleModalOpen("lifeCover")}
                  >
                    <p>Life Cover</p>
                    <h6>
                      ZAR 20,000,000 <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </h6>
                  </div>
                  <div className="nav-line" style={{ width: "1px", height: "3rem" }}></div>

                  {/* Policy Term */}
                  <div
                    className="header"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleModalOpen("policyTerm")}
                  >
                    <p>Policy Term</p>
                    <h6>
                      15 Years <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </h6>
                  </div>
                  <div className="nav-line" style={{ width: "1px", height: "3rem" }}></div>

                  {/* Payment Frequency */}
                  <div
                    className="header"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleModalOpen("paymentFrequency")}
                  >
                    <p>Payment Frequency</p>
                    <h6>
                      Annually <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </h6>
                  </div>
                  <div className="nav-line sort" style={{ width: "1px", height: "3rem" }}></div>

                  {/* Sort */}
                  <div
                    className="header sort"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleModalOpen("sort")}
                  >
                    <p>Sort</p>
                    <h6>
                      Relevancy <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </h6>
                    <div
                      class="modal fade " id="exampleModalOneelife" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
                      data-bs-target="#exampleModalOnee"
                    >
                      <div class="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', borderRadius: '0px' }}>
                        <div class="modal-content" style={{ borderRadius: '0px' }}>
                          <div class="modal-header" style={{ border: 'none' }}>
                            <p class="modal-title fs-5 text-dark" id="exampleModalLabelOne">
                              Sort
                            </p>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body py-0">
                            <div class="modal_body">
                              <div
                                style={{ border: "1px solid #dfe1e6" }}
                                class="sort_option rounded-1 p-3"
                              >
                                <label style={{ color: '#052f5f', fontSize: '12px' }}>
                                  <input
                                    type="radio"
                                    name="sort"
                                    value="high_to_low"
                                  />
                                  Cover High to Low
                                </label>
                              </div>
                              <div
                                style={{ border: "1px solid #dfe1e6" }}
                                class="sort_option rounded-1 p-3"
                              >
                                <label style={{ color: '#052f5f', fontSize: '12px' }}>
                                  <input
                                    type="radio"
                                    name="sort"
                                    value="relevance"
                                    checked
                                  />
                                  Cover Low to High
                                </label>
                              </div>
                              <div
                                style={{ border: "1px solid #dfe1e6" }}
                                class="sort_option rounded-1 p-3"
                              >
                                <label style={{ color: '#052f5f', fontSize: '12px' }}>
                                  <input
                                    type="radio"
                                    name="sort"
                                    value="low_to_high"
                                  />
                                  Premium Low to High
                                </label>
                              </div>
                            </div>
                            <div class="modal_footer mb-2">
                              <button class="apply_btn btn" style={{ fontSize: '12px' }}>Apply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-line" style={{ width: "1px", height: "3rem" }}></div>

                  {/* All Filters */}
                  <div
                    className="header position-relative"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleModalOpen("allFilters")}
                  >
                    <button className="btn btn-light position-relative">
                      {/* <img
                        src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/Icon-filter.png"
                        width="15"
                        height="13"
                        alt="filter icon"
                        className="me-2"
                      /> */}
                      <i class="fa-solid fa-filter"></i>
                      All Filters
                      <span
                        style={{
                          position: "absolute",
                          top: "-5px",
                          right: "-5px",
                          width: "18px",
                          height: "18px",
                          backgroundColor: "blue",
                          borderRadius: "50%",
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        1
                      </span>
                    </button>
                  </div>

                </div>

                {/* Modals */}
                {activeModal && (
                  <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-hidden="true"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div
                      className="modal-dialog"
                      role="document"
                      style={{
                        marginTop: "7rem",
                        margin: "7rem auto",
                        width:
                          window.innerWidth >= 1200
                            ? "80%" // Large screens (lg)
                            : window.innerWidth >= 992
                              ? "70%" // Medium screens (md)
                              : window.innerWidth >= 768
                                ? "80%" // Small screens (sm)
                                : "95%", // Extra small screens (xs)
                        maxWidth: "100%",
                        transition: "all 0.3s ease-in-out", // Smooth resizing
                      }}
                    >
                      <div className="modal-content" style={{ maxWidth: '500px', margin: '0 auto', borderRadius: '0px' }}>
                        <div className="modal-header">
                          <h5 className="modal-title" id="modalTitle">
                            {getModalTitle(activeModal)}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={handleModalClose}
                          ></button>
                        </div>
                        <div className="modal-body">{getModalContent(activeModal)}</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary w-100"
                            onClick={handleModalClose}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>



                )}
              </div>

              <div className="container mt-4 InsuranceCard">
                <LifePriceTag />
              </div>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <div style={{ width: '100%' }} className='incesdjsjs'>

                    <div class="header_section">
                      <div class="company_info">
                        <div class="company_name">NEMed Lite
                          <br />
                          <span>Network list <i class="fa-solid fa-circle-info"></i> <span style={{ backgroundColor: '#bee2b1' }} className='mycolor'>network-PCP/RN3</span> network list <i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </div>
                        <div className="cn-carvalue">
                          <p className='mt-3'>network-PCP/RN3 <i class="fa-solid fa-circle-info"></i>
                            <br />
                            <strong >
                              85,002
                            </strong>
                          </p>
                        </div>
                        <div className="cn-carvalue">
                          <p className='mt-3'>Pharmacy Limit <i class="fa-solid fa-circle-info"></i>
                            <br />
                            <strong >
                              500
                            </strong>
                          </p>
                        </div>
                      </div>

                    </div>
                    <div class="details_section">
                      <div class="addons_section">
                        <p><strong>Copay</strong> change option</p>
                        <div className='addonjdsksj'>
                          <div className='addnodekdfh'>

                            <ul className='deail-section-ulli'>
                              <li> <div><img src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg" alt="" />&nbsp;Diagnosis</div> <div style={{ color: '#003d2b' }}>30%</div></li>
                              <li><div> <img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg" alt="" />&nbsp;Physician</div> <div style={{ color: '#003d2b' }}>ZAR 20</div></li>
                            </ul>
                            <ul className='deail-section-ulli'>
                              <li> <div><img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/pharmacy.svg" alt="" />&nbsp;Pharmacy</div> <div style={{ color: '#003d2b' }}>30%</div></li>
                              <li><div><img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/physiotherapy.svg" alt="" />&nbsp;Physiotherapy</div> <div style={{ color: '#003d2b' }}>nill</div></li>
                            </ul>
                            <ul className='deail-section-ulli'>
                              <li><div> <input type="checkbox" name="" id="" />&nbsp;Passenger Cover:</div> <div style={{ color: '#003d2b' }}>Included</div></li>
                            </ul>
                          </div>
                          <div className='addonhjsjdbsjkb'>
                            <button className='btn'>
                              ZAR 2,730 Yearly
                            </button>
                            <div className='addos-sectionsvshj'>
                              <p>Split in 4 interest-free payments of </p>
                              <b>ZAR 682.5</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="addfooter_section">
                      <div>
                        <p></p>
                      </div>
                      <div style={{ margin: '0px' }} className='addfodbdjksd m-0'>
                        {/* <div><p  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Plan Details</p></div> */}
                        <p class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightleft" aria-controls="offcanvasRight">Plan Details</p>

                        <div class="offcanvas offcanvas-end  my_ofcan" tabindex="-1" id="offcanvasRightleft" aria-labelledby="offcanvasRightLabel">
                          <div class="offcanvas-header off_cnhd">

                            <div className="d-flex gap-5">
                              <img style={{ width: '20px' }} src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png" alt="plan-logo" />
                              <p className='mt-2' style={{ fontSize: '12px', fontWeight: '600' }}>Oriental Insurance <br /> Comprehensive (Garage)</p>

                              <p className='mt-2' style={{ fontSize: '12px', fontWeight: '400', color: 'grey' }}>Car Value (ZAR) <br /> <span style={{ fontWeight: '800', color: '#000' }}>85,002</span> </p>

                              <p className='mt-2' style={{ fontSize: '12px', fontWeight: '400', color: 'grey' }}>Excess Amount (ZAR)<br /> <span style={{ fontWeight: '800', color: '#000' }}>500</span> </p>
                              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                            </div>
                            <div className="d-flex gap-3 mt-3">
                              <button className='policy_word'>Policy Wording</button>
                              <button className='policy_word'>Veiw Quotation</button>

                              <div className="">
                                <button className='policy_wordk'>ZAR 26,00 YEARLY</button>
                              </div>

                            </div>

                          </div>
                          <div class="offcanvas-body">
                            <div className="p"></div>
                            <div className="car_value">
                              <div className="">


                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">What's Include</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Addon Details</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Garage List</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro" id="pills-road-tab" data-bs-toggle="pill" data-bs-target="#pills-road" type="button" role="tab" aria-controls="pills-road" aria-selected="false">Road Side Assistance</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro" id="pills-included-tab" data-bs-toggle="pill" data-bs-target="#pills-included" type="button" role="tab" aria-controls="pills-included" aria-selected="false">What's Not Included</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro" id="pills-doc-tab" data-bs-toggle="pill" data-bs-target="#pills-doc" type="button" role="tab" aria-controls="pills-doc" aria-selected="false">Documents Required</button>
                                  </li>

                                  <li class="nav-item" role="presentation">
                                    <button class="pills_pro" id="pills-faq-tab" data-bs-toggle="pill" data-bs-target="#pills-faq" type="button" role="tab" aria-controls="pills-faq" aria-selected="false">FAQ</button>
                                  </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                    <div className="d-flex gap-4 container">
                                      <button className='feature_bene'>Features & Benifits</button>
                                      <button className='feature_bene'>Included</button>
                                    </div>

                                    <div class="accordion mt-3" id="accordionExample">
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button style={{ fontSize: '14px' }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Features & Benefits
                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Third Party Damage Limit</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Upto ZAR 3.5 Million</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Third Party Liability</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>UAE Only</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Damage to Insured vehicle</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>UAE Only</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Blood Money</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Unlimited (As per UAE Court)</li>


                                          </div>
                                        </div>
                                      </div>
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button style={{ fontSize: '14px' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Included
                                          </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Windscreen Damage</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Loss of Personal Belongings</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Upto ZAR 4,000</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Emergency Medical Expenses</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Upto ZAR 4,000</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Personal Injury</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Upto ZAR 4,000</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Off Road Cover</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>For CarType 4WD only : Included</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Ambulance Service</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Valet Parking Cover</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Taxi Fares</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Fire & Theft Cover</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Upto ZAR 1000</li>

                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>


                                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">



                                    <div class="accordion" id="accordionExample">
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Addons
                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>PA Cover for Driver - Limit Upto ZAR 200,000</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Free</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>PA Cover for Passenger - Limit Upto ZAR 200,000</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Free</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Road Side Assistance</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Free</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Natural Calamity Cover</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Free</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Replacement of Vehicle</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>7 Days : ZAR 150</li>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>

                                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                    <div className="">

                                      <div className="d-flex gap-2">
                                        <select class="form-select my-data" aria-label="Default select example">
                                          <option selected>City</option>
                                          <option value="1">All </option>
                                          <option value="2">Dubai</option>
                                          <option value="3">Abu Dhabi</option>
                                        </select>


                                        <select class="form-select my-data" aria-label="Default select example">
                                          <option selected>Garage Name</option>
                                          <option value="1">All </option>
                                          <option value="2">K.M Garage</option>
                                          <option value="3">Golden Workshop</option>
                                        </select>

                                        <input style={{ width: '350px', border: '1px solid #dee2e6', borderRadius: '5px' }} name="fsrch" id="fsrch" placeholder="Search 🔍" />


                                      </div>

                                      <p>*Garage list are subject to change as per the discretion of the Insurer.</p>


                                      <table class="table text-center mt-3   table-bordered">
                                        <thead>
                                          <tr>
                                            <th>Garage Name	</th>
                                            <th>City/Area</th>
                                            <th>Garage Address</th>
                                          </tr>
                                        </thead>
                                        <tbody>

                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">K.M GARAGE</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>ANEESH, RASHIDIYA (DUBAI), 04-2855099 / 055-1080928</td>
                                          </tr>

                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">GOLDEN WORKSHOP	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>SUNNY/SIBIN, RASHIDIYA (DUBAI), 04-2852966 / 056-5257850</td>
                                          </tr>

                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">HAMZA GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>ADNAN, RASHIDIYA (DUBAI), 04-2858575 / 050-3791347</td>
                                          </tr>

                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">BOBY AUTO GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>MELSON, RASHIDIYA (DUBAI), 04-2854897 / 050-7561094</td>
                                          </tr>

                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>

                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>
                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>
                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>
                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>
                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>
                                          <tr>
                                            <td style={{ fontSize: '12px' }} scope="row">AUTOZONE GARAGE	</td>
                                            <td style={{ fontSize: '12px' }}>Dubai/RASHIDIYA (DUBAI)	</td>
                                            <td style={{ fontSize: '12px' }}>TAHIR, RASHIDIYA (DUBAI), 04-2857121</td>
                                          </tr>


                                        </tbody>
                                      </table>

                                    </div>
                                  </div>
                                  <div class="tab-pane fade" id="pills-road" role="tabpanel" aria-labelledby="pills-road-tab" tabindex="0">



                                    <div class="accordion" id="accordionExample">
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Road Side Assistance Benefits

                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Mechanical Assistance</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Battery Service</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Lockout Service</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Lockout Service</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Flat Tyre Service</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Fuel Delivery Service</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Included</li>

                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>


                                  <div class="tab-pane fade" id="pills-included" role="tabpanel" aria-labelledby="pills-included-tab" tabindex="0">
                                    <div class="accordion" id="accordionExample">
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Not Included

                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Agency Repair</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Excluded</li>

                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>



                                  <div class="tab-pane fade" id="pills-doc" role="tabpanel" aria-labelledby="pills-doc-tab" tabindex="0">

                                    <div class="accordion" id="accordionExample">
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Documents Required
                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>For Renewal Registration</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Driving License</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Emirates ID (If Expired - Emirates Id Renewal Application/Valid Visa)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Car Registration Card (Mulkiya).</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}> If Previous Insurance is Expired - Passing & Pictures of the car from all 4 side.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}> If Changing from Third Party Insurance to Comprehensive Insurance Plan - Passing and Current Dated Car Pictures from all the 4 sides.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Trade License (If the Car is Registered Under Company Name)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>No Objection Certificate for the Driver (If the Car is Registered Under Company Name)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>KYC (Only for Noor Takaful Plans) (If the Car is Registered Under Company Name)</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>For Pre-Owned Car</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Driving License</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Emirates ID (If Expired - Emirates Id Renewal Application/Valid Visa)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Car Registration Card (Mulkiya).</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}> If Previous Insurance is Expired - Passing & Pictures of the car from all 4 side.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}> If Changing from Third Party Insurance to Comprehensive Insurance Plan - Passing and Current Dated Car Pictures from all the 4 sides.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Trade License (If the Car is Registered Under Company Name)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>No Objection Certificate for the Driver (If the Car is Registered Under Company Name)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>KYC (Only for Noor Takaful Plans) (If the Car is Registered Under Company Name)</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>For Brand New Car</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Driving License</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Emirates ID (If Expired - Emirates Id Renewal Application/Valid Visa)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Car Registration Card (Mulkiya).</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}> If Previous Insurance is Expired - Passing & Pictures of the car from all 4 side.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}> If Changing from Third Party Insurance to Comprehensive Insurance Plan - Passing and Current Dated Car Pictures from all the 4 sides.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Trade License (If the Car is Registered Under Company Name)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>No Objection Certificate for the Driver (If the Car is Registered Under Company Name)</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>KYC (Only for Noor Takaful Plans) (If the Car is Registered Under Company Name)</li>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                  <div class="tab-pane fade" id="pills-faq" role="tabpanel" aria-labelledby="pills-faq-tab" tabindex="0">

                                    <div class="accordion" id="accordionExample">
                                      <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Glossary


                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Upto how many days my car insurance will be linked to the RTA/Murror system from the start date?</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>All Emirates except Dubai - 48 Hours</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Dubai - 7 days.</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Contact Number for Registration Center</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>All Emirates except Dubai - 800 3333</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>Dubai - 800 9090</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Excess Amount</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>The amount paid by the Participant per accident in case of faulty & Unkown accidents, according to the Schedule/Policy document.</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Why is it mandatory to buy car insurance in the UAE?</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>A good car insurance policy provides full coverage for your vehicle against bodily injury, car damage, and death to any third party. Furthermore, it covers all expenses you have spent on the repair work incurred due to car accidents.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>• The RTA law requires you to get an insurance policy once you purchase a new vehicle in the UAE, otherwise, you may bear heavy penalties and fines if driving uninsured.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>• The penalty or fine for an uninsured vehicle is around 500 Dirhams, confiscation of the car for seven days, and four black points applied to the license.</li>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Roadside Assistance</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>It offers cover for breakdown or accident recovery services, including vehicle towing, Flat tyre service,Mechnical first aid and battery jump-starts.</li>


                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#000' }}>Is car Insurance transferable in UAE?</h6>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>If your current insurance policy is valid for less than 6 months, you cannot transfer it to the new owner.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>If it is valid for more than 6 months, then you need to check with your insurance company whether they provide a transfer option or not.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>You can also apply for a refund in case they don’t transfer it to a new owner.</li>
                                            <li style={{ fontSize: '10px', marginBottom: '10px', marginLeft: '10px' }}>To share the policy, you need to share all the details of the new owner. The company will then check if the new owner meets the edibility criteria or not.</li>


                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                  </div>

                                </div>




                              </div>
                            </div>

                          </div>
                        </div>
                        <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><p>Add to Compare</p></div>
                        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                          <div class="offcanvas">
                            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Compare Plans</h5>
                          </div>
                          <div class="offcanvas-body p-3 small">
                            <div className="d-flex">
                              <h6>Compare Plans</h6>
                              <button style={{ marginLeft: 'auto' }} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="">
                              <img className='p-0' style={{ width: '200px', border: '1px solid grey' }} src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png" alt="" />

                              <button style={{ padding: '10px', backgroundColor: '#fff', marginLeft: '10px', border: '1px solid forestgreen', borderRadius: '5px' }}>Add More +</button>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/icon-hand.svg" alt="" />
                      What you should know?
                      Annual medical limit is ZAR 75000
                    </div>
                  </div></div>
              </div>
            </div>
          </div>
          <div className="col-md-3  four_card ">

            <div className="my-card rounded-2 p-3 shadow ">
              <div style={{ marginBottom: '1px solid red' }} className="car_name">
                <p style={{ fontWeight: '600', fontSize: '13px' }}>Showing 118 plans for <span style={{ float: 'right' }}><i type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightop" aria-controls="offcanvasRight" class="fa-solid fa-pen"></i></span>
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightop" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                      <h5 id="offcanvasRightLabel" className='btn'>Edit Detail</h5>
                      <button type="button" class="btn-close btn text-reset" style={{ marginRight: '24px' }} data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="offcanvas-body">
                      <div className="container">
                        <div className='d-flex' class="nav nav-tabs" id="nav-tab" role="tablist">
                          {/* <h2 className="mb-4" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Car Details</h2> */}
                          <h2 className="mb-4" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Personal Details</h2>
                        </div>
                        <div class="tab-content" id="nav-tabContent">

                          <form  >
                            <div className="container">
                              <label htmlFor="modelYear" className="form-label mt-3">Family Details</label>
                              {/* <h2>Family Details</h2> */}
                              <form>
                                {/* Self Section */}
                                <div className="mb-3">
                                  <label>Self</label>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <select
                                        className="form-select"
                                        value={familyData.self.gender}
                                        onChange={(e) =>
                                          handleInputChange("self", "gender", null, e.target.value)
                                        }
                                      >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                      </select>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                      <input
                                        type="date"
                                        className="form-control"
                                        value={familyData.self.dob}
                                        onChange={(e) =>
                                          handleInputChange("self", "dob", null, e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* Spouse Section */}
                                <div className="mb-3">
                                  <label>Spouse</label>
                                  <div className="row">
                                    <div className="col-md-12">
                                      <select
                                        className="form-select"
                                        value={familyData.spouse.gender}
                                        onChange={(e) =>
                                          handleInputChange("spouse", "gender", null, e.target.value)
                                        }
                                      >
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                      </select>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                      <input
                                        type="date"
                                        className="form-control"
                                        value={familyData.spouse.dob}
                                        onChange={(e) =>
                                          handleInputChange("spouse", "dob", null, e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* Sons Section */}
                                <div className="mb-3">
                                  <label>Sons</label>
                                  {familyData.sons.map((son, index) => (
                                    <div className="row mb-2" key={index}>
                                      <div className="col-md-12">
                                        <input
                                          type="date"
                                          className="form-control"
                                          value={son.dob || ""}
                                          onChange={(e) =>
                                            handleInputChange("sons", "dob", index, e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  ))}
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={() => addFamilyMember("sons")}
                                  >
                                    Add Son
                                  </button>
                                </div>

                                {/* Daughters Section */}
                                <div className="mb-3">
                                  <label>Daughters</label>
                                  {familyData.daughters.map((daughter, index) => (
                                    <div className="row mb-2" key={index}>
                                      <div className="col-md-12">
                                        <input
                                          type="date"
                                          className="form-control"
                                          value={daughter.dob || ""}
                                          onChange={(e) =>
                                            handleInputChange("daughters", "dob", index, e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                  ))}
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={() => addFamilyMember("daughters")}
                                  >
                                    Add Daughter
                                  </button>
                                </div>

                                {/* Father and Mother Section */}
                                <div className="mb-3">
                                  <label>Father</label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    value={familyData.father.dob}
                                    onChange={(e) =>
                                      handleInputChange("father", "dob", null, e.target.value)
                                    }
                                  />
                                </div>

                                <div className="mb-3">
                                  <label>Mother</label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    value={familyData.mother.dob}
                                    onChange={(e) =>
                                      handleInputChange("mother", "dob", null, e.target.value)
                                    }
                                  />
                                </div>

                                <button type="submit" className="btn btn-success">
                                  Submit
                                </button>
                              </form>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br /><span style={{ fontSize: '10px', fontWeight: '300', color: 'grey' }}>Self (19 years)</span></p>
                <hr />
              </div>

            </div>


            {/* PB Benefits */}

            <div className="my-card rounded-2 p-3 shadow mt-3 rounded-4 benefit-card">
              <h5>
                <img
                  className="mx-2"
                  src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/rwrd.svg"
                  alt="pb-logo"
                  style={{ width: "2rem" }}
                />
                SI Benefits
              </h5>

              <div>
                {/* First Item */}
                <div className="d-flex gap-2" style={{ padding: "0.1rem" }}>
                  <img
                    className="img-fluid"
                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/head.svg"
                    style={{ width: "2rem" }}
                  />
                  <span className="d-flex flex-column align-items-start justify-content-between">
                    <h6 style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "1rem" }}>30 Mins Claim Assistance</h6>
                    <p style={{ fontSize: "0.7rem" }}>Get your claim resolved in just 30 minutes with our speedy processing</p>
                  </span>
                </div>

                {/* Second Item */}
                <div className="d-flex gap-2" style={{ borderTop: "1px dotted grey", borderBottom: "1px dotted grey", padding: "0.1rem" }}>
                  <img
                    className="img-fluid"
                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/autoRch.svg"
                    style={{ width: "2rem" }}
                  />
                  <span className="d-flex flex-column align-items-start justify-content-between">
                    <h6 style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "1rem" }}>Auto Recharge</h6>
                    <p style={{ fontSize: "0.7rem" }}>
                      Seamless protection! Your sum insured is automatically reinstated once per policy year for future claims, under specific conditions.
                    </p>
                  </span>
                </div>


                {/*Third & Fourth Item - Collapsible */}
                <div
                  className={`collapse ${isExpanded ? "show" : ""}`}
                  id="collapseContent"
                >

                  {/* Third Item */}
                  <div className="d-flex gap-2" style={{ padding: "0.1rem" }}>
                    <img
                      className="img-fluid"
                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/NCB.svg"
                      style={{ width: "2rem" }}
                    />
                    <span className="d-flex flex-column align-items-start justify-content-between">
                      <h6 style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "1rem" }}>No Claim Bonus at Renewal</h6>
                      <p style={{ fontSize: "0.7rem" }}>Enjoy a 10% increase in coverage each year with our ‘No Claim Bonus’ upon policy renewal.</p>
                    </span>
                  </div>

                  {/* fourth Item */}

                  <div className="d-flex gap-2" style={{ borderTop: "1px dotted grey", borderBottom: "1px dotted grey", padding: "0.1rem" }}>
                    <img
                      className="img-fluid"
                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/annualHealth.svg"
                      style={{ width: "2rem" }}
                    />
                    <span className="d-flex flex-column align-items-start justify-content-between">
                      <h6 style={{ fontSize: "0.8rem", fontWeight: "600", marginTop: "1rem" }}>
                        Annual Health Check Up with ZAR 69 Deductible
                      </h6>
                      <p style={{ fontSize: "0.7rem" }}>Access an annual health check-up with only ZAR 69 deductible.</p>
                    </span>
                  </div>
                </div>

                <p
                  onClick={toggleView}
                  aria-controls="collapseContent"
                  aria-expanded={isExpanded}
                  style={{ fontSize: "0.8rem", cursor: 'pointer', color: '#003D2B', fontWeight: "600", textAlign: "center", margin: "0", marginTop: "1rem" }}
                >
                  {isExpanded ? "View Less >" : "View More >"}
                </p>
              </div>
            </div>

            <div className="my-card rounded-2 p-3 shadow mt-3 ">
              <div
                style={{ marginBottom: "1px solid red" }}
                className="car_name"
              >
                <p style={{ fontWeight: "600", fontSize: "13px" }}>
                  Select Add-ons{" "}
                  <span style={{ float: "right" }}>
                    {" "}
                    <button className="clear_bttn">All Clear</button>{" "}
                  </span>
                </p>
                <hr />
              </div>

              <div className="car_detail mt-0">
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>

                    Driver Cover{" "} &nbsp;
                    <span>
                      <i class="fa-solid fa-circle-info"></i>
                    </span>
                  </div>
                  <span style={{ float: "right", color: "forestgreen" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>

                    Passenger Cover{" "}&nbsp;
                    <span>
                      <i class="fa-solid fa-circle-info"></i>
                    </span>
                  </div>
                  <span style={{ float: "right", color: "forestgreen" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>

                    Roadside Assistance{" "}&nbsp;
                    <span>
                      <i class="fa-solid fa-circle-info"></i>
                    </span>
                  </div>
                  <span style={{ float: "right", color: "forestgreen" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>

                    Replacement of Vehicle{" "}&nbsp;
                    <span>
                      <i class="fa-solid fa-circle-info"></i>
                    </span>
                  </div>
                  <span style={{ float: "right", color: "forestgreen" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>

                    Natural Calamities{" "}&nbsp;
                    <span>
                      <i class="fa-solid fa-circle-info"></i>
                    </span>
                  </div>
                  <span style={{ float: "right", color: "forestgreen" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </span>
                </p>

                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>

                    Oman Cover{" "}&nbsp;
                    <span>
                      <i class="fa-solid fa-circle-info"></i>
                    </span>
                  </div>
                  <span style={{ float: "right", color: "forestgreen" }}>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                  </span>
                </p>
              </div>
            </div>

            <div className="up_doc rounded-2 p-3 mt-3 shadow mt-4">
              <div className="mt-3">
                <h6 style={{ fontWeight: "800" }}>Upload Documents</h6>
                <p className="mt-3 mb-2" style={{ fontSize: "13px", color: "#000" }}>
                  To get the best possible rates for Your beloved car, please
                  provide your documents.
                </p>

                <div className="">
                  <button
                    type="button"
                    class="up-dn_doc"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModallp"
                  >
                    <span>
                      <i
                        style={{ fontSize: "30px" }}
                        class="fa-solid fa-cloud-arrow-up"
                      ></i>
                    </span>{" "}
                    Upload Documents
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModallp"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog  custom-width">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Upload Documents
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div class="modal-body modalbodyuplosad">
                          <div className="upload_one">
                            <p
                              className="text-center"
                              style={{ fontSize: "12px" }}
                            >
                              Documents are the description for your car and you
                              and help us in figuring out what’s the best <br />{" "}
                              price for your car insurance
                            </p>
                            <div className="line_one rounded-2 mb-2">
                              <div className="p-3">
                                <p style={{ fontSize: "15px" }}>
                                  Upload Driver's License
                                </p>
                                <div className="">
                                  <span>
                                    <img
                                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/UploadDocuments/img-cloud-upload.svg"
                                      alt=""
                                    />
                                    <span> Upload File</span>
                                  </span>
                                  <p
                                    className="mt-2"
                                    style={{
                                      fontSize: "12px",
                                      marginLeft: "30px",
                                    }}
                                  >
                                    JPG, PNG or PDF, file size no more than 10MB
                                    <span style={{ float: "right" }}>
                                      <input
                                        style={{
                                          marginTop: "-20px",
                                          maxWidth: "107px",
                                          alignContent: "center",
                                          height: "34px",
                                        }}
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04"
                                        aria-label="Upload"
                                        onChange={handleFileChange}
                                      />
                                    </span>
                                  </p>
                                  {fileDetails && (
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        marginLeft: "30px",
                                        marginTop: "10px",
                                      }}
                                    >
                                      <p style={{ color: "green" }}>
                                        File Uploaded:{" "}
                                        <a
                                          href={fileDetails.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ textDecoration: "underline", color: "blue" }}
                                        >
                                          {fileDetails.name}
                                        </a>{" "}
                                        ({fileDetails.size} KB)
                                      </p>
                                      <button
                                        onClick={handleEdit}
                                        style={{
                                          fontSize: "12px",
                                          padding: "5px 10px",
                                          marginRight: "10px",
                                          backgroundColor: "#007bff",
                                          color: "#fff",
                                          border: "none",
                                          borderRadius: "4px",
                                          cursor: "pointer",
                                        }}
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={handleDelete}
                                        style={{
                                          fontSize: "12px",
                                          padding: "5px 10px",
                                          backgroundColor: "#dc3545",
                                          color: "#fff",
                                          border: "none",
                                          borderRadius: "4px",
                                          cursor: "pointer",
                                        }}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="upload_one mb-2">
                            <div className="line_one rounded-2">
                              <div className="p-3">
                                <p style={{ fontSize: "15px" }}>
                                  Upload Car Registration
                                </p>
                                <div className="">
                                  <span>
                                    <img
                                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/UploadDocuments/img-cloud-upload.svg"
                                      alt=""
                                    />
                                    <span> Upload File</span>
                                  </span>
                                  <p
                                    className="mt-2"
                                    style={{
                                      fontSize: "12px",
                                      marginLeft: "30px",
                                    }}
                                  >
                                    JPG, PNG or PDF, file size no more than 10MB
                                    <span style={{ float: "right" }}>
                                      {" "}
                                      <input
                                        style={{ marginTop: '-20px', maxWidth: '107px', alignContent: 'center', height: '34px' }}
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04"
                                        aria-label="Upload"
                                      />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="upload_one ">
                            <div className="line_one rounded-2">
                              <div className="p-3">
                                <p style={{ fontSize: "15px" }}>
                                  Upload Emirates ID
                                </p>
                                <div className="">
                                  <span>
                                    <img
                                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/UploadDocuments/img-cloud-upload.svg"
                                      alt=""
                                    />
                                    <span> Upload File</span>
                                  </span>
                                  <p
                                    className="mt-2"
                                    style={{
                                      fontSize: "12px",
                                      marginLeft: "30px",
                                    }}
                                  >
                                    JPG, PNG or PDF, file size no more than 10MB
                                    <span style={{ float: "right" }}>
                                      {" "}
                                      <input
                                        style={{ marginTop: '-20px', maxWidth: '107px', alignContent: 'center', height: '34px' }}
                                        type="file"
                                        class="form-control"
                                        id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04"
                                        aria-label="Upload"
                                      />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="advan_tag mt-3 shadow px-1 py-2 rounded-2">
              <div className="d-flex gap-3" >
                <img className='rounded' src="https://i.ibb.co/qJ7YnpQ/0bc82fa4-5fa0-4cee-aad6-88a0a0678edb.jpg" width='30px' alt="" />
                <h6 className='mt-3'>Advantage</h6>
              </div><hr />
              <div className="accordion accordion-flush acti-plans" id="accordionFlushExample">
                {/* Accordion Item 1 */}
                <div className="accordion-item">

                  <p className="accordion-header">
                    <button
                      className="accordion-button collapsed d-flex"
                      type="button"
                      onClick={() => handleToggle(1)}
                      aria-expanded={expandedIndex === 1 ? 'true' : 'false'}
                      aria-controls="flush-collapseOne"
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div><img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/lowest-price.svg" alt="" /> &nbsp; Lowest Price Guaranteed</div>
                        <div>
                          <i
                            className={`fa-solid ${expandedIndex === 1 ? 'fa-angle-down' : 'fa-angle-right'}`}
                            style={{ transition: 'transform 0.3s ease' }}
                          ></i>
                        </div>
                      </div>
                    </button>
                  </p>
                  <div
                    id="flush-collapseOne"
                    className={`accordion-collapse collapse ${expandedIndex === 1 ? 'show' : ''}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <strong className="safe">You won’t find a better price anywhere else.</strong>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item mt-3">
                  <p className="accordion-header">
                    <button
                      className="accordion-button collapsed join"
                      type="button"
                      onClick={() => handleToggle(2)}
                      aria-expanded={expandedIndex === 2 ? 'true' : 'false'}
                      aria-controls="flush-collapseTwo"
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div><img src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/expert-advice.svg" alt="" />&nbsp; Expert Advice</div>
                        <div>
                          <i
                            className={`fa-solid ${expandedIndex === 2 ? 'fa-angle-down' : 'fa-angle-right'}`}
                            style={{ transition: 'transform 0.3s ease' }}
                          ></i>
                        </div>
                      </div>
                    </button>
                  </p>
                  <div
                    id="flush-collapseTwo"
                    className={`accordion-collapse collapse ${expandedIndex === 2 ? 'show' : ''}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <strong className="safe">We offer unbiased guidance to ensure that you choose the right insurance plan.</strong>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item mt-3">
                  <p className="accordion-header">
                    <button
                      className="accordion-button collapsed join"
                      type="button"
                      onClick={() => handleToggle(3)} // Handle click to toggle
                      aria-expanded={expandedIndex === 3 ? 'true' : 'false'}
                      aria-controls="flush-collapseThree"
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div><img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/claims-assistance.svg" alt="" />&nbsp; Claims Assistance</div>
                        <div>
                          <i
                            className={`fa-solid ${expandedIndex === 3 ? 'fa-angle-down' : 'fa-angle-right'}`}
                            style={{ transition: 'transform 0.3s ease' }}
                          ></i>
                        </div>
                      </div>
                    </button>
                  </p>
                  <div
                    id="flush-collapseThree"
                    className={`accordion-collapse collapse ${expandedIndex === 3 ? 'show' : ''}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <strong className="safe">Our dedicated claims support team ensures that you receive full assistance at the time of filing the claim.</strong>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="accordion-item mt-3">
                  <p className="accordion-header">
                    <button
                      className="accordion-button collapsed join"
                      type="button"
                      onClick={() => handleToggle(4)} // Handle click to toggle
                      aria-expanded={expandedIndex === 4 ? 'true' : 'false'}
                      aria-controls="flush-collapseFour"
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div><img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/easy-refunds.svg" alt="" />&nbsp; Easy Refunds</div>
                        <div>
                          <i
                            className={`fa-solid ${expandedIndex === 4 ? 'fa-angle-down' : 'fa-angle-right'}`}
                            style={{ transition: 'transform 0.3s ease' }}
                          ></i>
                        </div>
                      </div>
                    </button>
                  </p>
                  <div
                    id="flush-collapseFour"
                    className={`accordion-collapse collapse ${expandedIndex === 4 ? 'show' : ''}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <strong className="safe">In case you are not happy with your purchase, you can cancel your policy with just a phone call.</strong>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="accordion-item mt-3">
                  <p className="accordion-header">
                    <button
                      className="accordion-button collapsed join"
                      type="button"
                      onClick={() => handleToggle(5)}
                      aria-expanded={expandedIndex === 5 ? 'true' : 'false'}
                      aria-controls="flush-collapseFive"
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div><img src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/exciting-rewards.svg" alt="" />&nbsp; Exciting Rewards</div>
                        <div>
                          <i
                            className={`fa-solid ${expandedIndex === 5 ? 'fa-angle-down' : 'fa-angle-right'}`}
                            style={{ transition: 'transform 0.3s ease' }}
                          ></i>
                        </div>
                      </div>
                    </button>
                  </p>
                  <div
                    id="flush-collapseFive"
                    className={`accordion-collapse collapse ${expandedIndex === 5 ? 'show' : ''}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <strong className="safe">Receive exciting vouchers from top brands on every booking.</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default LifePlan
