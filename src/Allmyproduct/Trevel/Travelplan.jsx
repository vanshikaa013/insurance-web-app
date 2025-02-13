import React from "react";
// import "./carplan.css";
import '../../Products/Carplan.css'
import { useState } from "react";
import {
  Modal,
  Box,
  Tabs,
  Tab,
  Button,
  Typography,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

import { Link } from "react-router-dom";
import FilterPlansModaltravel from "./FilterPlansModaltravel";

export const Travelplan = () => {
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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };
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
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800, // Increased width
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
  // import './abouttravel.css';

  const AccordionWithIcons = ({ sectionId }) => {
    const [activeAccordion, setActiveAccordion] = useState(`${sectionId}-collapseOne`); // Default open accordion
    const handleToggle = (accordionId) => {
      setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
    };
    return (
      <div className="accordion" id={`accordionExample-${sectionId}`}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button btn-font-cng mb-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${sectionId}-collapseOne`}
              aria-expanded={activeAccordion === `${sectionId}-collapseOne`}
              aria-controls={`${sectionId}-collapseOne`}
              onClick={() => handleToggle(`${sectionId}-collapseOne`)}
            >
              Q1. Why do I need insurance for travellers?{' '}
              <span style={{ marginLeft: 'auto' }}>
                <i className={`fa-solid ${activeAccordion === `${sectionId}-collapseOne` ? 'fa-minus' : 'fa-plus'}`}></i>
              </span>
            </button>
          </h2>
          <div
            id={`${sectionId}-collapseOne`}
            className={`accordion-collapse collapse ${activeAccordion === `${sectionId}-collapseOne` ? 'show' : ''}`}
            data-bs-parent={`#accordionExample-${sectionId}`}
          >
            <div className="accordion-body">
              <p className="my-fontspera">
                Travel insurance covers you against unexpected events such as medical emergencies, trip cancellations,
                lost or delayed luggage, and other unforeseen expenses that can occur while traveling.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button btn-font-cng collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${sectionId}-collapseTwo`}
              aria-expanded={activeAccordion === `${sectionId}-collapseTwo`}
              aria-controls={`${sectionId}-collapseTwo`}
              onClick={() => handleToggle(`${sectionId}-collapseTwo`)}
            >
              Q2. When to purchase travel insurance?{' '}
              <span style={{ marginLeft: 'auto' }}>
                <i className={`fa-solid ${activeAccordion === `${sectionId}-collapseTwo` ? 'fa-minus' : 'fa-plus'}`}></i>
              </span>
            </button>
          </h2>
          <div
            id={`${sectionId}-collapseTwo`}
            className={`accordion-collapse collapse ${activeAccordion === `${sectionId}-collapseTwo` ? 'show' : ''}`}
            data-bs-parent={`#accordionExample-${sectionId}`}
          >
            <div className="accordion-body">
              <p className="my-fontspera">
                It's best to buy insurance as soon as you book your trip. This way, you're covered for any pre-trip issues
                that might cause you to cancel such as illness or a family emergency.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container">
        {/* <div className='Carbuyinsuranceplanmedia'>
          <Healthplanmedia />
        </div> */}
        {/* <div className="container mt-4  Carbuyinsuranceplandesk"> */}
        <div className="container  mt-4 ">
          <div className="row">
            <div className="col-md-9 colmd9display colmd9displaytravel">
              <div className="d-flex car-plans-nav-bar travel-plans-bav-barul">
                <div>
                  <i
                    onClick={handleOpen}
                    class="fa-solid fa-bars-staggered colmd9displaytraveldflexd-n"
                  ></i>
                </div>
                <ul style={{ width: "100%" }}>
                  <input
                    style={{ borderRadius: "10px", }}
                    type="search"
                    className="form-control p-3"
                    placeholder="search"
                    name=""
                    id=""
                  />
                </ul>

                <ul className="d-flex car-plans-bav-barul">
                  <div>
                    <span style={{
                      fontSize: "12px",
                    }}
                      className="colmd9displaytraveldflexd-n"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRightoptop"
                      aria-controls="offcanvasRight"
                    >
                      <i class="fa-solid fa-pen-to-square"></i> Edit
                    </span>
                    <div
                      class="offcanvas offcanvas-end"
                      tabindex="-1"
                      id="offcanvasRightoptop"
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
                            <ol class="nav-item" role="presentation">
                              <button
                                class="nav-link active"
                                id="home-tabe"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Personal Details
                              </button>
                            </ol>
                            <ol class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profilee"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Trip Details
                              </button>
                            </ol>
                            {/* <h2 className="mb-4" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Personal Details</h2> */}
                          </div>
                          <div class="tab-content" id="nav-tabContent">
                            <form
                              class="tab-pane fade show active"
                              id="home"
                              role="tabpanel"
                              aria-labelledby="home-tabe"
                            >
                              <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                  Your Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  value="ganesh"
                                  readOnly
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  value="gc*******@gmail.com"
                                  readOnly
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="mobile"
                                  value="*****0077"
                                  readOnly
                                />
                              </div>

                              <div className="mb-3">
                                <label
                                  htmlFor="whatsapp"
                                  className="form-label"
                                >
                                  Get updates on WhatsApp
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">+971</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="whatsapp"
                                    value="*****0077"
                                    readOnly
                                  />
                                </div>
                                <div className="form-check form-switch mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="whatsappToggle"
                                    defaultChecked
                                  />
                                </div>
                              </div>

                              <div className="mb-3">
                                <label htmlFor="dob" className="form-label">
                                  Date of Birth (DD/MM/YYYY){" "}
                                  <span className="text-muted">(Optional)</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="dob"
                                  placeholder="DD/MM/YYYY"
                                />
                              </div>

                              <div className="" style={{ marginBottom: '70px' }}>
                                <label
                                  htmlFor="nationality"
                                  className="form-label"
                                >
                                  Nationality
                                </label>
                                <select
                                  id="nationality"
                                  className="form-select"
                                >
                                  <option value="saudi-arabian">
                                    Saudi Arabian
                                  </option>
                                  <option value="indian">Indian</option>
                                  <option value="american">American</option>
                                </select>
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
                              id="profilee"
                              role="tabpanel"
                              aria-labelledby="profile-tab"
                            >
                              <div className="container mt-4">
                                {/* <h2>Family Details</h2> */}
                                <form>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="startDate"
                                      className="form-label"
                                    >
                                      Trip Start Date (DD/MM/YYYY)
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="startDate"
                                      value="19/12/2024"
                                      readOnly
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="endDate"
                                      className="form-label"
                                    >
                                      Trip End Date (DD/MM/YYYY)
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="endDate"
                                      value="15/01/2025"
                                      readOnly
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="countryOrigin"
                                      className="form-label"
                                    >
                                      Select Country of Origin
                                    </label>
                                    <select
                                      id="countryOrigin"
                                      className="form-select"
                                    >
                                      <option value="usa">
                                        United States of America (USA)
                                      </option>
                                      <option value="uae">
                                        United Arab Emirates (UAE)
                                      </option>
                                      <option value="india">India</option>
                                    </select>
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="selectedCountries"
                                      className="form-label"
                                    >
                                      Selected Countries
                                    </label>
                                    <div className="input-group">
                                      <span className="form-control">
                                        United Arab Emirates (UAE)
                                      </span>
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                      >
                                        ✕
                                      </button>
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
                  <li class="nav-item" role="presentation">
                    <button
                      type="button"
                      class="btn btn-primary d-flex"
                      data-bs-toggle="modal" data-bs-target="#staticBackdropop"
                      style={{ alignItems: 'center' }}
                    >
                      <i class="fa-solid fa-filter px-2" /> Sort
                    </button>

                  </li>
                  <li className="nav-item" role="presentation">
                    <Button
                      variant="contained"
                      className="btn"
                      onClick={handleOpen}
                    >
                      <i class="fa-solid fa-filter px-2" /> Filter
                    </Button>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="filter-modal-title"
                    >
                      <FilterPlansModaltravel handleClose={handleClose} />
                    </Modal>
                  </li>
                </ul>
                <div
                  class="modal fade " id="staticBackdropop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
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
              <div
                className="border"
                style={{
                  width: "100%",
                  boxShadow: "0 3px 6px #00000029",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="d-flex px-3 py-3 colmd9displaytraveldflex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div
                    className="colmd9displaytraveldflex1"
                    style={{ width: "40%", alignItems: "center" }}
                  >
                    <div className="d-flex gap-2">
                      <div style={{ marginTop: '-15px' }}>
                        <img
                          src="	https://cdn.policybazaar.ae/pbuae/images/insurer-logos/orient-logo.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "14px",

                        }}>
                          Inbound Individual Standard
                        </h4>
                        <p style={{ fontSize: "10px" }}>Orient Insurance</p>
                      </div>
                    </div>
                    <div
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasBottom"
                      aria-controls="offcanvasBottom"
                    >
                      <input type="checkbox" name="" id="" /> compare
                      <div
                        class="offcanvas offcanvas-bottom"
                        tabindex="-1"
                        id="offcanvasBottom"
                        aria-labelledby="offcanvasBottomLabel"
                      >
                        <div class="offcanvas-body small">
                          <div class="container my-4">
                            <div className="d-flex align-items-center hide justify-content-between">
                              <div>
                                <h5
                                  style={{ color: "#001E15" }}
                                  class="text-start hide"
                                >
                                  Compare Plans{" "}
                                  <span
                                    style={{ color: "#001E15" }}
                                    class="text-decoration"
                                  >
                                    -
                                  </span>
                                </h5>
                              </div>
                            </div>
                            <div>
                              <button
                                style={{
                                  position: "relative",
                                  left: "100%",
                                  bottom: "20px",
                                }}
                                type="button"
                                class="btn-close hide"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                              ></button>
                            </div>

                            <div class="d-flex align-items-center justify-content-between hide">
                              <div class=" d-flex flex-row hide align-items-center">
                                <img
                                  src="https://cdn.policybazaar.ae/quote/new/src/assets/images/faq-icon.svg"
                                  alt="Logo"
                                  class="rounded me-2 hide"
                                />
                                <div>
                                  <h6 class="mb-1 hide">
                                    Inbound Individual Sta...
                                  </h6>
                                  <p class="text-muted mb-0 hide" hide>
                                    RAK Insurance
                                  </p>
                                </div>
                                <div class="text-center border hide border-primary rounded py-2 px-3">
                                  <i class="bi bi-plus-circle text-primary"></i>
                                  <p
                                    style={{ cursor: "pointer" }}
                                    class="text-primary mb-0 hide"
                                  >
                                    Add more +
                                  </p>
                                </div>

                                {/* <button class="btn btn-sm btn-light ms-auto text-danger border-0">
                                  <i class="bi bi-x-circle"></i>
                                </button> */}
                              </div>

                              <button
                                style={{ cursor: "pointer" }}
                                disabled
                                class="btn btn-danger text-white px-4 last-cmpr"
                              >
                                Compare ()
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="colmd9displaytraveldflex2"
                    style={{
                      width: "40%",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{ width: "100%", justifyContent: "space-between" }}
                      className="d-flex"
                    >
                      <div>
                        <p className="mb-0" style={{ fontSize: "10px" }}>
                          Medical Cover
                        </p>
                        <h6>ZAR 150,000</h6>
                      </div>
                      <div>
                        <p className="mb-0" style={{ fontSize: "10px" }}>
                          Loss of Passport
                        </p>
                        <h6>ZAR 500</h6>
                      </div>
                      <div>
                        <p className="mb-0" style={{ fontSize: "10px" }}>
                          Accidental Cover
                        </p>
                        <h6>NA</h6>
                      </div>
                    </div>
                    <div>
                      <p
                        className="mycolor colmd9displaytraveldflex3 travelplanmediagovimd"
                        style={{
                          fontSize: "12px",
                          position: "absolute",
                          bottom: "0px",
                        }}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRightlefttravel"
                        aria-controls="offcanvasRight"
                      >
                        view all features{" "}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </p>
                      <p
                        className="mycolor colmd9displaytraveldflex34dhesjd"
                        style={{
                          fontSize: "12px",
                          position: "absolute",
                          bottom: "-20px",
                        }}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModaltravellll"
                      >
                        view all featuresw{" "}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </p>
                      <div
                        class="modal fade"
                        id="exampleModaltravellll"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
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

                                  <div className="col-xs-12 mt-3">
                                    <div className="d-flex gap-5">
                                      <button className="list_garage_">
                                        <i class="fa-solid fa-download"></i>{" "}
                                        Policy Wording
                                      </button>
                                      <button className="list_garage_btt">
                                        {" "}
                                        Buy Now
                                      </button>

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
                                          Medical &  Emergency Benefis{" "}
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
                                            Emergency Medical Expenses
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            ZAR 150,000
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Emergency Medical Evacuation
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            ZAR 7,500
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Repatriation
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            ZAR 10,000
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            COVID-19 Extension for Medical Expenses Abroad
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            Up to ZAR 350/- per day (Max 14 days)
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
                                          Travel Inconvinience Benefits{" "}
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
                                            Loss of Travel Documents
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            ZAR 500
                                          </li>


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
                      <div
                        class="offcanvas offcanvas-end  my_ofcan"
                        tabindex="-1"
                        id="offcanvasRightlefttravel"
                        aria-labelledby="offcanvasRightLabel"
                      >
                        <div class="offcanvas-header off_cnhd">
                          <div className="d-flex gap-3">
                            <img
                              style={{ width: "20px" }}
                              src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                              alt="plan-logo"
                            />
                            <p
                              className=""
                              style={{
                                fontSize: "12px",
                                marginTop: '20px',
                                fontWeight: "600",
                                marginLeft: 'auto',
                              }}
                            >
                              Oriental Insurance <br /> Comprehensive (Garage)
                            </p>

                            <button style={{
                              height: '40px',
                              backgroundColor: '#fff',
                              color: '#003d2b',
                              border: '1px solid #003b2d',
                              width: '20%',
                              marginLeft: 'auto',
                              marginTop: '20px',
                              borderRadius: '8px'
                            }} className=""><i class="fa-solid fa-download"></i> Policy </button>
                            <p
                              className=""
                              style={{
                                marginLeft: 'auto',
                                fontSize: "12px",
                                marginTop: '10px',
                                fontWeight: "400",
                                color: "grey",
                              }}
                            >
                              {" "}
                              <p className="mb-0">
                                Premium <b className="text-dark">ZAR 46</b>{" "}
                              </p>{" "}
                              <button className="btn">Buy now</button>{" "}
                              <span
                                style={{ fontWeight: "800", color: "#000" }}
                              ></span>{" "}
                            </p>
                            <button
                              type="button"
                              class="btn-close"
                              style={{ marginRight: "0px" }}
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>
                          {/* <div className="d-flex gap-3 mt-3">
                                                            <button className='policy_word'>Policy Wording</button>
                                                            <button className='policy_word'>Veiw Quotation</button>

                                                            <div className="">
                                                                <button className='policy_wordk'>ZAR 26,00 YEARLY</button>
                                                            </div>

                                                        </div> */}
                        </div>
                        <div class="offcanvas-body">
                          <div className="p"></div>
                          <div className="car_value">
                            <div className="container">
                              <div
                                className="accordion accordion-flush acti-plans"
                                id="accordionFlushExample"
                              >
                                {/* Accordion Item 1 */}
                                <div className="accordion-item">
                                  <p className="accordion-header">
                                    <button
                                      className="accordion-button collapsed d-flex"
                                      type="button"
                                      onClick={() => handleToggle(1)}
                                      aria-expanded={
                                        expandedIndex === 1 ? "true" : "false"
                                      }
                                      aria-controls="flush-collapseOne"
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          width: "100%",
                                        }}
                                      >
                                        <div><h6 style={{ fontWeight: '600', fontSize: '15px' }}>
                                          Medical & Emergency Benefits
                                        </h6></div>
                                        <div>
                                          <i
                                            className={`fa-solid ${expandedIndex === 1
                                              ? "fa-angle-down"
                                              : "fa-angle-right"
                                              }`}
                                            style={{
                                              transition: "transform 0.3s ease",
                                            }}
                                          ></i>
                                        </div>
                                      </div>
                                    </button>
                                  </p>
                                  <div
                                    id="flush-collapseOne"
                                    className={`accordion-collapse collapse ${expandedIndex === 1 ? "show" : ""
                                      }`}
                                    data-bs-parent="#accordionFlushExample"
                                  >
                                    <div className="accordion-body">
                                      <strong className="safe">
                                        <b className="text-dark med_ex">
                                          Emergency Medical Expenses
                                        </b>
                                        <p className="pb-2 for_med">ZAR 150,000</p>
                                        <b className="text-dark med_ex">
                                          Emergency Medical Evacuation
                                        </b>
                                        <p className="pb-2 for_med">ZAR 7,500</p>
                                        <b className="text-dark med_ex">
                                          Repatriation
                                        </b>
                                        <p className="pb-2 for_med">ZAR 10,000</p>
                                        <b className="text-dark med_ex">
                                          COVID-19 Extension for Medical
                                          Expenses Abroad
                                        </b>
                                        <p className="pb-2">
                                          Up to ZAR 350/- per day (Max 14 days)
                                        </p>
                                      </strong>
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
                                      aria-expanded={
                                        expandedIndex === 2 ? "true" : "false"
                                      }
                                      aria-controls="flush-collapseTwo"
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          width: "100%",
                                        }}
                                      >
                                        <div>
                                          <h6 style={{ fontWeight: '600', fontSize: '15px' }}>Travel Inconvinience Benefits</h6></div>
                                        <div>
                                          <i
                                            className={`fa-solid ${expandedIndex === 2
                                              ? "fa-angle-down"
                                              : "fa-angle-right"
                                              }`}
                                            style={{
                                              transition: "transform 0.3s ease",
                                            }}
                                          ></i>
                                        </div>
                                      </div>
                                    </button>
                                  </p>
                                  <div
                                    id="flush-collapseTwo"
                                    className={`accordion-collapse collapse ${expandedIndex === 2 ? "show" : ""
                                      }`}
                                    data-bs-parent="#accordionFlushExample"
                                  >
                                    <div className="accordion-body">
                                      <strong className="safe">
                                        <b className="text-dark med_ex ">
                                          Loss of Travel Documents
                                        </b>
                                        <p className="for_med">ZAR 500</p>
                                      </strong>
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
                  <div
                    style={{ width: "17%" }}
                    className="colmd9displaytraveldflex4"
                  >
                    <p>
                      Premium<b>ZAR 46</b>
                    </p>
                    <Link to="/travelplanform2">
                      {" "}
                      <button className="btn" style={{ height: "46px" }}>
                        Buy now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3  four_card ">
              <div className="my-card rounded-2 p-3 shadow" style={{ marginTop: '24px' }}>
                <div
                  style={{ marginBottom: "1px solid red" }}
                  className="car_name"
                >
                  <p style={{ fontWeight: "600", fontSize: "13px" }}>
                    Showing 118 plans for{" "}
                    <span style={{ float: "right" }}>
                      <i
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRightop"
                        aria-controls="offcanvasRight"
                        class="fa-solid fa-pen"
                      ></i>
                    </span>
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
                                class="nav-link trip_detail active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#homeem"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Personal Details
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link trip_detail"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profilele"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Trip Details
                              </button>
                            </li>
                            {/* <h2 className="mb-4" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Personal Details</h2> */}
                          </div>
                          <div class="tab-content" id="nav-tabContent">
                            <form
                              class="tab-pane fade show active"
                              id="homeem"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                            >
                              <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">
                                  Your Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  value="ganesh"
                                  readOnly
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  value="gc*******@gmail.com"
                                  readOnly
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="mobile"
                                  value="*****0077"
                                  readOnly
                                />
                              </div>

                              <div className="mb-3">
                                <label
                                  htmlFor="whatsapp"
                                  className="form-label"
                                >
                                  Get updates on WhatsApp
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">+971</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="whatsapp"
                                    value="*****0077"
                                    readOnly
                                  />
                                </div>
                                <div className="form-check form-switch mt-2">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="whatsappToggle"
                                    defaultChecked
                                  />
                                </div>
                              </div>

                              <div className="mb-3">
                                <label htmlFor="dob" className="form-label">
                                  Date of Birth (DD/MM/YYYY){" "}
                                  <span className="text-muted">(Optional)</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="dob"
                                  placeholder="DD/MM/YYYY"
                                />
                              </div>

                              <div className="mb-3 pb-5" style={{ marginBottom: '30px' }}>
                                <label
                                  htmlFor="nationality"
                                  className="form-label"
                                >
                                  Nationality
                                </label>
                                <select
                                  id="nationality"
                                  className="form-select"
                                >
                                  <option value="saudi-arabian">
                                    Saudi Arabian
                                  </option>
                                  <option value="indian">Indian</option>
                                  <option value="american">American</option>
                                </select>
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
                              id="profilele"
                              role="tabpanel"
                              aria-labelledby="profile-tab"
                            >
                              <div className="container mt-4">
                                {/* <h2>Family Details</h2> */}
                                <form>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="startDate"
                                      className="form-label"
                                    >
                                      Trip Start Date (DD/MM/YYYY)
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="startDate"
                                      value="19/12/2024"
                                      readOnly
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="endDate"
                                      className="form-label"
                                    >
                                      Trip End Date (DD/MM/YYYY)
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="endDate"
                                      value="15/01/2025"
                                      readOnly
                                    />
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="countryOrigin"
                                      className="form-label"
                                    >
                                      Select Country of Origin
                                    </label>
                                    <select
                                      id="countryOrigin"
                                      className="form-select"
                                    >
                                      <option value="usa">
                                        United States of America (USA)
                                      </option>
                                      <option value="uae">
                                        United Arab Emirates (UAE)
                                      </option>
                                      <option value="india">India</option>
                                    </select>
                                  </div>

                                  <div className="mb-3">
                                    <label
                                      htmlFor="selectedCountries"
                                      className="form-label"
                                    >
                                      Selected Countries
                                    </label>
                                    <div className="input-group">
                                      <span className="form-control">
                                        United Arab Emirates (UAE)
                                      </span>
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                      >
                                        ✕
                                      </button>
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
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "300",
                        color: "black",
                      }}
                    >
                      Self (19 years)
                    </span>
                  </p>
                  <hr />
                </div>
              </div>

              {/* PB Benefits */}
              <div
                style={{ borderRadius: "7px" }}
                className="p-2 w-100 boxes shadow my-3"
              >
                <div className="d-flex p-1 gap-1">
                  <img
                    className="w-100"
                    style={{ maxWidth: "50px", height: "60px" }}
                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/faq-icon.svg"
                    alt="Guide Icon"
                  />
                  <p style={{ fontSize: "11px", color: '#000', marginTop: '5px' }} className="">
                    Frequently Asked Question <br />
                    <span style={{ fontSize: "13px" }}>
                      about Travel Insurance{" "}
                    </span>
                  </p>
                </div>
                <button
                  style={{
                    marginLeft: '35%',
                    padding: '5px',
                    fontSize: '11px',
                    marginTop: '-25px',
                  }}
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleMol"
                >
                  Know More
                </button>

                <div
                  className="modal fade my-mode"
                  id="exampleMol"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                          <img
                            src="https://cdn.policybazaar.ae/pbuae/images/faq-travel-image-2.svg"
                            alt=""
                          />{' '}
                          Frequently Asked Questions
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex align-items-start">
                          <div
                            className="nav  flex-column nav-pills me-3 border-end pe-3 pt-0"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <button
                              className="nav-link active "
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected="true"
                            >
                              Home
                            </button>
                            <button
                              className="nav-link"
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-profile"
                              aria-selected="false"
                            >
                              Profile
                            </button>
                            <button
                              className="nav-link"
                              id="v-pills-messages-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-messages"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-messages"
                              aria-selected="false"
                            >
                              Messages
                            </button>
                          </div>

                          <div className="tab-content w-100" id="v-pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="v-pills-home"
                              role="tabpanel"
                              aria-labelledby="v-pills-home-tab"
                            >
                              <AccordionWithIcons sectionId="home" />
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-profile"
                              role="tabpanel"
                              aria-labelledby="v-pills-profile-tab"
                            >
                              <AccordionWithIcons sectionId="profile" />
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-messages"
                              role="tabpanel"
                              aria-labelledby="v-pills-messages-tab"
                            >
                              <AccordionWithIcons sectionId="messages" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button 
                  
                  style={{
                    marginLeft: '35%',
                    padding: '5px',
                    fontSize: '11px',
                    marginTop: '-25px',

                  }} className="btn "  data-bs-toggle="modal" data-bs-target="#exampleMol">
                    Know More
                  </button>
                  <div class="modal fade" id="exampleMol" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <AboutTravel/>  
                      </div>
                    </div>
                  </div> */}
              </div>

              <div
                style={{ borderRadius: "7px" }}
                className="p-2 w-100 boxes shadow my-3"
              >
                <div className="d-flex p-1 gap-1">
                  <img
                    className="w-100"
                    style={{ maxWidth: "50px", height: "60px" }}
                    src="https://cdn.policybazaar.ae/pbuae/images/claim-banner-icon.png"
                    alt="Guide Icon"
                  />
                  <p style={{ fontSize: "11px", color: '#000', marginTop: '8px' }} className="">
                    Step-by-Step Guide for<br />
                    <span style={{ fontSize: "13px" }}>
                      Travel Insurance Claims{" "}
                    </span>
                  </p>
                </div>
                <Link to="/claim">
                  <button style={{
                    marginLeft: '35%',
                    padding: '5px',
                    fontSize: '11px',
                    marginTop: '-25px',
                  }} className="btn">
                    Know More
                  </button>
                </Link>
              </div>

              <div className="advan_tag mt-3 shadow px-1 py-2 rounded-2">
                <div className="d-flex gap-2">
                  <img style={{ marginLeft: '10px' }}
                    className="rounded mt-2"
                    src="https://i.ibb.co/qJ7YnpQ/0bc82fa4-5fa0-4cee-aad6-88a0a0678edb.jpg"
                    width="30px"
                    alt=""
                  />
                  <h6 className="mt-3">Advantage</h6>
                </div>
                <hr />
                <div
                  className="accordion accordion-flush acti-plans"
                  id="accordionFlushExample"
                >
                  {/* Accordion Item 1 */}
                  <div style={{ borderBottom: 'none' }} className="accordion-item mt-2">
                    <p className="accordion-header">
                      <button
                        className="accordion-button collapsed d-flex"
                        type="button"
                        onClick={() => handleToggle(1)}
                        aria-expanded={expandedIndex === 1 ? "true" : "false"}
                        aria-controls="flush-collapseOne"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <div>
                            <img
                              src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/lowest-price.svg"
                              alt=""
                            />{" "}
                            &nbsp; Lowest Price Guaranteed
                          </div>
                          <div>
                            <i
                              className={`fa-solid ${expandedIndex === 1
                                ? "fa-angle-down"
                                : "fa-angle-right"
                                }`}
                              style={{ transition: "transform 0.3s ease" }}
                            ></i>
                          </div>
                        </div>
                      </button>
                    </p>
                    <div
                      id="flush-collapseOne"
                      className={`accordion-collapse collapse ${expandedIndex === 1 ? "show" : ""
                        }`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="safe">
                          You won’t find a better price anywhere else.
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div style={{ borderBottom: 'none' }} className="accordion-item mt-2">
                    <p className="accordion-header">
                      <button
                        className="accordion-button collapsed join"
                        type="button"
                        onClick={() => handleToggle(2)}
                        aria-expanded={expandedIndex === 2 ? "true" : "false"}
                        aria-controls="flush-collapseTwo"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <div>
                            <img
                              src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/expert-advice.svg"
                              alt=""
                            />
                            &nbsp; Expert Advice
                          </div>
                          <div>
                            <i
                              className={`fa-solid ${expandedIndex === 2
                                ? "fa-angle-down"
                                : "fa-angle-right"
                                }`}
                              style={{ transition: "transform 0.3s ease" }}
                            ></i>
                          </div>
                        </div>
                      </button>
                    </p>
                    <div
                      id="flush-collapseTwo"
                      className={`accordion-collapse collapse ${expandedIndex === 2 ? "show" : ""
                        }`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="safe">
                          We offer unbiased guidance to ensure that you choose
                          the right insurance plan.
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div style={{ borderBottom: 'none' }} className="accordion-item mt-2">
                    <p className="accordion-header">
                      <button
                        className="accordion-button collapsed join"
                        type="button"
                        onClick={() => handleToggle(3)} // Handle click to toggle
                        aria-expanded={expandedIndex === 3 ? "true" : "false"}
                        aria-controls="flush-collapseThree"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <div>
                            <img
                              src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/claims-assistance.svg"
                              alt=""
                            />
                            &nbsp; Claims Assistance
                          </div>
                          <div>
                            <i
                              className={`fa-solid ${expandedIndex === 3
                                ? "fa-angle-down"
                                : "fa-angle-right"
                                }`}
                              style={{ transition: "transform 0.3s ease" }}
                            ></i>
                          </div>
                        </div>
                      </button>
                    </p>
                    <div
                      id="flush-collapseThree"
                      className={`accordion-collapse collapse ${expandedIndex === 3 ? "show" : ""
                        }`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="safe">
                          Our dedicated claims support team ensures that you
                          receive full assistance at the time of filing the
                          claim.
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 4 */}
                  <div style={{ borderBottom: 'none' }} className="accordion-item mt-2">
                    <p className="accordion-header">
                      <button
                        className="accordion-button collapsed join"
                        type="button"
                        onClick={() => handleToggle(4)} // Handle click to toggle
                        aria-expanded={expandedIndex === 4 ? "true" : "false"}
                        aria-controls="flush-collapseFour"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <div>
                            <img
                              src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/easy-refunds.svg"
                              alt=""
                            />
                            &nbsp; Easy Refunds
                          </div>
                          <div>
                            <i
                              className={`fa-solid ${expandedIndex === 4
                                ? "fa-angle-down"
                                : "fa-angle-right"
                                }`}
                              style={{ transition: "transform 0.3s ease" }}
                            ></i>
                          </div>
                        </div>
                      </button>
                    </p>
                    <div
                      id="flush-collapseFour"
                      className={`accordion-collapse collapse ${expandedIndex === 4 ? "show" : ""
                        }`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="safe">
                          In case you are not happy with your purchase, you can
                          cancel your policy with just a phone call.
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 5 */}
                  <div className="accordion-item mt-2">
                    <p className="accordion-header">
                      <button
                        className="accordion-button collapsed join"
                        type="button"
                        onClick={() => handleToggle(5)}
                        aria-expanded={expandedIndex === 5 ? "true" : "false"}
                        aria-controls="flush-collapseFive"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <div>
                            <img
                              src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/exciting-rewards.svg"
                              alt=""
                            />
                            &nbsp; Exciting Rewards
                          </div>
                          <div>
                            <span><i
                              className={`fa-solid ${expandedIndex === 5
                                ? "fa-angle-down"
                                : "fa-angle-right"
                                }`}
                              style={{ transition: "transform 0.3s ease" }}
                            ></i></span>
                          </div>
                        </div>
                      </button>
                    </p>
                    <div
                      id="flush-collapseFive"
                      className={`accordion-collapse collapse ${expandedIndex === 5 ? "show" : ""
                        }`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="safe">
                          Receive exciting vouchers from top brands on every
                          booking.
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
