"use client";

import { useEffect } from "react";

export default function ParallaxEffects() {
  useEffect(() => {
    const parallaxNodes = Array.from(
      document.querySelectorAll("svg, .bg-gold-grad")
    );

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window;
      const x = e.clientX / W - 0.5;
      const y = e.clientY / H - 0.5;

      parallaxNodes.forEach((el, i) => {
        const depth = ((i % 5) + 1) * 2;
        const element = el as HTMLElement;
        const isRotated =
          element.tagName === "svg" && element.classList.contains("rotate-12");
        element.style.transform = `translate(${x * depth}px, ${y * depth}px) ${
          isRotated ? "rotate(12deg)" : ""
        }`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
