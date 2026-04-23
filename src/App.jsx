import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-[var(--border)] max-w-[1400px] mx-auto" />
        <About />
        <div className="h-px bg-[var(--border)] max-w-[1400px] mx-auto" />
        <Projects />
        <div className="h-px bg-[var(--border)] max-w-[1400px] mx-auto" />
        <Contact />
      </main>
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Agung Jayasukma. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)] font-mono">
            Built with React + Vite + Tailwind
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
