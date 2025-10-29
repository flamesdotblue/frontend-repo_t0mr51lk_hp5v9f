import { motion } from 'framer-motion';
import { Twitter, Youtube, Linkedin, Github } from 'lucide-react';
import SplineScene from './SplineScene';

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-black to-[#020617]">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side: Text content restored */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              Cinematic Developer • Educator • Creator
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Dr. Alvaro Cintas
            </h1>
            <p className="max-w-xl text-white/70">
              I design and build premium, story‑driven web experiences—blending code, motion, and pedagogy. From interactive docs to 3D product launches, my work makes technology feel cinematic and clear.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, 'work')}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-90 transition-opacity"
                aria-label="View my work"
              >
                View Work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
                aria-label="Contact Dr. Alvaro Cintas"
              >
                Contact
              </a>
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
              <span>10+ years in tech</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>500k+ audience reached</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Workshops • Products • Stories</span>
            </div>

            {/* Social media handles */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xs text-white/60">Follow</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://twitter.com/alvarocintas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@alvarocintas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alvarocintas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/alvarocintas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side: Interactive 3D animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[50vh] sm:h-[60vh] lg:h-[80vh]"
          >
            <SplineScene
              scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft overlay that does not block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
