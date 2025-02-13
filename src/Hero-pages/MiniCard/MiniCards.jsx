import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Autoplay} from "swiper/modules";
import './Minicard.css'
export default function MiniCards() {
  return (
    <>
    <div className='mt-1 desk-insurence-slide'>

        <section
            className="mb-5"
            style={{ width: "100%", padding: "34px 0 0" }}
        >
            <div className="container">
                <div className="row mini-cardsbb " >
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3 mini-cardsb">
                        <img
                            src="https://i.ibb.co/vs6wQ3H/beware-of-fraudsters.png"
                            className="img-fluid"
                            alt=""
                        />
                        {/* <img
                            src="https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png"
                            className="img-fluid"
                            alt=""
                        /> */}
                    </div>
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3 mini-cardsb">
                        <img
                            src="https://i.ibb.co/NmPvg92/fraud-detection-policy.png"
                            className="img-fluid"
                            alt=""
                        />
                        {/* <img
                            src="https://static.pbcdn.in/cdn/images/home/fraud_detection_policy.png"
                            className="img-fluid"
                            alt=""
                        /> */}
                    </div>
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://i.ibb.co/m0ZgVQS/d0dd71f44ff6106e1d9e8ef10aab68e9.png"
                            className="img-fluid"
                            alt=""
                        />
                        {/* <img
                            src="https://s3-alpha-sig.figma.com/img/680c/34aa/d0dd71f44ff6106e1d9e8ef10aab68e9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iCAvPXFmQwko5bEVJ7iYuSURj3IXdO2QfIQ5XS213ISz-tRzVvRM21gkt9BjQr-adGSGt1deWkLY~taNXzI46cU7C~PE35PRv4AzJ6IestbgnO5oE2hH12GW~-AURFUaQxPhja1tWnh~e1qZ1bmpvZJ9iv~abNjTekGXMIFoG7slorEyTDHPklYYHFmeKuL6YQDUVDGHKBddXN9jtfx39yFay8~9kMnJ-aP5eRIIXCsnClJNFu4QwJyJuUAs6B1EsCEAsNctw0jdiRorum~lDJht1bcFOWYla5IO0KTee6tlnWBH~PUixc13Kdqn7DYbyvPU65Z5RHuoPO7XpUq4kQ__"
                            className="img-fluid"
                            alt=""
                        /> */}
                    </div>
             
                </div>
            </div>
        </section>


    </div>
        <Swiper
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination ,Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      className="mob-insurence-slide p-4" 
      style={{height: "auto"}}
    >
        <SwiperSlide className=' mini-cardsbb'>
        <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/2afd/1cef/755fa3989b318ded8abdb0bfae13d7fc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bt4G-IvTRy23flq9LSW0f-dpIUopCE-w2rUY5BsBuqsTRW4pVhXqsHod3gTm~pzh0~5VL0BTmaOadyAGM~kzy4ZvoQw-DpJcMjGJ~53ouF9zc4EQ3damAER-Z6EVS4D5CaXehOCwM4WGpa9TICj7Z71Ejcp0YTxAv9y2eQ2HhoTPvHi2Ng5v1DxanOe7QALaoObTKX6enQryitWxwlBMWUXYfQ0o0Hn9x3xaeazBNg60XMqajM11DokPFFnHiUoEYml5kH2beYDCyp-pjUe0BCcjIIgbTsM341IcX3fOcAdZInlaLDOhnDTKzYJy0vMvLVRFE-6aY-43KUPLvQ2LlA__"
                            className="img-fluid"
                            alt=""
                            style={{border:'none'}}
                        />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://i.ibb.co/D8kPQWc/3b4d0fa16669261ae76a8f49655f6478.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-md-4 col-md-4 col-12 mt-3 mb-3">
                        <img
                            src="https://i.ibb.co/m0ZgVQS/d0dd71f44ff6106e1d9e8ef10aab68e9.png"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
        </SwiperSlide>
    </Swiper>
    </>
  )
}
