import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 items-start"
        >
          {/* Removed portrait image: focus the section on copy, stats, and tools */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Dr. Alvaro Cintas</h2>
            <p className="mt-3 text-white/70">
              Content creator, full‑stack developer, and tech educator known for innovative digital storytelling. My work blends engineering, design, and pedagogy to make technology cinematic and accessible.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="Audience Reached" value="500k+" />
              <Stat label="Products Shipped" value="50+" />
              <Stat label="Workshops & Talks" value="100+" />
              <Stat label="Years in Tech" value="10+" />
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold">Tools I Use</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind', 'Framer Motion'].map((t) => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-black/30 px-3 py-1 text-white/80">{t}</span>
                ))}
              </div>
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
