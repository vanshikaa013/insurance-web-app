// import React from 'react';
// import './coustum.css';

// function Coustumrating() {
//     return (
//         <>
//             <div className="container mt-3">
//                 <div className="row ">

//                     <div className="col-sm-12">
//                         <div className="text-center">
//                             <h1 className='cost'>What Our Customers</h1>
//                             <h5 className='say'>Are Saying</h5>
//                         </div>
//                     </div>

//                     {/* Card 1 */}
//                     <div className="col-sm-12 col-md-6 col-lg-3 mt-4 ">
//                         <div className="card rate">
//                             <div className="card-body">
//                                <p className="card-text getting">Really appreciate the team help for getting me a good and reasonable car insurance. Thank you Shop insurance.</p>
//                                <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
//                                 <p href="#" className="card-link mt-5"><img className="img1" src="https://cdn.policybazaar.ae/common/testimonials/nivin+m+babu.png" alt=""/>
//                                 <span className="name1"> Nivin M. Babu</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="col-sm-12 col-md-6 col-lg-3 mt-4 card2">
//                         <div className="card rate">
//                             <div className="card-body">
//                                <p className="card-text getting">Very quick and efficient service, I got my car insurance in less than an hour. Team was very helpful! Thanks!</p>
//                                <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
//                                 <p href="#" className="card-link mt-5"><img className="img1" src="https://cdn.policybazaar.ae/common/testimonials/ahmed-elkhodiry.png" alt=""/>
//                                  <span className="name1"> Ahmed Elkhodiry</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="col-sm-12 col-md-6 col-lg-3 mt-4 card2">
//                         <div className="card rate">
//                             <div className="card-body">
//                                <p className="card-text getting">Team was very responsive and professional, I advise you to deal with them they will get the best deal for you in a timely manner!</p>
//                                <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
//                                 <p href="#" className="card-link mt-5"><img className="img1" src="https://cdn.policybazaar.ae/common/testimonials/Celal+agmil.png" alt=""/>
//                                 <span className="name1"> Celal Agmil</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Card 4 */}
//                     <div className="col-sm-12 col-md-6 col-lg-3 mt-4 card2">
//                         <div className="card rate">
//                             <div className="card-body">
//                                <p className="card-text getting">Thanks to the team for their great support! against time to get my vehicle renewed and they were able to clarify all my queries and the Team .</p>
//                                <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
//                                 <p href="#" className="card-link mt-5"><img className="img1" src="https://cdn.policybazaar.ae/common/testimonials/sajan+george.png" alt=""/>
//                                 <span className="name1"> Sajan George</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

// export default Coustumrating;





import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong ,FaArrowLeftLong} from "react-icons/fa6";
import './coustum.css';

function Coustumrating() {
    return (
        <>
            <div className="container coutmer-er">
                <div className="row ">

                    <div className="col-sm-12">
                        <div className="text-center">
                            <h1 className='cost'>What Our Customers</h1>
                            <h5 className='say'>Are Saying</h5>
                        </div>
                    </div>
                    <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".hn-btn",
            prevEl: ".hp-btn",
            // nextEl: ".card-slider-button-next",
            // prevEl: ".card-slider-button-prev",
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
            <SwiperSlide>
                    {/* Card 1 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-4 " style={{width:'100%',}}>
                        <div className="card rate" style={{height:'250px'}}>
                            <div className="card-body ">
                               <p className="card-text getting">Really appreciate the team help for getting me a good and reasonable car insurance. Thank you Shop insurance.</p>
                               <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
                                <p href="#" className="card-link mt-5"><img className="img1"  src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735903783/th2qhgrfelgylmkel7gy.jpg" alt=""/>
                                <span className="name1"> Nivin M. Babu</span>
                                </p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>

                    {/* Card 2 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-4 card2 "style={{width:'100%'}}>
                        <div className="card rate" style={{height:'250px'}}>
                            <div className="card-body">
                               <p className="card-text getting">Very quick and efficient service, I got my car insurance in less than an hour. Team was very helpful! Thanks!</p>
                               <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
                                <p href="#" className="card-link mt-5"><img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhv1c_xhM2nMFvGIZwIe6ETcEyA_EpPzwrw&s" alt=""/>
                                 <span className="name1"> Ahmed Elkhodiry</span>
                                </p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
                <SwiperSlide>

                    {/* Card 3 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-4 card2" style={{width:'100%'}}>
                        <div className="card rate" style={{height:'250px'}}>
                            <div className="card-body">
                               <p className="card-text getting">Team was very responsive and professional, I advise you to deal with them they will get the best deal for you in a timely manner!</p>
                               <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
                                <p href="#" className="card-link mt-5"><img className="img1" src="https://t4.ftcdn.net/jpg/00/62/25/55/360_F_62255593_hGCHptmh4rNqtCqkKTbhjQCLeB7kp6ZM.jpg" alt=""/>
                                <span className="name1"> Celal Agmil</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                    <SwiperSlide>

                    {/* Card 4 */}
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-4 card2" style={{width:'100%'}}>
                        <div className="card rate" style={{height:'250px'}}>
                            <div className="card-body">
                               <p className="card-text getting">Thanks to the team for their great support! against time to get my vehicle renewed and they were able to clarify all my queries and the Team .</p>
                               <span><img className="com" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/iconQuots..svg" alt=""/></span>
                                <p href="#" className="card-link mt-5"><img className="img1" src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735903819/hrvfycgfzz8w3vqj0hp4.jpg" alt=""/>
                                <span className="name1"> Sajan George</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

        </Swiper>
        <div className="card-slider-button-prev hp-btn">
          <FaArrowLeftLong />
          {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-left-arrow..svg" alt="" /> */}
        </div>
        <div className="card-slider-button-next hn-btn">
          <FaArrowRightLong />
          {/* <img src="	https://cdn.policybazaar.ae/prequote/public/src/assets/images/long-right-arrow..svg" alt="" /> */}
        </div>
                </div>
            </div>
        </>
    );
}

export default Coustumrating;
