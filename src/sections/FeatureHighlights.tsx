import ScrollReveal from '@/components/ScrollReveal';
import { FEATURE_HIGHLIGHTS } from '@/data/content';

export default function FeatureHighlights() {
  return (
    <section className="relative py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {FEATURE_HIGHLIGHTS.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={`reveal-delay-${i + 1}`}>
              <div className="group flex h-full flex-col items-start rounded-2xl border border-ink-200/60 bg-white p-5 transition hover:border-ink-300 hover:shadow-lg hover:shadow-ink-900/5 lg:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-brand-400 transition group-hover:bg-brand-500 group-hover:text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
