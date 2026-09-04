import ScrollReveal from '@/components/ScrollReveal';
import { HOW_IT_WORKS } from '@/data/content';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-ink-50/40 py-24 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Left-aligned heading for variety */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              How It Works
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
              From login to results.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Seven steps. No delay between teaching and feedback.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop — numbered horizontal flow with thin connector */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 h-px bg-ink-200" />
            <div className="relative grid grid-cols-7 gap-2">
              {HOW_IT_WORKS.map((step, i) => (
                <ScrollReveal key={step.step} delay={`reveal-delay-${Math.min(i + 1, 5)}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-ink-200 bg-white shadow-sm transition hover:border-brand-300 hover:shadow-md">
                      <step.icon className="h-5 w-5 text-brand-500" />
                    </div>
                    <span className="mt-3 text-xs font-bold text-ink-300">{step.step}</span>
                    <p className="mt-1 text-sm font-semibold leading-snug text-ink-700">{step.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet — clean vertical list, no heavy borders */}
        <div className="mt-12 lg:hidden">
          {HOW_IT_WORKS.map((step, i) => (
            <ScrollReveal key={step.step} delay={`reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="flex items-center gap-4 border-b border-ink-100 py-4">
                <span className="text-2xl font-extrabold tabular-nums text-ink-200">{step.step}</span>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-ink-200/60">
                  <step.icon className="h-5 w-5 text-brand-500" />
                </div>
                <p className="text-base font-semibold text-ink-700">{step.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
