// Importações
import "./carrosselSlides.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import CardProjeto from "../../../layouts/CardProjeto";

// Componente Slide

// Componente CarrosselSlides
function CarrosselSlides() {
  return (
    <Swiper
      className="carrosselSlides mySwiper"
      slidesPerView={2} // Número padrão de slides por visualização (mobile)
      centeredSlides={false}
      slidesPerGroupSkip={2}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        650: {
          slidesPerView: 1, // No mobile, abaixo de 650px, exibir 2 slides
        },
        900: {
          slidesPerView: 3, // No tablet, a partir de 900px, exibir 3 slides
        },
        1200: {
          slidesPerView: 4, // No PC, a partir de 1200px, exibir 4 slides
        },
      }}
      scrollbar={true}
      navigation={true}
      //   pagination={{
      //     clickable: true,
      //   }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    >
      <SwiperSlide className="slide">
        <CardProjeto id={5} />
      </SwiperSlide>

      <SwiperSlide className="slide">
        <CardProjeto id={4} />
      </SwiperSlide>

      <SwiperSlide className="slide">
        <CardProjeto id={3} />
      </SwiperSlide>

      <SwiperSlide className="slide">
        <CardProjeto id={2} />
      </SwiperSlide>

      <SwiperSlide className="slide">
        <CardProjeto id={5} />
      </SwiperSlide>
    </Swiper>
  );
}

export default CarrosselSlides;
