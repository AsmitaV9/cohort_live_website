import { Linkedin, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FOUNDERS } from '@/data/content';

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Editorial heading — split, not centered */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Team
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Meet our founders.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-1" className="lg:col-span-7 lg:pt-2">
            <p className="text-lg leading-relaxed text-ink-500">
              Computer Engineering students building a real-time learning platform.
              Names and photos below are placeholders — replace with actual details.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid — photos larger, info overlay on hover */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
    </section>
  );
}
