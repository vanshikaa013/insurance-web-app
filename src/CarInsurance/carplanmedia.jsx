import React from 'react'
// import './carplan.css'
import '../Products/carplanmedia.css'
import { useState } from 'react';
import { Modal, Box, Tabs, Tab, Button, Typography, Slider, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import FilterPlansModaltravel from '../Allmyproduct/Trevel/FilterPlansModaltravel';

const Carplanmedia = () => {
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
  
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [carValue, setCarValue] = useState(88000); // Default car value
    const [sortOption, setSortOption] = useState(""); // State for sort radio buttons
    const [repairType, setRepairType] = useState(""); // State for repair type radio buttons
    const [insurer, setInsurer] = useState(""); // State for insurer radio buttons
    const minValue = 85002; // Minimum car value
    const maxValue = 109087; // Maximum car value

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleSliderChange = (event, newValue) => {
        setCarValue(newValue);
    };
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    const [whatsappUpdates, setWhatsappUpdates] = useState(true);

    const handleWhatsappToggle = () => {
        setWhatsappUpdates(!whatsappUpdates);
    };
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, // Increased width
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    };
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-12 d-flex">
              <div
                style={{ width: "100%", justifyContent: "space-between" }}
                className="d-flex carplanmediaheader"
              >
                <p  type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRightop"
                      aria-controls="offcanvasRight">
                  <b>Car Detail</b>
                  {/* <b>Car Plan</b> */}
                </p>
                <p onClick={handleOpen}>
                  <b>Car Filter</b>
                  {/* <b>Car Plan</b> */}
                </p>
                 <Modal
                   open={open}
                   onClose={handleClose}
                              >
                                <FilterPlansModaltravel/>
                </Modal>
              </div>
              <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRightop"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 id="offcanvasRightLabel" className="btn">
                        Edit Detail
                      </h5>
                      <button
                        type="button"
                        class="btn-close btn text-reset"
                        style={{ marginRight: "24px" }}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div class="offcanvas-body">
                      <div className="container">
                        <div
                          className="d-flex"
                          class="nav nav-tabs"
                          id="myTab"
                          role="tablist"
                        >
                          {/* <h2 className="mb-4" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Car Details</h2> */}
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Home
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Profile
                            </button>
                          </li>
                          {/* <h2 className="mb-4" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Personal Details</h2> */}
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                          <form
                            class="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            {/* Model Year */}
                            <div className="mb-3">
                              <label htmlFor="modelYear" className="form-label">
                                Model Year
                              </label>
                              <select
                                className="form-select"
                                id="modelYear"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select Year
                                </option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                              </select>
                            </div>

                            {/* Car Make */}
                            <div className="mb-3">
                              <label htmlFor="carMake" className="form-label">
                                Car Make
                              </label>
                              <select
                                className="form-select"
                                id="carMake"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select Make
                                </option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Ford">Ford</option>
                              </select>
                            </div>

                            {/* Car Model */}
                            <div className="mb-3">
                              <label htmlFor="carModel" className="form-label">
                                Car Model
                              </label>
                              <select
                                className="form-select"
                                id="carModel"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select Model
                                </option>
                                <option value="Land Cruiser">
                                  Land Cruiser
                                </option>
                                <option value="Camry">Camry</option>
                                <option value="Corolla">Corolla</option>
                              </select>
                            </div>

                            {/* Car Variant */}
                            <div className="mb-3">
                              <label
                                htmlFor="carVariant"
                                className="form-label"
                              >
                                Car Variant
                              </label>
                              <select
                                className="form-select"
                                id="carVariant"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select Variant
                                </option>
                                <option value="EXR 2.7L">EXR 2.7L</option>
                                <option value="GXR 3.5L">GXR 3.5L</option>
                              </select>
                            </div>

                            {/* Registration Date */}
                            <div className="mb-3">
                              <label
                                htmlFor="registrationDate"
                                className="form-label"
                              >
                                Registration Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="registrationDate"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                How many months without any Accident?
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                Car Type
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                Seating capacity
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                Cylinder Number
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                Previous Insurer
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                Where do you want to register your car?
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                What is Your Vehicle's Specification?
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="accidentHistory"
                                className="form-label"
                              >
                                Previous policy type
                              </label>
                              <select
                                className="form-select"
                                id="accidentHistory"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                <option value="Never met with an Accident">
                                  Never met with an Accident
                                </option>
                                <option value="1-6 Months">1-6 Months</option>
                                <option value="6-12 Months">6-12 Months</option>
                              </select>
                            </div>
                            {/* Registration Date */}
                            <div className="mb-3">
                              <label
                                htmlFor="registrationDate"
                                className="form-label"
                              >
                                Previous Policy Expiry Date (DD/MM/YYYY)
                                (Optional)
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="registrationDate"
                              />
                            </div>
                            {/* Registration Date */}
                            <div className="mb-3  pb-5">
                              <label
                                htmlFor="registrationDate"
                                className="form-label"
                              >
                                When do you want to register your car?
                                (DD/MM/YYYY)
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="registrationDate"
                              />
                            </div>
                            <div className="submit-btn-car-plans">
                              <div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Edit details
                                </button>
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Updates
                                </button>
                              </div>
                            </div>
                          </form>
                          <form
                            class="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div className="container mt-4">
                              <h2>Family Details</h2>
                              <form>
                              <div class="offcanvas-body">
                <div className="container my-5">
                  <h2 className="mb-4">Personal Details</h2>
                  <form>
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        defaultValue="ganesh"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        defaultValue="gc******@gmail.com"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        defaultValue="*****0077"
                      />
                    </div>

                    {/* WhatsApp Updates */}
                    {/* <div className="mb-3 d-flex align-items-center">
          <label htmlFor="whatsapp" className="form-label me-3">
            Get updates on WhatsApp
          </label>
          <div className="d-flex align-items-center">
            <select className="form-select me-2" style={{ width: "80px" }}>
              <option value="+971">+971</option>
            </select>
            <input
              type="text"
              className="form-control me-2"
              defaultValue="*****0077"
              disabled
            />
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="whatsappToggle"
                checked={whatsappUpdates}
                onChange={handleWhatsappToggle}
              />
            </div>
          </div>
        </div> */}

                    {/* Nationality */}
                    <div className="mb-3">
                      <label htmlFor="nationality" className="form-label">
                        Nationality
                      </label>
                      <select
                        className="form-select"
                        id="nationality"
                        defaultValue="Indian"
                      >
                        <option value="Indian">Indian</option>
                        <option value="UAE">UAE</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">
                        Date of Birth (DD/MM/YYYY)
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        defaultValue="1994-12-07"
                      />
                    </div>

                    {/* UAE Driving Experience */}
                    <div className="mb-3">
                      <label htmlFor="uZARrivingExp" className="form-label">
                        UAE Driving Exp.
                      </label>
                      <select
                        className="form-select"
                        id="uZARrivingExp"
                        defaultValue="0 - 6 Months"
                      >
                        <option value="0 - 6 Months">0 - 6 Months</option>
                        <option value="6 - 12 Months">6 - 12 Months</option>
                        <option value="1+ Year">1+ Year</option>
                      </select>
                    </div>

                    {/* International Driving Experience */}
                    <div className="mb-3">
                      <label htmlFor="intlDrivingExp" className="form-label">
                        International Driving Exp.
                      </label>
                      <select
                        className="form-select"
                        id="intlDrivingExp"
                        defaultValue="0 - 6 Months"
                      >
                        <option value="0 - 6 Months">0 - 6 Months</option>
                        <option value="6 - 12 Months">6 - 12 Months</option>
                        <option value="1+ Year">1+ Year</option>
                      </select>
                    </div>

                    {/* Company Vehicle Question */}
                    <div className="mb-3">
                      <label className="form-label">
                        Are you using a company vehicle for personal use?
                        (Optional)
                      </label>
                      <div>
                        <label className="form-check-label me-3">
                          <input
                            type="radio"
                            name="companyVehicle"
                            className="form-check-input"
                            value="Yes"
                          />{" "}
                          Yes
                        </label>
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="companyVehicle"
                            className="form-check-input"
                            value="No"
                          />{" "}
                          No
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">
                        UAE Driving License Issue Date (DD/MM/YYYY) (Optional)
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        defaultValue="1994-12-07"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="submit-btn-car-plans p-0">
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Edit Details
                        </button>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
                              </form>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          <div
            className="d-flex car-value-ZAR"
            style={{ justifyContent: "space-between" }}
          >
          </div>
          <div className="col-md-12 colmd9display">
            <div className="d-flex car-plans-nav-bar-media">
              <ul class="nav nav-tabs  nav_tabs_" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active nvlinaf"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Third party liability 
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Comprehensive
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link nvlinal"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    All Plans
                  </button>
                </li>
              </ul>
              <div
                class="modal fade"
                id="exampleModalOne"
                tabindex="-1"
                aria-labelledby="exampleModalLabelOne"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabelOne">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="modal_body">
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="relevance"
                              checked
                            />
                            Relevance
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="low_to_high"
                            />
                            Premium Low to High
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="high_to_low"
                            />
                            Premium High to Low
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="excess_low_to_high"
                            />
                            Excess Amount Low to High
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="excess_high_to_low"
                            />
                            Excess Amount High to Low
                          </label>
                        </div>

                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="excess_high_to_low"
                            />
                            Insurance Rating High to Low
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="excess_high_to_low"
                            />
                            Insurance Rating High to Low
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="excess_high_to_low"
                            />
                            Car Value High to Low
                          </label>
                        </div>
                        <div
                          style={{ border: "1px solid #000" }}
                          class="sort_option rounded-1 p-3"
                        >
                          <label>
                            <input
                              type="radio"
                              name="sort"
                              value="excess_high_to_low"
                            />
                            Car Value Amount High to Low
                          </label>
                        </div>
                      </div>
                      <div class="modal_footer">
                        <button class="apply_btn">Apply</button>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
            <div class="tab-content" id="myTabContent">
              {/* 1========== */}
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <div className="insucardacko">
                  <div className="gdudgiayudiefhdf p-2">
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <div className="dnjsnbdjh">
                          <img
                            src="	https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                            alt=""
                          />
                        </div>
                        <div
                          style={{ fontSize: "14px", alignContent: "center" }}
                        >
                          Oriental Insurance Comprehensive (Garage)
                        </div>
                      </div>
                      <div style={{ alignContent: "center" }}>
                        <i
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          class="fa-solid fa-angle-right mycolor"
                        ></i>
                        <div
                          class="modal fade"
                          id="exampleModal"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h6 className="mycolor" style={{ fontSize: "12px" }}>
                        Car value (ZAR)
                      </h6>
                      <h4
                        className="text-center"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        84002
                      </h4>
                    </div>
                    <div className="mycolor" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottomcarmedia"
                        aria-controls="offcanvasBottom">
                      <input type="radio" name="" id="" />
                      &nbsp;compare
                    </div>
                    <div
                        class="offcanvas offcanvas-bottom"
                        tabindex="-1"
                        id="offcanvasBottomcarmedia"
                        aria-labelledby="offcanvasBottomLabel"
                      >
                        <div class="offcanvas">
                          <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                            Compare Plans
                          </h5>
                        </div>
                        <div class="offcanvas-body p-3 small">
                          <div className="d-flex">
                            <h6>Compare Plans</h6>
                            <button
                              style={{ marginLeft: "auto" }}
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="">
                            <img
                              className="p-0"
                              style={{
                                width: "200px",
                                border: "1px solid grey",
                              }}
                              src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                              alt=""
                            />

                            <button
                              style={{
                                padding: "10px",
                                backgroundColor: "#fff",
                                marginLeft: "10px",
                                border: "1px solid forestgreen",
                                borderRadius: "5px",
                              }}
                            >
                              Add More +
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h4 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Addons
                      </h4>
                      <h6
                        className="mycolor"
                        style={{ fontSize: "12px" }}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottomm"
                        aria-controls="offcanvasBottom"
                      >
                        4 Included &1 optional
                      </h6>
                      <div
                        class="offcanvas offcanvas-bottom container"
                        tabindex="-1"
                        id="offcanvasBottomm"
                        aria-labelledby="offcanvasBottomLabel"
                        style={{height:'200px'}}
                      >
                        <div
                          style={{ backgroundColor: "#fff" }}
                          class="offcanvas-header"
                        >
                          <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                            Available Addnos
                          </h5>
                          <button
                            type="button"
                            class="btn-close text-reset ml-auto"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            style={{marginRight:'0px'}}
                          >
                            <i class="fa-solid fa-xmark mycolor"></i>
                          </button>
                        </div>
                        <div class="offcanvas-body small">
                          <div
                            className="d-flex pt-1"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div>
                              <p>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Driver cover : Limit up to 200000
                              </p>
                            </div>
                            <div className="mycolor">included</div>
                          </div>
                          <div
                            className="d-flex pt-1"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div>
                              <p>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger cover : Limit up to 200000
                              </p>
                            </div>
                            <div className="mycolor">included</div>
                          </div>
                          <div
                            className="d-flex pt-1"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div>
                              <p>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Roadside Assistance :
                              </p>
                            </div>
                            <div className="mycolor">included</div>
                          </div>
                          <div
                            className="d-flex pt-1"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div>
                              <p>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Natural Calamities :
                              </p>
                            </div>
                            <div className="mycolor">included</div>
                          </div>
                          <div
                            className="d-flex pt-1"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div>
                              <p>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Replacement of Vehicle (5 Days)
                              </p>
                            </div>
                            <div className="mycolor">ZAR 150</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mycolor">
                      <button className="btn">
                        <b>ZAR 2730 Yearly</b>
                      </button>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p style={{ fontSize: "12px", textAlign: "right" }}>
                      4 Intreset free payments of ZAR 682.5
                    </p>
                  </div>
                </div>
              </div>
              {/* 2============ */}
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div className="insucardacko">
                  <div className="gdudgiayudiefhdf p-2">
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <div className="dnjsnbdjh">
                          <img
                            src="	https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                            alt=""
                          />
                        </div>
                        <div
                          style={{ fontSize: "14px", alignContent: "center" }}
                        >
                          Oriental Insurance Comprehensive (Garage)
                        </div>
                      </div>
                      <div style={{ alignContent: "center" }}>
                        <i
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalle"
                          class="fa-solid fa-angle-right mycolor"
                        ></i>
                        <div
                          class="modal fade"
                          id="exampleModalle"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h6 className="mycolor" style={{ fontSize: "12px" }}>
                        Car value (ZAR)
                      </h6>
                      <h4
                        className="text-center"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        84002
                      </h4>
                    </div>
                    <div className="mycolor">
                      <input type="radio" name="" id="" />
                      &nbsp;compare
                    </div>
                  </div>
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h4 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Addons
                      </h4>
                      <h6 className="mycolor" style={{ fontSize: "12px" }}>
                        4 Included & 1 optional
                      </h6>
                    </div>
                    <div className="mycolor">
                      <button className="btn">
                        <b>ZAR 2730 Yearly</b>
                      </button>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p style={{ fontSize: "12px", textAlign: "right" }}>
                      4 Intreset free payments of ZAR 682.5
                    </p>
                  </div>
                </div>
              </div>
              {/* 3============ */}
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <div className="insucardacko">
                  <div className="gdudgiayudiefhdf p-2">
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="d-flex">
                        <div className="dnjsnbdjh">
                          <img
                            src="	https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                            alt=""
                          />
                        </div>
                        <div
                          style={{ fontSize: "14px", alignContent: "center" }}
                        >
                          Oriental Insurance Comprehensive (Garage)
                        </div>
                      </div>
                      <div style={{ alignContent: "center" }}>
                        <i
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalel"
                          class="fa-solid fa-angle-right mycolor"
                        ></i>
                        <div
                          class="modal fade"
                          id="exampleModalel"
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h6 className="mycolor" style={{ fontSize: "12px" }}>
                        Car value (ZAR)
                      </h6>
                      <h4
                        className="text-center"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        84002
                      </h4>
                    </div>
                    <div className="mycolor">
                      <input type="radio" name="" id="" />
                      &nbsp;compare
                    </div>
                  </div>
                  <div
                    className="d-flex p-2"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <h4 style={{ fontSize: "12px", fontWeight: "bold" }}>
                        Addons
                      </h4>
                      <h6 className="mycolor" style={{ fontSize: "12px" }}>
                        4 Included &1 optional
                      </h6>
                    </div>
                    <div className="mycolor">
                      <button className="btn">
                        <b>ZAR 2730 Yearly</b>
                      </button>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p style={{ fontSize: "12px", textAlign: "right" }}>
                      4 Intreset free payments of ZAR 682.5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Carplanmedia
