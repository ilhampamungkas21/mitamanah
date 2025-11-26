"use client";
import React from "react";

const ScrollToTop = () => {
  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
        {/* WhatsApp Button */}

        <a
          href="https://wa.me/62895346380890?text=Halo%2C%20saya%20ingin%20bertanya."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-15 h-15 rounded-full flex items-center justify-center shadow-lg transition"
        >
          <i className="fab fa-whatsapp text-4xl"></i>
        </a>
      </div>
    </>
  );
};

export default ScrollToTop;
