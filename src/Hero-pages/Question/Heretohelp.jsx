// import React from 'react'
// import './help.css'

// function Heretohelp() {
//   return (
//     <>
     
//      <div className="container mt-2">
//         <div className="row">

//                 <div className="col-sm-12 col-md-6  ">
//                    <div className="mt-3">
//                    <h1 className='have'>Have a question?</h1>
//                     <h5 className='help'>Here to help.</h5>
//                     <p style={{fontSize:'18px',fontWeight:'400'}}>Our friendly customer support team is your 
//                     extended family. Speak your heart out. They listen with undivided 
//                     attention to  resolve your concerns. Give us a call, request a callback
//                      or  drop us an email, we’re here to help.</p>
//                      <div className="">
//                      <img className='m-a-i-f' src="https://i.ibb.co/9nGpcWw/Background-Border.png" alt="Background-Border" border="0"/>
//                      <img className='mt-3 m-a-i-f' src="https://i.ibb.co/1KMMN2F/Background-Border-1.png" alt="Background-Border-1" border="0"/>                     </div>
//                    </div>
//                 </div>

//                 <div className="col-sm-6 m-b-f-img">
//                     <div className="">
//                     <img className='oldmen' src="https://i.ibb.co/LQwKdwn/Group-23485.png" alt="Group-23485" border="0"/>                    </div>
//                 </div>

//         </div>
//      </div>



//     </>
//   )
// }

// export default Heretohelp





import React from 'react'
import './help.css'

function Heretohelp() {
  return (
    <>
     
     <div className="container mt-2">
        <div className="row">

                <div className="col-sm-12 col-md-6  ">
                   <div className="mt-3">
                   <h1 className='have h1'>Have a question?</h1>
                    <h5 className='help p'>Here to help.</h5>
                    <p className='lkjh' style={{fontSize:'18px',fontWeight:'400'}}>Our friendly customer support team is your 
                    extended family. Speak your heart out. They listen with undivided 
                    attention to  resolve your concerns. Give us a call, request a callback
                     or  drop us an email, we’re here to help.</p>
                     {/* <div className="">
                     <img className='m-a-i-f' src="https://i.ibb.co/9nGpcWw/Background-Border.png" alt="Background-Border" border="0"/>
                     <img className='mt-3 m-a-i-f' src="https://i.ibb.co/1KMMN2F/Background-Border-1.png" alt="Background-Border-1" border="0"/>                    
                      </div> */}
                      <div class="card p-3 car_health">
              <div class="card-body p-0">
                <p style={{ color: '#505F79', fontSize: '16px',  }}>
                  <span><img src="https://i.ibb.co/Syn71DY/Enquery-Icon-svg.png" alt="Enquery-Icon-svg" border="0" style={{ marginRight: '8px' }} /></span>
                  General Enquiries <br /><span style={{ fontSize: '17px', color: '#172B4D', marginLeft: '28px' }}>care@abc.com</span> </p>
              </div>
            </div>

            <div class="card p-3 car_health mt-3">
              <div class="card-body p-0">
                <p style={{ color: '#505F79', fontSize: '16px',  }}>
                  <span><img src="https://i.ibb.co/8x9Ch6J/customer-Enquery-Icon-svg-fill.png" alt="Enquery-Icon-svg" border="0" style={{ marginRight: '8px' }} /></span>
                  Customer Sales Enquiries <br /><span style={{ fontSize: '17px', color: '#172B4D', marginLeft: '28px' }}>123445677</span> </p>
              </div>
            </div>
                   </div>
                </div>

                <div className="col-sm-6 m-b-f-img">
                    <div className="">
                    <img className='oldmen' width='100%' src="https://i.ibb.co/kxjHrS3/remote-vector-01-removebg-preview-1.png" alt="Group-23485" border="0"/>                    </div>
                    {/* <img className='oldmen' src="https://i.ibb.co/LQwKdwn/Group-23485.png" alt="Group-23485" border="0"/>                    </div> */}
                </div>

        </div>
     </div>



    </>
  )
}

export default Heretohelp
