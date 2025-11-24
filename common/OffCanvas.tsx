import MobileMenu from '@/layouts/headers/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface OffCanvasProps {
  setOpenCanvas: (open: boolean) => void;
  openCanvas: boolean;
}

const OffCanvas = ({ setOpenCanvas, openCanvas }: OffCanvasProps) => {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">

              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">

                {/* LOGO */}
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/logo.webp"
                      alt="logo-img"
                      width={100}
                      height={100}
                      priority
                    />
                  </Link>
                </div>

                <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>

              </div>

              <h3 className="offcanvas-title">MADRASAH IBTIDAIYAH TERPADU (MIT) AMANAH</h3>
              <p>
                Membangun peradaban Islam, Cerdas dan Mandiri
              </p>

              <div className="social-icon d-flex align-items-center">
                <a href="https://www.facebook.com/mi.amanah.75"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/mitamanah/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@mitamanah1905"><i className="fab fa-youtube"></i></a>
              </div>

              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu />
              </div>

              <div className="offcanvas__contact">
                <h3>Informasi</h3>

                <ul className="contact-list">
                  <li>
                    <span>Alamat:</span>
                    Kebonromo Rt.06, Ngrampal, Sragen 57252
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+6281234835135">081234835135</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:supportedus@gmail.com">mit.amanahngrampal@gmail.com</a>
                  </li>
                </ul>

                <div className="offcanvas-button">
                  <Link href="/auth/login" className="theme-btn style-2 text-white">
                    <i className="far fa-user"></i> Admin
                  </Link>
                 
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas__overlay ${openCanvas ? "overlay-open" : ""}`}
        onClick={() => setOpenCanvas(false)}
      />
    </>
  );
};

export default OffCanvas;
