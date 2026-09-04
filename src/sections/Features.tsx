import { MonitorPlay, ListChecks, Zap, BarChart3, ShieldCheck, Users, Lock, Radio } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

type Feature = { icon: LucideIcon; title: string; description: string };

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Left-aligned heading for variety */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Features
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
              Everything in one live session.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Teaching, participation, and assessment — connected, in real time.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid — varying sizes, not uniform */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* Large feature — Live Classroom */}
          <ScrollReveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <BentoCard
              feature={FEATURES_LARGE[0]}
              className="h-full min-h-[280px]"
              large
            />
          </ScrollReveal>

          {/* Medium features */}
          <ScrollReveal delay="reveal-delay-1">
            <BentoCard feature={FEATURES[1]} className="h-full" />
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-2">
            <BentoCard feature={FEATURES[2]} className="h-full" />
          </ScrollReveal>

          {/* Bottom row */}
          <ScrollReveal delay="reveal-delay-1">
            <BentoCard feature={FEATURES[3]} className="h-full" />
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-2">
            <BentoCard feature={FEATURES[4]} className="h-full" />
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-3">
            <BentoCard feature={FEATURES[5]} className="h-full" />
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-1">
            <BentoCard feature={FEATURES[6]} className="h-full" />
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-2">
            <BentoCard feature={FEATURES[7]} className="h-full" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ feature, className = '', large = false }: { feature: Feature; className?: string; large?: boolean }) {
  return (
    <div className={`group flex flex-col rounded-2xl border border-ink-200/60 bg-white p-6 transition hover:border-ink-300 hover:shadow-lg hover:shadow-ink-900/5 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
        <feature.icon className="h-5 w-5" />
      </div>
      <h3 className={`mt-5 font-bold text-ink-900 ${large ? 'text-xl' : 'text-base'}`}>{feature.title}</h3>
      <p className={`mt-1.5 leading-relaxed text-ink-500 ${large ? 'text-base' : 'text-sm'}`}>{feature.description}</p>

      {large && (
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-2 rounded-xl bg-ink-50/80 px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-brand-400">
              <Radio className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-200">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
              </div>
            </div>
            <span className="text-xs font-medium text-ink-400">Live</span>
          </div>
        </div>
      )}
    </div>
  );
}

const FEATURES: Feature[] = [
  { icon: MonitorPlay, title: 'Live Classroom', description: 'Teaching and participation, together in one connected space.' },
  { icon: ListChecks, title: 'Real-Time MCQs', description: 'Questions answered live, no delay.' },
  { icon: Zap, title: 'Instant Feedback', description: 'Results delivered the moment a question closes.' },
  { icon: BarChart3, title: 'Performance', description: 'Individual and class-wide tracking.' },
  { icon: BarChart3, title: 'Trainer Dashboard', description: 'Manage sessions, questions, participation.' },
  { icon: ShieldCheck, title: 'Permissions', description: 'Control who speaks, shares, or views.' },
  { icon: Users, title: 'Scalable', description: 'One classroom or an entire institution.' },
  { icon: Lock, title: 'Role-Based Access', description: 'Secure, separated student and trainer roles.' },
];

const FEATURES_LARGE: Feature[] = [
  { icon: MonitorPlay, title: 'Live Classroom', description: 'A connected classroom where teaching and participation happen together. Trainers broadcast, students respond, and everything flows through one real-time session.' },
];
