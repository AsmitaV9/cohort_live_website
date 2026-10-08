import { Camera, MonitorX, Calculator, LayoutDashboard, BarChart3, ArrowRight, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { LINKS } from '@/config/links';

type Item = { icon: LucideIcon; title: string; description: string };

const ITEMS: Item[] = [
  {
    icon: Camera,
    title: 'Camera monitoring',
    description: 'Face presence, multiple-face and lighting checks run in the browser while the student writes the paper.',
  },
  {
    icon: MonitorX,
    title: 'Tab-switch & fullscreen detection',
    description: 'Leaving fullscreen, switching tabs or copy-pasting raises a warning. Five warnings and the exam auto-submits.',
  },
  {
    icon: Calculator,
    title: 'GATE marking scheme',
    description: 'MCQ, MSQ and NAT questions with negative marking for wrong MCQs, a GATE-style palette and an on-screen calculator.',
  },
  {
    icon: LayoutDashboard,
    title: 'Live proctor dashboard',
    description: 'Proctors watch 100+ students at once: status, progress, warnings and snapshots, with one-click actions.',
  },
  {
    icon: BarChart3,
    title: 'Instant analysis',
    description: 'Section-wise scores, rank, percentile and question-wise review the moment results are published.',
  },
];

export default function ProctoredMocks() {
  return (
    <section id="gate-mocks" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            dark
            eyebrow="New · Proctored GATE Mocks"
            title="Proctored GATE mock tests, on any laptop."
            description="Department-wise GATE papers for CS/IT, EnTC, Electrical and Mechanical, taken under automatic camera and browser proctoring."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={`reveal-delay-${(i % 3) + 1}`}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-500/40 hover:bg-white/[0.06]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay="reveal-delay-3">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 p-6 text-white">
              <div>
                <ShieldCheck className="h-6 w-6" />
                <h3 className="mt-5 text-lg font-bold">Ready to try a mock?</h3>
                <p className="mt-1.5 text-sm text-white/85">Use the latest Chrome or Edge on a laptop with a webcam.</p>
              </div>
              <a
                href={LINKS.mockTest}
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
              >
                Take a Mock Test
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
