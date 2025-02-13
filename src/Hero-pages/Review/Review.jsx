import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong ,FaArrowLeftLong} from "react-icons/fa6";
import './review.css'


function Review() {
    return (

        <>

             <div className="container reviews">
                <div className="row">
                    <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".gn-btn",
            prevEl: ".gp-btn",
            // nextEl: ".card-slider-button-next",
            // prevEl: ".card-slider-button-prev",
          }}
          autoplay={{
            delay: 400,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1064: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
            <SwiperSlide>
            <div className="col-sm-12 col-md-6 col-lg-4 hello mt-3" style={{width:'100%',height:'370px'}}>
                        <div class="card hello">
                            <img src="https://static.wixstatic.com/media/899b13_e9beb8dd661b4db2ac8547069f433e33~mv2.jpeg/v1/fill/w_319,h_239,fp_0.50_0.50,q_90,enc_auto/899b13_e9beb8dd661b4db2ac8547069f433e33~mv2.jpeg" class="card-img-top review" alt="Award 3"></img>
                            {/* <img src="https://www.shutterstock.com/image-photo/happy-black-insurance-agent-her-600nw-2038643714.jpg" class="card-img-top review" alt="Award 3"></img> */}
                            <div class="card-body text-center" style={{height:'120px'}}>
                                <p class="card-text">Standard Insurance Consultants Ltd set new record at BusinessDay’s BAFI Awards</p>
                                <h5 class="card-title">Sachin</h5>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 hello2 mt-3" style={{width:'100%',height:'370px'}}>
                        <div class="card hello">
                        <img src='https://static.wixstatic.com/media/899b13_4d7f053557314ee4b41bb61036cb596a~mv2.jpeg/v1/fill/w_319,h_239,fp_0.50_0.50,q_90,enc_auto/899b13_4d7f053557314ee4b41bb61036cb596a~mv2.jpeg' class="card-img-top review" alt="Award 2"/>
                            <div class="card-body text-center " style={{height:'120px'}}>
                                <p class="card-text">Prof. Ahmed Salawudeen Discusses Insurance Penetration in Nigeria</p>
                                <h5 class="card-title">Kirshan Kumar</h5>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 mt-3 hello2" style={{width:'100%',height:'370px'}}>
                        <div class="card hello">
                        <img src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735903692/vrqk0oq2h2r2qdymrwbk.jpg" class="card-img-top review" alt="Award 4"/>
                            <div class="card-body text-center" style={{height:'120px'}}>
                                <p class="card-text">Prof. Ahmed Salawudeen holds nothing back in the latest edition of Chief Executive</p>
                                <h5 class="card-title">Govind </h5>
                            </div>
                        </div>
                    </div>

            </SwiperSlide>
            <SwiperSlide>

            <div className="col-sm-12 col-md-6 col-lg-4 hello mt-3" style={{width:'100%',height:'370px'}}>
                        <div class="card hello">
                            <img src="https://static.wixstatic.com/media/899b13_a751b200fdf044f7ae6a6f20270382c2~mv2.jpeg/v1/fill/w_318,h_239,fp_0.50_0.50,q_90,enc_auto/899b13_a751b200fdf044f7ae6a6f20270382c2~mv2.jpeg" class="card-img-top review" alt="Award 3"></img>
                            <div class="card-body text-center" style={{height:'120px'}}>
                                <p class="card-text">Ending the Year on an Inspirational Note: SICL Receives Prestigious WORLDCOB</p>
                                <h5 class="card-title">Aditya </h5>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
        </Swiper>

                  
        <div className="card-slider-button-prev gp-btn">
          <FaArrowLeftLong />
          {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-left-arrow..svg" alt="" /> */}
        </div>
        <div className="card-slider-button-next gn-btn">
          <FaArrowRightLong />
          {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-right-arrow..svg" alt="" /> */}
        </div>
                    

                    
                </div>
            </div>
 

           


        </>
    )
}

export default Review
