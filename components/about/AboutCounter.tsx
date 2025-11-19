"use client"
import Count from '@/common/Count';
import React from 'react';

const AboutCounter = () => {
  return (
    <>
      <div className="counter-section-23 section-padding pt-0">
        <div className="container custom-container">
          <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg-3.jpg)`}}>
            
            {/* Jumlah Siswa */}
            <div className="counter-items">
              <div className="icon">
                <i className="flaticon-success"></i>
              </div>
              <div className="content">
                <h2>
                  <span className="odometer" data-count="250">
                    <Count number={250} text='+' />
                  </span>
                </h2>
                <p>Jumlah Siswa</p>
              </div>
            </div>

            {/* Tenaga Pendidik */}
            <div className="counter-items">
              <div className="icon">
                <i className="flaticon-instructor"></i>
              </div>
              <div className="content">
                <h2>
                  <span className="odometer" data-count="20">
                    <Count number={20} text=' Guru' />
                  </span>
                </h2>
                <p>Guru & Tenaga Kependidikan</p>
              </div>
            </div>

            {/* Program Unggulan */}
            <div className="counter-items">
              <div className="icon">
                <i className="flaticon-satisfaction"></i>
              </div>
              <div className="content">
                <h2>
                  <span className="odometer" data-count="8">
                    <Count number={8} text=' Program' />
                  </span>
                </h2>
                <p>Program Pendidikan Unggulan</p>
              </div>
            </div>

            {/* Tahun Berdiri */}
            <div className="counter-items">
              <div className="icon">
                <i className="flaticon-medal"></i>
              </div>
              <div className="content">
                <h2>
                  <span className="odometer" data-count="2013">
                    <Count number={12} text=' Tahun' />
                  </span>
                </h2>
                <p>Pengalaman Sejak 2013</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCounter;
