import Count from "@/common/Count";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const AboutHomeThree = () => {
  return (
    <>
      <div
        id="about"
        className="about-section-3 section-padding"
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row g-4 justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="text-white wow fadeInUp">
                      Tentang MIT Amanah
                    </h6>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                      itemProp="name"
                    >
                      Madrasah Islam Terpadu <br /> yang Mendidik dengan Hati
                    </h2>
                  </div>

                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                    itemProp="description"
                  >
                    MIT Amanah hadir untuk menanamkan nilai iman, ilmu, dan
                    akhlak mulia sejak dini. Dengan pendekatan pendidikan
                    terpadu, kami berkomitmen melahirkan generasi yang cerdas,
                    berkarakter, dan berjiwa pemimpin berlandaskan Islam.
                  </p>

                  <Link
                    href="/tentang"
                    className="theme-btn green-btn wow fadeInUp text-white"
                    data-wow-delay=".3s"
                  >
                    Hubungi Kami
                  </Link>

                  <div className="about-counter-items">
                    <div
                      className="counter-content wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h3>
                        <span className="odometer" data-count="10">
                          <Count number={10} text="+" />
                        </span>
                      </h3>
                      <p>Tahun Pengalaman</p>
                    </div>

                    <div
                      className="counter-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h3>
                        <span className="odometer" data-count="98">
                          <Count number={98} text="%" />
                        </span>
                      </h3>
                      <p>Orang Tua Puas & Bahagia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* === Right Image Section === */}
              <div className="col-xl-5 col-lg-6">
                <div className="about-image relative">
                  {/* Main Image */}
                  <Image
                    src="/assets/img/about/01.webp"
                    alt="Madrasah Islam Terpadu Amanah"
                    width={800}
                    height={800}
                    className="wow img-custom-anim-left w-auto mx-auto"
                    itemProp="image"
                  />

                  {/* Shape Background */}
                  <div className="bg-shape absolute -z-10 top-60 left-0">
                    <Image
                      src="/assets/img/about/bg-shape.png"
                      alt="background shape"
                      width={600}
                      height={600}
                      priority
                      className="w-[500px] h-auto"
                    />
                  </div>

                  <div className="counter-box absolute bottom-0 right-5">
                    <p>Lebih dari</p>
                    <h2>
                      <span
                        className="odometer text-green-600!"
                        data-count="260"
                      >
                        <Count number={500} text="+" />
                      </span>
                    </h2>
                    <p>Siswa Aktif & Berprestasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeThree;
