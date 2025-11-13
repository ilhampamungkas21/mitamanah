"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import Image from 'next/image';

const ChooseHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="choose-us-section-3 fix section-padding pt-0">
        <div className="choose-us-wrapper-3">
          <div className="row g-0">
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div className="video-image wow img-custom-anim-left">
                <Image src="https://scontent.fjog3-1.fna.fbcdn.net/v/t39.30808-6/490805319_2409985449374657_7012709747181745347_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=bmhZVGCLu2YQ7kNvwEIeq9G&_nc_oc=AdlZoAoWGOpP-UusfRfpDdjAC9dPN51lithf_F9Sv1OJhykK0odeeXj-CnwaW-fOUx7Ty_b18POJEkdN4dvrZNKe&_nc_zt=23&_nc_ht=scontent.fjog3-1.fna&_nc_gid=KNdy9NvGreLYjgSvqFFTaw&oh=00_AfjZg2xOTV-dAp2f9T-4KalME2pu0BY-occV_N0rSdq11w&oe=6914BA87" alt="Madrasah Islam Terpadu Amanah" />
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="video-btn ripple video-popup"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="choose-content">
                <div className="section-title">
                  <h6 className="text-white wow fadeInUp">
                    Kenapa Memilih Kami
                  </h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Mengapa MIT Amanah Menjadi Pilihan Tepat
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 text-white wow fadeInUp" data-wow-delay=".5s">
                  Di MIT Amanah, kami tidak hanya mengajarkan ilmu pengetahuan,
                  tetapi juga menanamkan nilai-nilai Islam dalam setiap kegiatan belajar.
                  Dengan lingkungan yang penuh kasih dan pembimbing berpengalaman,
                  kami membentuk generasi yang berilmu, berakhlak, dan beriman kuat.
                </p>
                <div className="row">
                  <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon-items">
                      <div className="icon">
                        <i className="flaticon-certificate"></i>
                      </div>
                      <h3>Pembelajaran Islami Terpadu</h3>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon-items">
                      <div className="icon">
                      <i className="flaticon-certificate"></i>
                      </div>
                      <h3>Lingkungan Nyaman & Aman</h3>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon-items">
                      <div className="icon">
                        <i className="flaticon-education"></i>
                      </div>
                      <h3>Guru Berpengalaman & Peduli</h3>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon-items">
                      <div className="icon">
                      <i className="flaticon-certificate"></i>
                      </div>
                      <h3>Program Tahfidz & Karakter</h3>
                    </div>
                  </div>
                </div>
                <div className="circle-shape">
                  <Image src="assets/img/feature/circle-shape.png" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"} // ganti dengan video profil MIT Amanah jika ada
      />
      {/* video modal end */}
    </>
  );
};

export default ChooseHomeThree;
