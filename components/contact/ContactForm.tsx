"use client";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="contact-section-2 section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">

              <div className="contact-form-items text-center p-5 bg-white rounded-4 shadow-sm">

                {/* TITLE */}
                <div className="mb-4">
                  <h2 className="wow fadeInUp fw-bold">Hubungi Kami</h2>
                  <p
                    className="wow fadeInUp text-muted mt-3"
                    data-wow-delay=".2s"
                  >
                    Untuk informasi mengenai PPDB, kegiatan sekolah, 
                    atau pertanyaan lainnya, silakan gunakan kontak berikut.
                  </p>
                </div>

                {/* CONTACT INFO */}
                <div className="row text-center mt-4">

                  {/* Lokasi */}
                  <div
                    className="col-md-4 mb-4 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="text-success fs-2 mb-2">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5 className="fw-semibold">Alamat</h5>
                    <p className="text-muted small">
                      MIT Amanah Sragen <br />
                      (Isi alamat lengkap)
                    </p>
                  </div>

                  {/* Email */}
                  <div
                    className="col-md-4 mb-4 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="text-success fs-2 mb-2">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <h5 className="fw-semibold">Email</h5>
                    <a
                      href="mailto:mit.amanahsragen@gmail.com"
                      className="text-primary small"
                    >
                      mit.amanahsragen@gmail.com
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div
                    className="col-md-4 mb-4 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="text-success fs-2 mb-2">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <h5 className="fw-semibold">WhatsApp</h5>
                    <a
                      href="https://wa.me/6285601715496"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success small"
                    >
                      0856-0171-5496
                    </a>
                  </div>

                </div>

                {/* CTA BUTTON */}
                <div
                  className="mt-4 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <a
                    href="https://wa.me/6285601715496"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 py-2 rounded-pill"
                  >
                    Hubungi via WhatsApp
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
