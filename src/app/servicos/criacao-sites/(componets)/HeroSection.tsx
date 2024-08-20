import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Importar o CSS de navegação se necessário
import "swiper/css/pagination"; // Importando o CSS de paginação

import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { Navigation, Pagination } from "swiper/modules";


export const HeroSection = () => {
    return (
        <MaxWidthContainer>
            <div>
                <div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                        pagination={{ clickable: true }} // Habilita a paginação com bolinhas clicáveis
                        modules={[Navigation, Pagination]} // Inclua os módulos de navegação e paginação
                    >
                        <SwiperSlide className='aspect-[32/9] bg-violet-300 rounded-md p-4'>
                            Slide 1
                        </SwiperSlide>
                        <SwiperSlide className='aspect-[32/9] bg-green-300 rounded-md p-4'>
                            Slide 2
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </MaxWidthContainer>
    )
}