import { MonitorPlay, Settings2, BarChart3, Radio, Lock, CircleCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-36">
      <div className="absolute inset-0 grid-bg-dark" />
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Centered heading — dark section provides contrast break */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Technology
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Built on a modern stack.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              A scalable architecture designed for real-time communication.
              Specific tools will be announced as development progresses.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories — inline list, not empty cards */}
        <ScrollReveal delay="reveal-delay-1">
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {STACK.map((tech) => (
              <div
                key={tech.category}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-sm transition hover:border-brand-400/30 hover:bg-white/[0.06]"
              >
                <tech.icon className="h-4 w-4 text-brand-400" />
                <span className="text-sm font-medium text-white">{tech.category}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Architecture note — single elegant panel */}
        <ScrollReveal delay="reveal-delay-2">
          <div className="mt-10 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-ink-400">
              The platform separates concerns across six layers — from the
              frontend interface to real-time communication and cloud deployment.
              Each layer is chosen for performance, reliability, and scalability.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              Stack details coming soon
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const STACK: { icon: LucideIcon; category: string }[] = [
  { icon: MonitorPlay, category: 'Frontend' },
  { icon: Settings2, category: 'Backend' },
  { icon: BarChart3, category: 'Database' },
  { icon: Radio, category: 'Real-Time' },
  { icon: Lock, category: 'Authentication' },
  { icon: CircleCheck, category: 'Cloud / Deploy' },
];
