// import React, { useState } from 'react';
// import './aboutinsurance.css';

// function Aboutinsurance() {
//     const [expandedIndex, setExpandedIndex] = useState(null); 

//     const handleToggle = (index) => {
//         setExpandedIndex(expandedIndex === index ? null : index); 
//     };

//     return (
//         <>
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-sm-12 text-center">
//                         <h1 style={{ fontSize: '36px', fontWeight: '700' }}>Frequently Asked Questions</h1>
//                         <p style={{ fontSize: '36px', fontWeight: '400' }}>About Insurance</p>
//                         <p style={{ fontSize: '16px', fontWeight: '400' }}>Know why did they choose</p>
//                     </div>

//                     <div className="col-sm-6 m-n-d-s mt-5">
//                         <div className="accordion accordion-flush" id="accordionFlushExample">
//                             {/* Accordion Item 1 */}
//                             <div className="accordion-item mt-5">
                            
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button collapsed d-flex"
//                                         type="button"
//                                         onClick={() => handleToggle(1)} 
//                                         aria-expanded={expandedIndex === 1 ? 'true' : 'false'}
//                                         aria-controls="flush-collapseOne"
//                                     >
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                                             <div>What are Safepoints?</div>
//                                             <div>
//                                                 <i
//                                                     className={`fa-solid ${expandedIndex === 1 ? 'fa-angle-down' : 'fa-angle-right'}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="flush-collapseOne"
//                                     className={`accordion-collapse collapse ${expandedIndex === 1 ? 'show' : ''}`}
//                                     data-bs-parent="#accordionFlushExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
//                                     </div>
//                                 </div><hr />
//                             </div>

//                             {/* Accordion Item 2 */}
//                             <div className="accordion-item mt-3">
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button collapsed join"
//                                         type="button"
//                                         onClick={() => handleToggle(2)}
//                                         aria-expanded={expandedIndex === 2 ? 'true' : 'false'}
//                                         aria-controls="flush-collapseTwo"
//                                     >
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                                             <div>How can I join Safepoints?</div>
//                                             <div>
//                                                 <i
//                                                     className={`fa-solid ${expandedIndex === 2 ? 'fa-angle-down' : 'fa-angle-right'}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="flush-collapseTwo"
//                                     className={`accordion-collapse collapse ${expandedIndex === 2 ? 'show' : ''}`}
//                                     data-bs-parent="#accordionFlushExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
//                                     </div>
//                                 </div> <hr />
//                             </div>

//                             {/* Accordion Item 3 */}
//                             <div className="accordion-item mt-3">
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button collapsed join"
//                                         type="button"
//                                         onClick={() => handleToggle(3)} // Handle click to toggle
//                                         aria-expanded={expandedIndex === 3 ? 'true' : 'false'}
//                                         aria-controls="flush-collapseThree"
//                                     >
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                                             <div>Can I use my Safepoints for any insurance at shopinsurance?</div>
//                                             <div> 
//                                                 <i
//                                                     className={`fa-solid ${expandedIndex === 3 ? 'fa-angle-down' : 'fa-angle-right'}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="flush-collapseThree"
//                                     className={`accordion-collapse collapse ${expandedIndex === 3 ? 'show' : ''}`}
//                                     data-bs-parent="#accordionFlushExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
//                                     </div>
//                                 </div><hr />
//                             </div>

//                             {/* Accordion Item 4 */}
//                             <div className="accordion-item mt-3">
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button collapsed join"
//                                         type="button"
//                                         onClick={() => handleToggle(4)} // Handle click to toggle
//                                         aria-expanded={expandedIndex === 4 ? 'true' : 'false'}
//                                         aria-controls="flush-collapseFour"
//                                     >
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                                             <div>How does shopinsurance's pricing compare to other providers?</div>
//                                             <div>
//                                                 <i
//                                                     className={`fa-solid ${expandedIndex === 4 ? 'fa-angle-down' : 'fa-angle-right'}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="flush-collapseFour"
//                                     className={`accordion-collapse collapse ${expandedIndex === 4 ? 'show' : ''}`}
//                                     data-bs-parent="#accordionFlushExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
//                                     </div>
//                                 </div><hr />
//                             </div>

//                             {/* Accordion Item 5 */}
//                             <div className="accordion-item mt-3">
//                                 <h2 className="accordion-header">
//                                     <button
//                                         className="accordion-button collapsed join"
//                                         type="button"
//                                         onClick={() => handleToggle(5)} 
//                                         aria-expanded={expandedIndex === 5 ? 'true' : 'false'}
//                                         aria-controls="flush-collapseFive"
//                                     >
//                                         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//                                             <div>What if I need to file a claim or have questions?</div>
//                                             <div>
//                                                 <i
//                                                     className={`fa-solid ${expandedIndex === 5 ? 'fa-angle-down' : 'fa-angle-right'}`}
//                                                     style={{ transition: 'transform 0.3s ease' }}
//                                                 ></i>
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </h2>
//                                 <div
//                                     id="flush-collapseFive"
//                                     className={`accordion-collapse collapse ${expandedIndex === 5 ? 'show' : ''}`}
//                                     data-bs-parent="#accordionFlushExample"
//                                 >
//                                     <div className="accordion-body">
//                                         <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
//                                     </div>
//                                 </div><hr />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 m-d-a-img">
//                         <div>
//                             <img className="health" src="https://i.ibb.co/kyW48tZ/20740105e0cc537b88a4259a9bddfe48.png" alt="20740105e0cc537b88a4259a9bddfe48" border="0" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Aboutinsurance;





