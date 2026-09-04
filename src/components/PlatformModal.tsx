import { Rocket, GraduationCap, ArrowRight, Calendar } from 'lucide-react';
import Modal from './Modal';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PlatformModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-lg">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
          <Rocket className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink-900">Platform Coming Soon</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">
          The interactive learning platform is under development.
          Sign in as a student or trainer once it launches.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Student */}
        <div className="group rounded-2xl border border-ink-200/60 bg-ink-50/40 p-5 text-center transition hover:border-brand-300">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-500 shadow-sm ring-1 ring-ink-200/60">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h4 className="mt-3 text-sm font-bold text-ink-900">Student</h4>
          <p className="mt-1 text-xs text-ink-500">Join sessions and answer MCQs.</p>
          <button
            disabled
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-xs font-semibold text-ink-400"
          >
            Coming Soon
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Trainer */}
        <div className="group rounded-2xl border border-ink-200/60 bg-ink-50/40 p-5 text-center transition hover:border-accent-300">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent-500 shadow-sm ring-1 ring-ink-200/60">
            <Rocket className="h-5 w-5" />
          </div>
          <h4 className="mt-3 text-sm font-bold text-ink-900">Trainer</h4>
          <p className="mt-1 text-xs text-ink-500">Conduct sessions and launch MCQs.</p>
          <button
            disabled
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-ink-200 bg-white px-4 py-2 text-xs font-semibold text-ink-400"
          >
            Coming Soon
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-ink-400">
        <Calendar className="h-3.5 w-3.5 text-brand-500" />
        <span>Authentication integrates in a later phase.</span>
      </div>
    </Modal>
  );
}
