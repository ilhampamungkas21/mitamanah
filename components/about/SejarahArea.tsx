"use client";
import React from "react";
import Image from "next/image";

const SejarahArea = () => {
  return (
    <>
      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 align-items-start">
            {/* IMAGE */}
            <div className="col-lg-5">
              <div className="about-image">
                <Image
                  width={500}
                  height={500}
                  src="/assets/img/hero/hero-2.webp"
                  alt="Sejarah MIT Amanah"
                  className="img-fluid rounded-3 shadow"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-7">
              <div className="section-title mb-3">
                <h6 className="wow fadeInUp">Sejarah MIT Amanah</h6>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Perjalanan MIT Amanah
                </h2>
              </div>

              <div className="about-content wow fadeInUp" data-wow-delay=".3s">
                <p className="mb-3">
                  MIT Amanah Ngrampal berdiri sebagai bentuk kepedulian masyarakat
                  terhadap kebutuhan pendidikan dasar Islami yang modern dan
                  berkarakter di wilayah Kecamatan Ngrampal, Sragen.
                </p>

                <p className="mb-3">
                  Madrasah ini mulai dirintis pada tahun <strong>2013</strong> dari
                  semangat para tokoh dan pengurus yayasan untuk menghadirkan
                  pendidikan yang memadukan ilmu agama, akademik, dan pembentukan
                  karakter.
                </p>

                <p className="mb-3">
                  Pada awalnya, MIT Amanah hanya memiliki dua ruang kelas dan sekitar
                  40 siswa. Dengan visi <strong>“Islami, Cerdas, Mandiri”</strong>,
                  madrasah ini mengembangkan kurikulum terpadu dan program unggulan
                  tahfidz Al-Qur’an.
                </p>

                <p className="mb-3">
                  Seiring berjalannya waktu, dukungan yayasan dan dedikasi para guru
                  mendorong peningkatan fasilitas seperti ruang kelas baru,
                  perpustakaan, masjid, dan area bermain sehingga lingkungan belajar
                  semakin nyaman.
                </p>

                <p className="mb-3">
                  Hingga kini, MIT Amanah terus berkembang dan dipercaya masyarakat
                  melalui program tahfidz, pembiasaan islami, kegiatan literasi, dan
                  berbagai prestasi siswa.
                </p>

                <p className="mb-3">
                  MIT Amanah tetap berkomitmen mencetak generasi Islami yang cerdas,
                  mandiri, dan bermanfaat bagi masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SejarahArea;
