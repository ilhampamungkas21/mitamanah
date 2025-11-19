import Link from "next/link";
import React from "react";
import Image from "next/image";

const TeamHomeFive = ({ style_2 }: { style_2?: boolean }) => {
  const teachers = [
    {
      name: "Ustadzah Siti Rahma",
      role: "Guru Kelas",
      img: "/assets/img/team/11.jpg",
      delay: ".2s",
    },
    {
      name: "Ustadz Ahmad Fajar",
      role: "Guru Tahfidz",
      img: "/assets/img/team/12.jpg",
      delay: ".4s",
    },
    {
      name: "Ustadzah Nur Aisyah",
      role: "Guru Bahasa",
      img: "/assets/img/team/13.jpg",
      delay: ".6s",
    },
    {
      name: "Ustadz Budi Prasetyo",
      role: "Pembina Ekstrakurikuler",
      img: "/assets/img/team/14.jpg",
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
