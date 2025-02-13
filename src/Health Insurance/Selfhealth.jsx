import React from 'react'
import './selfhealth.css'
import { Link } from 'react-router-dom'

const Selfhealth = () => {
  return (
    <>

<div className="container mt-5">

<div className="options-container text-center">
  
  <h5 className="fw-bold">Who would you like to Insure?</h5>
  <p>Let us know who you'd like to protect!</p>
  <div className="d-flex justify-content-center gap-3 flex-wrap selfhelpmedidbutton">
   <Link to='/stepppperform'><button className="btn btn-outline-success box">Self Only</button></Link> 
  <Link to='/stepppperform'>
    <button className="btn btn-outline-success box">
      Family Without Self
    </button>
  </Link>
  </div>
  <button className="btn btn-outline-success both-btn box btn-start mt-3 selfhelpmedidbuttonbotom">
    Both Self and Family
  </button>
</div>

</div>

<div className="icons" style={{marginBottom:'-30px'}}>
<div className="feature-icons text-center">
  <div className="feature-item mt-4">
    <p>
      {" "}
      <img
        src="https://cdn.policybazaar.ae/pbuae/images/icon-3-banner-6.svg"
        alt="Best Price Guaranteed"
      />{" "}
      Best Price Guaranteed
    </p>
  </div>
  <div className="feature-item mt-4">
    <p>
      {" "}
      <img
        src="https://cdn.policybazaar.ae/pbuae/images/icon-banner-6.svg"
        alt="Worldwide Coverage"
      />{" "}
      Worldwide Coverage
    </p>
  </div>
  <div className="feature-item mt-4">
    <p>
      {" "}
      <img
        src="https://cdn.policybazaar.ae/pbuae/images/icon-4-banner-6.svg"
        alt="21+ Insurers to Select From"
      />{" "}
      21+ Insurers to Select From
    </p>
  </div>
  <div className="feature-item mt-4">
    <p>
      {" "}
      <img
        src="https://cdn.policybazaar.ae/pbuae/images/icon-1-banner-6.svg"
        alt="Claim Assistance"
      />{" "}
      Claim Assistance
    </p>
  </div>
</div>
</div>



    </>
  )
}

export default Selfhealth
