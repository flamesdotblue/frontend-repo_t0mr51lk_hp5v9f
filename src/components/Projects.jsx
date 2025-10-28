import { motion } from 'framer-motion';
import { Code, Camera, BookOpen, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'AI Storyboard Studio',
    description: 'Interactive tool combining prompts, code, and motion to plan narrative apps.',
    icon: Rocket,
    tags: ['AI', 'Design', 'Product'],
    link: '#'
  },
  {
    title: 'Full‑Stack Mastery Series',
    description: 'A hands-on curriculum that turns complex concepts into playful projects.',
    icon: BookOpen,
    tags: ['Education', 'Web', 'Series'],
    link: '#'
  },
  {
    title: 'Creator Toolkit',
    description: 'Open-source components for content-driven, high‑impact dev workflows.',
    icon: Code,
    tags: ['Open Source', 'DX', 'Toolkit'],
    link: '#'
  },
  {
    title: 'Visual Dev Journal',
    description: 'Short-form video series exploring 3D, shaders, and interaction patterns.',
    icon: Camera,
    tags: ['Video', '3D', 'Motion'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#050814]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-sky-300 hover:text-sky-200" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Let’s collaborate →</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-sky-400/30"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-sky-500/15 p-3 text-sky-300">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-sky-200 transition-colors">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-sky-500/20 blur-2xl transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
