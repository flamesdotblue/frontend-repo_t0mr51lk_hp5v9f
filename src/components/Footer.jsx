import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Dr. Alvaro Cintas. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://twitter.com/alvarocintas" target="_blank" rel="noreferrer" className="hover:text-white/90">Twitter</a>
          <a href="https://www.youtube.com/@alvarocintas" target="_blank" rel="noreferrer" className="hover:text-white/90">YouTube</a>
          <a href="https://www.linkedin.com/in/alvarocintas/" target="_blank" rel="noreferrer" className="hover:text-white/90">LinkedIn</a>
          <a href="https://github.com/alvarocintas" target="_blank" rel="noreferrer" className="hover:text-white/90">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
