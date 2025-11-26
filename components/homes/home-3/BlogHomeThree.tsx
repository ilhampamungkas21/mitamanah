import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function BlogHomeThree() {
  const supabase = await createClient();

  // Ambil artikel dari Supabase
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching articles:", error.message);
  }

  // Jika belum ada data
  if (!articles || articles.length === 0) {
    return (
      <section className="news-section fix section-padding pt-0">
        <div className="container text-center">
          <h2>No articles found.</h2>
        </div>
      </section>
    );
  }

  // Bagi 1 artikel utama + 2 artikel kecil di kanan
  const [mainArticle, ...sideArticles] = articles;

  return (
    <section className="news-section fix section-padding pt-0" itemScope itemType="https://schema.org/ItemList" aria-label="Artikel Terbaru">
      <div className="container">
        <div className="section-title color-green text-center">
          <h6 className="wow fadeInUp">News & Blog</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Berita Terbaru
          </h2>
        </div>

        <div className="row">
          {/* === Artikel Utama (Kiri) === */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-left-items" itemScope itemType="https://schema.org/Article">
              <div className="news-thumb">
                <Image
                  width={200}
                  height={15}
                  src={mainArticle.image_url || "/assets/img/news/default.jpg"}
                  alt={mainArticle.title}
                />
                <meta itemProp="image" content={mainArticle.image_url || "/assets/img/news/default.jpg"} />
                <Link href={`/articles/${mainArticle.slug}`} className="post-box" itemProp="url">
                  {mainArticle.category || "General"}
                </Link>
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fal fa-user"></i>
                    <span itemProp="author">{mainArticle.author || "Admin"}</span>
                  </li>
                  <li>
                    <i className="fal fa-calendar-alt text-green-600!"></i>
                    <time dateTime={new Date(mainArticle.created_at).toISOString()} itemProp="datePublished">
                      {new Date(mainArticle.created_at).toLocaleDateString(
                        "id-ID",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </time>
                  </li>
                </ul>
                <h3>
                  <Link href={`/blog/${mainArticle.slug}`}>
                    {mainArticle.title}
                  </Link>
                </h3>
                <Link href={`/articles/${mainArticle.slug}`} className="link-btn" itemProp="url">
                  Read More <i className="far fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* === Artikel Samping (Kanan) === */}
          <div className="col-lg-6">
            <div className="news-right-items">
              {sideArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="news-right-box wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                  itemScope itemType="https://schema.org/Article"
                >
                  <div className="thumb w-full relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={article.image_url || "/assets/img/news/default.jpg"}
                      alt={article.title}
                      fill
                      className="object-scale-down"
                    />
                    <meta itemProp="image" content={article.image_url || "/assets/img/news/default.jpg"} />
                    <Link href={`/articles/${article.slug}`} className="bg-green-700 text-white" itemProp="url">
                       {article.category || "General"}
                     </Link>
                   </div>
                   <div className="content">
                     <ul className="post-cat">
                       <li>
                         <i className="fal fa-user"></i>
                        <span itemProp="author">{article.author || "Admin"}</span>
                       </li>
                       <li>
                         <i className="fal fa-calendar-alt text-green-600!"></i>
                        <time dateTime={new Date(article.created_at).toISOString()} itemProp="datePublished">
                          {new Date(article.created_at).toLocaleDateString(
                            "id-ID",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </time>
                       </li>
                     </ul>
                     <h5>
                      <Link href={`/blog/${article.slug}`}>
                         {article.title}
                       </Link>
                     </h5>
                    <Link href={`/articles/${article.slug}`} className="link-btn" itemProp="url">
                       Read More <i className="far fa-chevron-double-right"></i>
                     </Link>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
