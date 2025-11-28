import Link from "next/link";
import React from "react";
import Image from "next/image";

const TeamHomeFive = ({ style_2 }: { style_2?: boolean }) => {
  const teachers = [
    {
      name: "Habib Misbahul Munir",
      role: "Kepala Madrasah",
      img: "/assets/img/team/Kepala Madrasah.webp",
      delay: ".2s",
    },
    {
      name: "Dwi Adhiastuti",
      role: "Waka Kurikulum",
      img: "/assets/img/team/Waka Kurikulum.webp",
      delay: ".4s",
    },
    {
      name: "Frenky Prima Sanjaya",
      role: "Matematika dan Pengampu Lumba Umum",
      img: "/assets/img/team/Guru MTK Pengampu Lomba Umum.webp",
      delay: ".6s",
    },
    {
      name: "Muhammad Habib Amirudin Al-Haq",
      role: "Pendidikan Agama Islam",
      img: "/assets/img/team/Guru PAI 2.webp",
      delay: ".8s",
    },
  ];

  return (
    <section
      className={`team-section-5 fix section-padding ${
        style_2 ? "section-bg" : ""
      }`}
    >
      <div className="container">
        <div className="section-title color-blue text-center">
          <h6 className="wow fadeInUp">Tenaga Pendidik</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Guru & Pembimbing MIT Amanah
          </h2>
        </div>

        <div className="row">
          {teachers.map((teacher, index) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={teacher.delay}
              key={index}
            >
              <div className="team-card-items">
                <div className="thumb">
                  <Image
                    width={300}
                    height={300}
                    src={teacher.img}
                    alt={teacher.name}
                    className="img-fluid"
                  />
                </div>

                <div className="content">
                  <h4>
                    <Link href="#">{teacher.name}</Link>
                  </h4>
                  <p>{teacher.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamHomeFive;
