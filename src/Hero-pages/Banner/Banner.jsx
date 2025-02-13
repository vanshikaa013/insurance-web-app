// import React from 'react'
// import './Banner.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
// export default function Banner() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 200,
//         autoplaySpeed: 2000,
//         cssEase: "linear"
//       };
//   return (
//     <>
//         <div className="main-banner">
//             <div className="container">
//                 <div className='banner-section'>
//                     <div className='baner-data'>
//                         <h2>
//                         Let's find you <br></br>
//                         the Best Insurance
//                         </h2>
//                     </div>
//                     <div className='banner-slider'>
//                         <div className='d-flex' style={{width:'100%'}}>
//                             <Slider style={{height:'450px'}} className='d-flex media-navbar-banner-height' {...settings}>
//                                 <div style={{overflow:'hidden'}}>
//                                         <img className='bnr-slider-img' src="https://i.ibb.co/rmHyZ0c/Life-carousel-img-ced9f16ba9.png" alt="" />
//                                     <div className='bmr-slider-data'>
//                                         <h4>
//                                         Will your family be financially okay without your income?
//                                         </h4>
//                                         <p>Start with low coverage, increase later.</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                         <img className='bnr-slider-img' src="https://i.ibb.co/tzyJLdJ/Bike-carousel-img-153cc0bd22.png" alt="" />
//                                     <div className='bmr-slider-data'>
//                                         <h4>
//                                         Will your family be financially okay without your income?
//                                         </h4>
//                                         <p>Start with low coverage, increase later.</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                         <img className='bnr-slider-img' src="https://i.ibb.co/ZmjPQJH/Travel-carousel-img-94834ae9d7.png" alt="" />
//                                     <div className='bmr-slider-data'>
//                                         <h4>
//                                         Will your family be financially okay without your income?
//                                         </h4>
//                                         <p>Start with low coverage, increase later.</p>
//                                     </div>
//                                 </div>
//                             </Slider>
//                         </div>
//                     </div>
//                     <div className='banner-cards'>
//                         <div className='bnr-card-contain'>
//                             <Link to='/motor' className='bnr-card-1'> 
//                                 <img  src="https://i.ibb.co/F4CgZdx/Group-74.png" alt="" />
//                             </Link>
//                             <Link to='/health' className='bnr-card-1'>
//                                 <img src="https://i.ibb.co/yR3ymtc/Group-75.png" alt="" />
//                             </Link>
//                             <Link to='/travel' className='bnr-card-2'>
//                                 <img src="https://i.ibb.co/McsHbYc/Group-76.png" alt="" />
//                             </Link>
//                             <Link to='/bikein' className='bnr-card-2'>
//                                 <img  src="https://i.ibb.co/NF6Z6Bq/Group-77.png" alt="" />
//                             </Link>
//                             <Link to='/life' className='bnr-card-2'>
//                                 <img src="https://i.ibb.co/c6fgNsJ/Group-78.png" alt="" />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }




