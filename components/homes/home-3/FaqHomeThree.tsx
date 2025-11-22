import Image from "next/image";
import React from "react";

const FaqHomeThree = () => {
  return (
    <>
      <section className="faq-section fix section-padding pt-0">
        <div className="container">
          <div className="faq-wrapper style-2">
            <div className="row g-4 align-items-center">

              {/* LEFT — FAQ CONTENT */}
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title color-red">
                    <h6 className="wow fadeInUp">Sering Ditanyakan</h6>
                    <h2
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{ color: "#333" }}
                    >
                      FAQ MIT Amanah
                    </h2>
                  </div>

                  <div className="faq-items mt-4 mt-md-0 mb-0">
                    <div className="accordion" id="accordionExample">

                      {/* ITEM 1 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                        <h2 className="accordion-header" id="faq1">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            Apa itu MIT Amanah?
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            MIT Amanah adalah sekolah berbasis Islam yang
                            berfokus pada pembentukan karakter, akhlak, serta
                            kemampuan akademik melalui kurikulum terpadu dan
                            pembiasaan ibadah harian.
                          </div>
                        </div>
                      </div>

                      {/* ITEM 2 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                        <h2 className="accordion-header" id="faq2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            Apa saja program unggulan MIT Amanah?
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Program unggulan mencakup Tahfidz, pembiasaan adab,
                            pembelajaran berbasis proyek, praktik ibadah,
                            pembelajaran outdoor, serta kelas kreatif yang
                            mendorong kecerdasan dan karakter peserta didik.
                          </div>
                        </div>
                      </div>

                      {/* ITEM 3 */}
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                        <h2 className="accordion-header" id="faq3">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            Bagaimana sistem pembelajaran di MIT Amanah?
                          </button>
                        </h2>
                        <div
                          id="collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq3"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Sistem pembelajaran menggunakan metode aktif,
                            menyenangkan, dan aplikatif. Anak dibimbing melalui
                            pengalaman nyata, pembiasaan ibadah, dan proyek
                            pembelajaran yang mengasah karakter serta kreativitas.
                          </div>
                        </div>
                      </div>

                      {/* ITEM 4 */}
                      <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                        <h2 className="accordion-header" id="faq4">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            Apakah MIT Amanah memiliki kegiatan ekstrakurikuler?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq4"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Ya, tersedia berbagai kegiatan seperti Pramuka, seni,
                            olahraga, memanah, serta kelas tahfidz pendalaman
                            untuk mengembangkan bakat dan minat siswa.
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT SIDE — IMAGES */}
              <div className="col-lg-6">
                <div className="faq-image-2">

                  <Image
                    src="/assets/img/faq/01.png"
                    alt="img"
                    className="wow img-custom-anim-left"
                    width={500}
                    height={500}
                  />

                  <div className="bg-shape">
                    <Image
                      src="/assets/img/faq/bg-shape.png"
                      alt="img"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="quote-shape float-bob-x">
                    <Image
                      src="/assets/img/faq/quote-shape.png"
                      alt="img"
                      width={120}
                      height={120}
                    />
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

export default FaqHomeThree;
