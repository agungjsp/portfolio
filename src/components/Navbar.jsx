import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-[rgba(10,10,10,0.7)] backdrop-blur-2xl border border-[rgba(255,255,255,0.08)]">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            AJ
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 rounded-full hover:bg-[rgba(255,255,255,0.04)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <span>Let's talk</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[rgba(0,0,0,0.1)] text-xs">
              &#8599;
            </span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              className="absolute w-5 h-px bg-[var(--text-primary)]"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            />
            <motion.span
              className="absolute w-5 h-px bg-[var(--text-primary)]"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-[rgba(5,5,5,0.95)] backdrop-blur-3xl flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="text-3xl font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
