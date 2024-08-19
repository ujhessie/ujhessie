import { BannerContato } from "@/components/ui/BannerContato/BannerContato";
import MaxWidthContainer from "@/components/ui/MaxWidthContainer";

/* eslint-disable @next/next/no-img-element */
export const ContactSection = () => {
    return (
        <MaxWidthContainer className='text-center  reveal mb-4'>
            <BannerContato />
        </MaxWidthContainer>
    );
};
