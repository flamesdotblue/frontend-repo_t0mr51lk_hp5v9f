import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Dr. Alvaro Cintas — Crafting stories in code and content.
        </div>
      </footer>
    </div>
  );
}

export default App;
