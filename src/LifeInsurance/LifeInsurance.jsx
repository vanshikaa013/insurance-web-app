import React, { useState } from "react";
import "./LifeInsurance.css";
import { FaMinus, FaPlus, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const LifeInsurance = () => {
  const [income, setIncome] = useState(17500); // Default income
  const ranges = [
    { label: "1k-3k", min: 1000, max: 3000 },
    { label: "3k-5k", min: 3000, max: 5000 },
    { label: "5k-8k", min: 5000, max: 8000 },
    { label: "8k-10k", min: 8000, max: 10000 },
    { label: "10k-15k", min: 10000, max: 15000 },
    { label: "15k-20k", min: 15000, max: 20000 },
    { label: "20k+", min: 20001, max: Infinity },
  ];

  // Find the current active range based on income
  const activeRange = ranges.find(
    (range) => income >= range.min && income <= range.max
  )?.label;

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setIncome(value);
  };

  const handleRangeClick = (range) => {
    setIncome(range.min); // Set income to the minimum value of the range
  };
  const [count, setCount] = useState(1000);

  const IncreaseCount = () => {
    setCount(count + 1000);
  };

  const DecreaseCount = () => {
    if (count > 1000) {
      setCount(count - 1000);
    }
  };

  return (
    <>
      <h5
        style={{ color: "#253858" }}
        class="mb-4 mt-5 fw-bold top-content text-center"
      >
        Compare & Buy The Best Life Insurance Plans
      </h5>
      <div style={{ backgroundColor: "#F7FCFF" }} class="container p-4 py-4">
        <div class="row align-items-center">
          <div
            style={{ color: "#132E5C" }}
            class=" small fw-bold col-lg-6 mb-4 mb-lg-0"
          >
            <div className="d-flex align-items-center justify-content-center upper-part">
              <div className="instant">
                <div class="feature-item">
                  <p>
                    {" "}
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/-per-25900.png"
                      alt=""
                    />{" "}
                    Upto 35% OFF
                  </p>
                </div>
                <div class="feature-item">
                  <p>
                    {" "}
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/issuance-25901.png"
                      alt=""
                    />{" "}
                    Instant Issuance
                  </p>
                </div>

                <div class="feature-item">
                  <p>
                    {" "}
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/coverage-25902.png"
                      alt=""
                    />{" "}
                    Worldwide Coverage
                  </p>
                </div>
              </div>

              <div>
                <img
                  className="men upper-part"
                  style={{ height: "250px" }}
                  src="https://i.ibb.co/GpPMpTw/term-landing-bnnr.png"
                  alt="term-landing-bnnr"
                  border="0"
                />
              </div>
            </div>

            <div className="rates d-flex align-items-center justify-content-between">
              <div>
                <div class="container mt-4">
                  <div class="rating-section">
                    <div>
                      <p class="">We Are Rated</p>
                      <p class=" d-flex align-items-center">
                        <span class="me-2">4.6/5</span>
                        <span class="stars">
                          <i class="bi bi-star-fill">★</i>
                          <i class="bi bi-star-fill">★</i>
                          <i class="bi bi-star-fill">★</i>
                          <i class="bi bi-star-fill">★</i>
                          <i class="bi bi-star-half">★</i>
                        </span>
                      </p>
                      <p class="mb-0 text-muted">
                        23,923 {}
                        <img
                          src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg"
                          alt="Google logo"
                          class="me-1"
                        />{" "}
                        {""}
                        Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="statistics">
                  <div className="part-a">
                    <h5 style={{ color: "#003D2B" }}>50+</h5>
                    <small>Insurance Partners</small>
                  </div>
                  <div className="part-a">
                    <h5 style={{ color: "#003D2B" }}>1 Million+</h5>
                    <small>Trusted Customers</small>
                  </div>
                  <div className="part-a">
                    <h5 style={{ color: "#003D2B" }}>250 K+</h5>
                    <small>Policies Sold</small>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>

          <div class="col-lg-6 ">
            <div class="form-container px-3">
              <p
                style={{ color: "#132E5C", fontSize: "15px" }}
                class="form-title text-center"
              >
                Compare &{" "}
                <span style={{ color: "#003D2B" }} className="fw-bold">
                  Save Up to 35%{" "}
                </span>{" "}
                <br /> on Term Life Insurance
              </p>
              <form>
                <div class="mb-3 mt-2 ">
                  <div class="input-group">
                    <span
                      style={{ width:'56px'  }}
                      class="input-group-text"
                    >
                      <FaRegUserCircle />
                    </span>
                    <input 
                      type="tel"
                      class="form-control border-none rounded-1"
                      id="mobileNumber"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <div class="input-group">
                    <span
                      style={{ backgroundColor: "white" , }}
                      class="input-group-text"
                    >
                      +971
                    </span>
                    <input
                      type="tel"
                      class="form-control border-none rounded-1"
                      id="mobileNumber"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>


                
                <div class="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label
                        style={{ color: "#132E5C"}}
                        for="income"
                        class="small fw-bold"
                      >
                        Monthly Income (Dirhams)
                      </label>
                    </div>
                    <div>
                      <div className="btnn d-flex align-items-center justify-content-center">
                        <div className="green">
                          <div className="d-flex align-items-center justify-content-center">
                            <button
                              className="btn btn-sm text-dark"
                              onClick={(event) => {
                                event.preventDefault();
                                DecreaseCount();
                              }}
                            >
                              <FaMinus />
                            </button>
                            <p className="m-2">{count}</p>
                            <button
                              className="btn btn-sm text-dark"
                              onClick={(event) => {
                                event.preventDefault();
                                IncreaseCount();
                              }}
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="range"
                    class="form-range"
                    id="income"
                    min="1000"
                    max="20000"
                    step="1000"
                  />
                </div>
                <div className="container mt-4">
      
      {/* Income Input */}
      <div className="mb-3 d-flex" style={{alignItems:'center'}}>
      <h4 style={{display:'block'}}>Monthly Income (Dirhams)</h4>      <input
          type="number"
          className="form-control"
          value={income}
          onChange={handleInputChange}
          min="1000"
          style={{maxWidth:'100px'}}
        />
      </div>

      {/* Income Range Buttons */}
      <div className="d-flex flex-wrap gap-2">
        {ranges.map((range) => (
          <button
            key={range.label}
            className={`btn ${
              activeRange === range.label ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handleRangeClick(range)}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
                <div class="my-3 small text-muted text-center">
                  By Clicking, I declare that I am a resident of UAE and holding
                  a valid <br /> Visa and agree to the website{" "}
                  <a href="" className="mycolor">Privacy Policy</a> and <a href="" className="mycolor">Terms of Use.</a>
                </div>
                <Link to='/lifeplanmodal'>
                <button
                  style={{ backgroundColor: "#003d2b" }}
                  type="submit"
                  class="btn w-100 text-light lifebtnhvr"
                  >
                 Submit
                </button>
                  </Link>
                <div class="text-center mt-3">OR</div>
                <Link to='/lifeplanmodal'>
                <button
                  type="button"
                  class="btn btn-outline-primary my-3 last-btn w-100 lifebtnhvr"
                  >
                  <img
                    src="https://cdn.policybazaar.ae/pbuae/images/hearticon.svg"
                    alt=""
                    />{" "}
                  Click here for Health Insurance
                </button>
                    </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        style={{ color: "#132E5C" }}
        className=" mx-4 mt-2 last-design rounded-2 shadow pt-3 d-flex align-items-center justify-content-center"
      >
        <div class="feature-item">
          <div>
            <img
              src="https://cdn.policybazaar.ae/pbuae/images/-per-25900.png"
              alt=""
            />{" "}
          </div>
          <p className="small text-center"> Upto 35% OFF</p>
        </div>
        <div class="feature-item mx-4">
          <div>
            <img
              src="https://cdn.policybazaar.ae/pbuae/images/issuance-25901.png"
              alt=""
            />{" "}
          </div>
          <p className="small text-center"> Instant Issuance</p>
        </div>

        <div class="feature-item">
          <div>
            <img
              src="https://cdn.policybazaar.ae/pbuae/images/coverage-25902.png"
              alt=""
            />{" "}
          </div>
          <p className="small text-center">Worldwide Coverage</p>
        </div>
      </div>
      {/*  */}

      <div className="rated shadow rounded-2 m-4  d-flex align-items-center justify-content-between">
        <div>
          <div class="container mt-4">
            <div class="rating-section">
              <div>
                <p class="small">We Are Rated</p>
                <p class="d-flex align-items-center">
                  <span class="me-2">4.6/5</span>
                  <span class="stars">
                    <i class="bi bi-star-fill">★</i>
                    <i class="bi bi-star-fill">★</i>
                    <i class="bi bi-star-fill">★</i>
                    <i class="bi bi-star-half">★</i>
                  </span>
                </p>
                <div className="google">
                  <p class="mb-0 text-muted">
                    23,923 {}
                    <img
                      src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg"
                      alt="Google logo"
                      class="me-1"
                    />{" "}
                    {""}
                    Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="statistics">
            <div className="part-a b">
              <h5 style={{ color: "#003D2B" }}>50+</h5>
              <small>Insurance Partners</small>
            </div>
            <div className="part-a b">
              <h5 style={{ color: "#003D2B" }}>1 Million+</h5>
              <small>Trusted Customers</small>
            </div>
            <div className="part-a b">
              <h5 style={{ color: "#003D2B" }}>250 K+</h5>
              <small>Policies Sold</small>
            </div>
          </div>{" "}
        </div>
      </div>
      {/*  */}
      <footer className="last-section">
        <div className="d-flex header align-items-center gap-5 justify-content-center">
          <div>
            <h3 className="mt-5 fw-bold why">
              Why choose <br /> ShopInsurance to <br /> buy insurance?
            </h3>
          </div>
          <div>
            <div className="card">
              <div className="d-flex align-items-center gap-2 justify-content-center">
                <div className="p-3 my-2">
                  <img
                    src="https://static.pbcdn.ae/pbuae/images/compare-buy-icon.svg"
                    alt=""
                  />
                </div>

                <div className="cards">
                  <p className="text-dark fw-bold mt-3">Compare & Buy</p>
                  <p style={{ fontSize: "13px" }} className="small p-2">
                    Compare various insurance policies and <br /> shortlist the
                    plan that suits your needs.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
          </div>
          <div className="card">
            <div className="d-flex align-items-center gap-2 justify-content-center">
              <div className="p-3 my-2">
                <img
                  src="https://static.pbcdn.ae/pbuae/images/best-price-guaranteed-icon.svg"
                  alt=""
                />
              </div>

              <div className="cards">
                <p className="text-dark fw-bold  mt-3">Best Price Guaranteed</p>
                <p style={{ fontSize: "13px" }} className="small p-2">
                  Buy at the best prices from top-rated <br /> insurance
                  companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* close */}

      <footer className="last-card last-section">
        <div className="d-flex align-items-center gap-5 justify-content-center">
          <div>
            <div className="card mt-3">
              <div className="d-flex align-items-center gap-2 justify-content-center">
                <div className="p-3 my-2">
                  <img
                    src="https://static.pbcdn.ae/pbuae/images/expert-advice-icon.svg"
                    alt=""
                  />
                </div>

                <div className="cards">
                  <p className="text-dark fw-bold  mt-3">Expert Advice</p>
                  <p style={{ fontSize: "13px" }} className="small p-2">
                    We offer unbiased guidance to ensure that <br /> you choose
                    the right insurance plan.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
          </div>
          <div className="card mt-3">
            <div className="d-flex align-items-center gap-2 justify-content-center">
              <div className="p-3 my-2">
                <img
                  src="https://static.pbcdn.ae/pbuae/images/insurers-select-icon.svg"
                  alt=""
                />
              </div>

              <div className="cards">
                <p className="text-dark fw-bold  mt-3">
                  Top Insurers To Select From
                </p>
                <p style={{ fontSize: "13px" }} className="small p-2">
                  Providing you with a diverse selection of <br /> options for
                  the best coverage tailored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LifeInsurance;
