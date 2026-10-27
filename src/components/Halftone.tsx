"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  /** Distance between dot centres, in CSS pixels */
  spacing?: number;
};

// Redraws a transparent grayscale portrait as a field of dots: brighter pixels
// get bigger dots. The canvas fades in once drawn, then the dots follow the
// pointer slightly. The first draw is synchronous so the portrait never
// depends on animation frames running.
export default function Halftone({ src, className, spacing = 6 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = new Image();

    let samples: { x: number; y: number; r: number }[] = [];
    let frame = 0;
    let pointer = { x: -9999, y: -9999 };

    const sample = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fit the image to the canvas ("contain", anchored bottom)
      const scale = Math.min(rect.width / img.width, rect.height / img.height);
      const w = img.width * scale;
      const h = img.height * scale;
      const ox = (rect.width - w) / 2;
      const oy = rect.height - h;

      const cols = Math.floor(w / spacing);
      const rows = Math.floor(h / spacing);
      // Not laid out yet (or image not loaded); the ResizeObserver retries
      if (cols < 1 || rows < 1) return;
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      octx.drawImage(img, 0, 0, cols, rows);
      const data = octx.getImageData(0, 0, cols, rows).data;

      samples = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const alpha = data[i + 3] / 255;
          if (alpha < 0.1) continue;
          // Lift contrast so the face reads well on black
          const lum = Math.pow(data[i] / 255, 0.85) * alpha;
          const r = (spacing / 2) * Math.min(1, lum * 1.15);
          if (r < 0.35) continue;
          samples.push({ x: ox + x * spacing + spacing / 2, y: oy + y * spacing + spacing / 2, r });
        }
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#d9d9d4";
      for (const s of samples) {
        const dx = s.x - pointer.x;
        const dy = s.y - pointer.y;
        const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 120);
        const r = s.r * (1 + near * 0.6);
        if (r <= 0) continue;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const redraw = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      if (reduceMotion) return;
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      redraw();
    };
    const onLeave = () => {
      pointer = { x: -9999, y: -9999 };
      redraw();
    };

    // Resample whenever the canvas gets a (new) size, including its first
    // layout, which can land after the image has loaded
    const onResize = () => {
      if (!img.complete || !img.naturalWidth) return;
      sample();
      draw();
      canvas.style.opacity = "";
    };

    img.onload = onResize;
    img.src = src;

    const observer = new ResizeObserver(onResize);
    observer.observe(canvas);
    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", onMove);
    parent?.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      parent?.removeEventListener("pointermove", onMove);
      parent?.removeEventListener("pointerleave", onLeave);
    };
  }, [src, spacing]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity: 0, transition: "opacity 1.2s ease" }}
      aria-hidden
    />
  );
}
