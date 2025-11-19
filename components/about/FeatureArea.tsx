import React from 'react';

const FeatureArea = () => {
  return (
    <>
      <div className="feature-section-3 section-padding">
        <div className="container">
          <div className="feature-wrapper-3 style-2">
            <div className="row">

              {/* Fasilitas Lengkap */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-school"></i>
                  </div>
                  <div className="content">
                    <h5>Fasilitas Lengkap</h5>
                    <p>
                      Ruang kelas nyaman, lab komputer, masjid, aula,
                      lapangan, dan CCTV di seluruh area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Program Pendidikan Islami */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-graduation"></i>
                  </div>
                  <div className="content">
                    <h5>Program Pendidikan Islami</h5>
                    <p>
                      Tahfidz minimal 2 juz, mentoring hadits,
                      adab Islami, dan pembiasaan ibadah harian.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pembiasaan Karakter */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-certficate"></i>
                  </div>
                  <div className="content">
                    <h5>Pembiasaan Karakter</h5>
                    <p>
                      Sholat dhuha, dzikir pagi, sholat dhuhr berjamaah,
                      ceklist adab Islami dan ceramah dai cilik.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ekstra Kurikuler Unggulan */}
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                <div className="feature-card-items">
                  <div className="icon">
                    <i className="flaticon-instructor"></i>
                  </div>
                  <div className="content">
                    <h5>Ekstrakurikuler Unggulan</h5>
                    <p>
                      Tahfidz, Taekwondo, Pramuka, serta Bahasa & Jurnalistik
                      untuk mengembangkan potensi siswa.
                    </p>
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

export default FeatureArea;
