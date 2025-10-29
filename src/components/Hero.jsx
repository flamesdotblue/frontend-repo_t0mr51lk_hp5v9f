import React from 'react';
import { motion } from 'framer-motion';
import SplineScene from './SplineScene.jsx';

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[88vh] md:min-h-[92vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-14">
        {/* Left content */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Cinematic Research & Intelligent Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-base sm:text-lg text-white/70 max-w-xl"
          >
            I’m Dr. Alvaro Cintas — building the bridge between robotics, vision, and human-centered AI. Explore publications, demos, and open-source tooling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll();
              }}
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
            >
              Learn more
            </a>
            <a
              href="https://github.com/alvarocintas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium bg-white/10 border border-white/10 hover:bg-white/15 transition"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right 3D */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[78vh] w-full">
          {/* Subtle gradient backdrop behind the Spline scene for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                'radial-gradient(120% 80% at 70% 50%, rgba(29,78,216,0.15) 0%, rgba(2,6,23,0.0) 45%, rgba(2,6,23,0.0) 100%)',
            }}
          />

          <SplineScene scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
