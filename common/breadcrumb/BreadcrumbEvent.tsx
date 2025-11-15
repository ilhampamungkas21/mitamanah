import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BreadcrumbProps {
  title: string;
  subtitle: string;
}

const BreadcrumbEvent = ({ title, subtitle }: BreadcrumbProps) => {
  return (
    <>
      <section className="breadcrumb-wrapper">
        <div className="shape-1">
          <Image
            width={126}
            height={254}
            src="/assets/img/breadcrumb/shape-1.png"
            alt="img"
          />
        </div>
        <div className="shape-2">
          <Image
            width={138}
            height={132}
            src="/assets/img/breadcrumb/shape-2.png"
            alt="img"
          />
        </div>
        <div className="shape-3">
          <Image
            width={138}
            height={132}
            src="/assets/img/breadcrumb/shape-3.png"
            alt="img"
          />
        </div>
        <div className="dot-shape">
          <Image
            width={15}
            height={15}
            src="/assets/img/breadcrumb/dot-shape.png"
            alt="img"
          />
        </div>
        <div className="vector-shape">
          <Image
            width={40}
            height={40}
            src="/assets/img/breadcrumb/Vector.png"
            alt="img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <h1>{title}</h1>
              <ul className="breadcrumb-items">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="style-2">{subtitle}</li>
              </ul>
              <div className="breadcrumb-image px-2 md:px-0 md:w-3/4 h-[250px] md:h-[500px] md:mx-auto">
                <Image
                  width={1320}
                  height={613}
                  src="/assets/img/hero/hero-2.webp"
                  alt="img"
                  className="px-2 md:px-0 md:w-3/4 h-[250px] md:h-[500px] object-cover md:mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbEvent;
