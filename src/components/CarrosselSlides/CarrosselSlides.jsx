import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Children } from "react";

const CarrosselSlides = () => {
  const Carrossel = () => {
    return (
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Children}
      </Swiper>
    );
  };

  const Slide = () => {
    return <SwiperSlide>{Children}</SwiperSlide>;
  };

  return (
    <>
      <Carrossel>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
      </Carrossel>
    </>
  );
};

export default CarrosselSlides;
