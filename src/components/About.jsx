import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Hi, I’m Flames — I teach, code, and tell stories.</h2>
            <p className="mt-4 text-white/70">
              Blending engineering and narrative design, I create videos, workshops, and products that make technology approachable. From full-stack builds to interactive 3D, my work focuses on clarity, playfulness, and real-world impact.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat label="Subscribers Reached" value="250k+" />
              <Stat label="Projects Shipped" value="40+" />
              <Stat label="Workshops Hosted" value="60+" />
              <Stat label="Years Teaching" value="7" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold text-lg">What I do</h3>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />Deep-dive content on web, AI, and product development</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />End-to-end product prototyping and storytelling</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />Workshops for teams and communities</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />Creative coding with 3D, motion, and interactivity</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}
