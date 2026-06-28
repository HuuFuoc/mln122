"use client";

import { sections } from "./data";

export function PresentationMode({
  open,
  activeIndex,
  onClose,
  onGoTo,
}: {
  open: boolean;
  activeIndex: number;
  onClose: () => void;
  onGoTo: (index: number) => void;
}) {
  if (!open) return null;
  const total = sections.length;
  const current = sections[Math.max(0, Math.min(total - 1, activeIndex))];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-card border border-cream/15 bg-coffee-dark text-cream shadow-2xl">
        <div className="flex items-center justify-between border-b border-cream/10 px-5 py-2.5">
          <span className="flex items-center gap-2 text-sm font-bold text-clay">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-clay" />
            Lời dẫn theo từng phần
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-cream/55">
              {activeIndex + 1}/{total}
            </span>
            <button
              onClick={onClose}
              className="rounded-chip px-2 py-1 text-sm text-cream/70 transition hover:bg-cream/10 hover:text-cream"
              aria-label="Đóng lời dẫn"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-5 py-4">
          <p className="text-sm text-cream/55">Bạn đang ở phần</p>
          <h3 className="text-lg font-bold text-cream">{current.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">{current.note}</p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-cream/10 px-5 py-3">
          <button
            onClick={() => onGoTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="rounded-chip border border-cream/20 px-4 py-2 text-sm font-semibold text-cream transition hover:bg-cream/10 disabled:opacity-30"
          >
            ← Trước
          </button>

          <div className="hidden flex-1 items-center justify-center gap-1.5 sm:flex">
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => onGoTo(i)}
                aria-label={s.title}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-clay" : "w-2 bg-cream/25 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => onGoTo(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            className="rounded-chip bg-clay px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay/90 disabled:opacity-30"
          >
            Tiếp →
          </button>
        </div>
      </div>
    </div>
  );
}
