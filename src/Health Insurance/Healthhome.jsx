import React from 'react'
import './healthhome.css'
import { Link } from 'react-router-dom'

function Healthhome() {
  return (
    <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <p className='p_txt' style={{ fontSize: '18px', fontWeight: '300' }}>
                                Get 1 million <span style={{ color: '#003d2b', fontWeight: '800' }}>health coverage</span>  starting at <span style={{ fontWeight: '800' , color : "#003d2b"}}>AED 4/day</span> <br />
                                Get a quote now!
                            </p>
                        </div>

                        <div className="insurance_section d-flex align-items-center justify-content-center">
                            {/* Left: Buttons */}
                            <div className="insurance_buttons">
                                <h5>Buying health insurance for?</h5>
                                <div className="mt-3 ">
                                    <Link to='/stepper'  className="btn btn_option">Self/Family</Link>
                                    <Link to='/stepppperform' className="btn btn_option">Domestic Workers</Link>
                                    <Link to='/stepppperform' className="btn btn_option invest_or">Investor</Link>
                                    <Link to='/stepppperform' className="btn btn_option proceed_btn "><span style={{color:'#fff'}}>Proceed</span></Link>

                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="insurance_image ms-4">
                                <img src="https://cdn.policybazaar.ae/pbuae/images/health-banner-6.png" alt="health-banner" width="201" height="266" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-1 bodycount shadow mt-3">
                <div className="row">

                    <div className="col-md-2">
                        <div className="card txtbody">
                            <div className="card-body">
                                <div className="stats-value">We Are Rated</div>
                                <div className="stats-label"> 4.6/5 <span style={{color : "#FAAA24", fontSize : "1.2rem"}}>★★★★★</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="card txtbody">
                            <div className="card-body d-flex gap-3 alitment">
                                <div className="stats-value">23,923</div>
                                <div className="stats-label d-flex align-items-center gap-2"><img class="img-fluid" src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg" alt="google-logo"/> Reviews</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card txtbody">
                            <div className="card-body">
                                <div className="stats-value">1 Million+</div>
                                <div className="stats-label"><img class="img-fluid" src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg" alt="google-logo"/>Trusted Customers</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="card txtbody">
                            <div className="card-body">
                                <div className="stats-value mycolor">21+</div>
                                <div className="stats-label">Insurance Partners</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="card txtbody">
                            <div className="card-body">
                                <div className="stats-value mycolor"><span className='mycolor'>250K+</span></div>
                                <div className="stats-label">Policies Sold</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            {/* Only For Mobile Size */}
            <div style={{ borderRadius: '5px' }} className="container mobile_look shadow pt-3 text-center mt-3">
                <div className="row">

                    <div className="col-md-4 col-sm-4">
                        <div className="">
                            <h5 style={{ color: '003d2b', fontSize: '15px', fontWeight: '600' }}>50+</h5>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>Insurance Partners</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="">
                            <h5 style={{ color: '003d2b', fontSize: '15px', fontWeight: '600' }}>1 Million+</h5>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>Trusted Customers</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="">
                            <h5 style={{ color: '#003d2b', fontSize: '15px', fontWeight: '600' }}>250 k+</h5>
                            <p style={{ fontSize: '12px', fontWeight: '300' }}>Policies Sold</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="hello_bg mt-4">


                <div className="container mt-5">
                    <div className="row">

                        <div className="col-md-3 mt-5">
                            <div className="">
                                <p style={{ fontSize: '18px' }}>Why choose shopinsuranceto  buy insurance? </p>
                                <p style={{ fontSize: '13px', fontWeight: '300' }}>Health insurance is a type of insurance that covers the cost of medical treatment. It offers
                                    financial security in case of medical emergencies, critical illnesses, and more.</p>
                            </div>
                        </div>

                        <div className="col-md-3"></div>

                        <div className="col-md-3 mt-5 car_info">
                            <div className="">
                                <div className="card shadow color_chng">
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <img style={{backgroundColor:'#f1f7ff',padding:'9px',borderRadius:'15px'}} src="https://cdn.policybazaar.ae/pbuae/images/compare-buy.svg" alt="compare-buy" width="67" height="60" />
                                            <p className="card-subtitle mb-2 mt-2 p-2 text-body-secondary">Compare & Buy</p>
                                            <p style={{ fontSize: '13px' }} className="card-text">Compare various insurance policies and shortlist the plan that suits your needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3  car_info">
                            <div className="">
                                <div className="card shadow color_chng">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img style={{backgroundColor:'#fff7e3',padding:'9px',borderRadius:'15px'}} src="https://cdn.policybazaar.ae/pbuae/images/best-price-banner-6.svg" alt="compare-buy" width="67" height="60" />                     
                                                   <p className="card-subtitle mb-2 mt-2 p-2 text-body-secondary">Expert Advice</p>
                                            <p style={{ fontSize: '13px' }} className="card-text">We offer unbiased guidance to ensure that you choose the right insurance plan.    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6"></div>

                        <div className="col-md-3 mt-5 car_info">
                            <div className="">
                                <div className="card shadow color_chng">
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <img style={{backgroundColor:'#fff2f8',padding:'9px',borderRadius:'15px'}} src="https://cdn.policybazaar.ae/pbuae/images/expert-advice-banner-6.svg" alt="compare-buy" width="67" height="60" />                        
                                                <p className="card-subtitle mb-2 mt-2 p-2 text-body-secondary">Best Price Guaranteed</p>
                                            <p style={{ fontSize: '13px' }} className="card-text">Buy at the best prices from top-rated insurance companies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3  car_info">
                            <div className="">
                                <div className="card shadow color_chng">
                                    <div className="card-body p-3">
                                        <div className="text-center">
                                            <img style={{backgroundColor:'#deffee',padding:'9px',borderRadius:'15px'}} src="https://cdn.policybazaar.ae/pbuae/images/insure-banner-6.svg" alt="compare-buy" width="67" height="60" />
                                            <p className="card-subtitle mb-2 mt-2 p-2 text-body-secondary">21+ Insurers to Select From</p>
                                            <p style={{ fontSize: '13px' }} className="card-text">Providing you with a diverse selection of options for the best coverage tailored to your needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

     
    </>
  )
}

export default Healthhome
