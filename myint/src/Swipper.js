import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
 import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import React from 'react'
// import m1 from "./images/m1.jpg"
import wp from "./images/wp.webp";
import bg21 from "./images/bg21.png"
import swiperimg2 from "./images/swiperimg2.jpg";
import img12 from "./images/img12.jpg";
import canva from "./images/canva.jpg"
function Slider() {
  return (
    <div>
      <section >
        <div class="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
          >
            <SwiperSlide>
              <img
                class="object-fill  md:w-screen md:h-screen"
                height="600px" width="100%"  src={wp}  alt="/"
              />
              
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                height="600px" width="100%" src={bg21}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                height="600px" width="100%" src="https://wallpaperaccess.com/full/2015368.jpg"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                height="600px" width="100%" src={canva}
                alt="/"
              />
            </SwiperSlide>
          
           
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Slider