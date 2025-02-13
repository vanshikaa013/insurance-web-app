import React from "react";
// import './carplan.css'
import "../Products/carplanmedia.css";
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
import FilterPlansModaltravel from "../Allmyproduct/Trevel/FilterPlansModaltravel";

const Healthplanmedia = () => {
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
  return (
    <>
      <div style={{ position: "fixed", bottom: "80px", width: "100%" }}>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div className="mx-3">
            {" "}
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              sort
            </button>
          </div>
          <div className="mx-3">
            <button
              style={{}}
              variant="contained"
              className="btn"
              onClick={handleOpen}
            >
              filter
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="filter-modal-title"
      >
       <FilterPlansModaltravel handleClose={handleClose} />
      </Modal>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
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
      <div className="container mt-4">
        <div
          className="d-flex car-value-ZAR"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <input type="text" placeholder="search" className="form-control healthinput"  style={{borderRadius:'12px'}}/>
          </div>
          <div>
            <ul className="edit-icon rounded-3">
              {/* <i onClick={handleOpen} class="fa-solid fa-bars-staggered"></i> */}
              <i
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRightopmedd"
                aria-controls="offcanvasRight"
                class="fa-solid fa-pen"
              ></i>
              Edit
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRightopmedd"
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
                <div style={{ backgroundColor: "#fff" }} class="offcanvas-body">
                  <div className="container">
                    <div
                      className="d-flex"
                      class="nav nav-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <h2
                        className="mb-4"
                        class="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Car Details
                      </h2>
                      <h2
                        className="mb-4"
                        class="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Personal Details
                      </h2>
                    </div>
                    <div class="tab-content" id="nav-tabContent">
                      <form
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
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
                            <option value="Land Cruiser">Land Cruiser</option>
                            <option value="Camry">Camry</option>
                            <option value="Corolla">Corolla</option>
                          </select>
                        </div>

                        {/* Car Variant */}
                        <div className="mb-3">
                          <label htmlFor="carVariant" className="form-label">
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
                            Previous Policy Expiry Date (DD/MM/YYYY) (Optional)
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
                            When do you want to register your car? (DD/MM/YYYY)
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="registrationDate"
                          />
                        </div>
                        <div className="submit-btn-car-plans">
                          <div className="m-0">
                            <button type="submit" className="btn btn-primary">
                              Edit details
                            </button>
                          </div>
                          <div>
                            <button type="submit" className="btn btn-primary">
                              Updates
                            </button>
                          </div>
                        </div>
                      </form>
                      <form>
                        <div className="container mt-4">
                          <h2>Family Details</h2>
                          <form>
                            {/* Self Section */}
                            <div className="mb-3">
                              <label>Self</label>
                              <div className="row">
                                <div className="col-md-6">
                                  <select
                                    className="form-select"
                                    value={familyData.self.gender}
                                    onChange={(e) =>
                                      handleInputChange(
                                        "self",
                                        "gender",
                                        null,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="date"
                                    className="form-control"
                                    value={familyData.self.dob}
                                    onChange={(e) =>
                                      handleInputChange(
                                        "self",
                                        "dob",
                                        null,
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Spouse Section */}
                            <div className="mb-3">
                              <label>Spouse</label>
                              <div className="row">
                                <div className="col-md-6">
                                  <select
                                    className="form-select"
                                    value={familyData.spouse.gender}
                                    onChange={(e) =>
                                      handleInputChange(
                                        "spouse",
                                        "gender",
                                        null,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="date"
                                    className="form-control"
                                    value={familyData.spouse.dob}
                                    onChange={(e) =>
                                      handleInputChange(
                                        "spouse",
                                        "dob",
                                        null,
                                        e.target.value
                                      )
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
                                  <div className="col-md-6">
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={son.dob || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "sons",
                                          "dob",
                                          index,
                                          e.target.value
                                        )
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
                                  <div className="col-md-6">
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={daughter.dob || ""}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "daughters",
                                          "dob",
                                          index,
                                          e.target.value
                                        )
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
                                  handleInputChange(
                                    "father",
                                    "dob",
                                    null,
                                    e.target.value
                                  )
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
                                  handleInputChange(
                                    "mother",
                                    "dob",
                                    null,
                                    e.target.value
                                  )
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
            </ul>
          </div>
        </div>
        <div
          className="col-md-12 colmd9display mt-4 p-2"
          style={{ border: "1px solid gray" }}
        >
          <div className="insucardacko">
            <div className="d-flex" style={{ alignItems: "center" }}>
              <div style={{ border: "3px solid #f5f5f5", padding: "10px" }}>
                <img
                  style={{ width: "80px" }}
                  src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/dubai-insurance.jpeg"
                  alt=""
                />
              </div>
              <b className="px-2">Ecare Blue</b>
            </div>
            <div>
              <div
                className="d-flex pt-2"
                style={{ justifyContent: "space-between" }}
              >
                <p>Medical Cover (ZAR)</p> <p>100000</p>
              </div>
              <div
                className="d-flex pt-2"
                style={{ justifyContent: "space-between" }}
              >
                <p>Pharmacy Limit</p> <p>UPto ZAR 5000</p>
              </div>
              <div
                className="d-flex pt-2"
                style={{ justifyContent: "space-between" }}
              >
                <p>Network List</p> <p>E care Blue</p>
              </div>
            </div>
            <div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <p style={{ fontSize: "12px" }}>
                  copay :{" "}
                  <span className="mycolor">
                    Change option{" "}
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
                </p>
                <p
                  className="mycolor"
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalmeda"
                >
                  Plan Detail{" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                </p>
                <div
                  class="modal fade"
                  id="exampleModalmeda"
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
                                  Oriental Insurance Comprehensive (Garage)
                                </h6>
                              </div>
                            </div>

                            <div className="col-xs-12">
                              <div className="d-flex gap-5">
                                <button className="list_garage_">
                                  <i class="fa-solid fa-download"></i> Policy
                                  Wording
                                </button>
                                <button className="list_garage_">
                                  <i class="fa-solid fa-download"></i> View
                                  Quotation
                                </button>
                                <button className="list_garage_">
                                  <i class="fa-solid fa-download"></i> Garage
                                  List
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
                                  <span style={{ fontWeight: "700" }}>500</span>
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
                                    <span style={{ marginLeft: "auto" }}>
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
                                    <span style={{ marginLeft: "auto" }}>
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
                                      PA Cover for Driver - Limit Upto ZAR
                                      200,000
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
                                    <span style={{ marginLeft: "auto" }}>
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
                                    <span style={{ marginLeft: "auto" }}>
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
                                    <span style={{ marginLeft: "auto" }}>
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
                                      Emirates ID (If Expired - Emirates Id
                                      Renewal Application/Valid Visa)
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
                                      Trade License (If the Car is Registered
                                      Under Company Name)
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
                                    <span style={{ marginLeft: "auto" }}>
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
                                      Upto how many days my car insurance will
                                      be linked to the RTA/Murror system from
                                      the start date?
                                    </h6>
                                    <li
                                      style={{
                                        fontSize: "10px",
                                        marginBottom: "10px",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      All Emirates except Dubai - 48 Hours
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
                                      Contact Number for Registration Center
                                    </h6>
                                    <li
                                      style={{
                                        fontSize: "10px",
                                        marginBottom: "10px",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      All Emirates except Dubai - 800 3333
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
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <img
                    src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                    alt=""
                  />
                  &nbsp; 10%
                </div>
                <div>
                  <img
                    src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                    alt=""
                  />
                  &nbsp; 20%
                </div>
                <div>
                  <img
                    src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                    alt=""
                  />
                  &nbsp; 10%
                </div>
                <div>
                  <img
                    src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                    alt=""
                  />
                  &nbsp; 20%
                </div>
              </div>
              <div
                className="d-flex mt-3"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ fontSize: "12px" }}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottommed"
                  aria-controls="offcanvasBottom"
                >
                  <input type="radio" name="" id="" /> Add to Compare
                  <div
                    class="offcanvas offcanvas-bottom"
                    tabindex="-1"
                    id="offcanvasBottommed"
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
                          style={{ width: "200px", border: "1px solid grey" }}
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
                <div>
                  <Link style={{ color: "#000" }} to="/healthplanform">
                    <button className="btn">ZAR 1242 Yearly</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            View 1 more Plan
          </p>
          <div class="collapse" id="collapseExample">
            <div className="insucardacko">
              <div className="d-flex" style={{ alignItems: "center" }}>
                <div style={{ border: "3px solid #f5f5f5", padding: "10px" }}>
                  <img
                    style={{ width: "80px" }}
                    src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/dubai-insurance.jpeg"
                    alt=""
                  />
                </div>
                <b className="px-2">Ecare Blue</b>
              </div>
              <div>
                <div
                  className="d-flex pt-2"
                  style={{ justifyContent: "space-between" }}
                >
                  <p>Medical Cover (ZAR)</p> <p>100000</p>
                </div>
                <div
                  className="d-flex pt-2"
                  style={{ justifyContent: "space-between" }}
                >
                  <p>Pharmacy Limit</p> <p>UPto ZAR 5000</p>
                </div>
                <div
                  className="d-flex pt-2"
                  style={{ justifyContent: "space-between" }}
                >
                  <p>Network List</p> <p>E care Blue</p>
                </div>
              </div>
              <div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: "12px" }}>
                    copay :{" "}
                    <span className="mycolor">
                      Change option{" "}
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </p>
                  <p className="mycolor" style={{ fontSize: "12px" }}>
                    Plan Detail{" "}
                    <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
                  </p>
                  <div
                    class="offcanvas offcanvas-end  my_ofcan"
                    tabindex="-1"
                    id="offcanvasRightleftmed"
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
                          <span style={{ fontWeight: "800", color: "#000" }}>
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
                          <span style={{ fontWeight: "800", color: "#000" }}>
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
                        <button className="policy_word">Policy Wording</button>
                        <button className="policy_word">Veiw Quotation</button>

                        <div className="">
                          <button className="policy_wordk">
                            ZAR 26,00 YEARLY
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="offcanvas-body">
                      <div className="p"></div>
                      <div className="car_value">
                        <div className="">
                          <ul
                            class="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                What's Include
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                Addon Details
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                              >
                                Garage List
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro"
                                id="pills-road-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-road"
                                type="button"
                                role="tab"
                                aria-controls="pills-road"
                                aria-selected="false"
                              >
                                Road Side Assistance
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro"
                                id="pills-included-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-included"
                                type="button"
                                role="tab"
                                aria-controls="pills-included"
                                aria-selected="false"
                              >
                                What's Not Included
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro"
                                id="pills-doc-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-doc"
                                type="button"
                                role="tab"
                                aria-controls="pills-doc"
                                aria-selected="false"
                              >
                                Documents Required
                              </button>
                            </li>

                            <li class="nav-item" role="presentation">
                              <button
                                class="pills_pro"
                                id="pills-faq-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-faq"
                                type="button"
                                role="tab"
                                aria-controls="pills-faq"
                                aria-selected="false"
                              >
                                FAQ
                              </button>
                            </li>
                          </ul>
                          <div class="tab-content" id="pills-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                              tabindex="0"
                            >
                              <div className="d-flex gap-4 container">
                                <button className="feature_bene">
                                  Features & Benifits
                                </button>
                                <button className="feature_bene">
                                  Included
                                </button>
                              </div>

                              <div class="accordion mt-3" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      style={{ fontSize: "14px" }}
                                      class="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Features & Benefits
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
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

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Damage to Insured vehicle
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

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Blood Money
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Unlimited (As per UAE Court)
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      style={{ fontSize: "14px" }}
                                      class="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                    >
                                      Included
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseTwo"
                                    class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div class="accordion-body">
                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Windscreen Damage
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
                                        Loss of Personal Belongings
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Upto ZAR 4,000
                                      </li>

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
                                        Upto ZAR 4,000
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Personal Injury
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Upto ZAR 4,000
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Off Road Cover
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        For CarType 4WD only : Included
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Ambulance Service
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
                                        Valet Parking Cover
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
                                        Taxi Fares
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
                                        Fire & Theft Cover
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Upto ZAR 1000
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                              tabindex="0"
                            >
                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      class="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Addons
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div class="accordion-body">
                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        PA Cover for Driver - Limit Upto ZAR
                                        200,000
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
                                        PA Cover for Passenger - Limit Upto ZAR
                                        200,000
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
                                        Road Side Assistance
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
                              </div>
                            </div>

                            <div
                              class="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                              tabindex="0"
                            >
                              <div className="">
                                <div className="d-flex gap-2">
                                  <select
                                    class="form-select my-data"
                                    aria-label="Default select example"
                                  >
                                    <option selected>City</option>
                                    <option value="1">All </option>
                                    <option value="2">Dubai</option>
                                    <option value="3">Abu Dhabi</option>
                                  </select>

                                  <select
                                    class="form-select my-data"
                                    aria-label="Default select example"
                                  >
                                    <option selected>Garage Name</option>
                                    <option value="1">All </option>
                                    <option value="2">K.M Garage</option>
                                    <option value="3">Golden Workshop</option>
                                  </select>

                                  <input
                                    style={{
                                      width: "350px",
                                      border: "1px solid #dee2e6",
                                      borderRadius: "5px",
                                    }}
                                    name="fsrch"
                                    id="fsrch"
                                    placeholder="Search 🔍"
                                  />
                                </div>

                                <p>
                                  *Garage list are subject to change as per the
                                  discretion of the Insurer.
                                </p>

                                <table class="table text-center mt-3   table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Garage Name </th>
                                      <th>City/Area</th>
                                      <th>Garage Address</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        K.M GARAGE
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        ANEESH, RASHIDIYA (DUBAI), 04-2855099 /
                                        055-1080928
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        GOLDEN WORKSHOP{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        SUNNY/SIBIN, RASHIDIYA (DUBAI),
                                        04-2852966 / 056-5257850
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        HAMZA GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        ADNAN, RASHIDIYA (DUBAI), 04-2858575 /
                                        050-3791347
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        BOBY AUTO GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        MELSON, RASHIDIYA (DUBAI), 04-2854897 /
                                        050-7561094
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        style={{ fontSize: "12px" }}
                                        scope="row"
                                      >
                                        AUTOZONE GARAGE{" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        Dubai/RASHIDIYA (DUBAI){" "}
                                      </td>
                                      <td style={{ fontSize: "12px" }}>
                                        TAHIR, RASHIDIYA (DUBAI), 04-2857121
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-road"
                              role="tabpanel"
                              aria-labelledby="pills-road-tab"
                              tabindex="0"
                            >
                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      class="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Road Side Assistance Benefits
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
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

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Lockout Service
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
                                        Lockout Service
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
                                        Flat Tyre Service
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
                                        Fuel Delivery Service
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
                              </div>
                            </div>

                            <div
                              class="tab-pane fade"
                              id="pills-included"
                              role="tabpanel"
                              aria-labelledby="pills-included-tab"
                              tabindex="0"
                            >
                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      class="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Not Included
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
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
                              </div>
                            </div>

                            <div
                              class="tab-pane fade"
                              id="pills-doc"
                              role="tabpanel"
                              aria-labelledby="pills-doc-tab"
                              tabindex="0"
                            >
                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      class="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Documents Required
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
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
                                        Emirates ID (If Expired - Emirates Id
                                        Renewal Application/Valid Visa)
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
                                        {" "}
                                        If Previous Insurance is Expired -
                                        Passing & Pictures of the car from all 4
                                        side.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        {" "}
                                        If Changing from Third Party Insurance
                                        to Comprehensive Insurance Plan -
                                        Passing and Current Dated Car Pictures
                                        from all the 4 sides.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Trade License (If the Car is Registered
                                        Under Company Name)
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        No Objection Certificate for the Driver
                                        (If the Car is Registered Under Company
                                        Name)
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        KYC (Only for Noor Takaful Plans) (If
                                        the Car is Registered Under Company
                                        Name)
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        For Pre-Owned Car
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
                                        Emirates ID (If Expired - Emirates Id
                                        Renewal Application/Valid Visa)
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
                                        {" "}
                                        If Previous Insurance is Expired -
                                        Passing & Pictures of the car from all 4
                                        side.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        {" "}
                                        If Changing from Third Party Insurance
                                        to Comprehensive Insurance Plan -
                                        Passing and Current Dated Car Pictures
                                        from all the 4 sides.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Trade License (If the Car is Registered
                                        Under Company Name)
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        No Objection Certificate for the Driver
                                        (If the Car is Registered Under Company
                                        Name)
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        KYC (Only for Noor Takaful Plans) (If
                                        the Car is Registered Under Company
                                        Name)
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        For Brand New Car
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
                                        Emirates ID (If Expired - Emirates Id
                                        Renewal Application/Valid Visa)
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
                                        {" "}
                                        If Previous Insurance is Expired -
                                        Passing & Pictures of the car from all 4
                                        side.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        {" "}
                                        If Changing from Third Party Insurance
                                        to Comprehensive Insurance Plan -
                                        Passing and Current Dated Car Pictures
                                        from all the 4 sides.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        Trade License (If the Car is Registered
                                        Under Company Name)
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        No Objection Certificate for the Driver
                                        (If the Car is Registered Under Company
                                        Name)
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        KYC (Only for Noor Takaful Plans) (If
                                        the Car is Registered Under Company
                                        Name)
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-faq"
                              role="tabpanel"
                              aria-labelledby="pills-faq-tab"
                              tabindex="0"
                            >
                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header">
                                    <button
                                      class="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      Glossary
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div class="accordion-body">
                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Upto how many days my car insurance will
                                        be linked to the RTA/Murror system from
                                        the start date?
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        All Emirates except Dubai - 48 Hours
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
                                        Contact Number for Registration Center
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        All Emirates except Dubai - 800 3333
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

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Excess Amount
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        The amount paid by the Participant per
                                        accident in case of faulty & Unkown
                                        accidents, according to the
                                        Schedule/Policy document.
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Why is it mandatory to buy car insurance
                                        in the UAE?
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        A good car insurance policy provides
                                        full coverage for your vehicle against
                                        bodily injury, car damage, and death to
                                        any third party. Furthermore, it covers
                                        all expenses you have spent on the
                                        repair work incurred due to car
                                        accidents.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        • The RTA law requires you to get an
                                        insurance policy once you purchase a new
                                        vehicle in the UAE, otherwise, you may
                                        bear heavy penalties and fines if
                                        driving uninsured.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        • The penalty or fine for an uninsured
                                        vehicle is around 500 Dirhams,
                                        confiscation of the car for seven days,
                                        and four black points applied to the
                                        license.
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Roadside Assistance
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        It offers cover for breakdown or
                                        accident recovery services, including
                                        vehicle towing, Flat tyre
                                        service,Mechnical first aid and battery
                                        jump-starts.
                                      </li>

                                      <h6
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: "700",
                                          color: "#000",
                                        }}
                                      >
                                        Is car Insurance transferable in UAE?
                                      </h6>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        If your current insurance policy is
                                        valid for less than 6 months, you cannot
                                        transfer it to the new owner.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        If it is valid for more than 6 months,
                                        then you need to check with your
                                        insurance company whether they provide a
                                        transfer option or not.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        You can also apply for a refund in case
                                        they don’t transfer it to a new owner.
                                      </li>
                                      <li
                                        style={{
                                          fontSize: "10px",
                                          marginBottom: "10px",
                                          marginLeft: "10px",
                                        }}
                                      >
                                        To share the policy, you need to share
                                        all the details of the new owner. The
                                        company will then check if the new owner
                                        meets the edibility criteria or not.
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
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <img
                      src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                      alt=""
                    />
                    &nbsp; 10%
                  </div>
                  <div>
                    <img
                      src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                      alt=""
                    />
                    &nbsp; 20%
                  </div>
                  <div>
                    <img
                      src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                      alt=""
                    />
                    &nbsp; 10%
                  </div>
                  <div>
                    <img
                      src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                      alt=""
                    />
                    &nbsp; 20%
                  </div>
                </div>
                <div
                  className="d-flex mt-3"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "12px" }}>
                    <input type="radio" name="" id="" /> Add to Compare
                  </div>
                  <div>
                    <button className="btn">ZAR 1242 Yearly</button>
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

export default Healthplanmedia;
