import React, { useState } from "react";
import { Box, Button, Typography, Radio, FormControlLabel } from "@mui/material";
import "./LifePriceTag.css";
import { NavLink } from "react-router-dom";

const PlanCard = () => {
  const [pricingFrequency, setPricingFrequency] = useState("yearly");
  const [isOffCanvasVisible, setIsOffCanvasVisible] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [isRidersVisible, setIsRidersVisible] = useState(false); // Toggle for riders dropdown

  const handlePricingToggle = (value) => {
    setPricingFrequency(value);
  };

  const toggleOffCanvas = () => {
    setIsOffCanvasVisible((prev) => !prev);
    setIsRadioSelected((prev) => !prev); // Toggle radio state
  };

  const toggleRidersSection = () => {
    setIsRidersVisible((prev) => !prev);
  };

  const pricingBoxStyle = {
    background: "#bee2b1",
    borderRadius: "50px",
    color: "#052f5f",
    padding: "0.5rem 0.6rem",
    display: "flex",
    alignItems: "center",
  };

  const riderButtonStyle = {
    border: "1px solid",
    padding: "0.4rem",
    borderRadius: "0.4rem",
    cursor: "pointer",
  };

  const riderDetailsStyle = {
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "1rem",
  };

  return (
    <>
      <Box id='lifrptgje' className="px-2 lifepricetag">
        <Box className="d-flex align-items-center justify-content-between w-100 Lifepricetagmedia">
          {/* Card Header */}
          <div className="div" style={{ display: 'contents' }}>
            <Box>
              <img
                src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/hayah-insurer.png"
                alt=""
                width="60%"
              />
              <p>Term Life Protect</p>
            </Box>
            <Box>
              <p>Claim Settlement Ratio</p>
              <h6>98.1%</h6>
            </Box>
            <Box>
              <p>Life Cover (ZAR)</p>
              <h6>500,000</h6>
            </Box>
            <Box>
              <p>Policy Term (Years)</p>
              <h6>15</h6>
            </Box>
          </div>
          <Box className="d-flex align-items-center justify-content-center flex-column lifeplanmodal lifeplanmodalmedia">
            <div className="lifeplanmodalmediabox">
              <p>
                <span style={{ textDecoration: "line-through", color: "#505f79" }}>
                  ZAR 427
                </span>{" "}
                35% OFF
              </p>
              <NavLink to='/lifeformdetails'>
              <button className="btn">
                <span>
                  ZAR {pricingFrequency === "yearly" ? "278 Yearly" : "30 Monthly"}
                </span>
              </button>
              </NavLink>
            </div>
            <Box className='lifeplanmodalmediabox' sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <Box sx={pricingBoxStyle}>
                <span
                  style={{
                    background:
                      pricingFrequency === "monthly" ? "#003d2b" : "transparent",
                    color: pricingFrequency === "monthly" ? "#fff" : "grey",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePricingToggle("monthly")}
                >
                  Monthly
                </span>
                <span
                  className="mx-3 px-3 rounded-4"
                  style={{
                    background:
                      pricingFrequency === "yearly" ? "#003d2b" : "transparent",
                    color: pricingFrequency === "yearly" ? "#fff" : "grey",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePricingToggle("yearly")}
                >
                  Yearly
                </span>
              </Box>
            </Box>
          </Box>
        </Box>


        {/*  */}

        <Box className="d-flex align-items-center mt-3">
          <span className="d-flex align-items-center w-65 gap-3">
            <p
              style={{ background: "#bee2b1", color: "#003d2b" }}
              className="p-2 rounded-1 lifemodlamedia"
              data-bs-toggle="modal"
              data-bs-target="#exampleModallelife"
            >
              Plan Details
              <i className="fa-solid fa-angle-down mx-2"></i>
            </p>
            <p
              style={{ background: "#bee2b1", color: "#003d2b" }}
              className="p-2 rounded-1 lifemodladesktop"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRightleftlife"
              aria-controls="offcanvasRight"
            >
              Plan Details12
              <i className="fa-solid fa-angle-down mx-2"></i>
            </p>
            <h6
              style={{ fontSize: "0.8rem", background: "#bee2b1", borderRadius: '4px' }}
              className="p-1 lifeplanmodalmediaboxplan"
            >
              <i className="fa-solid fa-check me-2"></i>COVID-19 Coverage
            </h6>
            <h6
              style={{ fontSize: "0.8rem", background: "#bee2b1", borderRadius: '4px' }}
              className="p-1 lifeplanmodalmediaboxplan"
            >
              <i className="fa-solid fa-check me-2"></i>Pre Existing Disease
              Coverage
            </h6>
          </span>
          <span className="d-flex align-items-center gap-2">
            <FormControlLabel
              control={
                <Radio
                  checked={isRadioSelected}
                  onChange={toggleOffCanvas}
                  sx={{
                    color: "#003d2b",
                    "&.Mui-checked": {
                      color: "#003d2b",
                      fontSize: "0.7rem"
                    },
                  }}
                />
              }
              label="Add to Compare"
              sx={{
                color: "#003d2b", fontSize: "0.6rem", "& .MuiTypography-root": {
                  fontSize: "0.8rem", // Ensures the label font is smaller
                },
              }}
            />
            <p className="lifeplanmodalmediaboxplan" style={{ color: "#003d2b", fontSize: "0.8rem" }}>
              <i
                className="fa-regular fa-bookmark"
                style={{
                  background: "#bee2b1",
                  padding: "0.4rem 0.5rem",
                  borderRadius: "100%",
                  marginRight: "0.6rem",
                }}
              ></i>
              Short List
            </p>
          </span>
        </Box>

        <hr />
        {/* Riders Section */}
        <Box>
          <Box className="d-flex align-items-center justify-content-between">
            <span className="d-flex gap-2">
              <p
                style={{
                  ...riderButtonStyle,
                  borderColor: "#003d2b",
                  color: "#003d2b",
                }}
                onClick={toggleRidersSection}
              >
                3 Included Rider(s)
                <i className="fa-solid fa-angle-down mx-2"></i>
              </p>
              <p
                style={{
                  ...riderButtonStyle,
                  borderColor: "#e76161",
                  color: "#e76161",
                }}
                onClick={toggleRidersSection}
              >
                2 Optional Rider(s)
                <i className="fa-solid fa-angle-down mx-2"></i>
              </p>
            </span>

            <span className="d-flex align-items-center justify-content-between gap-3 m-2">
              <p
                style={{
                  ...riderButtonStyle,
                  color: "#003d2b",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src="https://cdn.policybazaar.ae/certificates/5/platinumpartner_new.svg"
                  alt="preferred-partner"
                  width="16"
                  className="me-2"
                />
                <p className="lifeplanmodalmediaboxplantext">
                  Platinum Partner
                </p>
              </p>
              <p
                style={{
                  ...riderButtonStyle,
                  color: "#003d2b",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src="https://cdn.policybazaar.ae/certificates/5/claimpromise_new.svg"
                  alt="preferred-partner"
                  width="16"
                  className="me-2"
                />
                <p className="lifeplanmodalmediaboxplantext">
                  Claim Promise
                </p>
              </p>
            </span>
          </Box>

          {isRidersVisible && (
            <Box className='d-flex align-items-center justify-content-between mt-3 gap-2'>
              <Box style={{ border: "1px solid #bee2b1", width: "50%", padding: "0.5rem", borderRadius: "0.8rem" }}>
                <h6 className="d-flex align-items-center justify-content-start gap-1" style={{ fontWeight: "600" }}><span style={{ color: "#003d2b" }}><h6 >3 Includes</h6></span> Riders</h6>
                <span className="d-flex align-items-center"><p style={{ fontSize: "0.7rem", fontWeight: "600", display: "flex", gap: "0.5rem" }}><i class="fa-solid fa-check" style={{ fontSize: "1rem", color: "#fff", background: "#003d2b" }} ></i>Temporary Life Cover : </p><h6 style={{ color: "#003d2b" }}>Included</h6></span>
                <span className="d-flex align-items-center"><p style={{ fontSize: "0.7rem", fontWeight: "600", display: "flex", gap: "0.5rem" }}><i class="fa-solid fa-check" style={{ fontSize: "1rem", color: "#fff", background: "#003d2b" }}></i>Temporary Life Cover : </p><h6 style={{ color: "#003d2b" }}>Included</h6></span>
                <span className="d-flex align-items-center"><p style={{ fontSize: "0.7rem", fontWeight: "600", display: "flex", gap: "0.5rem" }}><i class="fa-solid fa-check" style={{ fontSize: "1rem", color: "#fff", background: "#003d2b" }}></i>Temporary Life Cover : </p><h6 style={{ color: "#003d2b" }}>Included</h6></span>

              </Box>
              <Box style={{ border: "1px solid #f9491f", width: "50%", padding: "0.5rem", borderRadius: "0.8rem" }}>
                <h6 className="d-flex align-items-center justify-content-start gap-1" style={{ fontWeight: "600" }}><span style={{ color: "#f9491f" }}><h6 >2 Optional</h6></span> Riders</h6>
                <span className="d-flex align-items-center"><p style={{ fontSize: "0.7rem", fontWeight: "600", display: "flex", gap: "0.5rem" }}><i class="fa-solid fa-check" style={{ fontSize: "1rem", color: "#fff", background: "#003d2b" }} ></i>Temporary Life Cover : </p><h6 style={{ color: "#003d2b" }}>Included</h6></span>
                <span className="d-flex align-items-center"><p style={{ fontSize: "0.7rem", fontWeight: "600", display: "flex", gap: "0.5rem" }}><i class="fa-solid fa-check" style={{ fontSize: "1rem", color: "#fff", background: "#003d2b" }}></i>Temporary Life Cover : </p><h6 style={{ color: "#003d2b" }}>Included</h6></span>
                <span className="d-flex align-items-center"><p style={{ fontSize: "0.7rem", fontWeight: "600", display: "flex", gap: "0.5rem" }}><i class="fa-solid fa-check" style={{ fontSize: "1rem", color: "#fff", background: "#003d2b" }}></i>Temporary Life Cover : </p><h6 style={{ color: "#003d2b" }}>Included</h6></span>

              </Box>
            </Box>

          )}
        </Box>

        {/* Off-Canvas Section */}

        {/* Off-Canvas Section */}
        {isOffCanvasVisible && (
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "#fff",
              boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
              padding: "1rem",
              zIndex: 10,
              borderTop: "1px solid #ddd",
            }}
          >
            <Box className="d-flex justify-content-between align-items-center">
              {/* Title */}
              <Typography variant="h6" sx={{ color: "#003d2b", fontWeight: "600" }}>
                Compare Plans
              </Typography>
              {/* Close Button */}
              <Button onClick={toggleOffCanvas} sx={{ color: "#003d2b" }}>
                <i className="fa-solid fa-circle-xmark" style={{ fontSize: "2rem" }}></i>
              </Button>
            </Box>
            {/* Compare Content */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              {/* Plan Card */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  border: "1px solid #ddd",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  width: "75%",
                }}
              >
                <img
                  src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/hayah-insurer.png"
                  alt="Plan Logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.9rem", color: "#003d2b" }}
                  >
                    Term Life Protect
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "0.8rem", color: "gray" }}
                  >
                    Life Cover (ZAR) - 2,000,000
                  </Typography>
                </Box>
              </Box>
              {/* Add More Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px dashed #003d2b",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Typography variant="body2" sx={{ color: "#003d2b", fontWeight: "600" }}>
                  + Add More
                </Typography>
              </Box>
            </Box>
            {/* Compare Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <Button
                sx={{
                  background: "#e76161",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  "&:hover": { background: "#d65050" },
                }}
              >
                Compare Now
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <div
        class="offcanvas offcanvas-end  my_ofcan"
        tabindex="-1"
        id="offcanvasRightleftlife"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header off_cnhd">
          <div className="d-flex gap-5">
            <img
              style={{ width: "20px" }}
              src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
              alt="plan-logo"
            />
            <p
              className="mt-2"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Oriental Insurance <br /> Comprehensive (Garage)
            </p>

            <p
              className="mt-2"
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "grey",
              }}
            >
              Car Value (ZAR) <br />{" "}
              <span
                style={{ fontWeight: "800", color: "#000" }}
              >
                85,002
              </span>{" "}
            </p>

            <p
              className="mt-2"
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "grey",
              }}
            >
              Excess Amount (ZAR)
              <br />{" "}
              <span
                style={{ fontWeight: "800", color: "#000" }}
              >
                500
              </span>{" "}
            </p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="d-flex gap-3 mt-3">
            <button className="policy_word">
              Policy Wording
            </button>
            <button className="policy_word">
              Veiw Quotation
            </button>

            <div className="">
              <button className="policy_wordk">
                ZAR 26,00 YEARLY
              </button>
            </div>
          </div>
        </div>

        <ul class="nav nav-pills mb-3" id="tabs-example" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" type="button" role="tab" aria-controls="tabs-home" aria-selected="true">Policy Details</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" type="button" role="tab" aria-controls="tabs-profile" aria-selected="false">Addon Details</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" type="button" role="tab" aria-controls="tabs-contact" aria-selected="false">FAQs</button>
          </li>
        </ul>
        <div class="tab-content" id="tabs-content">

          <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab" tabindex="0">

            <div class="accordion accordion-flush" id="accordionFlushExampleNew">
              <div class="accordion-item">
                <h6 class="accordion-header">
                  <button style={{ fontSize: '15px' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOneNew" aria-expanded="false" aria-controls="flush-collapseOneNew">
                    Key Features
                  </button>
                </h6>
                <div id="flush-collapseOneNew" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNew">
                  <div class="accordion-body">
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>COVID-19 Coverage : Yes</li>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>Maturity Bonus Payout : Yes</li>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>Medical Checkup : Not Required</li>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>Worldwide Coverage : Yes</li>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button style={{ fontSize: '15px' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoNew" aria-expanded="false" aria-controls="flush-collapseTwoNew">
                    Plan Type
                  </button>
                </h2>
                <div id="flush-collapseTwoNew" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNew">
                  <div class="accordion-body">

                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>Level Term Plan</li>


                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button style={{ fontSize: '15px' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeNew" aria-expanded="false" aria-controls="flush-collapseThreeNew">
                    Sum Insured Payout in case of Death
                  </button>
                </h2>
                <div id="flush-collapseThreeNew" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNew">
                  <div class="accordion-body">
                    <h6 style={{fontWeight:'600',color:'#000'}}>Accident</h6>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>From Day One : AED 500,000</li>

                    <h6 style={{fontWeight:'600',color:'#000'}}>Sickness</h6>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>From Day One : AED 500,000</li>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button style={{ fontSize: '15px' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourNew" aria-expanded="false" aria-controls="flush-collapseFourNew">
                    Maturity Bonus Payout
                  </button>
                </h2>
                <div id="flush-collapseFourNew" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleNew">
                  <div class="accordion-body">
                    <h6 style={{fontWeight:'600',color:'#000'}}>Plan Type</h6>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>5 Year Term : 30% of Paid Premium</li>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>7 Year Term : 35% of Paid Premium</li>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>10 Year Term : 50% of Paid Premium</li>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>15 Year Term : 50% of Paid Premium</li>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab" tabindex="0">

            <div class="accordion" id="accordionFiveNew">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button style={{ fontSize: '15px' }} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#fiveNew-collapseOne" aria-expanded="true" aria-controls="fiveNew-collapseOne">
                    Addons
                  </button>
                </h2>
                <div id="fiveNew-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">

                    <h6 style={{fontWeight:'600',color:'#000'}}>Terminal Illness - Terminal illness is a disease that cannot be cured and is expected to result in death within 12 months.</h6>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>From Day One : 20% of SA (Max upto AED 150,000)</li>

                    <h6 style={{fontWeight:'600',color:'#000'}}>Repatriation Benefit</h6>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>Additional AED 5,000</li>

                    <h6 style={{fontWeight:'600',color:'#000'}}>Passive War Risk</h6>
                    <li style={{ marginLeft: '10px', fontSize: '13px' }}>Cover AED 500,000 Term 15 Years : Included</li>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab" tabindex="0">

            <div class="accordion" id="accordionSix">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#six-collapseOne" aria-expanded="true" aria-controls="six-collapseOne">
                  Glossary
                  </button>
                </h2>
                <div id="six-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                      
                      <h6 style={{fontWeight:'600',color:'#000'}}>Pre Existing Diseases</h6>
                      <li style={{fontSize:'13px',marginLeft:'10px'}}>
                      A pre-existing disease is a condition, ailment or injury that already exists at the time you buy an insurance policy.
                      </li>

                      <h6 style={{fontWeight:'600',color:'#000'}}>Accelerated Critical Illness</h6>
                      <li style={{fontSize:'13px',marginLeft:'10px'}}>
                      Any illness, disease, or health condition that is life threatening and requires comprehensive care and continuous monitoring.
                      </li>
                      
                      <h6 style={{fontWeight:'600',color:'#000'}}>Repatriation Benefit</h6>
                      <li style={{fontSize:'13px',marginLeft:'10px'}}>
                      Cost of preparing and returning the body to the home country in the event of death in a foreign country .
                      </li>
                      
                      <h6 style={{fontWeight:'600',color:'#000'}}>Passive War Risk</h6>
                      <li style={{fontSize:'13px',marginLeft:'10px'}}>
                      Payout incase of a direct or indirect consequence of war, war like operations or an act of terrorism provided you are not an active participant in the event.
                      </li>
                      
                      <h6 style={{fontWeight:'600',color:'#000'}}>Life Cover</h6>
                      <li style={{fontSize:'13px',marginLeft:'10px'}}>
                      Life Cover is the guaranteed amount the nominee will receive in case of the policyholder's death. Death can be due to any cause - sickness or accident.
                      </li>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>




      </div>
      <div
        class="modal fade"
        id="exampleModallelife"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container mt-3">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="d-flex gap-3">
                      <img
                        width="80px"
                        src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                        alt=""
                      />
                      <h6
                        style={{
                          fontSize: "12px",
                          marginTop: "12px",
                        }}
                      >
                        Oriental Insurance Comprehensive
                        (Garage)
                      </h6>
                    </div>
                  </div>

                  <div className="col-xs-12">
                    <div className="d-flex gap-5">
                      <button className="list_garage_">
                        <i class="fa-solid fa-download"></i>{" "}
                        Policy Wording
                      </button>
                      <button className="list_garage_">
                        <i class="fa-solid fa-download"></i>{" "}
                        View Quotation
                      </button>
                      <button className="list_garage_">
                        <i class="fa-solid fa-download"></i>{" "}
                        Garage List
                      </button>
                    </div>
                  </div>

                  <div className="col-xs-6 mt-3">
                    <div className="d-flex">
                      <p style={{ fontSize: "10px" }}>
                        Execss Amount (ZAR) <br />{" "}
                        <span style={{ fontWeight: "700" }}>
                          85,002
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "10px",
                          marginLeft: "auto",
                        }}
                      >
                        Car Value (ZAR) <br />{" "}
                        <span style={{ fontWeight: "700" }}>
                          500
                        </span>
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          style={{ fontSize: "12px" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What's Included{" "}
                          <span
                            style={{ marginLeft: "auto" }}
                          >
                            <i class="fa-solid fa-chevron-down"></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Third Party Damage Limit
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Upto ZAR 3.5 Million
                          </li>

                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Third Party Liability
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            UAE Only
                          </li>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          style={{ fontSize: "12px" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Addon's Details{" "}
                          <span
                            style={{ marginLeft: "auto" }}
                          >
                            <i class="fa-solid fa-chevron-down"></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            PA Cover for Driver - Limit Upto
                            ZAR 200,000
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Free
                          </li>

                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Natural Calamity Cover
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Free
                          </li>

                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Replacement of Vehicle
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            7 Days : ZAR 150
                          </li>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          style={{ fontSize: "12px" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Road Side Assistance{" "}
                          <span
                            style={{ marginLeft: "auto" }}
                          >
                            <i class="fa-solid fa-chevron-down"></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Mechanical Assistance
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Included
                          </li>

                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Battery Service
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Included
                          </li>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          style={{ fontSize: "12px" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What's Not included{" "}
                          <span
                            style={{ marginLeft: "auto" }}
                          >
                            <i class="fa-solid fa-chevron-down"></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Agency Repair
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Excluded
                          </li>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          style={{ fontSize: "12px" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          Document Required{" "}
                          <span
                            style={{ marginLeft: "auto" }}
                          >
                            <i class="fa-solid fa-chevron-down"></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            For Renewal Registration
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Driving License
                          </li>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Emirates ID (If Expired - Emirates
                            Id Renewal Application/Valid Visa)
                          </li>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Car Registration Card (Mulkiya).
                          </li>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Trade License (If the Car is
                            Registered Under Company Name)
                          </li>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          style={{ fontSize: "12px" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix"
                          aria-expanded="false"
                          aria-controls="flush-collapseSix"
                        >
                          FAqs{" "}
                          <span
                            style={{ marginLeft: "auto" }}
                          >
                            <i class="fa-solid fa-chevron-down"></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSix"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Upto how many days my car
                            insurance will be linked to the
                            RTA/Murror system from the start
                            date?
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            All Emirates except Dubai - 48
                            Hours
                          </li>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Dubai - 7 days.
                          </li>

                          <h6
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "#000",
                            }}
                          >
                            Contact Number for Registration
                            Center
                          </h6>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            All Emirates except Dubai - 800
                            3333
                          </li>
                          <li
                            style={{
                              fontSize: "10px",
                              marginBottom: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Dubai - 800 9090
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
