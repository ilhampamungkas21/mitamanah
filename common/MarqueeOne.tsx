import React from 'react';

const MarqueeOne = ({ style_2 }: { style_2?: boolean }) => {
  return (
    <> 
      <div className="marquee-section style-header">
        <div className={`mycustom-marque  ${style_2 ? "theme-green-bg-1" : "header-marque theme-blue-bg"}`}>
          <div className="scrolling-wrap">
            
            {/* LOOP 3x agar marquee panjang */}
            {[1,2,3].map((i) => (
              <div className="comm" key={i}>
                <div></div>

                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> PPDB MIT Amanah Sragen Telah Dibuka!
                </div>
                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> Pendidikan Islami & Berkarakter
                </div>
                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> Pembiasaan Adab Sejak Dini
                </div>
                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> Guru Profesional & Ramah Anak
                </div>
                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> Lingkungan Belajar Aman & Nyaman
                </div>
                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> Fasilitas Lengkap untuk Tumbuh Kembang Anak
                </div>
                <div className={`cmn-textslide ${style_2 ? "text-white" : ""}`}>
                  <i className="flaticon-mortarboard"></i> Kuota Terbatas — Daftar Sekarang!
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeOne;
