import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  maxWidth?: string;
};

export default function Modal({ open, onClose, children, title, maxWidth = 'max-w-lg' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={ref}
        className={`relative w-full ${maxWidth} animate-[fadeIn_0.2s_ease-out] rounded-3xl border border-ink-200/50 bg-white shadow-2xl`}
        style={{ animationName: 'fadeIn' }}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-ink-100 px-7 py-5">
            <h3 className="text-lg font-bold text-ink-900">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-ink-400 transition hover:bg-ink-100 hover:text-ink-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        {!title && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-ink-400 transition hover:bg-ink-100 hover:text-ink-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <div className="px-7 py-6">{children}</div>
      </div>
    </div>
  );
}
