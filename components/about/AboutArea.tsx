"use client"
import Count from '@/common/Count';
import React from 'react';

const AboutArea = () => {
  return (
    <>
      <section className="about-section fix">
        <div className="about-wrapper-5">
          <div className="container">
            <div className="row g-4 justify-content-between">
              
              <div className="col-lg-6">
                <div className="section-title mb-0">
                  <h6 className="wow fadeInUp" style={{color: "#2f8f2f"}}>
                    Tentang MIT Amanah
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Islami • Cerdas • Mandiri <br/>
                    Mewujudkan Generasi Berkarakter Qur’ani
                  </h2>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-content">
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Madrasah Ibtidaiyah Terpadu (MIT) Amanah merupakan lembaga pendidikan dasar 
                    Islam yang berdiri sejak tahun 2013 di Kebonromo, Ngrampal, Sragen. 
                    MIT Amanah hadir sebagai wujud kepedulian masyarakat terhadap pendidikan 
                    yang berlandaskan akhlak, kecerdasan, dan kemandirian.
                  </p>

                  <div className="counter-box-items">
                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                      <h2>
                        <span className="odometer" data-count="12">
                          <Count number={12} text=' Tahun' />
                        </span>
                      </h2>
                      <p>Pengalaman Mendidik</p>
                    </div>

                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                      Berbagai program unggulan seperti Tahfidzul Qur’an, pembiasaan ibadah,
                      life skill, adab islami, hingga pembelajaran modern menjadikan MIT Amanah 
                      sebagai salah satu madrasah rujukan di wilayah Sragen.
                    </p>
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

export default AboutArea;
