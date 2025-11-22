"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisyah",
    role: "Siswi Kelas 6",
    text: "Belajar di MIT Amanah membuat saya lebih percaya diri, terutama saat membaca Al-Qur’an. Guru-gurunya baik dan penyabar.",
    img: "/assets/img/testimonial/01.png",
    bg: "",
  },
  {
    name: "Rafa",
    role: "Siswa Kelas 6",
    text: "Saya suka suasana belajar di kelas. Teman-temannya saling mendukung dan kegiatan sekolahnya seru.",
    img: "/assets/img/testimonial/02.png",
    bg: "bg-2",
  },
  {
    name: "Nabila",
    role: "Siswi Kelas 6",
    text: "Di MIT Amanah saya jadi lebih disiplin dan bertanggung jawab. Banyak kegiatan yang membuat saya berkembang.",
    img: "/assets/img/testimonial/01.png",
    bg: "",
  },
  {
    name: "Fajar",
    role: "Siswa Kelas 6",
    text: "Saya merasa kemampuan akademik dan ibadah saya meningkat. Saya bangga menjadi bagian dari MIT Amanah.",
    img: "/assets/img/testimonial/02.png",
    bg: "bg-2",
  },
];

const TestimonialHomeOne = () => {
  return (
    <section className="testimonial-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Testimoni Siswa & Siswi</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Cerita Dari Siswa dan Siswi<br />Kelas 6 MIT Amanah
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
