
import HeaderThree from '@/layouts/headers/HeaderThree';
import React from 'react';
import HeroHomeThree from './HeroHomeThree';
import AboutHomeThree from './AboutHomeThree';
import MarqueeTwo from '@/common/MarqueeTwo';
import CoursesHomeThree from './CoursesHomeThree';
import ChooseHomeThree from './ChooseHomeThree';
import EventHomeThree from './EventHomeThree';
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
      <MarqueeTwo />
      <CoursesHomeThree />
      <ChooseHomeThree />
      <EventHomeThree />
      <TestimonialHomeThree />
      <PartnarsHomeThree style_2={false}/>
      <BlogHomeThree />
      <FaqHomeThree />
      <InstagramHomeThree />
      <CtaHomeThree />
      <FooterThree />
    </>
  );
};

export default HomeThree;