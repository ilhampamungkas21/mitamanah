"use client";
import Count from '@/common/Count';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialHomeThree = () => {
  return (
    <>
      <section 
        className="testimonial-section-3 fix pt-0 section-padding bg-cover" 
        style={{background: `url(/assets/img/sholat.webp)`, backgroundAttachment: "fixed" }}
        itemScope itemType="https://schema.org/ItemList"
        aria-label="Testimoni Wali Murid"
      >
        {/* Counter Section */}
        <div className="counter-section-2 section-padding pt-0">
          <div className="container custom-container">
            <div className="counter-wrapper-2 bg-cover bg-lime-800" >
              
              <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                <div className="icon"><i className="flaticon-success"></i></div>
                <div className="content">
                  <h2><Count number={480} text='+' /></h2>
                  <p>Siswa Aktif</p>
                </div>
              </div>

              <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                <div className="icon"><i className="flaticon-medal"></i></div>
                <div className="content">
                  <h2><Count number={25} text='+' /></h2>
                  <p>Prestasi & Penghargaan</p>
                </div>
              </div>

              <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                <div className="icon"><i className="flaticon-satisfaction"></i></div>
                <div className="content">
                  <h2><Count number={99} text='%' /></h2>
                  <p>Kepuasan Wali Murid</p>
                </div>
              </div>

              <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                <div className="icon"><i className="flaticon-instructor"></i></div>
                <div className="content">
                  <h2><Count number={25} text='+' /></h2>
                  <p>Tenaga Pendidik</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="container">
          <div className="section-title text-center">
            <h6 className="text-white wow fadeInUp">Testimoni Wali Murid</h6>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Apa Kata Wali Murid Tentang <br /> MI Amanah Sragen
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            speed={1800}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ el: ".dot", clickable: true }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 1 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="swiper testimonial-slider-3"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="testimonial-card-items" itemScope itemType="https://schema.org/Review">
                <div className="client-info" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <h3 itemProp="name">Sri Wahyuni</h3>
                  <span>Wali Murid Kelas 3</span>
                </div>
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
                  <meta itemProp="name" content="MIT Amanah" />
                </div>
                <p itemProp="reviewBody">
                  “Saya bersyukur anak saya belajar di MI Amanah Sragen. Guru-gurunya sabar, lingkungan madrasahnya juga penuh nilai Islami.”
                </p>
                <div className="icon"><i className="flaticon-double-quotes"></i></div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="testimonial-card-items" itemScope itemType="https://schema.org/Review">
                <div className="client-info" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <h3 itemProp="name">Ahmad Ridho</h3>
                  <span>Wali Murid Kelas 5</span>
                </div>
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
                  <meta itemProp="name" content="MIT Amanah" />
                </div>
                <p itemProp="reviewBody">
                  “Anak saya jadi lebih disiplin, rajin sholat, dan semangat belajar. Terima kasih untuk semua ustadz dan ustadzah.”
                </p>
                <div className="icon"><i className="flaticon-double-quotes"></i></div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="testimonial-card-items" itemScope itemType="https://schema.org/Review">
                <div className="client-info" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <h3 itemProp="name">Dewi Lestari</h3>
                  <span>Wali Murid Kelas 1</span>
                </div>
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
                  <meta itemProp="name" content="MIT Amanah" />
                </div>
                <p itemProp="reviewBody">
                  “Kesan pertama sangat positif. Anak-anak diajarkan tidak hanya ilmu umum, tapi juga akhlak dan hafalan Al-Qur’an.”
                </p>
                <div className="icon"><i className="flaticon-double-quotes"></i></div>
              </div>
            </SwiperSlide>

            {/* Pagination Dots */}
            <div className="swiper-dot white-color text-center mt-5" aria-label="Navigasi slider testimoni">
              <div className="dot"></div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeThree;
