import { useCallback } from 'react';

export default function Navbar() {
  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="font-semibold tracking-tight text-white text-lg">
          <span className="text-sky-400">Alvaro</span>.Cintas
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="text-white/70 hover:text-white transition-colors">Work</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-white/70 hover:text-white transition-colors">Contact</a>
          <a href="mailto:hello@alvarocintas.dev" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 via-sky-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-90 transition-opacity">Get in touch</a>
        </div>
      </nav>
    </header>
  );
}
