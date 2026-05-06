"use client";

import { useEffect, useRef } from "react";

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number, particles: Particle[] = [];
    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      r: number = 0;
      dx: number = 0;
      dy: number = 0;
      life: number = 0;
      maxLife: number = 0;
      color: string = "";

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.r = Math.random() * 1.5 + 0.3;
        this.dx = (Math.random() - 0.5) * 0.2;
        this.dy = (Math.random() - 0.5) * 0.2;
        this.life = Math.random();
        this.maxLife = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.5 ? "108,99,255" : "0,212,255";
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
        this.life += 0.002;
        if (
          this.life > this.maxLife ||
          this.x < 0 ||
          this.x > w ||
          this.y < 0 ||
          this.y > h
        ) {
          this.reset();
        }
      }

      draw() {
        const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.4;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${this.color},${alpha})`;
        ctx!.fill();
      }
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    const loop = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, w, h);

        particles.forEach((p) => {
          p.update();
          p.draw();
        });
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 will-change-transform"
    />
  );
}
