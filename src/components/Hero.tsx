"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // We make the container 300vh tall so there is plenty of scroll distance to play the sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index (1 to 47)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 47]);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= 47; i++) {
      const img = new window.Image();
      // Using .gif since the list_dir showed ffout001.gif to ffout047.gif
      img.src = `/hero/ffout${i.toString().padStart(3, '0')}.gif`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Function to draw a specific frame to the canvas
  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    // Ensure index is within bounds (0 to 46 for array access)
    const safeIndex = Math.min(46, Math.max(0, Math.floor(index) - 1));
    const img = images[safeIndex];
    
    if (img && img.complete) {
      const canvas = canvasRef.current;
      const { width, height } = canvas;
      
      // Calculate 'object-cover' equivalent for canvas
      const scale = Math.max(width / img.width, height / img.height);
      const x = (width / 2) - (img.width / 2) * scale;
      const y = (height / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.6; // Maintain the dark opacity
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(latest);
  });

  // Handle window resize and initial draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameIndex.get());
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Draw initially once size is set

    // Also try to draw when first image loads, just in case
    if (images.length > 0) {
      images[0].onload = () => drawFrame(frameIndex.get());
    }

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  // Fade out text as we scroll through the sequence
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-black">
      {/* Sticky container holds the canvas and text in viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Canvas for the image sequence */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text overlay */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-sans text-brand-gold"
          >
            Temukan Esensi Kemewahan (اكتشف الجوهر)
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8"
          >
            Safir &amp; Elnabil
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="#collection"
              className="inline-block border border-brand-gold text-brand-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-black transition-colors duration-300"
            >
              Jelajahi Koleksi
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
