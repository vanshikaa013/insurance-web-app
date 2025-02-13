import React from 'react'
import './Travelplanform.css'
export const Travelplanform = () => {
  return (
    <>
      <div className="container mt-5">
        <h3>Member1 - Orient Insurance</h3>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Title</label>
                  <select className="form-select mb-2">
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control mb-2" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Middle Name (Optional)</label>
                  <input type="text" className="form-control " placeholder="Middle Name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control " placeholder="Last Name" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select mb-2">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Nationality</label>
                  <select className="form-select">
                    <option value="">Select</option>
                    <option value="Indian">Indian</option>
                    <option value="American">American</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Passport Number</label>
                  <input type="text" className="form-control" placeholder="Passport Number" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Passport Expiry Date</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Passport Front</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Passport Back</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <button type="button" className="btn btn-primary">
                Proceed
              </button>
            </form>
          </div>
          <div className="mt-4 col-sm-4 mydis_non">

            <div style={{border:'none',}} class="card shadow-lg ">
              <div style={{backgroundColor:'#d5eefd'}} class="card-header p-3">
               <h6> Premium Summary</h6>
              </div>
              <div class="card-body">
                <div className="d-flex gap-3">
                  <div className=""><span><img width='80px' src="https://cdn.policybazaar.ae/pbuae/images/insurer-logos/orient-logo.png" alt="" /></span></div>
                  <div className="">
                    <h6 style={{ fontSize: '13px', marginTop: '8px', marginBottom: '0px' }} class="card-title">Orient Insurance</h6><br />
                    <p style={{ marginTop: '-20px', color: '#000', fontSize: '10px' }}>Travel Inbound Gold (UAE Tourist Visa)</p>
                  </div>
                </div>
                <hr />
                <div className="">
                  <p style={{ fontSize: '10px', fontWeight: '400', color: '#000' }}>Medical Cover  <span style={{ float: 'inline-end', fontWeight: '700' }}>ZAR 150,000</span></p>
                  <p style={{ fontSize: '10px', fontWeight: '400', color: '#000' }}>Cover For      <span style={{ float: 'inline-end', fontWeight: '700' }}> Individual</span></p>
                  <p className='mb-3' style={{ fontSize: '10px', fontWeight: '400', color: '#000' }}>Coverage Area  <span style={{ float: 'inline-end', fontWeight: '700' }}> Inbound</span></p>

                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#000' }}>PREMIUM  <span style={{ float: 'inline-end', fontWeight: '700' }}> ZAR 76.19</span></p>

                </div>

              </div>
            </div>





          </div>
        </div>
      </div>
    </>
  )
}
