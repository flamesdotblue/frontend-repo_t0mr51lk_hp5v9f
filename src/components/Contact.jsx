import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#020617]">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white">
          Let’s build your next chapter
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-white/70">
          Have a product, course, or story in mind? I work with teams and creators to ship memorable experiences.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:hello@creator.dev" className="inline-flex justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-90 transition-opacity">Email Me</a>
          <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Book a call</a>
        </motion.div>
        <div className="mt-10 text-xs text-white/50">Available for collaborations, workshops, and content partnerships.</div>
      </div>
    </section>
  );
}
