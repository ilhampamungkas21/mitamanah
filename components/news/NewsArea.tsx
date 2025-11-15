import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import React from "react";
import SearchWidget from "./NewsSearch";
import Image from "next/image";

export default async function NewsArea() {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  const latest = articles?.slice(0, 3) ?? [];

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      <section className="blog-wrapper news-wrapper section-padding pt-0">
        <div className="container">
          <div className="news-area">
            <div className="row">
              {/* MAIN CONTENT */}
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  {/* ======================= */}
                  {/*    DYNAMIC ARTICLE LIST  */}
                  {/* ======================= */}
                  {articles?.map((item) => (
                    <div key={item.id} className="single-blog-post">
                      <Image
                        src={item.image_url}
                        width={900}
                        height={400}
                        alt={item.title}
                        className="w-full object-cover rounded-lg"
                      />
                      <div className="post-content">
                        <div className="post-meta">
                          <span>
                            <i className="fal fa-calendar-alt"></i>
                            {formatDate(item.created_at)}
                          </span>
                        </div>

                        <h2 className="title-anim">
                          <Link href={`/articles/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h2>

                        <p>{item.excerpt}</p>

                        <Link
                          href={`/articles/${item.slug}`}
                          className="theme-btn mt-4 line-height text-white"
                        >
                          Lihat Detail
                        </Link>
                      </div>
                    </div>
                  ))}

                  {/* Pagination (optional – belum dynamic) */}
                  <div className="page-nav-wrap pt-5">
                    <ul>
                      <li>
                        <a className="page-numbers" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          2
                        </a>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          3
                        </a>
                      </li>
                      <li>
                        <a className="page-numbers" href="#">
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
              <div className="col-12 col-lg-4">
                <div className="main-sidebar sticky-style">
                  {/* Search */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search_widget">
                      <SearchWidget />
                    </div>
                  </div>

                  {/* ======================= */}
                  {/*      LATEST POSTS       */}
                  {/* ======================= */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Latest Post</h3>
                    </div>

                    <div className="popular-posts">
                      {latest.map((item) => (
                        <div key={item.id} className="single-post-item flex flex-row">
                          <Image
                            src={item.image_url}
                            width={900}
                            height={400}
                            alt={item.title}
                            className="w-[80px] h-[80px] object-scale-down rounded-lg"
                          />
                          <div className="post-content ml-2">
                            <h5>
                              <Link href={`/news/${item.slug}`}>
                                {item.title}
                              </Link>
                            </h5>
                            <div className="post-date">
                              <i className="far fa-calendar-alt"></i>
                              {formatDate(item.created_at)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other widgets (unchanged) */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link href="/news">
                            PPDB <span>23</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news">
                            Berita <span>24</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news">
                            Prestasi <span>11</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      <Link href="/news">PPDB</Link>
                      <Link href="/news-details">Berita</Link>
                      <Link href="/news-details">Prestasi</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
