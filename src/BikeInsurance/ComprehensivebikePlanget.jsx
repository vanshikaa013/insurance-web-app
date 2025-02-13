import React, { useState } from 'react'
import './complan.css'

const ComprehensivebikePlanget = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    
      const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
      };
    return (
        <>

            <div className="container mt-5">
                <div className="row" style={{marginTop:'30px',justifyContent:'center'}}>

                    {/* <div className="col-md-3"></div> */}

                    <div className="col-md-6 col-sm-12   rounded-2 shadow mt-3 px-3 py-4">
          <h4>Personal details</h4>
          <p>Where should we send your policy?</p>
          <form className='bikrforminput'>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full name
              </label>
              <div className="input-group">
                <select className="form-select" style={{ maxWidth: '80px' }}>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Ms.">Mrs.</option>
                  <option value="Ms.">M/S.</option>
                </select>
                <input
                  type="text"
                  className="form-control formcontrol1"
                  id="fullName"
                  placeholder="Enter your name"
                  // style={{maxWidth:'60%'}}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile number
              </label>
              <input
                type="text"
                className="form-control formcontrol"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                  // style={{maxWidth:'75%',marginLeft:'0px'}}
              />
              <small className="text-muted">
                <span role="img" aria-label="pointing">👉</span> We will not call you. This is only to send you a policy copy,  promise!
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control formcontrol"
                id="emailAddress"
                placeholder="Enter your email address"
                  // style={{maxWidth:'75%',marginLeft:'0px'}}
              />
            </div>
          </form>

                    </div>
                    <div className="col-md-5  ">
            <div className="advan_tag mt-3 shadow px-3 py-4 rounded-2">
            <div className="card-body">
              <h5 className="card-title">Hero Honda Passion Plus</h5>
              <p className="card-text text-muted">MP09MM6436 | Registered in 2008</p>
              <h6>United India</h6>
              <p>Third Party</p>
              <hr />
              <h6>Compulsory Owner-Driver PA Cover of ₹15 Lakhs</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="insuranceProvider"
                  id="libertyGI"
                  value="Liberty GI"
                />
                <label className="form-check-label" htmlFor="libertyGI">
                  Liberty GI ₹322
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="insuranceProvider"
                  id="zurichKotak"
                  value="Zurich Kotak"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="zurichKotak">
                  Zurich Kotak ₹299
                </label>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Net premium</span>
                <span>₹714</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>GST</span>
                <span>₹129</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total amount</strong>
                <strong>₹843</strong>
              </div>
              <button className="btn btn-primary w-100 mt-3">
                Pay securely
              </button>
              <small className="text-muted d-block text-center mt-2">
                By clicking on "Pay securely", I agree to the terms & conditions.
              </small>
            </div>
            </div>
          </div>
                    {/* <div className="col-md-3"></div> */}




                </div>
            </div>
            
  
        </>
    )
}

export default ComprehensivebikePlanget;
