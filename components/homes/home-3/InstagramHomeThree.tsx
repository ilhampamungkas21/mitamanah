"use client";
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
 
const InstagramHomeThree = () => {
  return (
    <>
      <div className="instagram-section fix" itemScope itemType="https://schema.org/ItemList" aria-label="Galeri Instagram">
        <Swiper
          spaceBetween={0}
          speed={1500}
          loop={true}
          breakpoints={{
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            767: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          className="swiper instagram-slider"
        >

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/01.jpg" alt="Kegiatan siswa MIT Amanah 01" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/02.jpg" alt="Kegiatan siswa MIT Amanah 02" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/03.jpg" alt="Kegiatan siswa MIT Amanah 03" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/04.jpg" alt="Kegiatan siswa MIT Amanah 04" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/05.jpg" alt="Kegiatan siswa MIT Amanah 05" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          {/* Repeat set */}
          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/01.jpg" alt="Kegiatan siswa MIT Amanah 01" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/02.jpg" alt="Kegiatan siswa MIT Amanah 02" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/03.jpg" alt="Kegiatan siswa MIT Amanah 03" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/04.jpg" alt="Kegiatan siswa MIT Amanah 04" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" itemScope itemType="https://schema.org/ImageObject">
            <div className="instagram-image">
              <Image src="/assets/img/instagram/05.jpg" alt="Kegiatan siswa MIT Amanah 05" width={400} height={400} />
              <Link href="/courses-details" className="icon" aria-label="Lihat detail course"><i className="far fa-arrow-right"></i></Link>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default InstagramHomeThree;