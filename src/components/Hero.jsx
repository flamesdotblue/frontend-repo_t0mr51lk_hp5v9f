import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-black to-[#020617]">
      <div className="absolute inset-0">
        <div className="h-[70vh] md:h-[85vh] w-full">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#020617]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Dr. Alvaro Cintas • Content Creator • Full‑Stack Developer • Tech Educator
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Stories in Code and Content.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Cinematic, interactive, and practical. I prototype products, design learning experiences, and craft media that moves ideas forward.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#work"
              className="inline-flex justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
              onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Let’s Collaborate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
