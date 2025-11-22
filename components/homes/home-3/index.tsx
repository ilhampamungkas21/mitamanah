
import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import HeroHomeThree from './HeroHomeThree';
import AboutHomeThree from './AboutHomeThree';
import MarqueeOne from '@/common/MarqueeOne';
import CoursesHomeThree from './CoursesHomeThree';
import ChooseHomeThree from './ChooseHomeThree';
import TestimonialHomeThree from './TestimonialHomeThree';
import BlogHomeThree from './BlogHomeThree';
import FaqHomeThree from './FaqHomeThree';
import CtaHomeThree from './CtaHomeThree';
import FooterThree from '@/layouts/footers/FooterThree';
import TestimonialHomeOne from '../home/TestimonialHomeOne';
import GalleriesSection from './GalleriesSection';


const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <HeroHomeThree />
      <AboutHomeThree />
      <MarqueeOne style_2={false}/>
      <CoursesHomeThree />
      <ChooseHomeThree />
      <GalleriesSection/>
      <TestimonialHomeThree />
     
      {/* <PartnarsHomeThree style_2={false}/>  */}
      <FaqHomeThree />
      <TestimonialHomeOne />
      
      <BlogHomeThree />
      {/* <InstagramHomeThree /> */}
      <CtaHomeThree />
      <FooterThree />
    </>
  );
};

export default HomeThree;