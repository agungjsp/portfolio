import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const skills = [
  { label: 'Identity & Access Management', level: 'Expert' },
  { label: 'OAuth 2.0 / OIDC / SAML', level: 'Expert' },
  { label: 'React / TypeScript / Node.js', level: 'Advanced' },
  { label: 'Python / Go / Rust', level: 'Advanced' },
  { label: 'Kubernetes / Docker', level: 'Advanced' },
  { label: 'AWS / GCP / Azure', level: 'Intermediate' },
  { label: 'Zero Trust Architecture', level: 'Expert' },
  { label: 'System Design', level: 'Advanced' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div>
            <ScrollReveal>
              <span className="eyebrow mb-6">About</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.05] text-[var(--text-primary)] mt-6 mb-8">
                Engineering trust at scale
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[55ch] mb-6">
                I specialize in identity infrastructure — the systems that decide who gets access to what,
                when, and why. From SSO pipelines to fine-grained authorization, I build the guardrails
                that keep modern software secure without sacrificing velocity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[55ch]">
                On the engineering side, I ship full-stack applications with an obsession for clean
                architecture, performance, and developer experience. Security is not a feature I bolt on —
                it is the foundation I build from.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Bento Skills Grid */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-6">
                Core Competencies
              </h3>
            </ScrollReveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  variants={itemVariants}
                  className="bezel-outer group cursor-default"
                >
                  <div className="bezel-inner p-5 flex flex-col gap-2 hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-500">
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {skill.label}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
