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
      "MIT Amanah adalah lembaga pendidikan Islam tingkat sekolah dasar yang berfokus pada pembentukan karakter, akhlak, dan kecerdasan agama sejak usia dini. MIT Amanah menerapkan kurikulum terpadu antara kurikulum nasional dan kurikulum khas sekolah Islam berbasis pembiasaan ibadah, akhlakul karimah, serta penguatan kemampuan literasi, numerasi, dan ilmu keislaman. Lingkungan belajar dibangun agar siswa merasa aman, nyaman, dan termotivasi untuk berkembang secara optimal.",
  },
  {
    id: "2",
    question: "Apa saja program unggulan MIT Amanah?",
    answer:
      "MIT Amanah memiliki berbagai program unggulan yang dirancang untuk membentuk siswa yang berakhlak, cerdas, dan mandiri. Beberapa program tersebut antara lain: \n\n• **Program Tahfidz & Tahsin**: Pembiasaan membaca Al-Qur’an setiap hari, target hafalan bertahap, serta bimbingan langsung dari guru bersanad. \n• **Pembiasaan Adab Harian**: Meliputi salam, doa harian, kedisiplinan, kerapian, serta adab kepada guru dan teman. \n• **Kelas Tematik Islami**: Menggabungkan pelajaran umum dengan nilai-nilai Islam agar siswa memahami konsep dengan lebih aplikatif. \n• **Program Sholat Dhuha & Dzuhur Berjamaah**: Membentuk kedisiplinan ibadah sejak kecil. \n• **Project Based Learning**: Siswa belajar melalui praktik langsung, eksperimen, dan proyek sederhana yang melatih kreativitas dan pemecahan masalah.",
  },
  {
    id: "3",
    question: "Bagaimana sistem pembelajaran di MIT Amanah?",
    answer:
      "Sistem pembelajaran di MIT Amanah menggunakan pendekatan aktif, menyenangkan, dan aplikatif (Active Learning). Guru berperan sebagai fasilitator yang membimbing siswa untuk memahami konsep melalui diskusi, percobaan, permainan edukatif, dan praktik langsung. Setiap pembelajaran juga disisipkan nilai-nilai Islam agar siswa tidak hanya cerdas secara akademik, tetapi juga memiliki akhlak dan adab yang baik. Selain itu, pembelajaran disesuaikan dengan gaya belajar tiap anak melalui metode visual, auditori, dan kinestetik.",
  },
  {
    id: "4",
    question: "Apakah MIT Amanah memiliki kegiatan ekstrakurikuler?",
    answer:
      "Ya, MIT Amanah menyediakan berbagai kegiatan ekstrakurikuler yang bertujuan mengembangkan potensi siswa sesuai minat dan bakat. Beberapa kegiatan tersebut antara lain: \n\n• **Pramuka**: Melatih kedisiplinan, kemandirian, dan kerja sama. \n• **Seni dan Kreativitas**: Gambar, mewarnai, tari, serta keterampilan tangan. \n• **Olahraga**: Futsal, senam anak, dan kegiatan fisik sehat lainnya. \n• **Memanah**: Melatih fokus, kesabaran, dan ketangkasan sesuai sunnah. \n• **Tahfidz Plus**: Untuk siswa yang ingin memperdalam hafalan Al-Qur’an. \n\nKegiatan ekstrakurikuler ini mendukung perkembangan fisik, sosial, emosional, dan spiritual anak.",
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
                    src="/assets/img/Faq2.webp"
                    alt="img"
                    className="wow img-custom-anim-left"
                    width={500}
                    height={500}
                  />

                  <div className="bg-shape">
                    <Image
                      src="/assets/img/faq.webp"
                      alt="img"
                      width={300}
                      height={300}
                    />
                  </div>

                  {/* <div className="quote-shape float-bob-x">
                    <Image
                      src="/assets/img/faq.webp"
                      alt="img"
                      width={400}
                      height={400}
                    />
                  </div> */}
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
