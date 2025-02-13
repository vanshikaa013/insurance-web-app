import React from 'react'
import './policycontact.css'

function Policycontact() {
  return (
    <>


      <div class="container">
        <div class="">
          {/* <span style={{ backgroundColor: '#003D2B', padding: '11px', borderRadius: '5px' }}><img src="https://i.ibb.co/rfNr9jq/oshopinuloo.png" width="150" alt="Logo" />
            <span className='myclll'><i class="fa-solid fa-phone"></i></span>
          </span> */}
          <h3 className='mt-3' style={{ fontSize: '30px', fontWeight: '500', }}>No Policies yet? 🤔</h3>
          <p class="text-muted" style={{ fontSize: '14px' }}>Let's figure out how we can still help you</p>
        </div>

        <div class="d-flex justify-content-between mb-3">
        </div>

      </div>

      <ul class="nav nav-tabs media-navber-acrty" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active onepge media-nav-acr" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Your Plans</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link media-nav-acr" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Track Claims</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">


          <div className="container">
          <button className='mybtn w-100 d-flex' style={{justifyContent:'space-evenly',alignItems:'center'}}>
            <div><i class="fa-solid fa-flag"></i></div>
            <div>

            <span > Submit Claim Request</span> <span></span> <br />
            <span className='helpera'>Available only for ShopInsurance Customer</span>
            </div>
            <div><i class="fa-solid fa-lock"></i></div>
            {/* <span ><i class="fa-solid fa-flag"></i> Submit Claim Request</span> <span style={{ float: 'right', fontSize: '30px' }}><i class="fa-solid fa-lock"></i></span> <br />
            <span className='helpera'>Available only for ShopInsurance Customer</span> */}
          </button>

          <hr />

          <button className='w-100 coninc p-4'>
            <span className='cll'><i style={{ fontSize: '22px', color: 'yellowgreen', backgroundColor: '#FAF4CD', padding: '5px', borderRadius: '6px' }} class="fa-solid fa-book-medical"></i> <span style={{ fontSize: '16px' }}>Contact an Insurer</span></span>
            <span className='newp'><i style={{ fontSize: '20px' }} class="fa-solid fa-caret-right"></i></span>
          </button>


          <button className='w-100 coninc mt-3 p-4'>
            <span className='cll'><i class="fa-solid fa-file" style={{ fontSize: '22px', color: '#30CBF1', borderRadius: '6px', backgroundColor: '#D4F7FD', padding: '5px' }}></i> <span style={{ fontSize: '16px' }}>Know how to file a claim</span></span>
            <span className='newp'><i style={{ fontSize: '20px' }} class="fa-solid fa-caret-right"></i></span>
          </button>

          <div class="p-4  myoff rounded mt-3 text-center">
            <span style={{ backgroundColor: '#FFFFFF', padding: '15px', color: '#E56050', borderRadius: '10px' }}>
              <img src="https://i.ibb.co/3yhTYZS/Vector.png" alt="Vector" border="0" />
            </span>
            <h6 className='mt-3 offer'>Some <span style={{ fontWeight: '700' }}>Special Offers</span> for You</h6>
            <p class="text-muted">Explore some of our top insurance plans</p>
            <a href='#' className='explore'>Explore <i class="fa-solid fa-caret-right"></i></a>
          </div>


          </div>

        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

          <div class="container my-4">
            <div class="">
            </div>


            <button className='mybtn w-100 d-flex' style={{justifyContent:'space-evenly',alignItems:'center'}}>
            <div><i class="fa-solid fa-flag"></i></div>
            <div>

            <span > Submit Claim Request</span> <span></span> <br />
            <span className='helpera'>Available only for ShopInsurance Customer</span>
            </div>
            <div><i class="fa-solid fa-lock"></i></div>
              {/* <span ><i class="fa-solid fa-flag"></i> Submit Claim Request</span> <span style={{ float: 'right', fontSize: '30px' }}><i class="fa-solid fa-lock"></i></span> <br />
              <span className='helpera'>Available only for ShopInsurance Customer</span> */}
            </button>

            <hr />

            <div className="mt-5 text-center">
              <img className='mt-3' src="https://i.ibb.co/YZQTrRX/Group-23585.png" alt="Group-23585" border="0" />
              <h3 className='mt-3' style={{ color: '#6E727B', fontSize: '18px' }}>No claims raised</h3>
              <p style={{ fontSize: '12px', color: '#6e727b' }}>We’re glad you are fine.</p>
            </div>

          </div>

        </div>
      </div>





    </>
  )
}

export default Policycontact