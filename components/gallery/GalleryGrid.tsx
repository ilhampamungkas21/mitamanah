"use client";

import Image from "next/image";
import { useState } from "react";
import ImageViewerModal, { ImageViewerItem } from "@/components/common/image-modal";

type Gallery = {
  id: number;
  title: string;
  description: string;
  image_url: string;
};

type Props = {
  galleries: Gallery[];
};

export default function GalleryGrid({ galleries }: Props) {
  const [selected, setSelected] = useState<ImageViewerItem | null>(null);

  return (
    <>
    <ImageViewerModal
        image={selected}
        onClose={() => setSelected(null)}
      />
      <section className="gallery-section section-padding pt-0 fix">
        <div className="container">
          <div className="section-title text-center">
            <h6>Kegiatan MIT Amanah</h6>
            <h2>Potret Kegiatan Siswa MIT Amanah</h2>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row">

                {galleries.map((gallery) => (
                  <div key={gallery.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="portfolio-item">
                      <div
                        className="portfoio-thumb relative w-full aspect-4/3 overflow-hidden rounded-lg cursor-pointer"
                        onClick={() =>
                          setSelected({
                            src: gallery.image_url,
                            alt: gallery.title,
                          })
                        }
                      >
                        <Image
                          src={gallery.image_url}
                          alt={gallery.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="portfolio-text">
                        <h3>{gallery.title}</h3>
                        <p>{gallery.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL VIEWER */}
      
    </>
  );
}
