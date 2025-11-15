"use client";
import React, { useState } from "react";

export default function SearchWidget() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tambahkan logika search di sini
    console.log("Search:", keyword);
  };

  return (
    <div className="search_widget">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Keywords here...."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">
          <i className="fal fa-search"></i>
        </button>
      </form>
    </div>
  );
}
