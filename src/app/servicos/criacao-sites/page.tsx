/* eslint-disable @next/next/no-img-element */
"use client";

import { BannerContato } from "@/components/ui/BannerContato/BannerContato";
import { HeroSection, CardsVantagens, ProjetosSections } from "./(componets)";

// Import Swiper React components

const CriacaoSitePage = () => {
    return (
        <>
            <HeroSection />
            <CardsVantagens />
            <ProjetosSections />
            <h2 className='text-white'>Depoimentos</h2>
            <BannerContato />
        </>
    );
};

export default CriacaoSitePage;
