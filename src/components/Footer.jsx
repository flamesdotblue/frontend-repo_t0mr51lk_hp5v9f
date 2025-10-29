import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something intelligent.</h3>
            <p className="mt-2 text-white/70 max-w-xl">Open to collaborations, research, and select creative technology projects.</p>
          </div>

          <a
            href="mailto:hello@alvarocintas.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Email Dr. Alvaro Cintas"
          >
            <Mail size={18} /> Email Me
          </a>
        </div>

        <div className="mt-8 h-px w-full bg-white/10" aria-hidden="true" />

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Dr. Alvaro Cintas. All rights reserved.</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
