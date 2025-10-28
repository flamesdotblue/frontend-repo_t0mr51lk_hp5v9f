import { motion } from 'framer-motion';
import SplineScene from './SplineScene';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-black to-[#020617]">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side intentionally empty (no text as requested) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-[30vh] sm:h-[40vh] lg:h-[70vh]"
            aria-hidden="true"
          />

          {/* Right side: Interactive 3D robot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[50vh] sm:h-[60vh] lg:h-[80vh]"
          >
            <SplineScene
              scene="https://prod.spline.design/lUfiWve0vh3E-uKW/scene.splinecode"
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