import React, { useState } from "react";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Banner() {
    const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear",
        beforeChange: (current, next) => setActiveSlide(next), // Update the active slide index
    };

    return (
        <div className="main-banner">
            <div className="container">
                <div className="banner-section">
                    <div className="baner-data">
                        <h2>
                            Let's find you <br />
                            the Best Insurance
                        </h2>
                    </div>
                    <div className="banner-slider">
                        <div className="d-flex" style={{ width: "100%" }}>
                            <Slider
                                style={{ height: "450px" }}
                                className="d-flex media-navbar-banner-height"
                                {...settings}
                            >
                                <div>
                                    <img
                                        className="bnr-slider-img"
                                        src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735902697/y22n2xwtdv6ykcu7j22n.png"
                                        alt=""
                                    />
                                    <div className="bmr-slider-data">
                                        <h4>
                                        Why pay for car repairs when insurance can do it for you?
                                        </h4>
                                        <p>Get up to 85%* off on car insurance</p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="bnr-slider-img"
                                        src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735902749/o61gzoo4ysczsdajxsuk.png"
                                        alt=""
                                    />
                                    <div className="bmr-slider-data">
                                        <h4>
                                           ZAR 20 lakhs for one treatmet or ZAR 100000 for health insurance
                                        </h4>
                                        <p>Get 100% hospital bill payment</p>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        className="bnr-slider-img"
                                        src="https://i.ibb.co/ZmjPQJH/Travel-carousel-img-94834ae9d7.png"
                                        alt=""
                                    />
                                    <div className="bmr-slider-data">
                                        <h4>
                                        Do you have $20,000 for medical care while travelling abroad?
                                        </h4>
                                        <p>Get complete international trip coverage</p>
                                    </div>
                                </div>
                                <div style={{ overflow: "hidden" }}>
                                    <img
                                        className="bnr-slider-img"
                                        src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735902796/sihips8jqtkctkgwuxbn.png"
                                        alt=""
                                    />
                                    {/* <img
                                        className="bnr-slider-img"
                                        src="https://i.ibb.co/Cz8r47N/Group-23667.png"
                                        alt=""
                                    /> */}
                                    <div className="bmr-slider-data">
                                        <h4>
                                            Will your family be financially okay without your income?
                                        </h4>
                                        <p>Start with low coverage, increase later.</p>
                                    </div>
                                </div>
                                <div style={{ overflow: "hidden" }}>
                                    <img
                                        className="bnr-slider-img"
                                        src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735902846/tos0lfri9lwslaeci5vt.png"
                                        alt=""
                                    />
                                    <div className="bmr-slider-data">
                                        <h4>
                                            Will your family be financially okay without your income?
                                        </h4>
                                        <p>Start with low coverage, increase later.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="banner-cards">
                        <div className="bnr-card-contain">
                            <Link
                                to="/motor"
                                className="bnr-card-1"
                            >
                                {/* <img
                            className={activeSlide === 0 ? "active-slide" : ""}
                            style={{
                              
                              transition: "border 0.3s ease",
                            }}
                            src="https://i.ibb.co/F4CgZdx/Group-74.png"
                            alt="Motor"
                          /> */}
                          
                                <img style={{
                                    border: activeSlide === 0 ? "1px solid #06cd49" : "2px solid transparent",borderRadius: "14px",
                                    transition: "border 0.3s ease",
                                }}
                                 src="https://i.ibb.co/kxTGMJ1/Group-23748.png"
                                //  src="https://i.ibb.co/NLK5Z5T/Group-23677-2.png"
                                  alt="Motor" />
                            </Link>
                            <Link
                                to="/health"
                                className="bnr-card-1"
                            >
                                <img style={{
                                    border: activeSlide === 1 ? "1px solid #06cd49" : "2px solid transparent",borderRadius: "14px",
                                    transition: "border 0.3s ease",
                                }}
                                 src="https://i.ibb.co/NxDVxy2/Group-23737.png"
                                //  src="https://i.ibb.co/yR3ymtc/Group-75.png"
                                  alt="Health" />
                            </Link>
                            <Link
                                to="/travel"
                                className="bnr-card-2"
                            >
                                <img style={{
                                    border: activeSlide === 2 ? "1px solid #06cd49" : "2px solid transparent",borderRadius: "14px",
                                    transition: "border 0.3s ease",
                                }} 
                                src="https://i.ibb.co/JRTh39N/Group-23744.png" 
                                // src="https://i.ibb.co/McsHbYc/Group-76.png" 
                                alt="Travel" />
                            </Link>
                            <Link
                                to="/business"
                                className="bnr-card-2"
                            >
                                <img style={{
                                    border: activeSlide === 3 ? "1px solid #06cd49" : "2px solid transparent",borderRadius: "14px",
                                    transition: "border 0.3s ease",
                                }}
                                src="https://i.ibb.co/GQTYCTT/Group-23739.png"
                                // src="https://i.ibb.co/hgRbZF5/Group-23650.png"
                                  alt="Bike" />
                            </Link>
                            <Link
                                to="/life"
                                className="bnr-card-2"
                            >
                                <img
                                    style={{
                                        border: activeSlide === 4 ? "1px solid #06cd49" : "2px solid transparent",
                                        borderRadius: "14px", // Adjust the value as needed
                                        transition: "border 0.3s ease",
                                    }}
                                    src="https://i.ibb.co/KXXyHpD/Group-23740.png"
                                    // src="https://i.ibb.co/c6fgNsJ/Group-78.png"
                                    alt="Life"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
