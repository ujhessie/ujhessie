import "./carrosselProjetos.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

import { useProjetos } from "../../../../contexts/ProjetosContext";

const CarrosselProjetos = () => {
  const { projetos } = useProjetos();

  const ultimosProjetos = projetos.slice().reverse().slice(0, 5);

  return (
    <div className="carrosselProjetos">
      <Swiper
        slidesPerView={2}
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        loop={true}
      >
        {ultimosProjetos.map((projeto) => (
          <SwiperSlide key={projeto.id} className="slide">
            <Link to="/allprojects"><img src={projeto.imgs[0]} alt="" /></Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrosselProjetos;
