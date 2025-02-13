import React from 'react'
import "./Help.css"
import { Link } from 'react-router-dom'
export const Help = () => {
    return (<>
        <div className="container">
            <div className="row " style={{ marginTop: "50px" }}>
                <div className="col-lg-9">
                    <h4>Need help navigation the Insurance claim process? <br />Our team is here to assist you</h4>
                    <p style={{fontSize:'12px',color:'#000',fontWeight:'400'}}>Dealing with an insurance claim can be challenging, but we're here to help guide you through the process. When you purchase insurance, one of the most important services that the company provides is claim settlement. Insurance companies are obligated to settle claims promptly, but each product may have a different claim process that you'll need to go through. To ensure a smooth process, it's important to
                        understand the specific steps involved in filing a claim before initiating it.</p>
                    <h6 style={{fontWeight:'800'}}>To learn more about the claim process, please select a product:</h6>
                    <div className="help-card-contain mt-3 ">
                        <Link to="/allclaim" className="" >
                            <img style={{
                                borderRadius: "14px",
                                transition: "border 0.3s ease",
                            }} src="https://i.ibb.co/F4CgZdx/Group-74.png" alt="Motor" />
                        </Link>
                        <Link
                            to="/allclaim"
                            className=""
                        >
                            <img style={{
                                borderRadius: "14px",
                                transition: "border 0.3s ease",
                            }} src="https://i.ibb.co/yR3ymtc/Group-75.png" alt="Health" />
                        </Link>
                        <Link
                            to="/allclaim"
                            className=""
                        >
                            <img style={{
                                borderRadius: "14px",
                                transition: "border 0.3s ease",
                            }} src="https://i.ibb.co/McsHbYc/Group-76.png" alt="Travel" />
                        </Link>
                        <Link
                            to="/allclaim"
                            className=""
                        >
                            <img style={{
                                borderRadius: "14px",
                                transition: "border 0.3s ease",
                            }} src="https://i.ibb.co/NF6Z6Bq/Group-77.png" alt="Bike" />
                        </Link>
                        <Link
                            to="/allclaim"
                            className=""
                        >
                            <img

                                src="https://i.ibb.co/c6fgNsJ/Group-78.png"
                                alt="Life"
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 help-right">
                    <div className="right-img-box d-flex ">
                        <img src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmUser..svg" alt="" />
                        <div className='right-img-content'>
                            <h4 >Got questions regarding <span>Insurance Claim?</span></h4>
                        </div>

                    </div>
                    <div className="content-box">
                        <p>For Motor, Health, Travel & Term Insurance claim related queries</p>
                        <div className="bottom-content d-flex mt-3 ">
                            <span><img src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" alt="" /></span>
                            <div>
                                <h5 style={{ fontSize: "16px", color: "#000" }}>800 800 001</h5>
                                <p style={{ fontSize: "11px" }}>Working hours: 8 AM - 8 PM GST (Mon-Sun)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </>
    )
}
