"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// ==========================
// DATA SLIDES
// ==========================
const slides = [
  {
    bg: "/assets/img/hero/hero-1.webp",
    titleTop: "Selamat Datang",
    title:
      <>MI TERPADU<br /> <span className="text-green-500 font-bold">AMANAH</span></>,
    desc: "Membangun generasi berilmu, berakhlak, dan berdaya guna melalui pendidikan yang berlandaskan iman dan takwa.",
    btnText: "Kenali Lebih Dekat",
    btnLink: "/tentang",
    titleWhite: false,
  },
  {
    bg: "/assets/img/hero/hero-2.webp",
    titleTop: "Pendidikan Berkarakter",
    title: <>Mengasah Akhlak <br /> dan Kecerdasan Anak</>,
    desc: "Kurikulum terpadu antara ilmu umum dan nilai-nilai Islam, menjadikan anak cerdas, santun, dan berjiwa pemimpin.",
    btnText: "Lihat Program Kami",
    btnLink: "/program",
    titleWhite: false,
  },
  {
    bg: "/assets/img/hero/hero-3.webp",
    titleTop: "Bersama MIT Amanah",
    title: <>Islami, Cerdas, dan Mandiri</>,
    desc: "Kami percaya setiap anak memiliki potensi luar biasa. Tugas kami adalah menumbuhkannya dengan kasih, disiplin, dan keteladanan.",
    btnText: "Daftar Sekarang",
    btnLink: "/pendaftaran",
    titleWhite: true,
  },
];

// ==========================
// DATA FEATURE
// ==========================
const features = [
  {
    icon: "flaticon-teacher",
    title: "Pendidikan Islami",
    desc: "Pembelajaran berbasis Al-Qur’an dan akhlakul karimah.",
    delay: ".2s",
  },
  {
    icon: "flaticon-teacher",
    title: "Guru Profesional",
    desc: "Tenaga pendidik berkompeten dan berpengalaman di bidangnya.",
    delay: ".4s",
  },
  {
    icon: "flaticon-certificate",
    title: "Program Unggulan",
    desc: "Kegiatan tahfidz, sains, dan leadership yang membentuk karakter unggul.",
    delay: ".6s",
  },
  {
    icon: "flaticon-school",
    title: "Lingkungan Aman & Nyaman",
    desc: "Sekolah dengan suasana islami, ramah anak, dan mendukung tumbuh kembang optimal.",
    delay: ".8s",
  },
];

const HeroHomeThree = () => {
  return (
    <section className="hero-section-3 hero-3" role="banner" aria-label="Bagian Hero" itemScope itemType="https://schema.org/WPHeader">

      {/* ================= SLIDER ================= */}
      <Swiper
        loop
        slidesPerView={1}
        effect="fade"
        speed={800}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{ nextEl: ".array-prev", prevEl: ".array-next" }}
        pagination={{ el: ".dot", clickable: true }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="swiper hero-slider"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div
              className="slider-bg bg-cover"
              style={{ background: `url(${slide.bg})` }}
            >
              <div
                className="overlay-bg bg-cover"
                style={{ background: `url(/assets/img/hero/ovelay-bg.png)` }}
              />
            </div>

            <div className="container">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="hero-content text-center">
                    <h6
                      className={slide.titleWhite ? "text-white" : ""}
                      data-animation="fadeInUp"
                      data-delay="1.3s"
                    >
                      {slide.titleTop}
                    </h6>

                    <h1
                      className={slide.titleWhite ? "text-white" : ""}
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      {slide.title}
                    </h1>

                    <p data-animation="fadeInUp" data-delay="1.7s">
                      {slide.desc}
                    </p>

                    <div className="hero-button">
                      <Link
                        href={slide.btnLink}
                        data-animation="fadeInUp"
                        data-delay="1.9s"
                        className="theme-btn green-btn text-white"
                      >
                        {slide.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="array-button">
          <button className="array-prev" aria-label="Slide sebelumnya">
            <i className="far fa-chevron-left"></i>
          </button>
          <button className="array-next" aria-label="Slide berikutnya">
            <i className="far fa-chevron-right"></i>
          </button>
        </div>
      </Swiper>

      {/* ================= FEATURE ================= */}
      <div className="feature-section-3 style-margin-top section-padding pb-0">
        <div className="container">
          <div className="feature-wrapper-3">
            <div className="row">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="feature-card-items">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="content">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroHomeThree;
