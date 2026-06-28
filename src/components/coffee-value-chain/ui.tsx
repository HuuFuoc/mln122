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
      { threshold: 0.12 },
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

/* --------------------------- CTAButton ---------------------------- */
type CTAVariant = "primary" | "accent" | "secondary" | "ghost";

const ctaVariants: Record<CTAVariant, string> = {
  primary: "bg-coffee text-cream hover:bg-coffee-dark shadow-sm",
  accent: "bg-clay text-white hover:brightness-95 shadow-sm",
  secondary: "border border-coffee/25 text-coffee-dark hover:bg-coffee/5",
  ghost: "text-coffee-dark hover:bg-coffee/10",
};

export function CTAButton({
  variant = "primary",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: CTAVariant }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-chip px-6 py-3 text-sm font-semibold transition active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream-light disabled:cursor-not-allowed disabled:opacity-40 ${ctaVariants[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

/* -------------------------- SectionHeader ------------------------- */
export function SectionHeader({
  title,
  lead,
  dark = false,
}: {
  title?: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <div>
      {title && (
        <h2
          className={`display text-3xl font-extrabold sm:text-4xl lg:text-[2.6rem] ${dark ? "text-cream" : "text-coffee-dark"}`}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p
          className={`mt-4 max-w-3xl text-lg leading-relaxed ${dark ? "text-cream/75" : "text-coffee/80"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* -------------------------- Section shell ------------------------- */
type Tone = "light" | "cream" | "blue" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-cream-light",
  cream: "bg-cream",
  blue: "bg-steel/10",
  dark: "bg-coffee-dark",
};

export function SectionShell({
  id,
  title,
  lead,
  children,
  tone = "light",
  className,
}: {
  id: string;
  title?: string;
  lead?: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 ${toneClass[tone]} ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">
        {(title || lead) && (
          <Reveal className="mb-12">
            <SectionHeader title={title} lead={lead} dark={dark} />
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
    <div className="h-full rounded-card border border-coffee/10 bg-white p-6 shadow-sm">
      <p className={`text-3xl font-extrabold ${accent}`}>{value}</p>
      <p className="mt-2 leading-relaxed text-coffee/75">{label}</p>
    </div>
  );
}

/* ---------------------------- ConceptCard ------------------------- */
export function ConceptCard({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div className={`h-full rounded-card border-t-4 ${accent} bg-white p-7 shadow-sm`}>
      <h3 className="text-xl font-bold text-coffee-dark">{title}</h3>
      <p className="mt-3 leading-relaxed text-coffee/80">{body}</p>
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
