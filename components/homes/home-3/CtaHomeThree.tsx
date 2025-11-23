import Image from "next/image";
import Link from "next/link";
import React from "react";

const CtaHomeThree = () => {
  return (
    <>
      <section className="quality-coureses-section section-padding fix theme-green-bg" role="complementary" aria-label="Ajakan Bergabung">
        <div className="container-fluid">
          <div className="row g-4">
            {/* LEFT IMAGE */}
            <div className="col-xl-3 col-lg-3">
              <div className="coureses-image float-bob-x">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/img/about/bg-shape.png"
                    alt="bg"
                    fill
                    className="object-contain z-0"
                  />
                </div>

                {/* CTA IMAGE (di atas) */}
                <div className="relative w-full aspect-square z-10">
                  <Image
                    src="/assets/img/cta_1.webp"
                    alt="murid"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-xl-6 col-lg-5">
              <div className="quality-coureses-content text-center">
                <div className="section-title">
                  <h6 className="text-white wow fadeInUp" aria-label="Subjudul CTA">
                    Pendidikan Berkarakter Islami
                  </h6>

                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" id="cta-title">
                    Membangun Generasi Cerdas, Berakhlak, dan Qur’ani
                  </h2>
                </div>

                <p
                  className="mt-3 mt-md-0 text-white wow fadeInUp"
                  data-wow-delay=".3s"
                  aria-describedby="cta-title"
                >
                  MIT Amanah berkomitmen memberikan pendidikan terbaik melalui
                  kurikulum terpadu, pembiasaan ibadah harian, serta lingkungan
                  belajar yang positif dan menyenangkan bagi anak-anak.
                </p>

                <Link
                  href="https://wa.me/6285601715496"
                  target="_blank"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                  aria-label="Hubungi Admin PPDB melalui WhatsApp"
                >
                  Hubungi Admin PPDB
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-xl-3 col-lg-3">
              <div className="coureses-image style-2 float-bob-x">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/img/about/bg-shape.png"
                    alt="bg"
                    fill
                    className="object-contain z-0"
                  />
                </div>

                {/* CTA IMAGE (di atas) */}
                <div className="relative w-full aspect-square z-10">
                  <Image
                    src="/assets/img/cta_2.webp"
                    alt="murid"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeThree;
