import React from 'react'
import  './businessinsurance.css'

const Businessinsurance = () => {
    return (
        <>

           <div className="container mt-4">
            <div className="row">

                  <div className="col-md-6 shopinsurance">
                    <h3 style={{fontWeight:'600'}}>Protect Your Business</h3>
                    <p style={{fontWeight:'300',}}>with the best insurance</p>
                  </div>                

                <div className="col-md-6 text-end shopinsurance">
                    
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Request a call back <span><i class="fa-solid fa-arrow-right"></i></span>
            </button>

            <div  class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="modal-title star_model" id="staticBackdropLabel">Start the Journey To <span style={{color:'forestgreen'}}>Protect Your Business</span></p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div style={{height:'auto'}} class="modal-body">
                            <form action="">
                                <input className='comp_name' type="text" placeholder='Company Name' />
                                <input className='comp_name' type="email" placeholder='Email Id' />
                                <input className='comp_name' type="number" placeholder='Mobile number' />
                                <select  style={{font:'14px',color:'#757575'}} class="form-select comp_name" aria-label="Default select example">
                                    <option selected>Select Product</option>
                                    <option value="1">SME Package Insurance</option>
                                    <option value="2">Group Health Insurance</option>
                                    <option value="3">Group Life Insurance</option>
                                    <option value="4">Marine Insurance</option>
                                    <option value="5">Yacth Insurance</option>
                                    <option value="6">Fire & allied perils</option>
                                    <option value="7">Business Interruption Insurance</option>
                                    <option value="8">D&O Liability Insurance</option>


                                </select>
                            </form>
                         <div className="text-center ">
                         <p style={{fontSize:'10px',color:'#757575'}}>By Clicking on "Submit", I declare that I am a resident of UAE and 
                         holding a valid Visa and agree to the website <span style={{color:'#0065ff'}}>Privacy Policy</span> and  <span style={{color:'#0065ff'}}>Terms of Use.</span></p>
                         <button type="button" class="btn btn-secondary mod_bttn w-100" data-bs-dismiss="modal">Submit</button>
                         
                         </div>
                        </div>
                        <div class="modal-footer mt-0" style={{borderTop:'none'}}>
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

export default Businessinsurance
