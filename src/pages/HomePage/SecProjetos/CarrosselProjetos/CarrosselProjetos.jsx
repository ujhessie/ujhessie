import "./carrosselProjetos.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CarrosselProjetos = () => {
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
        <SwiperSlide className="slide">
          <img
            src="https://img.freepik.com/fotos-gratis/representacoes-da-experiencia-do-usuario-e-design-de-interface_23-2150104489.jpg?w=900&t=st=1705344868~exp=1705345468~hmac=fb1902760483771920e5648f124d7531d3fd1151e6dba7495ff2dbf82e322999"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://img.freepik.com/fotos-gratis/representacoes-da-experiencia-do-usuario-e-design-de-interface_23-2150104489.jpg?w=900&t=st=1705344868~exp=1705345468~hmac=fb1902760483771920e5648f124d7531d3fd1151e6dba7495ff2dbf82e322999"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://img.freepik.com/fotos-gratis/representacoes-da-experiencia-do-usuario-e-design-de-interface_23-2150104489.jpg?w=900&t=st=1705344868~exp=1705345468~hmac=fb1902760483771920e5648f124d7531d3fd1151e6dba7495ff2dbf82e322999"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://img.freepik.com/fotos-gratis/representacoes-da-experiencia-do-usuario-e-design-de-interface_23-2150104489.jpg?w=900&t=st=1705344868~exp=1705345468~hmac=fb1902760483771920e5648f124d7531d3fd1151e6dba7495ff2dbf82e322999"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://img.freepik.com/fotos-gratis/representacoes-da-experiencia-do-usuario-e-design-de-interface_23-2150104489.jpg?w=900&t=st=1705344868~exp=1705345468~hmac=fb1902760483771920e5648f124d7531d3fd1151e6dba7495ff2dbf82e322999"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarrosselProjetos;
