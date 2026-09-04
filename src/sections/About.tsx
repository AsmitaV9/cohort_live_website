import { Target, Eye, Heart, Users } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Who We Are — editorial split, no filler cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              About Us
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Students building for the future of learning.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay="reveal-delay-1" className="lg:col-span-7 lg:pt-2">
            <p className="text-xl leading-relaxed text-ink-500">
              We're a team of Computer Engineering students who saw a gap:
              watching a lecture alone isn't learning together. So we're building
              a platform that brings teaching, participation, and assessment
              into one real-time experience.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-400">
              What started as an academic project is becoming a product —
              one designed to make every student an active participant.
            </p>
          </ScrollReveal>
        </div>

        {/* Mission & Vision — horizontal bar, not matching cards */}
        <ScrollReveal delay="reveal-delay-2">
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2">
            <div className="border-t-2 border-ink-900 pt-6 lg:pr-12">
              <div className="flex items-center gap-2.5">
                <Target className="h-4 w-4 text-brand-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">Mission</span>
              </div>
              <p className="mt-4 text-2xl font-bold leading-snug text-ink-900">
                Make digital learning more interactive by connecting teaching,
                participation and assessment in real time.
              </p>
            </div>
            <div className="mt-10 border-t-2 border-ink-200 pt-6 lg:mt-0 lg:pl-12">
              <div className="flex items-center gap-2.5">
                <Eye className="h-4 w-4 text-accent-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">Vision</span>
              </div>
              <p className="mt-4 text-2xl font-bold leading-snug text-ink-700">
                A scalable learning environment where every student can
                actively participate, respond and learn during live instruction.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values — inline pills, not cards */}
        <ScrollReveal delay="reveal-delay-3">
          <div className="mt-16 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-ink-400">What we value:</span>
            {VALUES.map((v) => (
              <span
                key={v.title}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-white px-4 py-2 text-sm font-medium text-ink-700"
              >
                <v.icon className="h-4 w-4 text-brand-500" />
                {v.title}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const VALUES = [
  { icon: Users, title: 'Collaboration' },
  { icon: Target, title: 'Engagement' },
  { icon: Heart, title: 'Accessibility' },
];
