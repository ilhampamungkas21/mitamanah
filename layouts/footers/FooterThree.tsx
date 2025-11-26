import Link from "next/link";
import React from "react";
import Image from "next/image";

const FooterThree = () => {
  return (
    <>
      <footer className="footer-section-3 fix">
        {/* Background Shapes */}
        <div className="circle-shape">
          <Image
            src="/assets/img/footer/circle.png"
            alt="img"
            width={15}
            height={15}
          />
        </div>

        <div className="vector-shape">
          <Image
            src="/assets/img/footer/Vector.png"
            alt="img"
            width={26}
            height={26}
          />
        </div>

        <div className="container">
          <div className="footer-widget-wrapper style-2">
            <div className="row">
              {/* LOGO + DESKRIPSI */}
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/">
                      <Image
                        src="/assets/img/logo/logo.webp"
                        alt="MIT AMANAH"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>

                  <div className="footer-content">
                    <p>
                      MIT Amanah berkomitmen menghadirkan pendidikan berkualitas
                      untuk membentuk generasi yang berakhlak, cerdas, dan
                      berprestasi.
                    </p>

                    <div className="social-icon">
                      <a href="https://www.facebook.com/mi.amanah.75">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/mitamanah/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/@mitamanah1905">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* HALAMAN */}
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Halaman</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/articles">Artikel</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* INFORMASI SEKOLAH */}
              <div
                className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget style-left">
                  <div className="widget-head">
                    <h3>Informasi</h3>
                  </div>

                  <ul className="list-area">
                    <li>Program Unggulan</li>
                    <li>Kegiatan Siswa</li>
                    <li>Ekstrakurikuler</li>
                    <li>Fasilitas Sekolah</li>
                  </ul>
                </div>
              </div>

              {/* CTA WHATSAPP */}
              <div
                className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Hubungi Kami</h3>
                  </div>

                  <div className="footer-content">
                    <p>
                      Jika membutuhkan informasi lebih lanjut, hubungi admin
                      kami.
                    </p>

                    <a
                      href="https://wa.me/6281234835135 ?text=Halo%20MIT%20Amanah%2C%20saya%20ingin%20bertanya."
                      target="_blank"
                      className="newsletter-btn flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: "#25D366",
                        color: "#fff",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "16px",
                        marginTop: "10px",
                      }}
                    >
                      <i className="fab fa-whatsapp"></i> Chat via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom style-3">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p>
                © {new Date().getFullYear()} MIT Amanah — All Rights Reserved.
              </p>

              <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link href="/articles">Artikel</Link>
                </li>
                <li>
                  <Link href="/about">Tentang Kami</Link>
                </li>
                <li>
                  <Link href="/contact">Kontak</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
