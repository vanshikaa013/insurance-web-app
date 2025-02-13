import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Policy.css";
const Policy = () => {
  return (
    <>
      <div class="container my-4 policy-nav-page">
        <div class="mt-4 texts">
          <h3 style={{ fontSize: "30px", fontWeight: "500" }}>Your Policies</h3>
          <p class="text-muted">Mange yur insurance policies & renewals </p>
        </div>

        {/* png */}

        <div className="text-center m-5">
          {/* <img src={img} alt="" />{" "} */}
         <img src="https://i.ibb.co/KWG0bsY/imgs.png" alt="imgs" border="0" />
        </div>

        <div className="text-center texes text-secondary m-5">
          <p>
            <span style={{ fontWeight: "500", fontSize: "18px" }}>
              {" "}
              No policies found yet{" "}
            </span>
            <br />
            <p className="yet">Your protection is just a click away!</p>
          </p>
        </div>

        <div className="arrow text-center">
          <img
            src="https://i.ibb.co/x8zhxjH/arrow.png"
            alt="arrow"
            border="0"
          />
        </div>

        <SwiperComponent
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="swiper text-center">
              {/* <img src={heero} alt="" /> */}

          <img src="https://i.ibb.co/0JdhHzW/hero.png" alt="hero" border="0" />
            </div>{" "}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {" "}
            <div className="swiper text-center">
              {/* <img src={heero} alt="" /> */}

          <img src="https://i.ibb.co/0JdhHzW/hero.png" alt="hero" border="0" />
            </div>{" "}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {" "}
            <div className="swiper text-center mt-2">
              {/* <img src={heero} alt="" /> */}

          <img src="https://i.ibb.co/0JdhHzW/hero.png" alt="hero" border="0" />
            </div>{" "}
          </SwiperSlide>
        </SwiperComponent>
      </div>
    </>
  );
};

export default Policy;
