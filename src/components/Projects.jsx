import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Meridian Auth',
    description: 'Enterprise-grade identity provider with OAuth 2.0, OIDC, and SAML support. Handles 2M+ daily auth flows with sub-50ms latency.',
    tags: ['Go', 'PostgreSQL', 'Redis', 'Kubernetes'],
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    title: 'CipherGate',
    description: 'Policy-as-code authorization engine for microservices. Enforces fine-grained access control across 400+ services.',
    tags: ['Rust', 'WASM', 'gRPC', 'etcd'],
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'VaultSync',
    description: 'Real-time secret rotation and credential distribution system with zero-downtime key rollover.',
    tags: ['Python', 'Vault', 'AWS Lambda', 'EventBridge'],
    span: 'col-span-1 row-span-1',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="eyebrow mb-6">Selected Work</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.05] text-[var(--text-primary)] mt-6 mb-16">
            Projects that ship
          </h2>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[minmax(200px,auto)]"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`${project.span} group`}
            >
              <div className="bezel-outer h-full">
                <div className="bezel-inner h-full p-8 md:p-10 flex flex-col justify-between hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-700">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-[50ch]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
