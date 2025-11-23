import React from "react";
import Image from "next/image";

export default function PartnarsHomeThree({ style_2 }: { style_2?: boolean }) {
  return (
    <>
      <section
        className={`global-partners-section fix section-padding ${
          style_2 ? "pt-0" : ""
        }`}
        aria-label="Mitra Global"
      >
        <div className="container">
          <div className={`global-partner-wrapper ${style_2 ? "style-2" : ""}`}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-5">
                <div className="section-title color-red">
                  <h6 className="wow fadeInUp">Global Partners</h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    25m+ Trusted Partners
                  </h2>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    Through one-on-one coaching sessions, they empower clients
                    to build confidence
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="global-partner-items" itemScope itemType="https://schema.org/ItemList" aria-label="Daftar Mitra">
                  <div className="row g-0">

                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="global-logo active" itemScope itemType="https://schema.org/Organization">
                        <Image
                          src="/assets/img/global/01.png"
                          alt="Logo mitra global 01"
                          width={120}
                          height={60}
                          itemProp="logo"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="global-logo" itemScope itemType="https://schema.org/Organization">
                        <Image
                          src="/assets/img/global/02.png"
                          alt="Logo mitra global 02"
                          width={120}
                          height={60}
                          itemProp="logo"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="global-logo border-right-none" itemScope itemType="https://schema.org/Organization">
                        <Image
                          src="/assets/img/global/03.png"
                          alt="Logo mitra global 03"
                          width={120}
                          height={60}
                          itemProp="logo"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="global-logo border-bottom-none" itemScope itemType="https://schema.org/Organization">
                        <Image
                          src="/assets/img/global/04.png"
                          alt="Logo mitra global 04"
                          width={120}
                          height={60}
                          itemProp="logo"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="global-logo border-bottom-none" itemScope itemType="https://schema.org/Organization">
                        <Image
                          src="/assets/img/global/05.png"
                          alt="Logo mitra global 05"
                          width={120}
                          height={60}
                          itemProp="logo"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="global-logo border-bottom-none border-right-none" itemScope itemType="https://schema.org/Organization">
                        <Image
                          src="/assets/img/global/06.png"
                          alt="Logo mitra global 06"
                          width={120}
                          height={60}
                          itemProp="logo"
                        />
                      </div>
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
}
