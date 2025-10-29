import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

export default function Navbar({ onJumpAbout, onJumpContact }) {
  return (
    <header role="banner" className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left"
          aria-label="Go to top"
        >
          <div className="font-semibold tracking-tight text-white">Dr. Alvaro Cintas</div>
          <div className="text-xs text-white/60">Robotics • AI • Research</div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={onJumpAbout} className="text-sm text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1" aria-label="About section">
            About
          </button>
          <button onClick={onJumpContact} className="text-sm text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1" aria-label="Contact section">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3" aria-label="Social links">
          <a href="https://twitter.com/alvarocintas" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Twitter size={18} />
          </a>
          <a href="https://www.youtube.com/@alvarocintas" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Youtube size={18} />
          </a>
          <a href="https://www.linkedin.com/in/alvarocintas/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/alvarocintas" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Github size={18} />
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onJumpContact?.(); }} aria-label="Email" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
