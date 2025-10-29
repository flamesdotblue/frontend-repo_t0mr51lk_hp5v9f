import { motion } from 'framer-motion';
import { ArrowRight, Mail, Play } from 'lucide-react';
import SplineScene from './SplineScene';

export default function Hero({ onViewWork, onContact }) {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Cinematic intro and CTAs */}
        <div className="relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Building the future of robotics with precision and soul.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            I’m Dr. Alvaro Cintas — engineer and researcher crafting intelligent systems, human-robot interaction, and cinematic prototypes that feel alive.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <button
              onClick={onViewWork}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="View work"
            >
              <Play size={18} /> View Work
            </button>

            <button
              onClick={onContact}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label="Contact"
            >
              <Mail size={18} /> Contact
            </button>
          </motion.div>

          {/* Accent line */}
          <motion.div
            className="mt-10 h-px w-40 bg-gradient-to-r from-white/60 via-white/20 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          />

          <motion.p
            className="mt-4 text-sm text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Smooth scrolling enabled. Robot remains fully interactive.
          </motion.p>
        </div>

        {/* Right: 3D Scene */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10">
          <SplineScene />

          {/* Decorative gradient top-left */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
      </div>

      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white/5 to-transparent" aria-hidden="true" />
    </section>
  );
}
