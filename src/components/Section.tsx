import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "coffee" | "soft";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream",
  soft: "bg-cream-soft",
  coffee: "bg-coffee-dark text-cream",
};

export default function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  className,
  tone = "soft",
}: SectionProps) {
  const dark = tone === "coffee";
  return (
    <section
      id={id}
      className={`relative flex min-h-[100dvh] w-full flex-col justify-center px-6 py-24 sm:px-10 lg:px-20 ${tones[tone]} ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(kicker || title || subtitle) && (
          <Reveal className="mb-12">
            {kicker && (
              <p
                className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-earth-soft" : "text-earth"}`}
              >
                {kicker}
              </p>
            )}
            {title && (
              <h2
                className={`display text-4xl font-extrabold sm:text-5xl lg:text-6xl ${dark ? "text-cream" : "text-coffee-dark"}`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-5 max-w-[60ch] text-lg leading-relaxed ${dark ? "text-cream/70" : "text-coffee/80"}`}
              >
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
