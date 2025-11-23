import { Toaster } from "sonner";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIT Amanah | Madrasah Ibtidaiyah Terpadu Islami Cerdas Mandiri",
  description:
    "MIT Amanah Kebonromo, Ngrampal, Sragen – Madrasah Ibtidaiyah Terpadu dengan visi Islami, Cerdas, Mandiri. Fasilitas lengkap, program tahfidz, life skill, mentoring hadits, pembiasaan ibadah, dan berbagai ekstrakurikuler unggulan.",
  keywords:
    "MIT Amanah, Madrasah Ibtidaiyah Terpadu, Sekolah Islam Sragen, Kebonromo, Ngrampal, Tahfidz, Pendidikan Islam, Sekolah Dasar Islam, Islami Cerdas Mandiri",
  authors: [{ name: "MIT Amanah" }],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mitamanah.com",
    siteName: "MIT Amanah",
    title: "MIT Amanah | Madrasah Ibtidaiyah Terpadu – Islami Cerdas Mandiri",
    description:
      "MIT Amanah Sragen – Madrasah Ibtidaiyah Terpadu dengan visi Islami, Cerdas, Mandiri. Program unggulan: Tahfidz Qur'an, Life Skill, Mentoring Hadits, Pembiasaan Ibadah, dan Ekstrakurikuler.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MIT Amanah – Madrasah Ibtidaiyah Terpadu",
    description:
      "Sekolah Islam terpadu di Sragen dengan visi Islami, Cerdas, Mandiri. Program pendidikan, fasilitas lengkap, dan kegiatan islami.",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  metadataBase: new URL("https://mitamanah.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" /> */}
      </head>
      <body>{children}</body>
      <Toaster richColors position="top-right" />
    </html>
  );
}
