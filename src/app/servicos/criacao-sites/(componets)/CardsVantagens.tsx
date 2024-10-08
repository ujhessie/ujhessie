import MaxWidthContainer from "@/components/ui/MaxWidthContainer";
import { BadgeCheck, MonitorCheck, MonitorSmartphone, ScanSearch } from "lucide-react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importa o CSS de autoplay

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const CardsVantagens = () => {
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

    const Card = ({
        titulo,
        texto,
        icon,
    }: {
        titulo: string;
        texto?: string;
        icon: React.ReactNode;
    }) => (
        <div className='bg-zinc-950/50 rounded-lg hover:bg-zinc-950 my-transition text-white p-8 flex gap-4 items-center md:block md:text-center'>
            <div className='logo font-extrabold text-branco text-[32px] fonte-titulo flex justify-center'>
                {icon}
            </div>
            <div>
                <h3 className='texto-gradiente'>{titulo}</h3>
                <p className='opacity-80'>{texto}</p>
            </div>
        </div>
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
                    <Card
                        icon={
                            <MonitorCheck className='h-[70px] w-[70px]  ' />
                        }
                        titulo='Design Moderno e Elegante'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        icon={
                            <MonitorSmartphone className='h-[70px] w-[70px]  ' />
                        }
                        titulo='Sites responsivos'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        icon={
                            <BadgeCheck className='h-[70px] w-[70px]  ' />
                        }
                        titulo='CEO Otimizado'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        icon={
                            <ScanSearch className='h-[70px] w-[70px]  ' />
                        }
                        titulo='Suporte Personalizado'
                    />
                </SwiperSlide>
                
            </Swiper>
        </MaxWidthContainer>
    );
};
