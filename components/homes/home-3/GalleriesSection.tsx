import { createClient } from "@/lib/supabase/server";
import Image from "next/image";

export default async function GalleriesSection() {
  const supabase = await createClient();

  // Ambil artikel dari Supabase
  const { data: galleries, error } = await supabase
    .from("galleries")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  if (error) {
    console.error("Error fetching galleries:", error.message);
  }

  // Jika belum ada data
  if (!galleries || galleries.length === 0) {
    return (
      <section className="galleries-section fix section-padding pt-0">
        
      </section>
    );
  }

  return (
    <section className="flex flex-col px-4 py-12 sm:py-16">
      <div className="section-title flex flex-col w-full items-center">
        <h6 className="text-green wow fadeInUp">Kegiatan Terbaru</h6>

        <h2 className="text-green wow fadeInUp" data-wow-delay=".3s">
          Potret Kegiatan MIT Amanah
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* BIG BOX */}
        <div className="group col-span-2 row-span-2 relative overflow-hidden rounded-xl min-h-[400px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt={galleries[0].description}
            src={galleries[0].image_url}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-white text-lg font-bold">{galleries[0].title}</h3>
          </div>
        </div>

        {/* SMALL BOX */}
        <div className="group relative overflow-hidden rounded-xl min-h-[250px] md:min-h-[300px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt={galleries[1].title}
            src={galleries[1].image_url}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-white text-lg font-bold">{galleries[1].title}</h3>
          </div>
        </div>

        {/* SMALL BOX */}
        <div className="group relative overflow-hidden rounded-xl min-h-[10px] md:min-h-[300px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt={galleries[2].title}
            src={galleries[2].image_url}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-white text-lg font-bold">{galleries[2].title}</h3>
          </div>
        </div>

        {/* WIDE BOX */}
        <div className="group col-span-2 relative overflow-hidden rounded-xl min-h-[250px] md:min-h-[400px]">
          <Image
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            alt={galleries[3].title}  
            src={galleries[3].image_url}  
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-white text-lg font-bold">{galleries[3].title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
