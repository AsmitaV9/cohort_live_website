import { Video, ListChecks, BarChart3, Settings2, DoorOpen, HelpCircle, Zap, ClipboardCheck, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Product() {
  return (
    <section id="product" className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-36">
      <div className="absolute inset-0 grid-bg-dark" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading — left-aligned, not centered */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Our Product
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              One platform. Two experiences.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-400">
              Trainers and students, connected in a single real-time environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric layout: Trainer (wide) + Student (narrow) */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Trainer — wide, with mockup fragment */}
          <ScrollReveal className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm lg:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-400">
                For Trainers
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">Conduct. Launch. Monitor.</h3>

              {/* Mockup fragment — live response bars */}
              <div className="mt-7 rounded-2xl border border-white/10 bg-ink-900/50 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wider text-brand-400">Live Responses · Q3</span>
                  <span className="text-ink-500">38/42 answered</span>
                </div>
                <div className="mt-3 space-y-2.5">
                  {[
                    { label: 'O(n)', pct: 18, count: 7 },
                    { label: 'O(log n)', pct: 67, count: 26, correct: true },
                    { label: 'O(n²)', pct: 8, count: 3 },
                    { label: 'O(1)', pct: 7, count: 2 },
                  ].map((opt) => (
                    <div key={opt.label}>
                      <div className="flex items-center justify-between text-xs">
                        <span className={opt.correct ? 'font-bold text-success-400' : 'text-ink-400'}>{opt.label}</span>
                        <span className="text-ink-500">{opt.count} · {opt.pct}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className={`h-full rounded-full ${opt.correct ? 'bg-success-500' : 'bg-brand-500/60'}`}
                          style={{ width: `${opt.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature list — compact, below mockup */}
              <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {TRAINER_FEATURES.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 ring-1 ring-brand-400/20">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-ink-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Student — narrow, clean */}
          <ScrollReveal delay="reveal-delay-1" className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm lg:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-400">
                For Students
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">Join. Answer. Learn.</h3>

              {/* Mockup fragment — student answer card */}
              <div className="mt-7 rounded-2xl border border-white/10 bg-ink-900/50 p-4">
                <p className="text-sm font-semibold text-white">What is the time complexity of binary search?</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
                    <span className="text-ink-300">O(n)</span>
                    <span className="text-ink-500">Select</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-success-500/40 bg-success-500/10 px-3 py-2 text-xs">
                    <span className="font-bold text-success-400">O(log n)</span>
                    <span className="font-semibold text-success-400">Correct</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
                    <span className="text-ink-300">O(n²)</span>
                    <span className="text-ink-500">Select</span>
                  </div>
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {STUDENT_FEATURES.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-accent-400/20">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-ink-500">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay="reveal-delay-2">
          <p className="mt-10 text-center text-sm text-ink-600">
            Product presentation — live streaming and the full platform integrate later.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

const TRAINER_FEATURES = [
  { icon: Video, title: 'Live Sessions', description: 'Start and broadcast in one click.' },
  { icon: ListChecks, title: 'Real-Time MCQs', description: 'Push questions to every student.' },
  { icon: BarChart3, title: 'Live Monitoring', description: 'Watch responses arrive in real time.' },
  { icon: Settings2, title: 'Participation Control', description: 'Manage who speaks, shares, or views.' },
];

const STUDENT_FEATURES = [
  { icon: DoorOpen, title: 'Join Sessions', description: 'Enter with a single click.' },
  { icon: HelpCircle, title: 'Answer MCQs', description: 'Respond the moment questions launch.' },
  { icon: Zap, title: 'Instant Feedback', description: 'Know if you were right immediately.' },
  { icon: ClipboardCheck, title: 'Track Progress', description: 'Your accuracy across every session.' },
];
