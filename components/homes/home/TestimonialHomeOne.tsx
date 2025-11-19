"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ibu Siti Rahma",
    role: "Wali Murid",
    text: "Alhamdulillah, anak saya mengalami banyak perubahan positif. Ia jadi lebih disiplin, sopan, dan semangat belajar.",
    img: "/assets/img/testimonial/01.png",
    bg: "",
  },
  {
    name: "Bapak Andi Prasetyo",
    role: "Wali Murid",
    text: "Lingkungan sekolah sangat kondusif dan para guru membimbing dengan penuh kesabaran. Kami merasa sangat terbantu.",
    img: "/assets/img/testimonial/02.png",
    bg: "bg-2",
  },
  {
    name: "Ibu Nur Aisyah",
    role: "Wali Murid",
    text: "Anak kami menjadi lebih percaya diri dan rajin mengaji. Program-programnya sangat bermanfaat.",
    img: "/assets/img/testimonial/01.png",
    bg: "",
  },
  {
    name: "Bapak Rudi Handoko",
    role: "Wali Murid",
    text: "Kami melihat perkembangan akhlak dan akademik anak jauh lebih baik. Terima kasih atas bimbingan guru-guru.",
    img: "/assets/img/testimonial/02.png",
    bg: "bg-2",
  },
];

const TestimonialHomeOne = () => {
  return (
    <section className="testimonial-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Testimoni Wali Murid</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Apa Kata Wali Murid Tentang<br />Perkembangan Anak Mereka
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1199: { slidesPerView: 2 },
            991: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="swiper testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`testimonial-box-items ${item.bg}`}>
                <div className="testimonial-content">
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <p className="min-h-[200px]">{item.text}</p>

                  <div className="client-info">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="testimonial-image">
                  <Image
                    width={120}
                    height={120}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination mt-4"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialHomeOne;
