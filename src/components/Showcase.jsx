import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Camera, Rocket, BookOpen, Youtube, Mail } from 'lucide-react';

const workProjects = [
  {
    title: 'Narrative Dev: Interactive Docs Engine',
    description: 'A Next.js + MDX system that blends code, story, and motion for immersive docs.',
    icon: Code,
    tags: ['Next.js', 'MDX', 'Framer Motion'],
    url: '#'
  },
  {
    title: 'Realtime Storyboard Studio',
    description: 'Web app for planning video + product narratives with AI-assisted beats.',
    icon: Rocket,
    tags: ['WebSockets', 'OpenAI', 'Design'],
    url: '#'
  },
  {
    title: 'Creator Ops Toolkit',
    description: 'Open-source utilities for content pipelines, captions, and analytics.',
    icon: BookOpen,
    tags: ['Node.js', 'CLI', 'Automation'],
    url: '#'
  },
  {
    title: 'Visual Dev Journal',
    description: 'Short-form series exploring shaders, 3D, and interaction systems.',
    icon: Camera,
    tags: ['Video', '3D', 'Motion'],
    url: '#'
  }
];

const contentItems = [
  {
    type: 'video',
    title: 'Designing with Systems: From Idea to Interface',
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    type: 'video',
    title: 'Full-Stack in Motion: Building with Next.js & Edge',
    embed: 'https://www.youtube.com/embed/oHg5SJYRHA0'
  },
  {
    type: 'article',
    title: 'Narrative Architecture for Product Teams',
    link: '#'
  },
  {
    type: 'article',
    title: 'Practical 3D on the Web: Spline, Three, and UX',
    link: '#'
  }
];

const testimonials = [
  {
    quote: 'Alvaro turns complex tech into narratives people actually remember. Our team still references his frameworks months later.',
    author: 'Maya Patel',
    role: 'Head of Product, Nova Labs'
  },
  {
    quote: 'A rare blend of educator and engineer. He built a prototype and taught our team how to tell its story.',
    author: 'Ethan Ross',
    role: 'Founder, Signal Studio'
  },
  {
    quote: 'His workshops are cinematic and practical. Our content quality and ship velocity both improved.',
    author: 'Jia Chen',
    role: 'Content Lead, Orbit Academy'
  }
];

export default function Showcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="work" className="relative bg-[#050814] py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work, Content, and Impact</h2>
          <a
            href="#contact"
            className="hidden sm:inline-flex text-sm text-sky-300 hover:text-sky-200"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let’s collaborate →
          </a>
        </header>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workProjects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-sky-400/30"
              aria-label={p.title}
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
                  <span key={t} className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-sky-500/20 blur-2xl transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white">Recent Content</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                {item.type === 'video' ? (
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={item.embed}
                      title={item.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block p-5 hover:bg-white/5 transition-colors"
                    aria-label={item.title}
                  >
                    <div className="flex items-center gap-3 text-sky-300"><Youtube className="h-5 w-5" /><span className="text-white/80">Article</span></div>
                    <div className="mt-2 text-white font-medium">{item.title}</div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white">Testimonials</h3>
          <div className="mt-6 relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-center"
                >
                  <p className="text-lg md:text-xl text-white/90">“{testimonials[index].quote}”</p>
                  <footer className="mt-4 text-sm text-white/60">
                    — {testimonials[index].author}, {testimonials[index].role}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
              <div className="mt-6 flex items-center justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${index === i ? 'bg-sky-400' : 'bg-white/20 hover:bg-white/40'}`}
                  />)
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="mt-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-white">Let’s Collaborate</h3>
            <p className="mt-1 text-white/70">Tell me about your project — product, course, or story. I’ll get back within 48 hours.</p>
            <form
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! Your message has been captured locally in this demo.');
              }}
            >
              <div>
                <label htmlFor="name" className="text-sm text-white/70">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/70">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="you@company.com" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm text-white/70">Project details</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500/40" placeholder="What are we building together?" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-white/50 flex items-center gap-2"><Mail className="h-4 w-4" />or email directly: hello@alvarocintas.dev</div>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-90 transition-opacity">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
