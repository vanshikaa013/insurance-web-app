import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Autoplay} from "swiper/modules";
import './MiddleBar.css'
export default function MiddleBar() {
  return (
    <>
        <div className='Middlebar desktop-size-middle'>   
            <div className="container p-0">
                <div className='Middle-flex'>
                    <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Secure your family’s future today!</h4>
                            <p>Explore the best life insurance plans to protect your loved ones.</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                        <img src="https://i.ibb.co/2qDvv1S/Group-23701.png" alt="" />
                            {/* <img src="https://i.ibb.co/xmbx54q/96660bab-4840-4bc7-8a0b-db14d7734bd8.jpg" alt="" /> */}
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                    <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Do you have pending challans? Let’s find out.</h4>
                            <p>Check and pay your challans on the app to unlock better prices on insurance</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/VmhpGKb/no-parking.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                    <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Insured with <span style={{color:'#003d2b'}}>Shoplnsurance</span> or not, manage all your vehicles in one place.</h4>
                            <p>Get real-time FASTag and PUC expiry alerts on the app</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/4tMz0Sc/recharge.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                    <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Are you prepared for an emergency? Add your details to stay prepared.</h4>
                            <p>Get immediate ambulance and medical support on the app</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/9H0hZT6/location.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>   


        <div className='Middlebar media-middle-show'>   
            <div className="container p-0">
            <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination ,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          className="product-banner-swiper" 
        //   style={{height: "450px"}}
        >
            <div className='Middle-flex'>
            <SwiperSlide>
                    <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Secure your family’s future today!</h4>
                            <p>Explore the best life insurance plans to protect your loved ones.</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/2qDvv1S/Group-23701.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                        </SwiperSlide>
            <SwiperSlide>
            <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Do you have pending challans? Let’s find out.</h4>
                            <p>Check and pay your challans on the app to unlock better prices on insurance</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/VmhpGKb/no-parking.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                        </SwiperSlide>
            <SwiperSlide>
            <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Insured with <span style={{color:'#003d2b'}}>Shoplnsurance</span> or not, manage all your vehicles in one place.</h4>
                            <p>Get real-time FASTag and PUC expiry alerts on the app</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/4tMz0Sc/recharge.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                        </SwiperSlide>
            <SwiperSlide>
            <div className='middle-box'>
                        <div className='middle-data'>
                            <h4>Are you prepared for an emergency? Add your details to stay prepared.</h4>
                            <p>Get immediate ambulance and medical support on the app</p>
                            <a href="">Get Insured</a>
                        </div>
                        <div className='md-l-img'>
                            <img src="https://i.ibb.co/9H0hZT6/location.png" alt="" />
                            <a className='m-m-a-c' href="">Get Insured</a>
                        </div>
                    </div>
                        </SwiperSlide>
            
                </div>
        </Swiper>
            </div>
        </div> 
        {/* <div className="main-product-container mob-product1" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination ,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          className="product-banner-swiper" 
          style={{height: "450px"}}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="abha-container m-c-t-m" >
                <div className="row align-items-center">
                  <div className="col-lg-8 text-center text-lg-start">
                    <h2 className="abha-title fw-bold mb-3">{slide.title}</h2>
                    <p className="abha-subtitle mb-3">{slide.subtitle}</p>
                    <a
                      href="#"
                      className="abha-btn btn btn-outline-dark fw-bold d-none d-md-inline-block"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                  <div className="col-12 col-lg-4 text-center mt-lg-0 d-flex gap-2 flex-column d-md-block">
                    <img
                      src={slide.imgSrc}
                      alt="ABHA Card"
                      className="img-fluid"
                      style={{ height: "220px" }}
                    />
                    <a
                      href="#"
                      className="abha-btn btn btn-outline-dark mt-2 fw-bold d-block d-md-none" style={{marginBottom: "20px"}}
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div> */}
    </>
  )
}
