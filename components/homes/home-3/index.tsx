
import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import HeroHomeThree from './HeroHomeThree';
import AboutHomeThree from './AboutHomeThree';
import MarqueeOne from '@/common/MarqueeOne';
import CoursesHomeThree from './CoursesHomeThree';
import ChooseHomeThree from './ChooseHomeThree';
import TestimonialHomeThree from './TestimonialHomeThree';
import PartnarsHomeThree from './PartnarsHomeThree';
import BlogHomeThree from './BlogHomeThree';
import FaqHomeThree from './FaqHomeThree';
import InstagramHomeThree from './InstagramHomeThree';
import CtaHomeThree from './CtaHomeThree';
import FooterThree from '@/layouts/footers/FooterThree';

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <HeroHomeThree />
      <AboutHomeThree />
      <MarqueeOne style_2={false}/>
      <CoursesHomeThree />
      <ChooseHomeThree />
      <BlogHomeThree />
      <TestimonialHomeThree />
      <PartnarsHomeThree style_2={false}/>
      <FaqHomeThree />
      <InstagramHomeThree />
      <CtaHomeThree />
      <FooterThree />
    </>
  );
};

export default HomeThree;