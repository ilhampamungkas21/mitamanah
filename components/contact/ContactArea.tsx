import React from 'react';
import Image from 'next/image';

const ContactArea = () => {
  return (
    <>
      <section className="contact-section section-padding pt-0 fix">
        <div className="container">
          
          {/* TITLE */}
          <div className="section-title text-center">
            <h6 className="wow fadeInUp">Kontak Kami</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Butuh Informasi Lebih Lanjut?
            </h2>
          </div>

          <div className="row">

            {/* LOKASI */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-box-items">
                <div className="icon">
                  <i className="flaticon-map"></i>
                </div>
                <h5>Lokasi Sekolah</h5>
                <div className="image">
                  <Image width={100} height={100} src="/assets/img/small-line.png" alt="img" />
                </div>
                <h4>
                  Jl. Raya Sragen – (Isi alamat lengkap di sini) <br />
                  Kabupaten Sragen, Jawa Tengah
                </h4>
              </div>
            </div>

            {/* EMAIL */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-box-items">
                <div className="icon">
                  <i className="flaticon-send-data"></i>
                </div>
                <h5>Email Resmi</h5>
                <div className="image">
                  <Image width={100} height={100} src="/assets/img/small-line.png" alt="img" />
                </div>
                <h4>
                  <a href="mailto:mit.amanahsragen@gmail.com">
                    mit.amanahsragen@gmail.com
                  </a>
                </h4>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-box-items">
                <div className="icon">
                  <Image width={100} height={100} src="/assets/img/call.png" alt="img" />
                </div>
                <h5>Whatsapp Admin</h5>
                <div className="image">
                  <Image width={100} height={100} src="/assets/img/small-line.png" alt="img" />
                </div>
                <h4>
                  <a 
                    href="https://wa.me/6285601715496"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0856-0171-5496
                  </a>
                </h4>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
