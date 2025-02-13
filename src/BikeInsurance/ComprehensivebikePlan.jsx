import React, { useState } from 'react'
import './complan.css'
import { Link } from 'react-router-dom';

const ComprehensivebikePlan = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    
      const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
      };
    return (
        <>

            <div className="container mt-5">
                <div className="row" style={{marginTop:'30px',justifyContent:'center'}}>

                    {/* <div className="col-md-3"></div> */}

                    <div className="col-md-6 col-sm-12 col-xs-12   mt-3">
                        <div className="">
                            <h6>9 comprehensive plans available</h6>
                            {/* <p>Covers damages to your vehicle</p> */}
                        </div>

                        <div className="mt-4 three_product w-100 justify-content-center rounded d-flex gap-5 shadow  p-3">

                            <div className="mt-2">
                                <img className='bajaj_img' width='150px' src="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" alt="" />
                            </div>

                            <div className="mt-2">
                                <p>IDV</p>
                                <h6>₹13,978</h6>
                            </div>

                            <div className="mt-2">
                              <Link to='/bikeplanbuy'>
                                <button className='rupee' style={{
                                  backgroundColor: '#003d2b',
                                  color: '#fff',
                                  border: 'none',
                                  padding: '11px',
                                  borderRadius: '5px',
                                  
                                }}> ₹739  <i style={{ width: '' }} class="fa-solid fa-arrow-right"></i></button>
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-3  four_card ">
            <div className="my-card rounded-2 p-3 shadow " style={{marginTop:'24px'}}>
              <div
                style={{ marginBottom: "1px solid red" }}
                className="car_name"
              >
                <p style={{ fontWeight: "600", fontSize: "13px" }}>
                  Hero Honda Passion Plus{" "}
                  <span style={{ float: "right" }}>
                  <i class="fa-solid fa-motorcycle"></i>
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "300",
                      color: "black",
                    }}
                  >
                    MP09MM6436 | Registered in 2008
                  </span>
                </p>
                <hr />
              </div>

              <div className="car_detail mt-0">
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
             
            </div>
          </div>
                    {/* <div className="col-md-3"></div> */}




                </div>
            </div>


        </>
    )
}

export default ComprehensivebikePlan
