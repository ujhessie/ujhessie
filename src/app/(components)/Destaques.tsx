import MaxWidthContainer from "@/components/ui/MaxWidthContainer";

import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importa o CSS de autoplay

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const Destaques = () => {
    const [slidesPerView, setSlidesPerView] = useState(4);

    const handleResize = () => {
        if (window.innerWidth < 640) {
            setSlidesPerView(1);
        } else if (window.innerWidth < 768) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const Card = () => (
        <div className='bg-zinc-950/50 aspect-[16/9] rounded-lg hover:bg-zinc-950 my-transition text-white 0 flex gap-4 items-center md:block md:text-center'></div>
    );

    return (
        <MaxWidthContainer className='w-full gap-4 my-8'>
            <Swiper
                spaceBetween={10}
                slidesPerView={slidesPerView}
                loop={true}
                autoplay={{
                    delay: 4000, // Tempo em milissegundos entre as transições (2 segundos)
                    disableOnInteraction: false, // Continua o autoplay mesmo após interação
                }}
                modules={[Autoplay]} // Inclui o módulo de autoplay
                speed={1000}
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </MaxWidthContainer>
    );
};
