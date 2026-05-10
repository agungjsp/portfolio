import ScrollReveal from './ScrollReveal';
import { ArrowUpRight, Envelope, GithubLogo, InstagramLogo } from '@phosphor-icons/react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <ScrollReveal>
              <span className="eyebrow mb-6">Contact</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.05] text-[var(--text-primary)] mt-6 mb-8">
                Let's build something solid
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[50ch]">
                Open to consulting, full-time roles, and ambitious side projects.
                If it involves identity, security, or systems that need to scale: I want to hear about it.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-4">
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:jsp.agung@gmail.com"
                className="group magnetic-btn focus-ring bezel-outer block rounded-[1.5rem]"
              >
                <div className="bezel-inner p-6 flex items-center justify-between hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-500">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                      <Envelope size={18} weight="light" />
                    </span>
                    <div>
                      <div className="text-sm text-[var(--text-muted)] mb-0.5">Email</div>
                      <div className="text-base font-medium text-[var(--text-primary)]">jsp.agung@gmail.com</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-px transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowUpRight size={20} weight="light" />
                  </span>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="https://github.com/agungjsp"
                target="_blank"
                rel="noopener noreferrer"
                className="group magnetic-btn focus-ring bezel-outer block rounded-[1.5rem]"
              >
                <div className="bezel-inner p-6 flex items-center justify-between hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-500">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                      <GithubLogo size={18} weight="light" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm text-[var(--text-muted)] mb-0.5">GitHub</div>
                      <div className="text-base font-medium text-[var(--text-primary)] truncate">github.com/agungjsp</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-px transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowUpRight size={20} weight="light" />
                  </span>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <a
                href="https://instagram.com/gungjayyy"
                target="_blank"
                rel="noopener noreferrer"
                className="group magnetic-btn focus-ring bezel-outer block rounded-[1.5rem]"
              >
                <div className="bezel-inner p-6 flex items-center justify-between hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-500">
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                      <InstagramLogo size={18} weight="light" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm text-[var(--text-muted)] mb-0.5">Instagram</div>
                      <div className="text-base font-medium text-[var(--text-primary)] truncate">@gungjayyy</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-px transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowUpRight size={20} weight="light" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
