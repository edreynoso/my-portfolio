'use client';
import { useEffect } from 'react';

export default function Spotlight(){
    useEffect(() => {
    const spotlight = document.getElementById("spotlight");
    const moveSpotlight = (e: MouseEvent) => {
      if (spotlight) {
        spotlight.style.left = `${e.clientX - 100}px`;
        spotlight.style.top = `${e.clientY - 100}px`;
      }
    };
    window.addEventListener("mousemove", moveSpotlight);
    return () => window.removeEventListener("mousemove", moveSpotlight);
  }, []);

    return (
        <div
          id="spotlight"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "200px",
            height: "200px",
            pointerEvents: "none",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(72,255,181,0.35) 0%, rgba(72,255,181,0) 80%)",
            filter: "blur(32px)",
            zIndex: 100,
            transition: "left 0.1s, top 0.1s",
          }}
        />
    );
}