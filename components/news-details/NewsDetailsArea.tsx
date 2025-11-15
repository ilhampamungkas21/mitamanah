"use client";

import { Article } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsDetailsAreaProps {
  article: Article;
}

const NewsDetailsArea = ({ article }: NewsDetailsAreaProps) => {
  return (
    <>
      <section className="blog-wrapper news-wrapper section-padding pt-0">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      {/* TITLE */}
                      <h2 className="mt-0">{article.title}</h2>

                      {/* META */}
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user"></i>
                          {article.author ?? "Admin"}
                        </span>

                        {article.created_at && (
                          <span>
                            <i className="fal fa-calendar-alt"></i>
                            {new Date(article.created_at).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        )}
                      </div>

                      {/* EXCERPT */}
                      {article.excerpt && (
                        <p className="mt-4">{article.excerpt}</p>
                      )}

                      {/* IMAGE */}
                      {article.image_url && (
                        <Image
                          src={article.image_url}
                          width={900}
                          height={400}
                          alt={article.title}
                          className="mt-4 object-cover rounded-lg"
                        />
                      )}

                      {/* CONTENT (HTML) */}
                      <div
                        className="article-content mt-4"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    </div>
                  </div>

                  {/* TAG & SHARE (STATIC) */}
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Tags</h4>
                      <div className="tagcloud">
                        {article.seo_keywords!
                          .split(",")
                          .map((tag) => tag.trim())
                          .map((tag) => (
                            <Link key={tag} href={`/tags/${tag}`}>
                              {tag}
                            </Link>
                          ))}
                      </div>
                    </div>

                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Social Share</h4>
                      <div className="social-share">
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
                      </div>
                    </div>
                  </div>

                  {/* COMMENT SECTION (STATIC) */}
                  {/* ... tetap sama seperti kode lama ... */}

                  {/* COMMENT FORM (STATIC) */}
                  {/* ... tetap sama seperti kode lama ... */}
                </div>
              </div>

              {/* SIDEBAR (STATIC) */}
              {/* ... tetap sama seperti kode lama ... */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailsArea;