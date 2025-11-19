import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import ContactArea from "./ContactArea";
import MapArea from "./MapArea";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbEvent title="Contact" subtitle="Contact" />
      <ContactArea />
      <MapArea />
    {/*  <ContactForm /> */}
      <MarqueeOne style_2={true} />
      <FooterThree />
    </>
  );
};

export default Contact;
