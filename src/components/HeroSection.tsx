"use client";

import { animated, useSpring } from "@react-spring/web";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const title = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 170, friction: 22 },
  });
  const sub = useSpring({
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { tension: 170, friction: 22 },
  });

  // Hạt cà phê chạy dọc chuỗi giá trị: minh họa hành trình 40.000đ tới 85.000đ
  const bean = useSpring({
    from: { left: "2%" },
    to: { left: "92%" },
    loop: { reverse: false },
    config: { duration: 4200 },
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-coffee-dark via-coffee to-[#3a2412] px-6 pb-16 pt-24 text-cream"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute left-10 top-16 text-[120px]">☕</div>
        <div className="absolute right-12 top-1/3 text-[90px]">🌱</div>
        <div className="absolute bottom-20 left-1/3 text-[110px]">☕</div>
      </div>

      <animated.div
        style={{ opacity: title.opacity, transform: title.y.to((v) => `translateY(${v}px)`) }}
        className="relative z-10 max-w-4xl text-center"
      >
        <span className="mb-6 inline-block rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-earth-soft">
          Kinh tế chính trị Mác - Lênin
        </span>
        <h1 className="display text-balance text-5xl font-extrabold sm:text-6xl lg:text-7xl">
          Một ly cà phê{" "}
          <span className="bg-gradient-to-r from-earth-soft via-[#f0b46a] to-leaf bg-clip-text text-transparent">
            85.000đ
          </span>
          : Ai đang hưởng lợi?
        </h1>
      </animated.div>

      <animated.p
        style={{ opacity: sub.opacity, transform: sub.y.to((v) => `translateY(${v}px)`) }}
        className="relative z-10 mt-6 max-w-xl text-center text-lg leading-relaxed text-cream/75"
      >
        Anh Khánh bán cà phê nhân 40.000đ/kg; một ly ở thành phố giá 85.000đ. Ai đang hưởng lợi
        nhiều nhất?
      </animated.p>

      {/* Hình minh họa chuỗi giá trị với hạt cà phê chạy */}
      <div className="relative z-10 mt-12 w-full max-w-3xl">
        <div className="relative h-1.5 rounded-full bg-gradient-to-r from-leaf via-earth to-[#c9a227]">
          <animated.div style={bean} className="absolute -top-3 text-2xl drop-shadow">
            ☕
          </animated.div>
        </div>
        <div className="mt-3 flex justify-between text-xs font-medium text-cream/65">
          <span>🧑‍🌾 Nông dân, 40.000đ/kg</span>
          <span>☕ Ly cà phê, 85.000đ</span>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => scrollTo("story")}
          className="rounded-full bg-earth px-7 py-3 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-earth-soft active:translate-y-px"
        >
          Bắt đầu phân tích
        </button>
        <button
          onClick={() => scrollTo("chain")}
          className="rounded-full border border-cream/25 px-7 py-3 font-semibold text-cream transition hover:bg-cream/10 active:translate-y-px"
        >
          Xem chuỗi lợi ích
        </button>
      </div>
    </section>
  );
}
