"use client";

import { useEffect, useRef } from "react";

export default function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number;

    function resize() {
      if (!canvas) return;
      canvas.width = w = canvas.offsetWidth;
      canvas.height = h = canvas.offsetHeight;
    }

    function drawGrain() {
      const density = 0.9;
      const imgData = ctx.createImageData(w, h);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const rnd = Math.random();
        const val = rnd > 1 - 0.015 ? 255 * Math.random() * density : 0;
        imgData.data[i] = val;
        imgData.data[i + 1] = val;
        imgData.data[i + 2] = val;
        imgData.data[i + 3] = val ? 16 : 0;
      }
      ctx.putImageData(imgData, 0, 0);
    }

    let grainTick = 0;
    function loop() {
      grainTick++;
      if (grainTick % 5 === 0) drawGrain();
      requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    resize();
    drawGrain();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full opacity-[.10] mix-blend-overlay"
    />
  );
}
