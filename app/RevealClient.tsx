// app/reveal/[name]/RevealClient.tsx
"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function RevealClient({
  name,
  receiver,
}: {
  name: string;
  receiver: string;
}) {
  // 🎉 Confetti
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  // ❄️ Snowfall
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      pointer-events:none;z-index:9999;
    `;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    const flakes = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 3 + 2,
      d: Math.random() + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "white";
      ctx.beginPath();
      flakes.forEach((f) => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      });
      ctx.fill();
      flakes.forEach((f) => {
        f.y += Math.pow(f.d, 2) + 1;
        if (f.y > window.innerHeight) {
          f.y = 0;
          f.x = Math.random() * window.innerWidth;
        }
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => canvas.remove();
  }, []);

  return (
    <div
  className="h-screen flex flex-col justify-center items-center 
             bg-[url('/christmas.png')] bg-cover bg-center 
             text-center overflow-hidden relative"
>
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        🎁 Hey {name}!
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-white"
      >
        Your Chrisma Chris partner is:
      </motion.p>

      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        className="text-3xl md:text-4xl font-bold text-green-500 mt-3"
      >
        {receiver}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="text-white mt-6 text-lg"
      >
        Merry Christmas! 🎄✨
      </motion.p>
    </div>
  );
}
