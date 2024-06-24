/* eslint-disable @next/next/no-img-element */
import Header from "@/components/ui/Header";

interface iBanner {
  imgBanner: string;
}

const Banner: React.FC<iBanner> = ({ imgBanner }) => {
  return (
    <>
      <div className='banner relative overflow-hidden aspect-[4/3] md:aspect-[21/9] lg:aspect-[4/1] '>
        {imgBanner ? (
          <img
            className='absolute object-cover h-full w-full'
            src={imgBanner}
            alt=''
          />
        ) : (
          <img
            className='absolute object-cover h-full w-full'
            src='/images/banner.png'
            alt=''
          />
        )}
        <Header fullWidth={false} />
      </div>
    </>
  );
};

export default Banner;
