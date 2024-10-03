import React from 'react';
import { StaticImageData } from 'next/image';
import HeaderWithBranding from './HeaderWithBranding';

interface PageBannerProps {
  heading: string;
  subHeading: string;
  image?: React.ReactNode;
  srcPath?: StaticImageData;
  srcMobile?: StaticImageData;
  srcTab?: StaticImageData;
}

const PageBanner = (props: PageBannerProps) => {
  const { heading, subHeading } = props;
  return (
    <div className='hero min-h-[300px] bg-custom-gradient relative'>
      <>
        <div className='relative h-full w-full bg-custom-gradient z-40 opacity-90'></div>
      </>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content z-50'>
        <div className='max-w-xl absolute z-40'>
          <HeaderWithBranding
            heading={heading}
            subHeading={subHeading}
            isBannerHead
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
