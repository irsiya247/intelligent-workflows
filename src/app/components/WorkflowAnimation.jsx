"use client";

import { useEffect, useRef } from "react";

export default function WorkflowAnimation() {
  const dotRef = useRef(null);

  useEffect(() => {
    const start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;

      // compact loop (left → right → reset)
      const x = 20 + (t * 80) % 240;

      if (dotRef.current) {
        dotRef.current.style.transform = `translateX(${x}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full h-16 flex items-center justify-center relative">
      
      {/* line */}
      <svg className="absolute w-full h-full">
        <line
          x1="20"
          y1="32"
          x2="280"
          y2="32"
          stroke="#22d3ee"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.6"
        />
      </svg>

      {/* nodes */}
      <div className="absolute left-[20px] w-2.5 h-2.5 rounded-full bg-cyan-400" />
      <div className="absolute left-[120px] w-2.5 h-2.5 rounded-full bg-cyan-400" />
      <div className="absolute left-[220px] w-2.5 h-2.5 rounded-full bg-cyan-400" />
      <div className="absolute left-[280px] w-2.5 h-2.5 rounded-full bg-cyan-400" />

      {/* moving packet */}
      <div
        ref={dotRef}
        className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
        style={{ left: 0, top: "50%", transform: "translateY(-50%)" }}
      />
    </div>
  );
}