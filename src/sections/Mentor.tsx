import ScrollReveal from '@/components/ScrollReveal';
import { MENTOR } from '@/data/content';

export default function Mentor() {
  return (
    <section id="mentor" className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-36">
      <div className="absolute inset-0 grid-bg-dark" />
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-brand-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        {/* Heading — centered, minimal */}
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Guided By
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Our Mentor
            </h2>
          </div>
        </ScrollReveal>

        {/* Card — photo left, info right, on dark bg */}
        <ScrollReveal delay="reveal-delay-1">
          <div className="mt-14 grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm md:grid-cols-5">
            <div className="relative md:col-span-2">
              <div className="aspect-square w-full overflow-hidden bg-ink-800 md:aspect-auto md:h-full">
                <img src={MENTOR.photo} alt={MENTOR.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:col-span-3 lg:p-12">
              <h3 className="text-2xl font-bold text-white">{MENTOR.name}</h3>
              <p className="mt-2 text-base font-medium text-brand-400">{MENTOR.designation}</p>
              <p className="mt-1 text-sm text-ink-500">{MENTOR.department}</p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-6 leading-relaxed text-ink-400">{MENTOR.description}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