import React, { useState } from 'react';
import './aboutinsurance.css';

function Aboutinsurance() {
    const [expandedIndex, setExpandedIndex] = useState(null); 

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); 
    };

    return (
        <>
            <div className="container mt-3 askmt">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1 className='xyza h1'  style={{ fontSize: '36px', fontWeight: '700' }}>Frequently Asked Questions</h1>
                        <p className='p' style={{ fontSize: '36px', fontWeight: '400' }}>About Insurance</p>
                        <p className='spanmp' style={{ fontSize: '16px', fontWeight: '400' }}>Know why did they choose</p>
                    </div>

                    <div className="col-sm-6 m-n-d-s  ">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {/* Accordion Item 1 */}
                            <div className="accordion-item mt-5">
                            
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed d-flex"
                                        type="button"
                                        onClick={() => handleToggle(1)} 
                                        aria-expanded={expandedIndex === 1 ? 'true' : 'false'}
                                        aria-controls="flush-collapseOne"
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div className=''>What are Safepoints?</div>
                                            <div>
                                                <i
                                                    className={`fa-solid ${expandedIndex === 1 ? 'fa-angle-down' : 'fa-angle-right'}`}
                                                    style={{ transition: 'transform 0.3s ease' }}
                                                ></i>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className={`accordion-collapse collapse ${expandedIndex === 1 ? 'show' : ''}`}
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 2 */}
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed join"
                                        type="button"
                                        onClick={() => handleToggle(2)}
                                        aria-expanded={expandedIndex === 2 ? 'true' : 'false'}
                                        aria-controls="flush-collapseTwo"
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div>How can I join Safepoints?</div>
                                            <div>
                                                <i
                                                    className={`fa-solid ${expandedIndex === 2 ? 'fa-angle-down' : 'fa-angle-right'}`}
                                                    style={{ transition: 'transform 0.3s ease' }}
                                                ></i>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className={`accordion-collapse collapse ${expandedIndex === 2 ? 'show' : ''}`}
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
                                    </div>
                                </div> 
                            </div>

                            {/* Accordion Item 3 */}
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed join"
                                        type="button"
                                        onClick={() => handleToggle(3)} // Handle click to toggle
                                        aria-expanded={expandedIndex === 3 ? 'true' : 'false'}
                                        aria-controls="flush-collapseThree"
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div>Can I use my Safepoints for any insurance at shopinsurance?</div>
                                            <div> 
                                                <i
                                                    className={`fa-solid ${expandedIndex === 3 ? 'fa-angle-down' : 'fa-angle-right'}`}
                                                    style={{ transition: 'transform 0.3s ease' }}
                                                ></i>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className={`accordion-collapse collapse ${expandedIndex === 3 ? 'show' : ''}`}
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 4 */}
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed join"
                                        type="button"
                                        onClick={() => handleToggle(4)} // Handle click to toggle
                                        aria-expanded={expandedIndex === 4 ? 'true' : 'false'}
                                        aria-controls="flush-collapseFour"
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div>How does shopinsurance's pricing compare to other providers?</div>
                                            <div>
                                                <i
                                                    className={`fa-solid ${expandedIndex === 4 ? 'fa-angle-down' : 'fa-angle-right'}`}
                                                    style={{ transition: 'transform 0.3s ease' }}
                                                ></i>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFour"
                                    className={`accordion-collapse collapse ${expandedIndex === 4 ? 'show' : ''}`}
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 5 */}
                            <div className="accordion-item mt-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed join"
                                        type="button"
                                        onClick={() => handleToggle(5)} 
                                        aria-expanded={expandedIndex === 5 ? 'true' : 'false'}
                                        aria-controls="flush-collapseFive"
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <div>What if I need to file a claim or have questions?</div>
                                            <div>
                                                <i
                                                    className={`fa-solid ${expandedIndex === 5 ? 'fa-angle-down' : 'fa-angle-right'}`}
                                                    style={{ transition: 'transform 0.3s ease' }}
                                                ></i>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFive"
                                    className={`accordion-collapse collapse ${expandedIndex === 5 ? 'show' : ''}`}
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p className="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a tincidunt enim, eget euismod tellus. Vivamus consectetur,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 m-d-a-img">
                        <div>
                            <img className="health" src="https://i.ibb.co/NWC3FSL/remote-vector-01-removebg-preview.png" alt="20740105e0cc537b88a4259a9bddfe48" border="0" />
                            {/* <img className="health" src="https://i.ibb.co/kyW48tZ/20740105e0cc537b88a4259a9bddfe48.png" alt="20740105e0cc537b88a4259a9bddfe48" border="0" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutinsurance;

    