import React, { useState } from 'react'
import './OurPartners.css'
export default function OurPartners() {
    const [activeTab, setActiveTab] = useState('all');
  return (
    <>
         <div className="partners-section">
            <div className='container'>
               
                <div className='Customers-top'>
          <h4 className='main-heading2 h1' style={{fontSize:"36px"}}>Our Partners</h4>
          <p className='p'>from Across the Industry</p>
        </div>
            {/* <div className='our-partners-d' id="nav-tab" role="tablist">
                <div className='first-part active' id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    All
                </div>
                <div className='second-part ' id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    Insurance Partners
                </div>
                <div className='second-part sccont-part-brd' id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    Banking Partners
                </div>
            </div> */}
            <div className='our-partners-d' id="nav-tab" role="tablist">
  <div 
    className={`first-part ${activeTab === 'all' ? 'active' : ''}`} 
    id="nav-home-tab" 
    data-bs-toggle="tab" 
    data-bs-target="#nav-home" 
    type="button" 
    role="tab" 
    aria-controls="nav-home" 
    aria-selected={activeTab === 'all'} 
    onClick={() => setActiveTab('all')}
  >
    All
  </div>
  <div 
    className={`second-part ${activeTab === 'insurance' ? 'active' : ''}`} 
    id="nav-profile-tab" 
    data-bs-toggle="tab" 
    data-bs-target="#nav-profile" 
    type="button" 
    role="tab" 
    aria-controls="nav-profile" 
    aria-selected={activeTab === 'insurance'} 
    onClick={() => setActiveTab('insurance')}
  >
    Insurance Partners
  </div>
  <div 
    className={`second-part sccont-part-brd ${activeTab === 'banking' ? 'active' : ''}`} 
    id="nav-contact-tab" 
    data-bs-toggle="tab" 
    data-bs-target="#nav-contact" 
    type="button" 
    role="tab" 
    aria-controls="nav-contact" 
    aria-selected={activeTab === 'banking'} 
    onClick={() => setActiveTab('banking')}
  >
    Banking Partners
  </div>
</div>

        {/* <nav>
            <div class="nav nav-tabs m-n-h-e" id="nav-tab" role="tablist">
                <button class="nav-link active o-p-b-c" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><span>ALL</span></button>
                <button class="nav-link op-b-a" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><span>Insurance Partners</span></button>
                <button class="nav-link op-b-b" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><span>Banking Partners</span></button>
            </div>
        </nav> */}
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className='logoBlockImg'>
                    <div className='logo-box'>
                    <a href="#">
                            <img src="https://i.ibb.co/2ZtdJr9/aig-new.png" alt="" />
                    </a>
                            <p className='logo-name'>aig new</p>
                    </div>
                    <div className="logo-box">
                        <a href="#">
                            <img src="https://i.ibb.co/r6ZCFrz/alliance.png" alt="" />
                        </a>
                            <p className='logo-name'>alliance</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/YWGdxMq/allianz.png" alt="" />
                    </a>
                            <p className='logo-name'>allianz</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/jfTDnyw/alwathba.png" alt="" />
                    </a>
                            <p className='logo-name'>alwathba</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/RbY4wrY/aman.png" alt="" />
                    </a>
                            <p className='logo-name'>aman</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/Z82WVMB/cigna.png" alt="" />
                    </a>
                            <p className='logo-name'>cigna</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/545HYDm/emirates.png" alt="" />
                    </a>
                            <p className='logo-name'>emirates</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/SJvmMPt/emirates-Insurance.png" alt="" />
                    </a>
                            <p className='logo-name'>emirates lnsurance</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/z4cH8Fg/metlife.png" alt="" />
                    </a>
                            <p className='logo-name'>metlife</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/Q64XGB1/liva.png" alt="" />
                    </a>
                            <p className='logo-name'>liva</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/6NdPMtJ/friends-provident.jpg" alt="" />
                    </a>
                            <p className='logo-name'>friends-provident</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/R6VgSZQ/orient-unb.png" alt="" />
                    </a>
                            <p className='logo-name'>orient-unb</p>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className='logoBlockImg'>
                    <div className='logo-box'>
                    <a href="#">
                            <img src="https://i.ibb.co/2ZtdJr9/aig-new.png" alt="" />
                    </a>
                            <p className='logo-name'>aig new</p>
                    </div>
                    <div className="logo-box">
                        <a href="#">
                            <img src="https://i.ibb.co/r6ZCFrz/alliance.png" alt="" />
                        </a>
                            <p className='logo-name'>alliance</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/YWGdxMq/allianz.png" alt="" />
                    </a>
                            <p className='logo-name'>allianz</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/jfTDnyw/alwathba.png" alt="" />
                    </a>
                            <p className='logo-name'>alwathba</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/RbY4wrY/aman.png" alt="" />
                    </a>
                            <p className='logo-name'>aman</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/Z82WVMB/cigna.png" alt="" />
                    </a>
                            <p className='logo-name'>cigna</p>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div className='logoBlockImg'>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/545HYDm/emirates.png" alt="" />
                    </a>
                            <p className='logo-name'>emirates</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/SJvmMPt/emirates-Insurance.png" alt="" />
                    </a>
                            <p className='logo-name'>emirates lnsurance</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/z4cH8Fg/metlife.png" alt="" />
                    </a>
                            <p className='logo-name'>metlife</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/Q64XGB1/liva.png" alt="" />
                    </a>
                            <p className='logo-name'>liva</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/6NdPMtJ/friends-provident.jpg" alt="" />
                    </a>
                            <p className='logo-name'>friends-provident</p>
                    </div>
                    <div className="logo-box">
                    <a href="#">
                        <img src="https://i.ibb.co/R6VgSZQ/orient-unb.png" alt="" />
                    </a>
                            <p className='logo-name'>orient-unb</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
