"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Users, GraduationCap, Star, BookOpen } from "lucide-react";

const BrandsHomeOne = () => {
  const data = [
    {
      icon: <Users className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "500+ Siswa Aktif",
      desc: "Lingkungan belajar nyaman & suportif.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-green-600 mx-auto" />,
      title: "40+ Guru Profesional",
      desc: "Tenaga pengajar berpengalaman.",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-600 mx-auto" />,
      title: "100+ Prestasi",
      desc: "Pencapaian akademik & non-akademik.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600 mx-auto" />,
      title: "8 Kegiatan Ekstra",
      desc: "Pengembangan minat & bakat siswa.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Fakta Singkat Sekolah</h2>
          <p className="text-gray-600">
            Gambaran ringkas tentang sekolah kami yang terus berkembang untuk masa depan siswa.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          speed={1500}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1399: { slidesPerView: 4 },
            1199: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            767: { slidesPerView: 2 },
            400: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="swiper brand-slider"
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white h-full shadow-md p-6 rounded-xl text-center space-y-4 border hover:shadow-lg transition">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandsHomeOne;
