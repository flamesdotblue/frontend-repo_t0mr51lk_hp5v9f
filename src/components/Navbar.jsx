import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">Dr. Alvaro Cintas</a>
        <div className="flex items-center gap-3">
          <a aria-label="Twitter" href="https://twitter.com/alvarocintas" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition"><Twitter size={18} /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/alvarocintas/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition"><Linkedin size={18} /></a>
          <a aria-label="GitHub" href="https://github.com/alvarocintas" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition"><Github size={18} /></a>
        </div>
      </nav>
    </header>
  );
}
