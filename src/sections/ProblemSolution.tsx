import { ArrowRight, X, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProblemSolution() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Statement — editorial, not centered-heading */}
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                The Problem
              </span>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
                Online learning is passive.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-xl leading-relaxed text-ink-500">
                Students watch content. They don't participate. Assessment
                happens later — if at all. Teaching, questioning, and feedback
                live in separate worlds.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison — single unified table, not two cards */}
        <ScrollReveal delay="reveal-delay-1">
          <div className="mt-16 overflow-hidden rounded-3xl border border-ink-200/60">
            {/* Header row */}
            <div className="grid grid-cols-2 border-b border-ink-200/60 bg-ink-50/50">
              <div className="px-6 py-4 sm:px-10 sm:py-5">
                <p className="text-sm font-semibold text-ink-400">Traditional Online Learning</p>
              </div>
              <div className="border-l border-ink-200/60 bg-ink-900 px-6 py-4 sm:px-10 sm:py-5">
                <p className="text-sm font-semibold text-brand-400">Our Approach</p>
              </div>
            </div>
            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${i !== ROWS.length - 1 ? 'border-b border-ink-100' : ''}`}
              >
                <div className="flex items-center gap-3 px-6 py-5 sm:px-10 sm:py-6">
                  <X className="h-4 w-4 flex-shrink-0 text-ink-300" />
                  <span className="text-sm text-ink-500 sm:text-base">{row.traditional}</span>
                </div>
                <div className="flex items-center gap-3 border-l border-ink-200/60 bg-ink-50/30 px-6 py-5 sm:px-10 sm:py-6">
                  <Check className="h-4 w-4 flex-shrink-0 text-brand-500" />
                  <span className="text-sm font-medium text-ink-800 sm:text-base">{row.approach}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay="reveal-delay-2">
          <div className="mt-10 flex justify-center">
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const ROWS = [
  { traditional: 'Passive viewing of content', approach: 'Live participation in every session' },
  { traditional: 'Delayed or separate assessment', approach: 'Real-time MCQs while teaching' },
  { traditional: 'Limited interaction', approach: 'Instant feedback the moment a question closes' },
  { traditional: 'Learning and assessment as separate steps', approach: 'Integrated teaching, participation, and assessment' },
];
