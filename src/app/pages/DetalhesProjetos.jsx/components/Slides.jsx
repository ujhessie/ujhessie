import "./slides.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

export const Slides = ({imgs}) => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {imgs.map((element) => {
          return (
            <SwiperSlide>
              <img src={element} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
