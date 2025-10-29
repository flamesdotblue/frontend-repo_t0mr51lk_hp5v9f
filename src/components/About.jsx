import { motion } from 'framer-motion';
import { Cpu, GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: GraduationCap, label: 'PhD in Robotics', value: 'Human–Robot Interaction' },
    { icon: Cpu, label: 'Research & Engineering', value: 'Perception • Control • ML' },
    { icon: Sparkles, label: 'Cinematic Prototyping', value: 'Robots that feel alive' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        id="about-heading"
        className="text-2xl sm:text-3xl font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>

      <motion.p
        className="mt-4 text-white/70 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        I design and build intelligent robotic systems that blend technical rigor with expressive interfaces. From lab to field, my work spans perception, control, and human-robot interaction, all with a cinematic attention to detail.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="rounded-xl bg-white/5 border border-white/10 p-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <div className="flex items-center gap-3">
              <s.icon className="text-white/80" size={20} />
              <div className="text-sm text-white/60">{s.label}</div>
            </div>
            <div className="mt-2 text-lg font-medium">{s.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
