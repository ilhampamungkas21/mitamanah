import Image from "next/image";

const GalleriesSection = () => {
  return (
    <section className="flex flex-col px-4 py-12 sm:py-16">
      <div className="section-title">
                  <h6 className="text-green wow fadeInUp">
                    Kegi
                  </h6>

                  <h2 className="text-green wow fadeInUp" data-wow-delay=".3s">
                    Membangun Generasi Cerdas, Berakhlak, dan Qur’ani
                  </h2>
                </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {/* BIG BOX */}
        <div className="group col-span-2 row-span-2 relative overflow-hidden rounded-xl min-h-[400px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt="Vibrant graphic design poster with abstract shapes and bold typography"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrVOujVfcc7RfXO892WLhJuGtwibd9wMlNLjSZdFQ8P7xc3KEX1BFbEdMTrtssIrfuENpliwNj0_sqpjVVaZnB_1xx7TbvQ9hjhEpNZwd3xdP6scEo9IKa2pvMb9VYkiylZj_-puelJ82F203X3qV_1CRdEkzqsZ_GMatJFlBJA8qv2yb10y7jTiyVHBHdCFL7FheZXXKBwaY-SYgFCrmEGPcVk4RihbRl2trBWOflDukK_vACW9e43shbjDkVMWjxt7EVtNY0iFQ"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-lg font-bold">Project Chroma</h3>
            <p className="text-sm">Graphic Design</p>
          </div>
        </div>

        {/* SMALL BOX */}
        <div className="group relative overflow-hidden rounded-xl min-h-[200px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt="A sleek, modern user interface for a mobile application"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs5SF8BAEkX2ilUNiJlTxaDD8hyztn__A__HtTznqZCE3n1BCT2U-FaF5BMMBTFeVH0nf6nrrmFKq2K67tbw3k8yJ-5Jpn5VW9ktayjVWFAC8KWJwb6ojIzrYZi_Q_mYWwfJZDBcpQHWDc-p5NMOnpSjXGT76CTHXxmPpFDwMy1UtBZXLC2U4j-jTp58Eal4KJydZqGcD4PiNnSMQPJh9YCaTrbA43Pb2WTJbnbWPZQ57JJyZVP_aR7qWtV1OYEMdm0MvLyCOIPAA"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-base font-bold">Connect App</h3>
            <p className="text-xs">UX/UI Design</p>
          </div>
        </div>

        {/* SMALL BOX */}
        <div className="group relative overflow-hidden rounded-xl min-h-[200px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt="An ergonomic and stylishly designed chair"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIIHVwS0-vMN4M01KCZX6W1Dcnb_uSWDQhDPNhRalMOj4xzO5cDaSjNi7IH9wL2lhRdL-peXbu4q-cKneoL8fjpwLLv3PdPiwSY4uKygDDO9OIaQrYlJl8k4blhgLoQnsvWlqf7QcSaS2Cd10j3O7ZfAWAWIDFovliHiv9VOj8UEAt-GIU0eR2MXmxzKeOzgfni1btTBTkD5BRwHvEGcjxVucNDpCC8LfWZoMNpjGgQ3IhLjI8Wj9otINRCwXShiOi2gVCONsV4VI"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-base font-bold">The Arc Chair</h3>
            <p className="text-xs">Industrial Design</p>
          </div>
        </div>

        {/* WIDE BOX */}
        <div className="group col-span-2 relative overflow-hidden rounded-xl min-h-[250px] md:min-h-[300px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt="A 3D render of an architectural concept"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeK_3Zt_r1r1NRvKl_kJ-Hzi6YBgfKtr1SwLtsKAIT6o2OaZaD7qCYh42D34s9O2OYadpQmATJKLkwBYGLY7D5lwCqe_2ekEy9bbZxb5TEgOxT-hSe1TFFy-AXPGJOtNOP6g39swJSCuAhcqnp0gpjdrHqaFynEFZiUbbCmQ40sdkQhxPllRtvSu2P-orbr29Kvjkg_mcymoCF-bSfmXLKaW9nxIkou7zEZyN6EisdEF_uql8o-PpAp6UQ0Ir1zcl571wTIOfxe8o"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-base font-bold">Urban Oasis</h3>
            <p className="text-xs">Architectural Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleriesSection;
