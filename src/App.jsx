import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.title = 'Dr. Alvaro Cintas — Robotics & AI';
  }, []);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-white/10 selection:text-white">
      <Navbar onJumpAbout={() => scrollTo(aboutRef)} onJumpContact={() => scrollTo(contactRef)} />

      <main>
        <Hero onViewWork={() => scrollTo(aboutRef)} onContact={() => scrollTo(contactRef)} />

        <section id="about" ref={aboutRef} aria-labelledby="about-heading" className="scroll-mt-24">
          <About />
        </section>
      </main>

      <footer id="contact" ref={contactRef} className="scroll-mt-24">
        <Footer />
      </footer>
    </div>
  );
}
