"use client";

import React, { useEffect, useRef } from "react";

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Draw gradient function
    const drawGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#ff9a9e");
      gradient.addColorStop(0.5, "#fad0c4");
      gradient.addColorStop(1, "#fbc2eb");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      drawGradient();
      requestAnimationFrame(animate);
    };

    animate();

    // Resize the canvas when the window size changes
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Keeps canvas behind other content
        }}
      />

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
