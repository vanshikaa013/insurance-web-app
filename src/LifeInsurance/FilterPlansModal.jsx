import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  TextField,
} from "@mui/material";

const FilterPlansModal = () => {
  const [selectedFilter, setSelectedFilter] = useState("Sort");
  const [selectedOption, setSelectedOption] = useState("");


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






  const renderRightSideContent = () => {
    switch (selectedFilter) {
      case "Sort":
        return (
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
              Sort
            </Typography>
            <RadioGroup
              row
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {["Relevance", "Premium High to Low", "Premium Low to High"].map(
                (option) => (
                  <Box
                    key={option}
                    sx={{
                      border: "1px solid #003d2b",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      height: "40px",
                      width: "45%",
                      "&:not(:last-child)": { marginRight: "10px", marginBottom : "10px" },
                    }}
                  >
                    <FormControlLabel
                      value={option}
                      control={<Radio sx={{ padding: 0 }} />}
                      label={
                        <span style={{ fontSize: "0.8rem", margin: 0 }}>
                          {option}
                        </span>
                      }
                      sx={{ marginTop: 0 }}
                    />
                  </Box>
                )
              )}
            </RadioGroup>
          </Box>
        );
      case "Life Cover":
        return (
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
              <p className='p-0 m-0' style={{fontSize : "0.7rem", color : "##8B9EB4"}}>Min</p>
      
              <Button
        variant="contained"
        sx={{
          bgcolor: "#DDE8F5",
          color: "#000",
          padding: "0.5rem", // No extra padding
          minWidth: "auto", 
          fontSize: "1.2rem", 
          lineHeight : "0.7rem"
        }}
        onClick={handleMinClick}
      >
        -
      </Button>
      <p className='p-0 m-0' style={{fontSize : "0.7rem", color : "##8B9EB4", textAlign : "center"}}>ZAR 100,000</p>
      
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
              <p className='p-0 m-0' style={{fontSize : "0.7rem", color : "##8B9EB4"}}>Max</p>
             <Button variant="contained" sx={{bgcolor: "#DDE8F5",
          color: "#000",
          padding: "0.4rem", // No extra padding
          minWidth: "auto", 
          fontSize: "1rem", 
          lineHeight : "0.8rem"}}  onClick={handleMaxClick}>
                +
              </Button>
      <p className='p-0 m-0' style={{fontSize : "0.7rem", color : "##8B9EB4 " , textAlign : "center"}}>ZAR 10,000,000</p>
      
             </div>
            </Box>
          </Box>
        );
      case "Policy Term":
        return (
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
                         
        );
        case "Payment Frequency":
            return (
                    <RadioGroup row>
                    <h className="bold">Payment Frequently</h>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap', // Allows wrapping to the next line
                      gap: '10px', // Space between the boxes
                      width: '100%',
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
                
                             
            );
      default:
        return <Typography>Select a filter to view options</Typography>;
    }
  };

  return (
    <Dialog open fullWidth maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", p: 4 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Filter Plans By
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Left Section */}
          <Box sx={{ width: "30%", display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "Sort",
              "Life Cover",
              "Policy Term",
              "Payment Frequency",
              "Plan Types",
              "Features",
              "Insurers",
            ].map((item) => (
              <Button
                key={item}
                onClick={() => setSelectedFilter(item)}
                variant="outlined"
                sx={{
                  textAlign: "left",
                  borderRadius: "8px",
                  borderColor: selectedFilter === item ? "#003d2b" : "#ccc",
                  fontWeight: selectedFilter === item ? "bold" : "normal",
                  backgroundColor: selectedFilter === item ? "#0070ff" : "transparent",
                  color: selectedFilter === item ? "white" : "black",
                  padding: "10px 15px",
                }}
              >
                {item} *
              </Button>
            ))}
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: 2,
            }}
          >
            {renderRightSideContent()}
          </Box>
        </Box>

        {/* Footer Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            variant="text"
            sx={{ color: "#0070ff", fontWeight: "bold" }}
            onClick={() => {
              setSelectedOption("");
              setSelectedFilter("Sort");
            }}
          >
            Reset All
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5722",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "8px 20px",
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FilterPlansModal;
