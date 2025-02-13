import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaArrowRightLong ,FaArrowLeftLong} from "react-icons/fa6";
import './Card.css'
export default function Card() {
    const awardsData = [
        { imgSrc: "https://cdn.policybazaar.ae/common/bannerImages/car300123.png" },
        { imgSrc: "https://i.ibb.co/y48bL8Z/Group-23674.png" },
        // { imgSrc: "https://cdn.policybazaar.ae/common/bannerImages/health300123.png" },
        { imgSrc: "https://cdn.policybazaar.ae/common/bannerImages/travel300123.png" },
        { imgSrc: "https://cdn.policybazaar.ae/common/bannerImages/term300123.png" },
        { imgSrc: "https://cdn.policybazaar.ae/common/bannerImages/carNonGcc300123.png" },
      ];
  return (
    <div className='card-slider-container container' style={{ height: "330px" }}>
    <div className='card-slide-b-dt-n'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".card-slider-button-next",
          prevEl: ".card-slider-button-prev",
        }}
        autoplay={{
          delay: 4000,
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
        {awardsData.map((award, index) => (
          <SwiperSlide key={index} className="card-slider-slide">
            <div className="card-slider-image-wrapper" style={{marginTop: "60px"}}>
              <img
                src={award.imgSrc}
                className="card-slider-image" 
                alt={`Award ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="card-slider-button-prev">
        <FaArrowLeftLong />
        {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-left-arrow..svg" alt="" /> */}
      </div>
      <div className="card-slider-button-next">
        <FaArrowRightLong />
        {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-right-arrow..svg" alt="" /> */}
      </div>
    </div>
  </div>
  )
}


  