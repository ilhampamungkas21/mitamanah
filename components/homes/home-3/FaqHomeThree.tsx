import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import Image from "next/image";
import React from "react";

const faqData = [
  {
    id: "1",
    question: "Apa itu MIT Amanah?",
    answer:
      "MIT Amanah adalah sekolah berbasis Islam yang berfokus pada pembentukan karakter, akhlak...",
  },
  {
    id: "2",
    question: "Apa saja program unggulan MIT Amanah?",
    answer:
      "Program unggulan mencakup Tahfidz, pembiasaan adab, pembelajaran berbasis proyek...",
  },
  {
    id: "3",
    question: "Bagaimana sistem pembelajaran di MIT Amanah?",
    answer:
      "Sistem pembelajaran menggunakan metode aktif, menyenangkan, dan aplikatif...",
  },
  {
    id: "4",
    question: "Apakah MIT Amanah memiliki kegiatan ekstrakurikuler?",
    answer:
      "Ya, tersedia kegiatan seperti Pramuka, seni, olahraga, memanah, serta kelas tahfidz...",
  },
];

const FaqHomeThree = () => {
  return (
    <>
      <section className="faq-section fix section-padding p-5">
        <div className="container">
          <div className="faq-wrapper style-2">
            <div className="row g-4 align-items-center">
              {/* LEFT — FAQ CONTENT */}
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title color-red">
                    <h6 className="wow fadeInUp">Sering Ditanyakan</h6>
                    <h2
                      className="wow fadeInUp"
                      data-wow-delay=".3s"
                      style={{ color: "#333" }}
                    >
                      FAQ MIT Amanah
                    </h2>
                  </div>

                  <div className="faq-items mt-4 mt-md-0 mb-0">
                    <div className="faq-items mt-4 mt-md-0 mb-0">
                      <Accordion
                        type="single"
                        collapsible
                        className="space-y-3"
                      >
                        {faqData.map((item) => (
                          <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border border-gray-200 rounded-lg px-4 bg-white shadow-sm"
                          >
                            <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                              {item.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — IMAGES */}
              <div className="col-lg-6">
                <div className="faq-image-2">
                  <Image
                    src="https://eduspace-nextjs.vercel.app/assets/img/faq/01.png"
                    alt="img"
                    className="wow img-custom-anim-left"
                    width={500}
                    height={500}
                  />

                  <div className="bg-shape">
                    <Image
                      src="https://eduspace-nextjs.vercel.app/assets/img/faq/bg-shape.png"
                      alt="img"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="quote-shape float-bob-x">
                    <Image
                      src="https://eduspace-nextjs.vercel.app/assets/img/faq/quote-shape.png"
                      alt="img"
                      width={120}
                      height={120}
                    />
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

export default FaqHomeThree;
