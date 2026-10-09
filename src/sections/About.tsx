import { Target, Eye, Heart, Users, Linkedin, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDERS, MENTOR } from '@/data/content';

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

        {/* Our Team — founders */}
        <div id="our-team" className="scroll-mt-24 pt-24 lg:pt-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                Our Team
              </span>
              <h3 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-4xl">
                Meet our founders.
              </h3>
            </ScrollReveal>
            <ScrollReveal delay="reveal-delay-1" className="lg:col-span-7 lg:pt-2">
              <p className="text-lg leading-relaxed text-ink-500">
                Computer Engineering students building a real-time learning platform.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid — photos larger, info overlay on hover */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {FOUNDERS.map((founder, i) => (
              <ScrollReveal key={i} delay={`reveal-delay-${(i % 5) + 1}`}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink-100">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Always-visible bottom gradient with name + role */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-bold text-white">{founder.name}</p>
                    <p className="text-xs font-medium text-brand-300">{founder.role}</p>
                    <p className="mt-0.5 text-[11px] text-white/60">{founder.year}</p>

                    {/* Skills + socials — reveal on hover */}
                    <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
                      <div className="flex flex-wrap gap-1">
                        {founder.skills.map((skill) => (
                          <span key={skill} className="rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2.5 flex gap-2">
                        <a href={founder.linkedin} className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-600" aria-label="LinkedIn">
                          <Linkedin className="h-3.5 w-3.5" />
                        </a>
                        {founder.github && (
                          <a href={founder.github} className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm transition hover:bg-white hover:text-ink-900" aria-label="GitHub">
                            <Github className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Our Mentor — dark card, same look as the former Mentor section */}
        <div className="pt-24 lg:pt-32">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Guided By
            </span>
            <h3 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-4xl">
              Our Mentor
            </h3>
          </ScrollReveal>

          <ScrollReveal delay="reveal-delay-1">
            <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink-950">
              <div className="absolute inset-0 grid-bg-dark" />
              <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-brand-500/8 blur-3xl" />
              <div className="relative grid grid-cols-1 gap-0 md:grid-cols-5">
                <div className="relative md:col-span-2">
                  <div className="aspect-square w-full overflow-hidden bg-ink-800 md:aspect-auto md:h-full">
                    <img src={MENTOR.photo} alt={MENTOR.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:col-span-3 lg:p-12">
                  <h4 className="text-2xl font-bold text-white">{MENTOR.name}</h4>
                  <p className="mt-2 text-base font-medium text-brand-400">{MENTOR.designation}</p>
                  {MENTOR.department && <p className="mt-1 text-sm text-ink-500">{MENTOR.department}</p>}
                  <div className="mt-6 h-px w-full bg-white/10" />
                  <p className="mt-6 leading-relaxed text-ink-400">{MENTOR.description}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { icon: Users, title: 'Collaboration' },
  { icon: Target, title: 'Engagement' },
  { icon: Heart, title: 'Accessibility' },
];
