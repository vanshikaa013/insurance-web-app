import React, { useState } from "react";
import "./Travelplan.css";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { FaLongArrowAltLeft, FaUserCircle } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
export const Travelplan2 = () => {
    
  const [count, setCount] = useState(25000);

  const IncreaseCount = () => {
    if (count < 1000000) {
      setCount(count + 25000);
    }
  };

  const DecreaseCount = () => {
    if (count > 25000) {
      setCount(count - 25000);
    }
  };
  return (
    <>
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 ">
                  <div class="input-container">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-100 main-input inpt shadow rounded-5"
                    />
                  </div>
                </div>
                <div className="col-md-2 btns">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    class="btn btn-light shadow sorted nan rounded-5 "
                  >
                    <i style={{ color: "gray" }} class="fa-solid fa-sort"></i>
                    Sort
                  </button>

                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog  model-1">
                      <div class="modal-content">
                        <div class="modal-header">
                          <div class="sort-box">
                            <h5 class="m-2">
                              Sort
                              <span className="close-btn">
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </span>
                            </h5>
                            <form>
                              <div className="card m-2 w-100">
                                <div class="form-check m-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="lowToHigh"
                                    value="lowToHigh"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="lowToHigh"
                                  >
                                    Cover High to Low
                                  </label>
                                </div>
                              </div>
                              <div className="card m-2 w-100">
                                <div class="form-check m-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="lowToHigh"
                                    value="lowToHigh"
                                  />
                                  <label
                                    style={{ cursor: "pointer" }}
                                    class="form-check-label"
                                    for="lowToHigh"
                                  >
                                    Cover Low to High
                                  </label>
                                </div>
                              </div>
                              <div className="card m-2 w-100">
                                <div class="form-check m-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="lowToHigh"
                                    value="lowToHigh"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="lowToHigh"
                                  >
                                    Premium Low to High{" "}
                                  </label>
                                </div>
                              </div>

                              <button
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                class="btn w-100 mx-2 text-light rounded-2 btn-apply "
                              >
                                Apply Filter
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* modal-2 */}
                  <div
                    class="modal fade"
                    id="exampleModalToggle8"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    tabindex="-1"
                  >
                    {/* <div> */}
                    <div class="modal-dialog modal-dialog-centered model-2 container">
                      <div class="modal-content">
                        <div class="">
                          <div class="">
                            <div class="filter-header">
                              Filter plans by
                              <button
                                style={{ position: "relative", left: "83%" }}
                                type="button"
                                class="btn-close "
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>

                            <div class="d-flex align-items-start justify-content-start navs">
                              <div
                                class="nav flex-column left-nav nav-pills me-3"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                              >
                                <button
                                  style={{
                                    fontSize: "11px",
                                    colour: "#052F97",
                                  }}
                                  class="nav-link active  fw-bold
                                "
                                  id="v-pills-home-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-home"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-home"
                                  aria-selected="true"
                                >
                                  Sort
                                </button>
                                <button
                                  style={{
                                    fontSize: "11px",
                                    colour: "#052F97",
                                  }}
                                  class="nav-link fw-bold
                                "
                                  id="v-pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-profile"
                                  aria-selected="false"
                                >
                                  Inclusions
                                </button>
                                <button
                                  style={{
                                    fontSize: "10px",
                                    colour: "#052F97",
                                  }}
                                  class="nav-link fw-bold
                                "
                                  id="v-pills-messages-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-messages"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-messages"
                                  aria-selected="false"
                                >
                                  Medical Cover
                                </button>
                                <button
                                  style={{
                                    fontSize: "11px",
                                    colour: "#052F97",
                                  }}
                                  class="nav-link fw-bold
                                "
                                  id="v-pills-settings-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#v-pills-settings"
                                  type="button"
                                  role="tab"
                                  aria-controls="v-pills-settings"
                                  aria-selected="false"
                                >
                                  Insures
                                </button>
                              </div>
                              <div class="tab-content" id="v-pills-tabContent">
                                <div
                                  class="tab-pane fade show active"
                                  id="v-pills-home"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-home-tab"
                                >
                                  <div className="text-start cards m-3">
                                    <h6
                                      className="
                              mx-2"
                                    >
                                      Sort
                                    </h6>
                                    <div class="row">
                                      <div class="col-md-6 ">
                                        <div className="card m-2">
                                          <div class="form-check m-2">
                                            <input
                                              class="form-check-input "
                                              type="radio"
                                              name="sortOption"
                                              id="lowToHigh"
                                              value="lowToHigh"
                                            />
                                            <label
                                              style={{ color: "#416185" }}
                                              class="form-check-label"
                                              for="lowToHigh"
                                            >
                                              Cover High to Low
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div className="card m-1 my-2">
                                          <div class="form-check m-2">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="sortOption"
                                              id="lowToHigh"
                                              value="lowToHigh"
                                            />
                                            <label
                                              style={{ color: "#416185" }}
                                              class="form-check-label"
                                              for="lowToHigh"
                                            >
                                              Cover Low to High
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div className="card m-2 ">
                                          <div class="form-check m-2">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="sortOption"
                                              id="lowToHigh"
                                              value="lowToHigh"
                                            />
                                            <label
                                              style={{ color: "#416185" }}
                                              class="form-check-label"
                                              for="lowToHigh"
                                            >
                                              Premium High to Low
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="v-pills-profile"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-profile-tab"
                                >
                                  {/* bagage */}
                                  <div class="container mt-4">
                                    <h6 className="text-start">Inclusions</h6>
                                    <div class="container my-4">
                                      <div class="row g-3">
                                        <div class="col-md-6">
                                          <div class="form-check circle-box p-3 border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="baggageLoss"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="baggageLoss"
                                            >
                                              Baggage Loss
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="tripCancellation"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="tripCancellation"
                                            >
                                              Trip Cancellation
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="medicalCover"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="medicalCover"
                                            >
                                              Medical Cover
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="personalAccidentCover"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="personalAccidentCover"
                                            >
                                              Personal Accident Cover
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="lossOfPassport"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="lossOfPassport"
                                            >
                                              Loss of Passport
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class="tab-pane fade"
                                  id="v-pills-messages"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-messages-tab"
                                >
                                  <div class="container amounts mt-5 mx-4">
                                    <div class="container mt-5">
                                      <div class="input-box-container">
                                        <span>ZAR</span>
                                        <p className="mx-3 pt-3">{count}</p>
                                      </div>
                                    </div>
                                    <div class="range-slider">
                                      <div class="d-flex flex-column align-items-center">
                                        <div class="d-flex">
                                          <button
                                            onClick={DecreaseCount}
                                            class="btn btn-outline-primary btn-sm"
                                            id="min-btn"
                                          >
                                            -
                                          </button>
                                          <input
                                            type="range"
                                            class="form-range slider mx-2"
                                            id="slider"
                                            min="25000"
                                            max="1000000"
                                            value="25000"
                                          />
                                          <button
                                            onClick={IncreaseCount}
                                            class="btn btn-outline-primary btn-sm"
                                            id="max-btn"
                                          >
                                            +
                                          </button>
                                        </div>
                                        <div class="d-flex justify-content-between w-100">
                                          <small>ZAR 25,000</small>
                                          <small>ZAR 1,000,000</small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="v-pills-settings"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-settings-tab"
                                >
                                  <div class="container mt-4">
                                    <h6 className="text-start">Insures</h6>
                                    <div class="container my-4">
                                      <div class="row g-3">
                                        <div class="col-md-6">
                                          <div class="form-check circle-box p-3 border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="baggageLoss"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="baggageLoss"
                                            >
                                              Alliance Insurance
                                            </label>
                                          </div>
                                        </div>
                                        <div class="col-md-6">
                                          <div class="form-check circle-box p-3 border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="baggageLoss"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="baggageLoss"
                                            >
                                              Watania Takaful
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="tripCancellation"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="tripCancellation"
                                            >
                                              Orient Insurance
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="medicalCover"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="medicalCover"
                                            >
                                              Allianz
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="personalAccidentCover"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="personalAccidentCover"
                                            >
                                              GIG Gulf (Previously AXA)
                                            </label>
                                          </div>
                                        </div>

                                        <div class="col-md-6">
                                          <div class="form-check p-3 circle-box border rounded shadow-sm">
                                            <input
                                              class="form-check-input circle-input m-2"
                                              type="checkbox"
                                              id="lossOfPassport"
                                            />
                                            <label
                                              class="form-check-label ms-2"
                                              for="lossOfPassport"
                                            >
                                              RAK Insurance
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="filter-footer">
                              <button
                                style={{ color: "#003D2B" }}
                                class="btn-reset m-3"
                              >
                                Reset All
                              </button>
                              <button class="btn btn-Apply text-light">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1"
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
                      </div>
                    </div>
                  </div>
                  <button
                    style={{ position: "relative", left: "20px" }}
                    class="btn btn-light shadow sorted nan rounded-5"
                    data-bs-target="#exampleModalToggle8"
                    data-bs-toggle="modal"
                  >
                    <i style={{ color: "gray" }} class="fa-solid fa-filter"></i>
                    All Filters{" "}
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    tabindex="-1"
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

                        <div class="modal-footer"></div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="col-md-4 w-auto nan">
                  <div class="user-info shadow d-flex align-items-center">
                    <i class="bi bi-person-circle me-2 fs-5"></i>
                    <div>
                      <span>
                        <FaUserCircle
                          style={{ color: "#003D2B", fontSize: "20px" }}
                        />
                        govind
                      </span>
                      <span>
                        <LuPencilLine
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRightsa"
                          aria-controls="offcanvasRight"
                          style={{
                            cursor: "pointer",
                            position: "relative",
                            left: "205px",
                            fontSize: "20px",
                            color: "#003D2B",
                          }}
                        />
                        <div
                          class="offcanvas offcanvas-end"
                          tabindex="-1"
                          id="offcanvasRightsa"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div class="offcanvas-header">
                            <LuPencilLine
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{
                                cursor: "pointer",
                                position: "relative",
                                left: "210px",
                                fontSize: "20px",
                                color: "#003D2B",
                              }}
                            />{" "}
                          </div>
                          <div class="offcanvas-body">
                            <div class="d-flex justify-content-center align-items-center vh-100">
                              <div class="sidebar">
                                <h5 class="mt-5">
                                  Edit Detail
                                  <span style={{ marginLeft: "220px" }}>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="offcanvas"
                                      aria-label="Close"
                                    ></button>
                                  </span>
                                </h5>

                                <ul
                                  class="nav nav-tabs"
                                  id="editTabs"
                                  role="tablist"
                                >
                                  <li class="nav-item">
                                    <button
                                      class="nav-link active rr"
                                      id="personal-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#personalDetails"
                                      type="button"
                                      role="tab"
                                      aria-controls="personalDetails"
                                      aria-selected="true"
                                    >
                                      Personal Details
                                    </button>
                                  </li>
                                  <li class="nav-item">
                                    <button
                                      class="nav-link"
                                      id="trip-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#tripDetails"
                                      type="button"
                                      role="tab"
                                      aria-controls="tripDetails"
                                      aria-selected="false"
                                    >
                                      Trip Details
                                    </button>
                                  </li>
                                </ul>
                                <div
                                  class="tab-content mt-4"
                                  id="editTabContent"
                                >
                                  <div
                                    class="tab-pane fade show active"
                                    id="personalDetails"
                                    role="tabpanel"
                                    aria-labelledby="personal-tab"
                                  >
                                    <form>
                                      <div class="mb-3">
                                        <label for="name" class="form-label">
                                          Your Name
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="name"
                                          placeholder="Enter your name"
                                        />
                                      </div>
                                      <div class="mb-3">
                                        <label for="email" class="form-label">
                                          Email
                                        </label>
                                        <input
                                          type="email"
                                          class="form-control"
                                          id="email"
                                          placeholder="Enter your email"
                                        />
                                      </div>
                                      <div class="mb-3">
                                        <label for="mobile" class="form-label">
                                          Mobile Number
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="mobile"
                                          placeholder="Enter your mobile number"
                                        />
                                      </div>

                                      <div class="mb-3">
                                        <label for="dob" class="form-label">
                                          Date of Birth
                                        </label>
                                        <input
                                          type="date"
                                          class="form-control"
                                          id="dob"
                                        />
                                      </div>
                                      <div class="mb-3">
                                        <label
                                          for="nationality"
                                          class="form-label"
                                        >
                                          Nationality
                                        </label>
                                        <select
                                          class="form-select"
                                          id="nationality"
                                        >
                                          <option
                                            value="Saudi Arabian"
                                            selected
                                          >
                                            Saudi Arabian
                                          </option>
                                          <option value="Other">Other</option>
                                        </select>
                                      </div>
                                    </form>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="tripDetails"
                                    role="tabpanel"
                                    aria-labelledby="trip-tab"
                                  >
                                    <div
                                      class="tab-pane fade show active"
                                      id="tripDetails"
                                      role="tabpanel"
                                      aria-labelledby="trip-tab"
                                    >
                                      <div class="mb-3">
                                        <label
                                          for="tripStartDate"
                                          class="form-label"
                                        >
                                          Trip Start Date (DD/MM/YYYY)
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="tripStartDate"
                                          placeholder="DD/MM/YYYY"
                                        />
                                      </div>

                                      <div class="mb-3">
                                        <label
                                          for="tripEndDate"
                                          class="form-label"
                                        >
                                          Trip End Date (DD/MM/YYYY)
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="tripEndDate"
                                          placeholder="DD/MM/YYYY"
                                        />
                                      </div>

                                      <div class="mb-3">
                                        <label
                                          for="countryOrigin"
                                          class="form-label"
                                        >
                                          Select Country Of Origin
                                        </label>
                                        <select
                                          class="form-select"
                                          id="countryOrigin"
                                        >
                                          <option value="USA" selected>
                                            United States of America (USA)
                                          </option>
                                          <option value="UAE">
                                            United Arab Emirates (UAE)
                                          </option>
                                          <option value="India">India</option>
                                          <option value="Australia">
                                            Australia
                                          </option>
                                          <option value="Canada">Canada</option>
                                        </select>
                                      </div>

                                      <div class="mb-3">
                                        <label
                                          for="selectedCountries"
                                          class="form-label"
                                        >
                                          Selected Countries
                                        </label>
                                        <div class="d-flex flex-wrap align-items-center gap-2 p-2 border rounded">
                                          <span class="badge bg-light text-dark d-flex align-items-center">
                                            United Arab Emirates (UAE) +
                                          </span>
                                          <button
                                            type="button"
                                            class="btn btn-link p-0 text-primary"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="d-flex justify-content-between mt-4">
                                  <button
                                    style={{ backgroundColor: "#003A29" }}
                                    class="btn btn-update w-100 btn-lg rounded-2 text-light "
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <br />
                      <small>United States | 1 member | 20 Dec - 28 Dec</small>
                    </div>
                    <button class="btn btn-sm btn-link edit-btn">
                      <i class="bi bi-pencil"></i>
                    </button>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>

            <div className="d-lg-none responsive-input">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <input
                          style={{ backgroundColor: "#F8F8FA", border: "none" }}
                          type="text"
                          className="form-control shadow inpt w-100"
                          placeholder="Search"
                        />
                      </div>
                      {/* pencil-icon */}
                      {/* <i
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        class="fa-regular fa-pen-to-square mx-4"
                      ></i>{" "}
                      <div
                        class="offcanvas offcanvas-end"
                        tabindex="-1"
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel"
                      >
                        <button
                          type="button"
                          class="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                        <div class="offcanvas-body">
                          <div class="sidebar">
                            <h5 class="mt-5">
                              Edit Detail
                              <span style={{ marginLeft: "220px" }}>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="offcanvas"
                                  aria-label="Close"
                                ></button>
                              </span>
                            </h5>

                            <ul
                              class="nav nav-tabs"
                              id="editTabs"
                              role="tablist"
                            >
                              <li class="nav-item">
                                <button
                                  class="nav-link active rr"
                                  id="personal-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#personalDetails"
                                  type="button"
                                  role="tab"
                                  aria-controls="personalDetails"
                                  aria-selected="true"
                                >
                                  Personal Details
                                </button>
                              </li>
                              <li class="nav-item">
                                <button
                                  class="nav-link"
                                  id="trip-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#tripDetails"
                                  type="button"
                                  role="tab"
                                  aria-controls="tripDetails"
                                  aria-selected="false"
                                >
                                  Trip Details
                                </button>
                              </li>
                            </ul>
                            <div class="tab-content mt-4" id="editTabContent">
                              <div
                                class="tab-pane fade show active"
                                id="personalDetails"
                                role="tabpanel"
                                aria-labelledby="personal-tab"
                              >
                                <form>
                                  <div class="mb-3">
                                    <label for="name" class="form-label">
                                      Your Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="name"
                                      placeholder="Enter your name"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label for="email" class="form-label">
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="email"
                                      placeholder="Enter your email"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label for="mobile" class="form-label">
                                      Mobile Number
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="mobile"
                                      placeholder="Enter your mobile number"
                                    />
                                  </div>

                                  <div class="mb-3">
                                    <label for="dob" class="form-label">
                                      Date of Birth
                                    </label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      id="dob"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label for="nationality" class="form-label">
                                      Nationality
                                    </label>
                                    <select
                                      class="form-select"
                                      id="nationality"
                                    >
                                      <option value="Saudi Arabian" selected>
                                        Saudi Arabian
                                      </option>
                                      <option value="Other">Other</option>
                                    </select>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="tripDetails"
                                role="tabpanel"
                                aria-labelledby="trip-tab"
                              >
                                <div
                                  class="tab-pane fade show active"
                                  id="tripDetails"
                                  role="tabpanel"
                                  aria-labelledby="trip-tab"
                                >
                                  <div class="mb-3">
                                    <label
                                      for="tripStartDate"
                                      class="form-label"
                                    >
                                      Trip Start Date (DD/MM/YYYY)
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="tripStartDate"
                                      placeholder="DD/MM/YYYY"
                                    />
                                  </div>

                                  <div class="mb-3">
                                    <label for="tripEndDate" class="form-label">
                                      Trip End Date (DD/MM/YYYY)
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="tripEndDate"
                                      placeholder="DD/MM/YYYY"
                                    />
                                  </div>

                                  <div class="mb-3">
                                    <label
                                      for="countryOrigin"
                                      class="form-label"
                                    >
                                      Select Country Of Origin
                                    </label>
                                    <select
                                      class="form-select"
                                      id="countryOrigin"
                                    >
                                      <option value="USA" selected>
                                        United States of America (USA)
                                      </option>
                                      <option value="UAE">
                                        United Arab Emirates (UAE)
                                      </option>
                                      <option value="India">India</option>
                                      <option value="Australia">
                                        Australia
                                      </option>
                                      <option value="Canada">Canada</option>
                                    </select>
                                  </div>

                                  <div class="mb-3">
                                    <label
                                      for="selectedCountries"
                                      class="form-label"
                                    >
                                      Selected Countries
                                    </label>
                                    <div class="d-flex flex-wrap align-items-center gap-2 p-2 border rounded">
                                      <span class="badge bg-light text-dark d-flex align-items-center">
                                        United Arab Emirates (UAE) +
                                      </span>
                                      <button
                                        type="button"
                                        class="btn btn-link p-0 text-primary"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="d-flex justify-content-between mt-4">
                              <button
                                style={{ backgroundColor: "#003A29" }}
                                class="btn btn-update w-100 btn-lg rounded-2 text-light "
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* pencil-icon */}
                      {/* toggle icon */}
                      <div className="toggle-icon rounded-2 text-center p-2">
                        <i
                          style={{ cursor: "pointer" }}
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                          className="fa-solid fa-sliders"
                        ></i>
                        <div
                          className="offcanvas side-bar offcanvas-end"
                          tabIndex="-1"
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          {/* <div className="offcanvas-header"></div> */}

                          {/* side-content */}

                          <div class="d-flex align-items-start justify-content-start">
                            <div
                              class="nav flex-column nav-pills me-3"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <div className="d-flex align-items-center justify-content-center">
                                <div>
                                  <p
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    className="small"
                                  >
                                    <FaLongArrowAltLeft
                                      style={{ cursor: "pointer" }}
                                    />
                                    Sort/Filter
                                  </p>
                                </div>
                                <div></div>
                              </div>
                              <button
                                style={{ fontSize: "11px", colour: "#052F97" }}
                                class="nav-link active  fw-bold
                                "
                                id="v-pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-home"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-home"
                                aria-selected="true"
                              >
                                Sort
                              </button>
                              <button
                                style={{ fontSize: "11px", colour: "#052F97" }}
                                class="nav-link fw-bold
                                "
                                id="v-pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false"
                              >
                                Inclusions
                              </button>
                              <button
                                style={{ fontSize: "10px", colour: "#052F97" }}
                                class="nav-link fw-bold
                                "
                                id="v-pills-messages-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-messages"
                                aria-selected="false"
                              >
                                Medical Cover
                              </button>
                              <button
                                style={{ fontSize: "11px", colour: "#052F97" }}
                                class="nav-link fw-bold
                                "
                                id="v-pills-settings-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-settings"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-settings"
                                aria-selected="false"
                              >
                                Insures
                              </button>
                            </div>
                            <div class="tab-content" id="v-pills-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                              >
                                <div className="text-start cards m-3">
                                  <h6
                                    className="
                              mx-2"
                                  >
                                    Sort
                                  </h6>
                                  <div className="card side-cards m-2">
                                    <div class="form-check m-2">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="sortOption"
                                        id="lowToHigh"
                                        value="lowToHigh"
                                      />
                                      <label
                                        style={{ color: "#416185" }}
                                        class="form-check-label cover"
                                        for="lowToHigh"
                                      >
                                        Cover High to Low
                                      </label>
                                    </div>
                                  </div>
                                  {/* 2 */}
                                  <div className="card side-cards m-2 ">
                                    <div class="form-check m-2">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="sortOption"
                                        id="lowToHigh"
                                        value="lowToHigh"
                                      />
                                      <label
                                        style={{ color: "#416185" }}
                                        class="form-check-label cover"
                                        for="lowToHigh"
                                      >
                                        Cover Low to High
                                      </label>
                                    </div>
                                  </div>
                                  {/* 3 */}
                                  <div className="card side-cards m-2 ">
                                    <div class="form-check m-2">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="sortOption"
                                        id="lowToHigh"
                                        value="lowToHigh"
                                      />
                                      <label
                                        style={{ color: "#416185" }}
                                        class="form-check-label cover"
                                        for="lowToHigh"
                                      >
                                        Premium Low to High
                                      </label>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                              <div
                                class="tab-pane fade"
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                              >
                                <div class="container mt-4 bage">
                                  <h6 className="text-start">Inclusions</h6>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="baggageLoss"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="baggageLoss"
                                    >
                                      Baggage Loss
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input text-start"
                                      type="checkbox"
                                      id="tripCancellation"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="tripCancellation"
                                    >
                                      Trip Cancellation
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="medicalCover"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="medicalCover"
                                    >
                                      Medical Cover
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="personalAccidentCover"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="personalAccidentCover"
                                    >
                                      Accident Cover
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="lossOfPassport"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="lossOfPassport"
                                    >
                                      Loss of Passport
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="tab-pane fade"
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                              >
                                <div class="container amounts mt-5 mx-4">
                                  <div class="container mt-5">
                                    <div class="input-box-container">
                                      <span>ZAR</span>
                                      <p className="mx-3 pt-3">{count}</p>
                                    </div>
                                  </div>
                                  <div class="range-slider">
                                    <div class="d-flex flex-column align-items-center">
                                      <div class="d-flex">
                                        <button
                                          onClick={DecreaseCount}
                                          class="btn btn-outline-primary btn-sm"
                                          id="min-btn"
                                        >
                                          -
                                        </button>
                                        <input
                                          type="range"
                                          class="form-range slider mx-2"
                                          id="slider"
                                          min="25000"
                                          max="1000000"
                                          value="25000"
                                        />
                                        <button
                                          onClick={IncreaseCount}
                                          class="btn btn-outline-primary btn-sm"
                                          id="max-btn"
                                        >
                                          +
                                        </button>
                                      </div>
                                      <div class="d-flex justify-content-between w-100">
                                        <small>ZAR 25,000</small>
                                        <small>ZAR 1,000,000</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                              <div
                                class="tab-pane fade"
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                              >
                                <div class="container mt-4">
                                  <h6 className="text-start">Insures</h6>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="baggageLoss"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="baggageLoss"
                                    >
                                      Baggage Loss
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input text-start"
                                      type="checkbox"
                                      id="tripCancellation"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="tripCancellation"
                                    >
                                      Trip Cancellation
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="medicalCover"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="medicalCover"
                                    >
                                      Medical Cover
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="personalAccidentCover"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="personalAccidentCover"
                                    >
                                      Accident Cover
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      id="lossOfPassport"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="lossOfPassport"
                                    >
                                      Loss of Passport
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* side-content */}
                          <div class="button-container mx-4">
                            <button class="reset-button">Reset All</button>
                            <button class="apply-button">Apply</button>
                          </div>

                          {/*  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-9 main-box">
                <div
                  style={{ borderRadius: "7px" }}
                  className="all_text d-lg-flex p-4 shadow square gap-4 my-3 justify-content-around"
                >
                  <div className="box1 p-2">
                    <div className="d-flex gap-1">
                      <div>
                        <img
                          className="w-100 main-icon"
                          style={{ maxWidth: "25px" }}
                          src="https://i.ibb.co/pJhQNfN/12234.jpg"
                          alt="Icon"
                        />
                      </div>

                      <div className="top-content">
                        <p className="m-0 silverp">Annual</p>
                        <p className="m-0 take_ful wt">Watania</p>
                      </div>
                    </div>
                    <div class="text-center mt-3 d-flex justify-content-end w-100">
                      <input
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom"
                        type="checkbox"
                        className="mx-2 check cek"
                      />

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
                                  left: "50%",
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

                                <button class="btn btn-sm btn-light ms-auto text-danger border-0">
                                  <i class="bi bi-x-circle"></i>
                                </button>
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

                      <label for="compare1" class="form-check-label com">
                        Compare
                      </label>
                    </div>
                  </div>

                  <div className="box3 mt-2">
                    <p className="m-0 take_ful">Medical Cover</p>
                    <p className="m-0 pay_it amount">
                      $50,000 <br />
                      <span className="feature">
                        <a
                          style={{ color: "#003D2B" }}
                          href="#"
                          class="text-decoration-none"
                        >
                          View all features <IoIosArrowForward />
                        </a>
                      </span>
                    </p>
                  </div>

                  <div className="box4 mt-2">
                    <p className="m-0 take_ful baggage">Baggage Loss</p>
                    <p className="m-0 pay_it amnt">$250</p>
                  </div>

                  <div className="box5 mt-2">
                    <p className="m-0 take_ful accident">Accident Cover</p>
                    <p className="m-0 pay_it accident">$20,000</p>
                  </div>

                  <div className="box6 mt-2">
                    <p className="m-0 take_ful">
                      Premium{" "}
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#000",
                          fontWeight: "600",
                        }}
                      >
                        ZAR 945
                      </span>
                    </p>
                    <button className="nowby mt-3">Buy Now</button>
                  </div>
                </div>
              </div>

              {/*  */}

              <div className="col-md-3 side-card mt-4">
                <div
                  style={{ borderRadius: "7px" }}
                  className="p-3 w-100 boxes shadow my-3"
                >
                  <div className="d-flex p-1 gap-1">
                    <img
                      className="w-100"
                      style={{ maxWidth: "50px", height: "60px" }}
                      src="https://cdn.policybazaar.ae/quote/new/src/assets/images/faq-icon.svg"
                      alt="Guide Icon"
                    />
                    <p
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="m-0 mx-2"
                    >
                      Frequently Asked Question <br />
                      <span style={{ fontWeight: "700", fontSize: "14px" }}>
                        about Travel Insurance{" "}
                      </span>
                    </p>
                  </div>
                  <button
                    style={{ marginLeft: "70px" }}
                    className="kno_more p-2"
                  >
                    Know More
                  </button>
                </div>
                <div
                  style={{ borderRadius: "7px" }}
                  className="p-3 w-100 boxess shadow my-3"
                >
                  <div className="d-flex p-1 gap-1">
                    <img
                      className="w-100"
                      style={{ maxWidth: "50px", height: "60px" }}
                      src="https://cdn.policybazaar.ae/pbuae/images/claim-banner-icon.png"
                      alt="Guide Icon"
                    />
                    <p
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="m-0 mx-2"
                    >
                      Step-by-Step Guide <br />
                      <span style={{ fontWeight: "700", fontSize: "14px" }}>
                        Travel Insurance Claims
                      </span>
                    </p>
                  </div>
                  <button
                    style={{ marginLeft: "70px" }}
                    className="kno_more p-2"
                  >
                    Know More
                  </button>
                </div>
                {/*  */}

                {/*  */}
                <div
                  className="card head bg-light shadow"
                  style={{ border: "none" }}
                >
                  <div className="card-header m-2">
                    <span>
                      <img
                        className="w-100"
                        style={{ maxWidth: "30px", height: "35px" }}
                        src="https://i.ibb.co/pJhQNfN/12234.jpg"
                        alt="Advantage Icon"
                      />
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        {" "}
                        Advantage
                      </span>
                    </span>
                  </div>
                  <div className="card-header mmm">
                    <span>
                      <i
                        style={{ fontSize: "25px", color: "orange" }}
                        className="fa-solid fa-square-caret-down"
                      ></i>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Lowest Price Guaranteed
                      </span>
                    </span>
                  </div>
                  <div className="card-header mmm pt-3">
                    <span>
                      <i
                        style={{ fontSize: "25px", color: "purple" }}
                        className="fa-solid fa-square-phone"
                      ></i>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Expert Advice
                      </span>
                    </span>
                  </div>
                  <div className="card-header mmm pt-3">
                    <span>
                      <i
                        style={{ fontSize: "25px", color: "skyblue" }}
                        className="fa-solid fa-headset"
                      ></i>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Claims Assistance
                      </span>
                    </span>
                  </div>
                  <div className="card-header mmm pt-3">
                    <span>
                      <i
                        style={{ fontSize: "25px", color: "antiquewhite" }}
                        className="fa-solid fa-rotate-right"
                      ></i>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Easy Refunds
                      </span>
                    </span>
                  </div>
                  <div className="card-header  mmm">
                    <span>
                      <i
                        style={{ fontSize: "25px", color: "green" }}
                        className="fa-solid fa-gift"
                      ></i>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "400",
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        Exciting Rewards
                      </span>
                      <br />
                      <button
                        style={{ marginLeft: "30px" }}
                        className="kno_more mt-4 p-2"
                      >
                        Know More
                      </button>
                    </span>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: "#fff", border: "none" }}
                  className="card shadow"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
