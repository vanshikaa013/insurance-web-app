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
import '../../Products/Carplan.css'

const FilterPlansModaltravel = () => {
  const [selectedFilter, setSelectedFilter] = useState("Sort");
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState(100000);
  const [years, setYears] = useState(5);
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleSliderChange = (event, newValue) => setValue(newValue);
  const handleMinClick = () => value > 100000 && setValue(value - 50000);
  const handleMaxClick = () => value < 10000000 && setValue(value + 50000);
  const handleChange = (event) => {
    const numericValue = event.target.value.replace(/,/g, "");
    setValue(Number(numericValue) || 0);
  };

  const handleCloseDialog = () => setDialogOpen(false);

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
                      borderRadius: "4px",
                      padding: "8px 12px",
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      height: "40px",
                      width: "100%",
                      "&:not(:last-child)": {
                        marginBottom: "10px",
                      },
                    }}
                  >
                    <FormControlLabel
                      value={option}
                      control={<Radio sx={{ padding: 0 }} />}
                      label={<span className="font-op-btn" style={{ fontSize: "0.8rem" }}>{option}</span>}
                    />
                  </Box>
                )
              )}
            </RadioGroup>
          </Box>
        );
      case "Medical Cover":
        return (
          <Box sx={{ textAlign: "center", gap: 2 }}>
            <Typography className="mediabtnfiltertrevell" variant="h6" sx={{ mb: 2 }}>
              Medical Cover
            </Typography>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}>
              {/* Responsive ZAR Section */}
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                border: "2px solid #003d2b",
                borderRadius: "0.2rem",
                width: "100%",
                maxWidth: "400px",
              }} className="mediabtnfiltertrevelrl">
                {/* Left Section: ZAR */}
                <Box
                  className="mediabtnfiltertrevelrllr"
                  sx={{
                    padding: "12px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: { xs: "4px 4px 0 0", sm: "4px 0 0 4px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>ZAR</Typography>
                </Box>

                {/* Right Section: Input Field */}
                <TextField
                  className="mediabtnfiltertrevelrllr"
                  value={value.toLocaleString()}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  fullWidth
                  variant="standard"
                  sx={{
                    "& .MuiInput-root": { border: "none" },
                    "& .MuiInput-input": {
                      height: "auto",
                      textAlign: "center",
                      padding: "8px",
                    },
                  }}
                />
              </Box>

              {/* Slider Section */}
              <Slider
                value={value}
                min={100000}
                max={10000000}
                step={50000}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                sx={{ width: "100%", maxWidth: "400px", margin: "auto" }}
              />
            </Box>
          </Box>
        );

      case "Inclusions":
        return (
          <RadioGroup>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Payment Frequency
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {["Monthly", "Annually", "One-time", "Half Yearly", "Quarterly"].map((option) => (
                <Box
                  key={option}
                  sx={{
                    border: "1px solid #003d2b",
                    borderRadius: "8px",
                    padding: "3px",
                    width: "100%",
                    "@media (min-width: 600px)": { width: "45%" },
                  }}
                >
                  <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={<span style={{ fontSize: "0.8rem" }} className="font-op-btn">{option}</span>}
                  />
                </Box>
              ))}
            </Box>
          </RadioGroup>
        );
      default:
        return <Typography>Select a filter to view options</Typography>;
    }
  };

  return (
    <Dialog open={dialogOpen} fullWidth maxWidth="md">
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }} className='ss-1peo4km-MuiPaper-root-MuiDialog ss-1peo4km-MuiPaper-root-MuiDialogtravel'>
        {/* Header */}
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            borderBottom: "2px solid #e7e7e7",
            pb: 1,
          }}
        >
          <div>Filter Plans By</div>
          <Button onClick={handleCloseDialog} sx={{ fontSize: "0.8rem", color: '#003d2b' }}>
            Close
          </Button>
        </Typography>

        {/* Content */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
          "@media (min-width: 350px)": { flexDirection: "row" },
        }}>
          {/* Left Panel */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            "@media (min-width: 650px)": { width: "30%" },
          }}
          className='modaltraveloplan'
          >
            {["Sort", "Medical Cover", "Inclusions", "Insurers"].map((item) => (
              <Button
                key={item}
                onClick={() => setSelectedFilter(item)}
                variant="outlined"
                sx={{
                  textAlign: "left",
                  border: '1px solid #003d2b',
                  fontWeight: selectedFilter === item ? "bold" : "normal",
                  backgroundColor: selectedFilter === item ? "#003d2b" : "transparent",
                  color: selectedFilter === item ? "white" : "black",
                  padding: "8px",
                  fontSize: "0.9rem",
                }}
                className="mediabtnfiltertrevel"
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Right Panel */}
          <Box sx={{
            borderLeft: "2px solid #003d2b",
            borderRadius: "",
            padding: 2,
            width: "100%",
          }}>
            {renderRightSideContent()}
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 2 }}>
          <Button variant="text" sx={{ color: "#003d2b", fontWeight: "bold" }}>
            Reset All
          </Button>
          <Button variant="contained" sx={{
            backgroundColor: "#003d2b",
            color: "white",
            fontWeight: "bold",
          }}>
            Apply
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FilterPlansModaltravel;
