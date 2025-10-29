import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import { Twitter, Youtube, Linkedin, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500 selection:text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
      </main>
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://twitter.com/alvarocintas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@alvarocintas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/alvarocintas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/alvarocintas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
            <div className="text-center text-sm text-white/50">
              © {new Date().getFullYear()} Dr. Alvaro Cintas — Crafting stories in code and content.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
