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
    <section className="news-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title color-red text-center">
          <h6 className="wow fadeInUp">News & Blog</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Latest News & Blog
          </h2>
        </div>

        <div className="row">
          {/* === Artikel Utama (Kiri) === */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-left-items">
              <div className="news-thumb">
                <Image
                  width={200}
                  height={15}
                  src={
                    mainArticle.thumbnail_url || "/assets/img/news/default.jpg"
                  }
                  alt={mainArticle.title}
                />
                <Link href={`/blog/${mainArticle.slug}`} className="post-box">
                  {mainArticle.category || "General"}
                </Link>
              </div>
              <div className="news-content">
                <ul className="post-cat">
                  <li>
                    <i className="fal fa-user"></i>
                    {mainArticle.author || "Admin"}
                  </li>
                  <li>
                    <i className="fal fa-calendar-alt"></i>
                    {new Date(mainArticle.created_at).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </li>
                </ul>
                <h3>
                  <Link href={`/blog/${mainArticle.slug}`}>
                    {mainArticle.title}
                  </Link>
                </h3>
                <Link href={`/blog/${mainArticle.slug}`} className="link-btn">
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
                >
                  <div className="thumb">
                    <Image
                      width={200}
                      height={150}
                      src={
                        article.thumbnail_url || "/assets/img/news/default.jpg"
                      }
                      alt={article.title}
                    />
                    <Link href={`/blog/${article.slug}`} className="post-box">
                      {article.category || "General"}
                    </Link>
                  </div>
                  <div className="content">
                    <ul className="post-cat">
                      <li>
                        <i className="fal fa-user"></i>
                        {article.author || "Admin"}
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt"></i>
                        {new Date(article.created_at).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </li>
                    </ul>
                    <h5>
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h5>
                    <Link href={`/blog/${article.slug}`} className="link-btn">
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
