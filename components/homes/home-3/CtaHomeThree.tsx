import Image from "next/image";
import Link from "next/link";
import React from "react";

const CtaHomeThree = () => {
  return (
    <>
      <section className="quality-coureses-section section-padding fix theme-green-bg">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-xl-2 col-lg-6">
              <div className="coureses-image float-bob-x">
                <Image
                  src="https://eduspace-nextjs.vercel.app/assets/img/courses/girl.png"
                  alt="img"
                  width={247}
                  height={384}
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                />
                <div className="bg-shape">
                  <Image
                    src="/assets/img/about/bg-shape.png"
                    alt="img"
                     width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-6">
              <div className="quality-coureses-content text-center">
                <div className="section-title">
                  <h6 className="text-white wow fadeInUp">
                    Quality Courses & Program
                  </h6>
                  <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                    Get Your Quality Skills Certificate Through Eduspace
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                  We Provide 2800+ Best Quality Courses From Eduspace
                </p>
                <Link
                  href="/courses-details"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Get Started Now
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="coureses-image style-2 float-bob-y">
                <Image
                  src="https://eduspace-nextjs.vercel.app/assets/img/courses/boy.png"
                  alt="img"
                  width={307}
                  height={382}
                  className="wow img-custom-anim-right"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                />
                <div className="bg-shape">
                  <Image
                    src="/assets/img/about/bg-shape.png"
                    alt="img"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeThree;
