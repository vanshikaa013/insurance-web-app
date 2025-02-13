import React from "react";
import "../Products/carplan.css";
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
import Carplanmedia from "./carplanmedia";
import FilterPlansModaltravel from "../Allmyproduct/Trevel/FilterPlansModaltravel";

const Carplan = () => {
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
      <div className="Carbuyinsuranceplanmedia">
        <Carplanmedia />
      </div>
      <div className="container mt-4 Carbuyinsuranceplandesk">
        <div className="row">
          <div className="col-md-3  four_card ">
            <div className="my-card rounded-2 p-3 shadow " style={{marginTop:'24px'}}>
              <div
                style={{ marginBottom: "1px solid red" }}
                className="car_name"
              >
                <p style={{ fontWeight: "600", fontSize: "13px" }}>
                  Toyota Land Cruiser Prado{" "}
                  <span style={{ float: "right" }}>
                    <i
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRightcarp"
                      aria-controls="offcanvasRight"
                      class="fa-solid fa-pen"
                    ></i>
                  </span>
                  <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRightcarp"
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
                        <h4 className="mt-2 text-center">Car Details</h4>
                        <form>
                          {/* Model Year */}
                          <div className="mb-3">
                            <label
                              style={{ fontSize: "14px" }}
                              htmlFor="modelYear"
                              className="form-label"
                            >
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
                            <label
                              style={{ fontSize: "14px" }}
                              htmlFor="carMake"
                              className="form-label"
                            >
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
                            <label
                              style={{ fontSize: "14px" }}
                              htmlFor="carModel"
                              className="form-label"
                            >
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
                            <label
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                              style={{ fontSize: "14px" }}
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
                    EXR | 2.7L2020GCC | Spec
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
                  }}
                >
                  Car Value{" "}
                  <span style={{ float: "right", color: "forestgreen" }}>
                    {" "}
                    ZAR 103,900 <i class="fa-solid fa-angle-right"></i>
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "300",
                    color: "black",
                  }}
                >
                  Personal Details{" "}
                  <span
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRightdetailcarp"
                    aria-controls="offcanvasRight"
                    style={{ float: "right", color: "forestgreen" }}
                  >
                    {" "}
                    ganesh <i class="fa-solid fa-angle-right"></i>
                  </span>
                </p>

                <div
                  class="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRightdetailcarp"
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
                      <h4 className="text-center mt-2">Personal Details</h4>
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
                          <label
                            htmlFor="intlDrivingExp"
                            className="form-label"
                          >
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
                            UAE Driving License Issue Date (DD/MM/YYYY)
                            (Optional)
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            defaultValue="1994-12-07"
                          />
                        </div>

                        {/* Action Buttons */}
                        <div className="submit-btn-car-plans">
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
                </div>
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
              <div className="d-flex gap-3">
                <img
                  className="rounded"
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
                <div className="accordion-item">
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
                <div className="accordion-item mt-3">
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
                        We offer unbiased guidance to ensure that you choose the
                        right insurance plan.
                      </strong>
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
                        receive full assistance at the time of filing the claim.
                      </strong>
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
                <div className="accordion-item mt-3">
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
                          <i
                            className={`fa-solid ${expandedIndex === 5
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
              {/* <div class="accordion acti-plans" id="accordionExample">
                                <div class="accordion-item  ">
                                    <p class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Lowest Price Guaranteed
                                        </button>
                                    </p>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>You won’t find a better price anywhere else.</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <p class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Expert Advice
                                        </button>
                                    </p>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.We offer unbiased guidance to ensure that you choose the right insurance plan.</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <p class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Claims Assistance
                                        </button>
                                    </p>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Our dedicated claims support team ensures that you receive full assistance at the time of filing the claim.</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <p class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Easy Refunds
                                        </button>
                                    </p>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>In case you are not happy with your purchase, you can cancel your policy with just a phone call.</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <p class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Exciting Rewards
                                        </button>
                                    </p>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Receive exciting vouchers from top brands on every booking.
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

              {/* <div className="text-center">
                                <button className='more_bttn'>Know more</button>
                            </div> */}
            </div>
          </div>

          <div className="col-md-9 colmd9display">
            <div className="d-flex car-plans-nav-bar">
              {/* <ul class="nav nav-tabs  nav_tabs_" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active nvlinaf" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Third party liability</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Comprehensive</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link nvlinal" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">All Plans</button>
                </li>
              </ul> */}
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Third party liability</button>
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Comprehensive</button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">All Plans</button>
                </div>
              </nav>
              <ul className="d-flex car-plans-bav-barul">
                <li class="nav-item" role="presentation">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalOnee"
                  >
                    <i class="fa-solid fa-filter"> &nbsp; </i>sort
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={handleOpen}
                  >
                    <i class="fa-solid fa-filter"> &nbsp;</i>  Filter
                  </Button>
                </li>
              </ul>
              <div
                class="modal fade " id="exampleModalOnee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
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
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="filter-modal-title"
              >

                <FilterPlansModaltravel />
              </Modal>
            </div>

            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><div class="insurance_card">
                {/* <div className="incimg">
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                      alt="Oriental Insurance Logo"
                      class="company_logo"
                    />
                  </div> */}
                <div className="incesdjsjs p-2">
                  <div class="header_section">
                    <div class="company_info">
                      <div>
                        <img
                          src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                          alt="Oriental Insurance Logo"
                          class="company_logo"
                        />
                      </div>
                      <div class="company_name">
                        Oriental Insurance Comprehensive (Garage)
                        <br />
                        <span>
                          Garage List <i class="fa-solid fa-circle-info"></i>
                        </span>
                      </div>
                      <div className="cn-carvalue">
                        <p className="" style={{ color: '#7c8698', fontWeight: '500', fontSize: '10px' }}>
                          Car Value (ZAR){" "}
                          <i class="fa-solid fa-circle-info"></i>
                          <br />
                          <strong>85,002</strong>
                        </p>
                      </div>
                      <div className="cn-carvalue">
                        <p className="">
                          Excess Amount (ZAR){" "}
                          <i class="fa-solid fa-circle-info"></i>
                          <br />
                          <strong>500</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="details_section">
                    <div class="addons_section">
                      <p>
                        <strong>Addons:</strong> 4 Included and 1 Optional
                      </p>
                      <div className="addonjdsksj">
                        <div className="addnodekdfh">
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Driver Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Roadside Assistance :
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Orange Card :
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>ZAR 150</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                          </ul>
                        </div>
                        <div className="addonhjsjdbsjkb">
                          <button className="btn">ZAR 2,730 Yearly</button>
                          <div className="addos-sectionsvshj">
                            <p>Split in 4 interest-free payments of </p>
                            <b>ZAR 682.5</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="addfooter_section">
                    <div>
                      {/* <p> Referral Case</p> */}
                    </div>
                    <div className="addfodbdjksd">
                      <div>
                        <p style={{ fontSize: '16px', color: '#000', fontWeight: '600' }} type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRightleftcar"
                          aria-controls="offcanvasRight"
                        >Plan Details</p>
                        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                      </div>
                      <div
                        class="offcanvas offcanvas-end  my_ofcan"
                        tabindex="-1"
                        id="offcanvasRightleftcar"
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
                                    Details
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
                                    Co-Payments
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
                                    Network List
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
                                    Documents Required
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
                                    Issuance & Activation TAT
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
                                    Cancellation Process
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

                                  <div
                                    class="accordion mt-3"
                                    id="accordionExample"
                                  >
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
                                            PA Cover for Passenger - Limit Upto
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
                                        <option value="3">
                                          Golden Workshop
                                        </option>
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
                                      *Garage list are subject to change as per
                                      the discretion of the Insurer.
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
                                            ANEESH, RASHIDIYA (DUBAI),
                                            04-2855099 / 055-1080928
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
                                            ADNAN, RASHIDIYA (DUBAI), 04-2858575
                                            / 050-3791347
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
                                            MELSON, RASHIDIYA (DUBAI),
                                            04-2854897 / 050-7561094
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            Upto how many days my car insurance
                                            will be linked to the RTA/Murror
                                            system from the start date?
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
                                            The amount paid by the Participant
                                            per accident in case of faulty &
                                            Unkown accidents, according to the
                                            Schedule/Policy document.
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Why is it mandatory to buy car
                                            insurance in the UAE?
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            A good car insurance shop provides
                                            full coverage for your vehicle
                                            against bodily injury, car damage,
                                            and death to any third party.
                                            Furthermore, it covers all expenses
                                            you have spent on the repair work
                                            incurred due to car accidents.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            • The RTA law requires you to get an
                                            insurance shop once you purchase a
                                            new vehicle in the UAE, otherwise,
                                            you may bear heavy penalties and
                                            fines if driving uninsured.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            • The penalty or fine for an
                                            uninsured vehicle is around 500
                                            Dirhams, confiscation of the car for
                                            seven days, and four black points
                                            applied to the license.
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
                                            accident recovery services,
                                            including vehicle towing, Flat tyre
                                            service,Mechnical first aid and
                                            battery jump-starts.
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Is car Insurance transferable in
                                            UAE?
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            If your current insurance shop is
                                            valid for less than 6 months, you
                                            cannot transfer it to the new owner.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            If it is valid for more than 6
                                            months, then you need to check with
                                            your insurance company whether they
                                            provide a transfer option or not.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            You can also apply for a refund in
                                            case they don’t transfer it to a new
                                            owner.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            To share the policy, you need to
                                            share all the details of the new
                                            owner. The company will then check
                                            if the new owner meets the edibility
                                            criteria or not.
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
                      <div>
                        <p style={{ fontSize: '16px', color: '#000', display: 'flex', fontWeight: '600' }} type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottomcar"
                          aria-controls="offcanvasBottom"> <input type="radio" name="" id="" style={{}} />&nbsp; Add to Compare</p>
                        <div
                          class="offcanvas offcanvas-bottom"
                          tabindex="-1"
                          id="offcanvasBottomcar"
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
                    </div>
                  </div>
                </div>
              </div></div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><div class="insurance_card">
                {/* <div className="incimg">
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                      alt="Oriental Insurance Logo"
                      class="company_logo"
                    />
                  </div> */}
                <div className="incesdjsjs p-2">
                  <div class="header_section">
                    <div class="company_info">
                      <div>
                        <img
                          src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                          alt="Oriental Insurance Logo"
                          class="company_logo"
                        />
                      </div>
                      <div class="company_name">
                        Oriental Insurance Comprehensive (Garage)
                        <br />
                        <span>
                          Garage List <i class="fa-solid fa-circle-info"></i>
                        </span>
                      </div>
                      <div className="cn-carvalue">
                        <p className="" style={{ color: '#7c8698', fontWeight: '500', fontSize: '10px' }}>
                          Car Value (ZAR){" "}
                          <i class="fa-solid fa-circle-info"></i>
                          <br />
                          <strong>85,002</strong>
                        </p>
                      </div>
                      <div className="cn-carvalue">
                        <p className="">
                          Excess Amount (ZAR){" "}
                          <i class="fa-solid fa-circle-info"></i>
                          <br />
                          <strong>500</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="details_section">
                    <div class="addons_section">
                      <p>
                        <strong>Addons:</strong> 4 Included and 1 Optional
                      </p>
                      <div className="addonjdsksj">
                        <div className="addnodekdfh">
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Driver Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Driver Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            {/* <li>
                                <div>
                                  {" "}
                                  <input type="checkbox" name="" id="" />
                                  &nbsp;Passenger Cover:
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>Included</div>
                              </li> */}
                          </ul>
                        </div>
                        <div className="addonhjsjdbsjkb">
                          <button className="btn">ZAR 2,730 Yearly</button>
                          <div className="addos-sectionsvshj">
                            <p>Split in 4 interest-free payments of </p>
                            <b>ZAR 682.5</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="addfooter_section">
                    <div>
                      {/* <p> Referral Case</p> */}
                    </div>
                    <div className="addfodbdjksd">
                      <div>
                        <p style={{ fontSize: '16px', color: '#000', fontWeight: '600' }} type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRightleftcarse"
                          aria-controls="offcanvasRight"
                        >Plan Details</p>
                        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                      </div>
                      <div
                        class="offcanvas offcanvas-end  my_ofcan"
                        tabindex="-1"
                        id="offcanvasRightleftcarse"
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
                                    Details
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
                                    Co-Payments
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
                                    Network List
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
                                    Documents Required
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
                                    Issuance & Activation TAT
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
                                    Cancellation Process
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

                                  <div
                                    class="accordion mt-3"
                                    id="accordionExample"
                                  >
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
                                            PA Cover for Passenger - Limit Upto
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
                                        <option value="3">
                                          Golden Workshop
                                        </option>
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
                                      *Garage list are subject to change as per
                                      the discretion of the Insurer.
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
                                            ANEESH, RASHIDIYA (DUBAI),
                                            04-2855099 / 055-1080928
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
                                            ADNAN, RASHIDIYA (DUBAI), 04-2858575
                                            / 050-3791347
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
                                            MELSON, RASHIDIYA (DUBAI),
                                            04-2854897 / 050-7561094
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            Upto how many days my car insurance
                                            will be linked to the RTA/Murror
                                            system from the start date?
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
                                            The amount paid by the Participant
                                            per accident in case of faulty &
                                            Unkown accidents, according to the
                                            Schedule/Policy document.
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Why is it mandatory to buy car
                                            insurance in the UAE?
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            A good car insurance shop provides
                                            full coverage for your vehicle
                                            against bodily injury, car damage,
                                            and death to any third party.
                                            Furthermore, it covers all expenses
                                            you have spent on the repair work
                                            incurred due to car accidents.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            • The RTA law requires you to get an
                                            insurance shop once you purchase a
                                            new vehicle in the UAE, otherwise,
                                            you may bear heavy penalties and
                                            fines if driving uninsured.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            • The penalty or fine for an
                                            uninsured vehicle is around 500
                                            Dirhams, confiscation of the car for
                                            seven days, and four black points
                                            applied to the license.
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
                                            accident recovery services,
                                            including vehicle towing, Flat tyre
                                            service,Mechnical first aid and
                                            battery jump-starts.
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Is car Insurance transferable in
                                            UAE?
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            If your current insurance shop is
                                            valid for less than 6 months, you
                                            cannot transfer it to the new owner.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            If it is valid for more than 6
                                            months, then you need to check with
                                            your insurance company whether they
                                            provide a transfer option or not.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            You can also apply for a refund in
                                            case they don’t transfer it to a new
                                            owner.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            To share the policy, you need to
                                            share all the details of the new
                                            owner. The company will then check
                                            if the new owner meets the edibility
                                            criteria or not.
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
                      <div>
                        <p style={{ fontSize: '16px', color: '#000', display: 'flex', fontWeight: '600' }} type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottomcarse"
                          aria-controls="offcanvasBottom"> <input type="radio" name="" id="" style={{}} />&nbsp; Add to Compare</p>
                        <div
                          class="offcanvas offcanvas-bottom"
                          tabindex="-1"
                          id="offcanvasBottomcarse"
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
                    </div>
                  </div>
                </div>
              </div></div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="insurance_card">
                {/* <div className="incimg">
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                      alt="Oriental Insurance Logo"
                      class="company_logo"
                    />
                  </div> */}
                <div className="incesdjsjs p-2">
                  <div class="header_section">
                    <div class="company_info">
                      <div>
                        <img
                          src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                          alt="Oriental Insurance Logo"
                          class="company_logo"
                        />
                      </div>
                      <div class="company_name">
                        Oriental Insurance Comprehensive (Garage)
                        <br />
                        <span>
                          Garage List <i class="fa-solid fa-circle-info"></i>
                        </span>
                      </div>
                      <div className="cn-carvalue">
                        <p className="" style={{ color: '#7c8698', fontWeight: '500', fontSize: '10px' }}>
                          Car Value (ZAR){" "}
                          <i class="fa-solid fa-circle-info"></i>
                          <br />
                          <strong>85,002</strong>
                        </p>
                      </div>
                      <div className="cn-carvalue">
                        <p className="">
                          Excess Amount (ZAR){" "}
                          <i class="fa-solid fa-circle-info"></i>
                          <br />
                          <strong>500</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="details_section">
                    <div class="addons_section">
                      <p>
                        <strong>Addons:</strong> 4 Included and 1 Optional
                      </p>
                      <div className="addonjdsksj">
                        <div className="addnodekdfh">
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Driver Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <input type="checkbox" name="" id="" />
                                &nbsp;Driver Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            {/* <li>
                                <div>
                                  {" "}
                                  <input type="checkbox" name="" id="" />
                                  &nbsp;Passenger Cover:
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>Included</div>
                              </li> */}
                          </ul>
                        </div>
                        <div className="addonhjsjdbsjkb">
                          <button className="btn">ZAR 2,730 Yearly</button>
                          <div className="addos-sectionsvshj">
                            <p>Split in 4 interest-free payments of </p>
                            <b>ZAR 682.5</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="addfooter_section">
                    <div>
                      {/* <p> Referral Case</p> */}
                    </div>
                    <div className="addfodbdjksd">
                      <div>
                        <p style={{ fontSize: '16px', color: '#000', fontWeight: '600' }} type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRightleftcarth"
                          aria-controls="offcanvasRight"
                        >Plan Details</p>
                        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
                      </div>
                      <div
                        class="offcanvas offcanvas-end  my_ofcan"
                        tabindex="-1"
                        id="offcanvasRightleftcarth"
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
                                    Details
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
                                    Co-Payments
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
                                    Network List
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
                                    Documents Required
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
                                    Issuance & Activation TAT
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
                                    Cancellation Process
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

                                  <div
                                    class="accordion mt-3"
                                    id="accordionExample"
                                  >
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
                                            PA Cover for Passenger - Limit Upto
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
                                        <option value="3">
                                          Golden Workshop
                                        </option>
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
                                      *Garage list are subject to change as per
                                      the discretion of the Insurer.
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
                                            ANEESH, RASHIDIYA (DUBAI),
                                            04-2855099 / 055-1080928
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
                                            ADNAN, RASHIDIYA (DUBAI), 04-2858575
                                            / 050-3791347
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
                                            MELSON, RASHIDIYA (DUBAI),
                                            04-2854897 / 050-7561094
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            {" "}
                                            If Previous Insurance is Expired -
                                            Passing & Pictures of the car from
                                            all 4 side.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            {" "}
                                            If Changing from Third Party
                                            Insurance to Comprehensive Insurance
                                            Plan - Passing and Current Dated Car
                                            Pictures from all the 4 sides.
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
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            No Objection Certificate for the
                                            Driver (If the Car is Registered
                                            Under Company Name)
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            KYC (Only for Noor Takaful Plans)
                                            (If the Car is Registered Under
                                            Company Name)
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
                                            Upto how many days my car insurance
                                            will be linked to the RTA/Murror
                                            system from the start date?
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
                                            The amount paid by the Participant
                                            per accident in case of faulty &
                                            Unkown accidents, according to the
                                            Schedule/Policy document.
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Why is it mandatory to buy car
                                            insurance in the UAE?
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            A good car insurance shop provides
                                            full coverage for your vehicle
                                            against bodily injury, car damage,
                                            and death to any third party.
                                            Furthermore, it covers all expenses
                                            you have spent on the repair work
                                            incurred due to car accidents.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            • The RTA law requires you to get an
                                            insurance shop once you purchase a
                                            new vehicle in the UAE, otherwise,
                                            you may bear heavy penalties and
                                            fines if driving uninsured.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            • The penalty or fine for an
                                            uninsured vehicle is around 500
                                            Dirhams, confiscation of the car for
                                            seven days, and four black points
                                            applied to the license.
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
                                            accident recovery services,
                                            including vehicle towing, Flat tyre
                                            service,Mechnical first aid and
                                            battery jump-starts.
                                          </li>

                                          <h6
                                            style={{
                                              fontSize: "13px",
                                              fontWeight: "700",
                                              color: "#000",
                                            }}
                                          >
                                            Is car Insurance transferable in
                                            UAE?
                                          </h6>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            If your current insurance shop is
                                            valid for less than 6 months, you
                                            cannot transfer it to the new owner.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            If it is valid for more than 6
                                            months, then you need to check with
                                            your insurance company whether they
                                            provide a transfer option or not.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            You can also apply for a refund in
                                            case they don’t transfer it to a new
                                            owner.
                                          </li>
                                          <li
                                            style={{
                                              fontSize: "10px",
                                              marginBottom: "10px",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            To share the policy, you need to
                                            share all the details of the new
                                            owner. The company will then check
                                            if the new owner meets the edibility
                                            criteria or not.
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
                      <div>
                        <p style={{ fontSize: '16px', color: '#000', display: 'flex', fontWeight: '600' }} type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottomcarth"
                          aria-controls="offcanvasBottom"> <input type="radio" name="" id="" style={{}} />&nbsp; Add to Compare</p>
                        <div
                          class="offcanvas offcanvas-bottom"
                          tabindex="-1"
                          id="offcanvasBottomcarth"
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
                    </div>
                  </div>
                </div>
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carplan;
