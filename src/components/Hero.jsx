import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden px-6 md:px-12 lg:px-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] gradient-orb opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] gradient-orb opacity-20 pointer-events-none" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="eyebrow mb-6">Software Engineer & IAM Specialist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-[var(--text-primary)] mt-6 mb-8"
          >
            Agung
            <br />
            Jayasukma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[50ch] mb-10"
          >
            Building secure identity infrastructure and full-stack systems.
            I design access, automate trust, and ship production-grade software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group magnetic-btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg)] text-sm font-medium hover:bg-[var(--accent)] transition-colors duration-500"
            >
              <span>View work</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(0,0,0,0.08)] group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                &#8599;
              </span>
            </a>
            <a
              href="#contact"
              className="link-hover text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 py-3"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border border-[var(--border)] opacity-30" />
            <div className="absolute inset-4 rounded-full border border-[var(--border)] opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-medium tracking-tighter text-[var(--text-primary)] opacity-10">
                  AJ
                </div>
              </div>
            </div>
            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 rounded-full bg-[var(--accent)] opacity-60" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-2 h-2 rounded-full bg-[var(--text-secondary)] opacity-40" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
