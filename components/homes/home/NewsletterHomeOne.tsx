"use client";
import Image from "next/image";
import React from "react";

const NewsletterHomeOne = () => {
  return (
    <>
      <section className="cta-newsletter-section fix blue-bg">
        {/* Dekorasi */}
        <div
          className="girl-shape animation__arryLeftRight wow img-custom-anim-left"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
        >
          <Image
            width={100}
            height={100}
            src="/assets/img/cta/girl-img.png"
            alt="img"
          />
        </div>

        <div className="shape-1">
          <Image
            width={100}
            height={100}
            src="/assets/img/cta/shape-1.png"
            alt="img"
          />
        </div>

        <div className="shape-2">
          <Image
            width={100}
            height={100}
            src="/assets/img/cta/shape-2.png"
            alt="img"
          />
        </div>

        {/* Content */}
        <div className="container">
          <div className="cta-newsletter-wrapper text-center">
            <div className="section-title">
              <h6 className="text-white wow fadeInUp">Hubungi Kami</h6>

              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Ingin Tahu Lebih Banyak? <br />
                Konsultasi Langsung via WhatsApp!
              </h2>
            </div>

            {/* BUTTON WHATSAPP */}
            <div
              className="flex justify-center mt-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <a
                href="https://wa.me/6285601715496?text=Halo%20saya%20ingin%20bertanya%20lebih%20lanjut"
                target="_blank"
                className="theme-btn yellow-btn text-center"
              >
                Chat via WhatsApp
              </a>
            </div>

            {/* List Benefits */}
            <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <i className="far fa-check-circle"></i>
                Respon cepat & ramah
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                Konsultasi gratis
              </li>
              <li>
                <i className="far fa-check-circle"></i>
                Informasi lengkap & terbaru
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterHomeOne;
