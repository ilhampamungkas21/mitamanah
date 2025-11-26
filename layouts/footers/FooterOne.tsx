import Link from "next/link";
import Image from "next/image";

const FooterOne = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO & DESKRIPSI */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/img/logo/logo.webp"
                width={70}
                height={70}
                alt="MIT Amanah"
                className="rounded"
              />
              <h3 className="text-xl font-bold text-white">MIT AMANAH</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              MIT Amanah berkomitmen memberikan pendidikan terbaik untuk
              membentuk generasi yang berakhlak, cerdas, dan berprestasi.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white text-lg">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white text-lg">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white text-lg">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* HALAMAN */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Halaman</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artikel" className="hover:text-white">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* INFORMASI SEKOLAH */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informasi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Program Unggulan</li>
              <li>Kegiatan Siswa</li>
              <li>Ekstrakurikuler</li>
              <li>Fasilitas Sekolah</li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                Jl. Contoh Alamat No. 123 <br />
                Kecamatan, Kabupaten
              </li>
              <li>
                <a
                  href="mailto:admin@mitamanah.sch.id"
                  className="hover:text-white"
                >
                  admin@mitamanah.sch.id
                </a>
              </li>
              <li>
                <a href="tel:+62895346380890" className="hover:text-white">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MIT Amanah — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
