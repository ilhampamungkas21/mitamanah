"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroHomeThree = () => {
  return (
    <>
      <section className="hero-section-3 hero-3">
        <Swiper 
          loop={true}
          slidesPerView={1}
          effect="fade"
          speed={800}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          pagination={{
            el: ".dot",
            clickable: true,
          }}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          className="swiper hero-slider"
        > 
          {/* Slide 1 */}
          <SwiperSlide className="swiper-slide">
            <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-1.webp)`}}>
              <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
            </div>
            <div className="container">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="hero-content text-center">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">Selamat Datang</h6>
                    <h1 data-animation="fadeInUp" data-delay="1.5s">
                    MI TERPADU<br /> <span className="text-green-500 font-bold">AMANAH</span>
                    </h1>
                    <p data-animation="fadeInUp" data-delay="1.7s">
                      Membangun generasi berilmu, berakhlak, dan berdaya guna
                      melalui pendidikan yang berlandaskan iman dan takwa.
                    </p>
                    <div className="hero-button">
                      <Link href="/tentang" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn green-btn text-white">
                        Kenali Lebih Dekat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="swiper-slide">
            <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-2.webp)`}}>
              <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
            </div>
            <div className="container">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="hero-content text-center">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">Pendidikan Berkarakter</h6>
                    <h1 data-animation="fadeInUp" data-delay="1.5s">
                      Mengasah Akhlak <br /> dan Kecerdasan Anak
                    </h1>
                    <p data-animation="fadeInUp" data-delay="1.7s">
                      Kurikulum terpadu antara ilmu umum dan nilai-nilai Islam,
                      menjadikan anak cerdas, santun, dan berjiwa pemimpin.
                    </p>
                    <div className="hero-button">
                      <Link href="/program" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn green-btn text-white">
                        Lihat Program Kami
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="swiper-slide">
            <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-3.webp)`}}>
              <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
            </div>
            <div className="container">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="hero-content text-center">
                    <h6 className="text-white" data-animation="fadeInUp" data-delay="1.3s">Bersama MIT Amanah</h6>
                    <h1 className="text-white" data-animation="fadeInUp" data-delay="1.5s">
                      Islami, Cerdas, dan Mandiri
                    </h1>
                    <p data-animation="fadeInUp" data-delay="1.7s">
                      Kami percaya setiap anak memiliki potensi luar biasa.
                      Tugas kami adalah menumbuhkannya dengan kasih, disiplin, dan keteladanan.
                    </p>
                    <div className="hero-button">
                      <Link href="/pendaftaran" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn green-btn text-white">
                        Daftar Sekarang
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="array-button">
            <button className="array-prev"><i className="far fa-chevron-left"></i></button>
            <button className="array-next"><i className="far fa-chevron-right"></i></button>
          </div>
        </Swiper>

        {/* Feature Section */}
        <div className="feature-section-3 style-margin-top section-padding pb-0">
          <div className="container">
            <div className="feature-wrapper-3">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="feature-card-items">
                    <div className="icon">
                    <i className="flaticon-teacher"></i>
                    </div>
                    <div className="content">
                      <h5>Pendidikan Islami</h5>
                      <p>Pembelajaran berbasis Al-Qur’an dan akhlakul karimah.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="feature-card-items">
                    <div className="icon">
                      <i className="flaticon-teacher"></i>
                    </div>
                    <div className="content">
                      <h5>Guru Profesional</h5>
                      <p>Tenaga pendidik berkompeten dan berpengalaman di bidangnya.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="feature-card-items">
                    <div className="icon">
                      <i className="flaticon-certificate"></i>
                    </div>
                    <div className="content">
                      <h5>Program Unggulan</h5>
                      <p>Kegiatan tahfidz, sains, dan leadership yang membentuk karakter unggul.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="feature-card-items">
                    <div className="icon">
                      <i className="flaticon-school"></i>
                    </div>
                    <div className="content">
                      <h5>Lingkungan Aman & Nyaman</h5>
                      <p>Sekolah dengan suasana islami, ramah anak, dan mendukung tumbuh kembang optimal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeThree;
