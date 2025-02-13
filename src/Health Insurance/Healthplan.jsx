import React from "react";
import ".././Products/Carplan.css";
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

import Healthplanmedia from "./Healthplanmedia";
import { Link } from "react-router-dom";
import FilterPlansModaltravel from "../Allmyproduct/Trevel/FilterPlansModaltravel";

const Healthplan = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
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
    setFamilyData((prev) => {
      // Check if the field already has 5 or more members
      if (prev[field].length >= 5) {
        console.warn(`Cannot add more than 5 members to ${field}`);
        return prev; // Return the previous state without making changes
      }
  
      // Add a new member if the condition is met
      return {
        ...prev,
        [field]: [...prev[field], {}],
      };
    });
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
  return (
    <>
      <div className="Carbuyinsuranceplanmedia">
        <Healthplanmedia />
      </div>
      <div className="container mt-4  Carbuyinsuranceplandesk">
        <div className="row">
          <div className="col-md-9 colmd9display">
            <div className="d-flex car-plans-nav-bar">
              <ul style={{ width: "55%" }}>
                <input
                  style={{ borderRadius: "8px" }}
                  type="search"
                  className="form-control p-3"
                  placeholder="search"
                  name=""
                  id=""
                />
              </ul>
              <ul className="d-flex car-plans-bav-barul">
                <li class="nav-item" role="presentation">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalOneey"
                  >
                    <i class="fa-solid fa-filter"></i> &nbsp;sort
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={handleOpen}
                  >
                    <i class="fa-solid fa-filter"></i> &nbsp;Filter
                  </Button>
                </li>
              </ul>
              <div
                class="modal fade"
                id="exampleModalOneey"
                tabindex="-1"
                aria-labelledby="exampleModalLabelOne"
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
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="filter-modal-title"
              >
                <FilterPlansModaltravel handleClose={handleClose} />
              </Modal>
            </div>
            <div class="tab-content" id="myTabContent">
              <div class="insurance_card">
                {/* <div className="incimg">
                  <img
                    src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/oriental-insurance.png"
                    alt="Oriental Insurance Logo"
                    class="company_logo"
                  />
                  <div>
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                   
                    </div>
                  </div>
                </div> */}
                <div className="incesdjsjs">
                  <Link style={{ color: "#000" }} to="/healthplanform">
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
                          NEMed Lite
                          <br />
                          <span>
                            Network <i class="fa-solid fa-circle-info"></i>{" "}
                            <span
                              style={{ backgroundColor: "#bee2b1",padding:'4px 6px',borderRadius:'4px' }}
                              className="mycolor"
                            >
                              E CARE Blue
                            </span>{" "}
                            Network list{" "}
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div className="cn-carvalue">
                          <p className="mt-3">
                            E CARE Blue <i class="fa-solid fa-circle-info"></i>
                            <br />
                            <strong>85,002</strong>
                          </p>
                        </div>
                        <div className="cn-carvalue">
                          <p className="mt-3">
                            Pharmacy Limit{" "}
                            <i class="fa-solid fa-circle-info"></i>
                            <br />
                            <strong>500</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div class="details_section">
                    <div class="addons_section">
                      <p>
                        <strong>Copay</strong> change option
                      </p>
                      <div className="addonjdsksj">
                        <div className="addnodekdfh">
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <img
                                  src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                                  alt=""
                                />
                                &nbsp;Diagnosis
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>30%</div>
                            </li>
                            <li>
                              <div>
                                {" "}
                                <img
                                  src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                                  alt=""
                                />
                                &nbsp;Physician
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>ZAR 20</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            <li>
                              {" "}
                              <div>
                                <img
                                  src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/pharmacy.svg"
                                  alt=""
                                />
                                &nbsp;Pharmacy
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>30%</div>
                            </li>
                            <li>
                              <div>
                                <img
                                  src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/physiotherapy.svg"
                                  alt=""
                                />
                                &nbsp;Physiotherapy
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>nill</div>
                            </li>
                          </ul>
                          <ul className="deail-section-ulli">
                            <li>
                              <div>
                                {" "}
                                <input type="checkbox" name="" id="" />
                                &nbsp;Passenger Cover:
                              </div>{" "}
                              <div style={{ color: "#003d2b" }}>Included</div>
                            </li>
                          </ul>
                        </div>
                        <div className="addonhjsjdbsjkb">
                          <button className="btn">ZAR 2,730 Yearly</button>
                          <div className="addos-sectionsvshj">
                            <p style={{}}>
                              Split in 4 interest-free payments of{" "}
                            </p>
                            <b>ZAR 682.5</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="addfooter_section">
                  <div className="accordion-item">
      <p className="accordion-header p-0" id="flush-headingOne">
        <button
          style={{
            fontSize: "16px",
            border: 'none',
            background: 'none',
            fontWeight: '600'
          }}
          className=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded={isVisible}
          aria-controls="flush-collapseOne"
          onClick={toggleText}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: '600',
              color: 'black'
            }}
          >
            {isVisible ? 'Hide more plan' : 'Show more plan'}
          </p>
        </button>
      </p>
    </div>
                  {/* <div class="accordion-item">
                        <p class="accordion-header" id="flush-headingOne">
                          <button
                            style={{ fontSize: "16px" ,border:'none'
                              ,background:'none',fontWeight:'600'
                            }}
                            class="
                            "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                           <p style={{fontSize: "16px" ,fontWeight:'600',color:'black'}}> show more plan</p>
                          </button>
                        </p>
                      </div> */}
                    <div className="addfodbdjksd">
                      {/* <div><p  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Plan Details</p></div> */}
                      <p
                        style={{ fontWeight: "600", fontSize: "16px",color:'black',alignContent:'center' }}
                        class=""
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRightleft"
                        aria-controls="offcanvasRight"
                      >
                        Plan Details
                      </p>

                      <div
                        class="offcanvas offcanvas-end  my_ofcan"
                        tabindex="-1"
                        id="offcanvasRightleft"
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
                      <div
                      style={{alignContent:'center',alignItems:'center'}}
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom"
                      >
                        <p  style={{ fontWeight: "600", fontSize: "16px",color:'black',}}><input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..."/>Add to Compare</p>
                      </div>
                      <div
                        class="offcanvas offcanvas-bottom"
                        tabindex="-1"
                        id="offcanvasBottom"
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
                  <div className="py-2">
                    <img
                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/icon-hand.svg"
                      alt=""
                    />&nbsp; What you should know? Annual medical limit is ZAR 75000
                  </div>
                </div>
              </div>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              > 
                <div class="accordion-body" style={{padding:'16px',marginTop:'10px',borderRadius:'7px',border:'1px solid #ddd'}}>
                  <div style={{ width: "100%" }} className="incesdjsjs">
                    <div class="header_section">
                      <div class="company_info">
                        <div style={{ color: "black" }} class="company_name">
                          NEMed Lite
                          <br />
                          <span>
                            Network list <i class="fa-solid fa-circle-info"></i>{" "}
                            <span
                              style={{ backgroundColor: "#bee2b1",padding:'4px 6px',borderRadius:'4px' }}
                              className="mycolor"
                            >
                              network-PCP/RN3
                            </span>{" "}
                            network list{" "}
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div className="cn-carvalue">
                          <p className="mt-3" style={{ color: "black" }}>
                            network-PCP/RN3{" "}
                            <i class="fa-solid fa-circle-info"></i>
                            <br />
                            <strong>85,002</strong>
                          </p>
                        </div>
                        <div className="cn-carvalue">
                          <p className="mt-3" style={{ color: "black" }}>
                            Pharmacy Limit{" "}
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
                          <strong>Copay</strong> change option
                        </p>
                        <div className="addonjdsksj">
                          <div className="addnodekdfh">
                            <ul className="deail-section-ulli">
                              <li>
                                {" "}
                                <div style={{ color: "black" }}>
                                  <img
                                    src="	https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                                    alt=""
                                  />
                                  &nbsp;Diagnosis
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>30%</div>
                              </li>
                              <li>
                                <div style={{ color: "black" }}>
                                  {" "}
                                  <img
                                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/diagnosis.svg"
                                    alt=""
                                  />
                                  &nbsp;Physician
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>ZAR 20</div>
                              </li>
                            </ul>
                            <ul className="deail-section-ulli">
                              <li>
                                {" "}
                                <div style={{ color: "black" }}>
                                  <img
                                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/pharmacy.svg"
                                    alt=""
                                  />
                                  &nbsp;Pharmacy
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>30%</div>
                              </li>
                              <li>
                                <div style={{ color: "black" }}>
                                  <img
                                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/physiotherapy.svg"
                                    alt=""
                                  />
                                  &nbsp;Physiotherapy
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>nill</div>
                              </li>
                            </ul>
                            <ul className="deail-section-ulli">
                              <li>
                                <div style={{ color: "black" }}>
                                  {" "}
                                  <input type="checkbox" name="" id="" />
                                  &nbsp;Passenger Cover:
                                </div>{" "}
                                <div style={{ color: "#003d2b" }}>Included</div>
                              </li>
                            </ul>
                          </div>
                          <div className="addonhjsjdbsjkb">
                            <button className="btn">ZAR 2,730 Yearly</button>
                            <div className="addos-sectionsvshj">
                              <p>Split in 4 interest-free payments of </p>
                              <b style={{ color: "black" }}>ZAR 682.5</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="addfooter_section" style={{margin:'0px'}}>
                      <div>
                        <p></p>
                      </div>
                      <div className="addfodbdjksd m-0">
                        {/* <div><p  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Plan Details</p></div> */}
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            color: "black",
                          }}
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRightleft"
                          aria-controls="offcanvasRight"
                        >
                          Plan Details
                        </p>

                        <div
                          class="offcanvas offcanvas-end  my_ofcan"
                          tabindex="-1"
                          id="offcanvasRightleft"
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
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
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
                                    <div
                                      class="accordion"
                                      id="accordionExample"
                                    >
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
                                              PA Cover for Passenger - Limit
                                              Upto ZAR 200,000
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
                                        *Garage list are subject to change as
                                        per the discretion of the Insurer.
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
                                              ADNAN, RASHIDIYA (DUBAI),
                                              04-2858575 / 050-3791347
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                              TAHIR, RASHIDIYA (DUBAI),
                                              04-2857121
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
                                    <div
                                      class="accordion"
                                      id="accordionExample"
                                    >
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
                                    <div
                                      class="accordion"
                                      id="accordionExample"
                                    >
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
                                    <div
                                      class="accordion"
                                      id="accordionExample"
                                    >
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
                                              Insurance to Comprehensive
                                              Insurance Plan - Passing and
                                              Current Dated Car Pictures from
                                              all the 4 sides.
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
                                              Insurance to Comprehensive
                                              Insurance Plan - Passing and
                                              Current Dated Car Pictures from
                                              all the 4 sides.
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
                                              Insurance to Comprehensive
                                              Insurance Plan - Passing and
                                              Current Dated Car Pictures from
                                              all the 4 sides.
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
                                    <div
                                      class="accordion"
                                      id="accordionExample"
                                    >
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
                                              A good car insurance shop
                                              provides full coverage for your
                                              vehicle against bodily injury, car
                                              damage, and death to any third
                                              party. Furthermore, it covers all
                                              expenses you have spent on the
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
                                              • The RTA law requires you to get
                                              an insurance shop once you
                                              purchase a new vehicle in the UAE,
                                              otherwise, you may bear heavy
                                              penalties and fines if driving
                                              uninsured.
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
                                              Dirhams, confiscation of the car
                                              for seven days, and four black
                                              points applied to the license.
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
                                              including vehicle towing, Flat
                                              tyre service,Mechnical first aid
                                              and battery jump-starts.
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
                                              If your current insurance shop
                                              is valid for less than 6 months,
                                              you cannot transfer it to the new
                                              owner.
                                            </li>
                                            <li
                                              style={{
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                marginLeft: "10px",
                                              }}
                                            >
                                              If it is valid for more than 6
                                              months, then you need to check
                                              with your insurance company
                                              whether they provide a transfer
                                              option or not.
                                            </li>
                                            <li
                                              style={{
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                marginLeft: "10px",
                                              }}
                                            >
                                              You can also apply for a refund in
                                              case they don’t transfer it to a
                                              new owner.
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
                                              if the new owner meets the
                                              edibility criteria or not.
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
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasBottom"
                          aria-controls="offcanvasBottom"
                        >
                          <p
                            style={{
                             fontWeight: "600", fontSize: "16px",color:'black',alignContent:'center'
                            }}
                          >
                            Add to Compare
                          </p>
                        </div>
                        <div
                          class="offcanvas offcanvas-bottom"
                          tabindex="-1"
                          id="offcanvasBottom"
                          aria-labelledby="offcanvasBottomLabel"
                        >
                          <div class="offcanvas">
                            <h5
                              class="offcanvas-title"
                              id="offcanvasBottomLabel"
                            >
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
                    <div className="pt-2">
                      <img
                        src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/icon-hand.svg"
                        alt=""
                      />&nbsp;
                      What you should know? Annual medical limit is ZAR 75000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3  four_card ">
            <div className="my-card rounded-2 p-3 shadow ">
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
                             <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            disabled
            value="gc*******@gmail.com"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            disabled
            value="*****0077"
          />
        </div>

        {/* WhatsApp Updates */}
        <div className="mb-3">
          <label className="form-label">Get updates on WhatsApp</label>
          <div className="input-group">
            <span className="input-group-text">+971</span>
            <input
              type="text"
              className="form-control"
              value="*****0077"
              disabled
            />
            <div className="form-check form-switch ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="whatsappUpdates"
                checked
              />
            </div>
          </div>
        </div>

        {/* Nationality */}
        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">Nationality</label>
          <select className="form-select" id="nationality" defaultValue="Indian">
            <option value="Indian">Indian</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Bangladeshi">Bangladeshi</option>
          </select>
        </div>

        {/* City */}
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City (as per Visa)</label>
          <select className="form-select" id="city" defaultValue="Dubai">
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
            <option value="Sharjah">Sharjah</option>
          </select>
        </div>

        {/* Monthly Income */}
        <div className="mb-3">
          <label htmlFor="monthlyIncome" className="form-label">Monthly Income (Self/Sponsor)</label>
          <select className="form-select" id="monthlyIncome" defaultValue="Upto 4000">
            <option value="Upto 4000">Upto 4000</option>
            <option value="4000-8000">4000-8000</option>
            <option value="Above 8000">Above 8000</option>
          </select>
        </div>

        {/* Existing Medical Condition */}
        <div className="mb-3">
          <label htmlFor="medicalCondition" className="form-label">Existing Medical Condition</label>
          <select className="form-select" id="medicalCondition" defaultValue="No">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Marital Status */}
        <div className="mb-3">
          <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
          <select className="form-select" id="maritalStatus" defaultValue="Single">
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>

        {/* Existing Health Insurance */}
        <div className="mb-3">
          <label htmlFor="existingInsurance" className="form-label">Do you have any existing health insurance in the UAE?</label>
          <select className="form-select" id="existingInsurance" defaultValue="Yes">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Previous Insurer */}
        <div className="mb-3">
          <label htmlFor="previousInsurer" className="form-label">Previous Insurer</label>
          <select className="form-select" id="previousInsurer" defaultValue="Cigna">
            <option value="Cigna">Cigna</option>
            <option value="AXA">AXA</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="btn btn-primary me-2">Edit Details</button>
          <button type="submit" className="btn btn-primary">Update</button>
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
                                {/* Self Section */}
                                <div className="mb-3">
                                  <label>Self</label>
                                  <div className="row">
                                    <div className="col-md-12">
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
                                    <div className="col-md-12 mt-3">
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
                                    <div className="col-md-12">
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
                                    <div className="col-md-12 mt-3">
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
                                      <div className="col-md-12">
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
                                  {familyData.daughters.map(
                                    (daughter, index) => (
                                      <div className="row mb-2" key={index}>
                                        <div className="col-md-12">
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
                                    )
                                  )}
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

                                <button
                                  type="submit"
                                  className="btn btn-success"
                                >
                                  Submit
                                </button>
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
                <Link to="/claim">
                  <button className="btn w-100">Know more</button>
                </Link>
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
                    <h6
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        marginTop: "1rem",
                      }}
                    >
                      30 Mins Claim Assistance
                    </h6>
                    <p style={{ fontSize: "0.7rem" }}>
                      Get your claim resolved in just 30 minutes with our speedy
                      processing
                    </p>
                  </span>
                </div>

                {/* Second Item */}
                <div
                  className="d-flex gap-2"
                  style={{
                    borderTop: "1px dotted grey",
                    borderBottom: "1px dotted grey",
                    padding: "0.1rem",
                  }}
                >
                  <img
                    className="img-fluid"
                    src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/autoRch.svg"
                    style={{ width: "2rem" }}
                  />
                  <span className="d-flex flex-column align-items-start justify-content-between">
                    <h6
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        marginTop: "1rem",
                      }}
                    >
                      Auto Recharge
                    </h6>
                    <p style={{ fontSize: "0.7rem" }}>
                      Seamless protection! Your sum insured is automatically
                      reinstated once per policy year for future claims, under
                      specific conditions.
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
                      <h6
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          marginTop: "1rem",
                        }}
                      >
                        No Claim Bonus at Renewal
                      </h6>
                      <p style={{ fontSize: "0.7rem" }}>
                        Enjoy a 10% increase in coverage each year with our ‘No
                        Claim Bonus’ upon policy renewal.
                      </p>
                    </span>
                  </div>

                  {/* fourth Item */}

                  <div
                    className="d-flex gap-2"
                    style={{
                      borderTop: "1px dotted grey",
                      borderBottom: "1px dotted grey",
                      padding: "0.1rem",
                    }}
                  >
                    <img
                      className="img-fluid"
                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/Health-component-images/annualHealth.svg"
                      style={{ width: "2rem" }}
                    />
                    <span className="d-flex flex-column align-items-start justify-content-between">
                      <h6
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          marginTop: "1rem",
                        }}
                      >
                        Annual Health Check Up with ZAR 69 Deductible
                      </h6>
                      <p style={{ fontSize: "0.7rem" }}>
                        Access an annual health check-up with only ZAR 69
                        deductible.
                      </p>
                    </span>
                  </div>
                </div>

                <p
                  onClick={toggleView}
                  aria-controls="collapseContent"
                  aria-expanded={isExpanded}
                  style={{
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    color: "#003D2B",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "0",
                    marginTop: "1rem",
                  }}
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
                  Quickly Find{" "}
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
                  }}
                >
                  Driver Cover{" "}
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
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
                  }}
                >
                  Passenger Cover{" "}
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
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
                  }}
                >
                  Roadside Assistance{" "}
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
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
                  }}
                >
                  Replacement of Vehicle{" "}
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
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
                  }}
                >
                  Natural Calamities{" "}
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
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
                  }}
                >
                  Oman Cover{" "}
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
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

            {/* <div className="up_doc rounded-2 p-3 mt-3 shadow mt-4">
                            <div className="mt-3">
                                <h6 style={{ fontWeight: '800' }}>Upload Documents</h6>
                                <p className='mt-3' style={{ fontSize: '13px', color: '#000', }}>To get the best possible rates for Your
                                    beloved car, please provide your documents.</p>

                                <div className="">
                                    <button type="button" class="up-dn_doc" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <span><i style={{ fontSize: '30px', }} class="fa-solid fa-cloud-arrow-up"></i></span>  Upload Documents
                                    </button>

                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog  custom-width">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Documents</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">
                                                    <div className="upload_one">
                                                        <p className='text-center' style={{ fontSize: '12px' }}>
                                                            Documents are the description for your car and you and help us in figuring out what’s the best <br /> price for your car insurance
                                                        </p>
                                                        <div className="line_one rounded-2 mb-2">
                                                            <div className="p-3">
                                                                <p style={{ fontSize: '15px' }}>Upload Driver's License</p>
                                                                <div className="">
                                                                    <span>
                                                                        <img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/UploadDocuments/img-cloud-upload.svg" alt="" />
                                                                        <span> Upload File</span>
                                                                    </span>
                                                                    <p className='mt-2' style={{ fontSize: '12px', marginLeft: '30px', }}>
                                                                        JPG, PNG or PDF, file size no more than 10MB
                                                                        <span style={{ float: 'right' }}>  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="upload_one mb-2">
                                                        <div className="line_one rounded-2">
                                                            <div className="p-3">
                                                                <p style={{ fontSize: '15px' }}>Upload Car Registration</p>
                                                                <div className="">
                                                                    <span>
                                                                        <img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/UploadDocuments/img-cloud-upload.svg" alt="" />
                                                                        <span> Upload File</span>
                                                                    </span>
                                                                    <p className='mt-2' style={{ fontSize: '12px', marginLeft: '30px', }}>
                                                                        JPG, PNG or PDF, file size no more than 10MB
                                                                        <span style={{ float: 'right' }}>  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="upload_one ">
                                                        <div className="line_one rounded-2">
                                                            <div className="p-3">
                                                                <p style={{ fontSize: '15px' }}>Upload Emirates ID</p>
                                                                <div className="">
                                                                    <span>
                                                                        <img src="https://cdn.policybazaar.ae/quote/new/src/assets/images/UploadDocuments/img-cloud-upload.svg" alt="" />
                                                                        <span> Upload File</span>
                                                                    </span>
                                                                    <p className='mt-2' style={{ fontSize: '12px', marginLeft: '30px', }}>
                                                                        JPG, PNG or PDF, file size no more than 10MB
                                                                        <span style={{ float: 'right' }}>  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
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
                        </div> */}

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
                            className={`fa-solid ${
                              expandedIndex === 1
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
                    className={`accordion-collapse collapse ${
                      expandedIndex === 1 ? "show" : ""
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
                            className={`fa-solid ${
                              expandedIndex === 2
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
                    className={`accordion-collapse collapse ${
                      expandedIndex === 2 ? "show" : ""
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
                            className={`fa-solid ${
                              expandedIndex === 3
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
                    className={`accordion-collapse collapse ${
                      expandedIndex === 3 ? "show" : ""
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
                            className={`fa-solid ${
                              expandedIndex === 4
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
                    className={`accordion-collapse collapse ${
                      expandedIndex === 4 ? "show" : ""
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
                            className={`fa-solid ${
                              expandedIndex === 5
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
                    className={`accordion-collapse collapse ${
                      expandedIndex === 5 ? "show" : ""
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
    </>
  );
};

export default Healthplan;
