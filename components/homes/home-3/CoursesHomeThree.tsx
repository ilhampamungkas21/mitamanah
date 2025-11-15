import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const CoursesHomeThree = () => {
  return (
    <>
      <section className="popular-courses-section-33 fix section-padding">
        <div className="container">
          <div className="section-title color-green text-center">
            <h6 className="wow fadeInUp">Program Unggulan</h6>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Kegiatan & Pembelajaran di <br /> MI Amanah Sragen
            </h2>

            <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">
              Mengembangkan <b>ilmu pengetahuan</b> dan <b>akhlak mulia</b> melalui
              pembelajaran yang menyenangkan dan islami.
            </p>
          </div>

          <ul className="nav mt-3 mt-md-0">
            <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
              <a href="#Akademik" data-bs-toggle="tab" className="nav-link active">
                Program Akademik
              </a>
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

            {/* TAB 1 - AKADEMIK */}
            <div id="Akademik" className="tab-pane fade show active">
              <div className="row">

                {/* ITEM 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Bahasa Indonesia
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/15.jpg"
                          alt="Bahasa Indonesia"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">
                          Belajar Bahasa Indonesia dengan Ceria
                        </Link>
                      </h4>
                      <p>
                        Melatih kemampuan membaca, menulis, dan berbicara dengan cara
                        yang menyenangkan dan interaktif.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-2">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Matematika
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/16.jpg"
                          alt="Matematika"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Matematika Menyenangkan</Link>
                      </h4>
                      <p>
                        Mengasah logika dan berpikir kritis melalui permainan angka dan
                        kegiatan kontekstual.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-xl-4 col-lg6 col-md6">
                  <div className="popular-courses-items bg-3">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Ilmu Pengetahuan Alam
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/17.jpg"
                          alt="IPA"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Mengenal Ciptaan Allah Lewat Alam</Link>
                      </h4>
                      <p>
                        Mengajarkan sains dari perspektif tauhid agar anak memahami
                        kebesaran Allah melalui ciptaan-Nya.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* TAB 2 - KEISLAMAN */}
            <div id="Keislaman" className="tab-pane fade">
              <div className="row">

                {/* ITEM 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Tahfidz Al-Qur’an
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/18.jpg"
                          alt="Tahfidz Quran"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Program Hafalan Juz Amma</Link>
                      </h4>
                      <p>
                        Membimbing siswa menghafal Al-Qur’an dengan metode yang lembut
                        dan penuh semangat.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-2">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Fiqih & Ibadah
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/19.jpg"
                          alt="Fiqih & Ibadah"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Pembiasaan Ibadah Sehari-hari</Link>
                      </h4>
                      <p>
                        Mengajarkan wudhu, sholat, dan adab sehari-hari untuk membentuk
                        karakter islami sejak dini.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-3">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Akhlak & Adab
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/20.jpg"
                          alt="Akhlak & Adab"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Menumbuhkan Akhlakul Karimah</Link>
                      </h4>
                      <p>
                        Menanamkan nilai sopan santun, empati, dan tanggung jawab
                        dalam kehidupan sehari-hari.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* TAB 3 - EKSTRAKURIKULER */}
            <div id="Ekstrakurikuler" className="tab-pane fade">
              <div className="row">

                {/* ITEM 1 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Pramuka
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/21.jpg"
                          alt="Pramuka"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Melatih Kemandirian dan Kepemimpinan</Link>
                      </h4>
                      <p>
                        Kegiatan pramuka untuk melatih tanggung jawab, disiplin, dan
                        cinta alam.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-2">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Hadrah & Seni Islami
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/22.jpg"
                          alt="Hadrah & Seni Islami"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Menumbuhkan Kreativitas Islami</Link>
                      </h4>
                      <p>
                        Melatih bakat seni dan ekspresi diri bernuansa islami seperti
                        hadrah dan kaligrafi.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="popular-courses-items bg-3">
                    <div className="popular-thumb">
                      <div className="post-box">
                        <Link href="/programs" className="post-cat">
                          Olahraga
                        </Link>
                      </div>

                      <div className="thumb">
                        <Image
                          src="/assets/img/courses/23.jpg"
                          alt="Olahraga"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="content">
                      <h4>
                        <Link href="/programs">Tubuh Sehat, Jiwa Kuat</Link>
                      </h4>
                      <p>
                        Beragam kegiatan olahraga untuk melatih fisik, kerjasama, dan
                        sportivitas anak.
                      </p>
                      <Link href="/programs" className="link-btn">
                        Lihat Detail <i className="far fa-chevron-double-right"></i>
                      </Link>
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
