"use client";

import { useEffect, useRef, useState } from "react";

/* ----------------------------- Reveal ----------------------------- */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* -------------------------- Section shell ------------------------- */
type Tone = "light" | "cream" | "blue";

const toneClass: Record<Tone, string> = {
  light: "bg-cream-light",
  cream: "bg-cream",
  blue: "bg-steel/10",
};

export function SectionShell({
  id,
  kicker,
  title,
  lead,
  children,
  tone = "light",
  className,
}: {
  id: string;
  kicker?: string;
  title?: string;
  lead?: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 ${toneClass[tone]} ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">
        {(kicker || title || lead) && (
          <Reveal className="mb-12 max-w-3xl">
            {kicker && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-clay">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="display text-3xl font-extrabold text-coffee-dark sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-lg leading-relaxed text-coffee/85">{lead}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/* ----------------------------- StatCard --------------------------- */
export function StatCard({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="rounded-card border border-coffee/10 bg-white p-5 shadow-sm">
      <p className={`text-2xl font-extrabold ${accent}`}>{value}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-coffee/75">{label}</p>
    </div>
  );
}

/* --------------------------- Note callout ------------------------- */
export function NoteCallout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-card border-l-4 border-clay bg-clay/10 px-5 py-4 text-sm leading-relaxed text-coffee-dark">
      {children}
    </p>
  );
}
