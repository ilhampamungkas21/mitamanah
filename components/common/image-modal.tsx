"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

// ==========================
// TYPES
// ==========================
export type ImageViewerItem = {
  src: string;
  alt: string;
};

type ImageViewerModalProps = {
  image: ImageViewerItem | null;
  onClose: () => void;
};

// ==========================
// COMPONENT
// ==========================
export default function ImageViewerModal({
  image,
  onClose,
}: ImageViewerModalProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const dragging = useRef<boolean>(false);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastDist = useRef<number>(0);

  if (!image) return null;

  // ========================
  // Scroll Zoom
  // ========================
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const amount = zoom + e.deltaY * -0.001;
    setZoom(Math.min(Math.max(amount, 1), 4));
  };

  // ========================
  // Drag
  // ========================
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  // ========================
  // Pinch Zoom (2 jari)
  // ========================
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );

      if (lastDist.current) {
        const delta = dist - lastDist.current;
        setZoom((z) => Math.min(Math.max(z + delta * 0.005, 1), 4));
      }

      lastDist.current = dist;
    }
  };

  const handleTouchEnd = () => {
    lastDist.current = 0;
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-999999 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={1200}
          className="select-none"
          style={{
            transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
              offset.y / zoom
            }px)`,
            transition: dragging.current ? "none" : "transform 0.1s ease-out",
            cursor: zoom > 1 ? "grab" : "zoom-in",
          }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl"
        >
          ×
        </button>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md text-white rounded-full px-4 py-2 flex gap-3">
          <button onClick={() => setZoom((z) => Math.max(z - 0.5, 1))}>
            -
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
