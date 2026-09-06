import { ArrowRight, Users, Radio, Zap, Play } from 'lucide-react';

type Props = {
  onLaunch: () => void;
};

export default function Hero({ onLaunch }: Props) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-100/40 blur-3xl animate-blob" />
      <div className="absolute -left-40 top-60 h-96 w-96 rounded-full bg-accent-100/25 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Headline row */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-ink-600 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            EdTech Startup · Real-Time Learning
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl text-balance">
            Learning That Happens{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 bg-clip-text text-transparent">
              in Real Time.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-balance">
            Live teaching, real-time assessment, and student participation —
            together in one connected environment.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={onLaunch}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-ink-900/15 transition hover:bg-ink-800"
            >
              Explore Our Platform
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-base font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50"
            >
              Meet Our Team
            </a>
          </div>
        </div>

        {/* Product mockup — the visual centerpiece */}
        <div className="mt-16 lg:mt-20">
          <PlatformMockup />
        </div>
      </div>
    </section>
  );
}

function PlatformMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-200/30 via-accent-200/20 to-transparent blur-2xl" />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white shadow-2xl shadow-ink-900/10">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs text-ink-400 ring-1 ring-ink-200">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            cohortlive.app/session
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Session header */}
          <div className="flex items-center justify-between rounded-xl bg-ink-900 px-4 py-2.5 text-white">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-red-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-medium">Live Session · Data Structures</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-300">
              <Users className="h-3.5 w-3.5" />
              42 students
            </div>
          </div>

          {/* Video + MCQ */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {/* Trainer video */}
            <div className="col-span-2 aspect-video rounded-xl bg-gradient-to-br from-ink-800 to-ink-950 ring-1 ring-ink-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <Play className="h-6 w-6 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 rounded-md bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-sm">
                Trainer
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-sm">
                <Radio className="h-3 w-3 text-red-400" />
                Live
              </div>
            </div>

            {/* Participants */}
            <div className="col-span-1 space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-ink-100 to-ink-200 ring-1 ring-ink-200 flex items-center justify-center">
                  <Users className="h-4 w-4 text-ink-400" />
                </div>
              ))}
            </div>
          </div>

          {/* MCQ Card */}
          <div className="mt-4 rounded-xl border border-ink-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                Live MCQ · Question 3
              </span>
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600">
                00:18
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold text-ink-900">
              What is the time complexity of binary search?
            </p>
            <div className="mt-3 space-y-2">
              {[
                { label: 'O(n)', pct: '18%', correct: false },
                { label: 'O(log n)', pct: '67%', correct: true },
                { label: 'O(n²)', pct: '8%', correct: false },
                { label: 'O(1)', pct: '7%', correct: false },
              ].map((opt) => (
                <div
                  key={opt.label}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${
                    opt.correct
                      ? 'border-success-500 bg-success-500/5'
                      : 'border-ink-200 bg-ink-50/50'
                  }`}
                >
                  <span className="font-medium text-ink-700">{opt.label}</span>
                  <span className="text-ink-400">{opt.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -bottom-5 -left-3 animate-float rounded-2xl border border-ink-200/80 bg-white p-3.5 shadow-xl sm:-left-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-500/10 text-success-600">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-ink-900">Results delivered</p>
            <p className="text-xs text-ink-400">In under 1 second</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-3 animate-float-slow rounded-2xl border border-ink-200/80 bg-white p-3.5 shadow-xl sm:-right-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
            <Radio className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-ink-900">Live now</p>
            <p className="text-xs text-ink-400">42 students active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
