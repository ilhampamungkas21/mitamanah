import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CoursesHomeThree = () => {
  return (
    <>
      <section className="popular-courses-section-33 fix section-padding" itemScope itemType="https://schema.org/ItemList" aria-label="Daftar Program Unggulan">
        <div className="container">

          {/* JUDUL SECTION */}
          <div className="section-title color-green text-center">
            <h6 className="wow fadeInUp">Program Unggulan MIT Amanah</h6>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Pendidikan Islami – Cerdas – Mandiri
            </h2>

            <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">
              Mengembangkan <b>akhlak mulia</b> serta <b>kecerdasan intelektual</b> melalui
              pembelajaran terpadu berbasis Al-Qur’an.
            </p>
          </div>

          {/* TAB MENU */}
          <ul className="nav mt-3 mt-md-0">
            <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
              <Link href="#Akademik" data-bs-toggle="tab" className="nav-link active">
                Program Akademik
              </Link>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
              <a href="#Keislaman" data-bs-toggle="tab" className="nav-link">
                Program Keislaman
              </a>
            </li>
            <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
              <a href="#Ekstrakurikuler" data-bs-toggle="tab" className="nav-link">
                Ekstrakurikuler
              </a>
            </li>
          </ul>

          <div className="tab-content">

            {/* ====================== TAB AKADEMIK ====================== */}
            <div id="Akademik" className="tab-pane fade show active">
              <div className="row">

                {/* IPA */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items" role="article" itemScope itemType="https://schema.org/Course">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Ilmu Pengetahuan Alam</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/ipa.png"
                          alt="IPA MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Mengenal Ciptaan Allah Melalui Sains</h4>
                      <p itemProp="description">
                        Pembelajaran IPA berbasis eksperimen untuk menumbuhkan
                        rasa ingin tahu dan pemahaman tentang kebesaran Allah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MATEMATIKA */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-2" role="article" itemScope itemType="https://schema.org/Course">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Matematika</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/mtk.png"
                          alt="Matematika MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Matematika Ceria & Logis</h4>
                      <p itemProp="description">
                        Melatih kemampuan berhitung, logika, dan berpikir kritis
                        melalui metode pembelajaran yang menyenangkan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BAHASA INDONESIA */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-3" role="article" itemScope itemType="https://schema.org/Course">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Bahasa Indonesia</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/membaca.png"
                          alt="Bahasa Indonesia MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Cerdas Literasi Sejak Dini</h4>
                      <p itemProp="description">
                        Melatih keterampilan membaca, menulis, bercerita, dan
                        komunikasi yang baik dengan pendekatan aktif.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ====================== TAB KEISLAMAN ====================== */}
            <div id="Keislaman" className="tab-pane fade">
              <div className="row">

                {/* TAHFIDZ */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Tahfidz Qur’an</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/ngaji.png"
                          alt="Tahfidz MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Target Minimal 2 Juz</h4>
                      <p itemProp="description">
                        Program unggulan hafalan Al-Qur’an dengan metode talaqqi &
                        tikrar yang terbimbing oleh ustadz/ustadzah berpengalaman.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PEMBIASAAN IBADAH */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-2" role="article" itemScope itemType="https://schema.org/Course">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Pembiasaan Ibadah</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/sholat.png"
                          alt="Pembiasaan ibadah MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Sholat Dhuha, Dzikir Pagi & Dhuhur Berjamaah</h4>
                      <p itemProp="description">
                        Pembiasaan ibadah harian untuk membentuk karakter islami
                        dan kedisiplinan anak sejak dini.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MENTORING ADAB & HADITS */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-3" role="article" itemScope itemType="https://schema.org/Course">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Akhlak & Hadits</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/mentoring.png"
                          alt="Akhlak MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Mentoring Adab & Hadits</h4>
                      <p itemProp="description">
                        Pembelajaran hafalan hadits, doa harian, serta praktik adab
                        Islami melalui checklist pembiasaan harian.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ====================== TAB EKSTRAKURIKULER ====================== */}
            <div id="Ekstrakurikuler" className="tab-pane fade">
              <div className="row">

                {/* TAHFIDZ */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Tahfidz</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/setoran hafalan.png"
                          alt="Ekstra tahfidz MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Pendalaman Hafalan Qur’an</h4>
                      <p itemProp="description">
                        Ekstrakurikuler untuk menambah dan memperkuat hafalan juz 30,
                        29, dan seterusnya.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TAEKWONDO */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-2">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Taekwondo</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/taekwondo.png"
                          alt="Taekwondo MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Mental Tangguh & Disiplin</h4>
                      <p>
                        Melatih fisik, fokus, dan kedisiplinan dengan latihan bela diri
                        bersama pelatih bersertifikat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PRAMUKA */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-3">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Pramuka</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/pramuka.png"
                          alt="Pramuka MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20' itemProp="name">Kemandirian & Kepemimpinan</h4>
                      <p>
                        Membangun jiwa kepemimpinan, keberanian, dan kecintaan terhadap alam.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BAHASA & JURNALISTIK */}
                <div className="col-xl-4 col-lg-6 col-md-6 mt-4">
                  <div className="popular-courses-items bg-4">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <span className="post-cat">Bahasa & Jurnalistik</span>
                      </div>
                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/public speaking.png"
                          alt="Jurnalistik MIT Amanah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4 className='h-20'>Melatih Public Speaking</h4>
                      <p>
                        Ekstra untuk melatih menulis berita, membaca puisi, MC, serta
                        ceramah dai cilik.
                      </p>
                    </div>
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

export default CoursesHomeThree;
