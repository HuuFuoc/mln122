"use client";

import { useState } from "react";
import { actors, valueChainConclusion } from "./data";
import { Reveal } from "./ui";

/** Vòng tròn số thứ tự chặng, làm điểm nhấn cho stepper */
function StepCircle({
  n,
  active,
  className,
}: {
  n: number;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`flex items-center justify-center rounded-full font-extrabold transition ${
        active
          ? "bg-coffee text-cream shadow-sm"
          : "bg-cream text-coffee ring-2 ring-coffee/15"
      } ${className ?? ""}`}
    >
      {n}
    </span>
  );
}

function PowerDots({ level, className }: { level: number; className?: string }) {
  return (
    <span
      className={`flex gap-1 ${className ?? ""}`}
      aria-label={`Tiếng nói khi thương lượng ở mức ${level} trên 4`}
    >
      {[1, 2, 3, 4].map((d) => (
        <span
          key={d}
          className={`h-1.5 w-5 rounded-full ${d <= level ? "bg-coffee" : "bg-coffee/15"}`}
        />
      ))}
    </span>
  );
}

export function StakeholderTimeline() {
  const [active, setActive] = useState(0);
  const a = actors[active];

  return (
    <div>
      {/* ---------- Desktop: stepper ngang + phần chi tiết ---------- */}
      <div className="hidden lg:block">
        <div className="relative flex items-start justify-between">
          <div className="absolute inset-x-12 top-7 h-0.5 bg-gradient-to-r from-leaf via-clay to-steel" />
          {actors.map((act, i) => {
            const on = i === active;
            return (
              <button
                key={act.id}
                onClick={() => setActive(i)}
                aria-pressed={on}
                className="group relative z-10 flex w-1/5 flex-col items-center px-2 text-center focus-visible:outline-none"
              >
                <StepCircle
                  n={i + 1}
                  active={on}
                  className={`h-14 w-14 text-lg ring-offset-2 ring-offset-cream-light group-focus-visible:ring-2 group-focus-visible:ring-clay ${
                    on ? "scale-105" : "group-hover:ring-coffee/40"
                  }`}
                />
                <span
                  className={`mt-3 text-base font-bold ${on ? "text-coffee-dark" : "text-coffee/80"}`}
                >
                  {act.name}
                </span>
                <span className="mt-0.5 max-w-[11rem] text-xs leading-snug text-coffee/55">
                  {act.role}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-5 text-center text-sm text-coffee/55">
          Mỗi chặng làm hạt cà phê đáng giá hơn một chút, và cũng tốn thêm một chút.
        </p>

        {/* Chi tiết chủ thể đang chọn */}
        <Reveal key={a.id} className="mt-8">
          <div className="rounded-card border border-coffee/10 bg-white p-7 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <StepCircle n={active + 1} active className="h-12 w-12 text-base" />
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-coffee-dark">{a.name}</h3>
                <p className="text-sm text-coffee/65">{a.role}</p>
              </div>
              <div className="text-right">
                <p className="mb-1 text-xs text-coffee/55">Tiếng nói khi thương lượng</p>
                <PowerDots level={a.powerLevel} className="justify-end" />
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-sm font-bold text-coffee-dark">Họ làm gì</p>
                <p className="mt-1.5 leading-relaxed text-coffee/75">{a.contribution}</p>
              </div>
              <div className="rounded-card bg-leaf/10 p-4">
                <p className="text-sm font-bold text-leaf">Họ cần gì</p>
                <p className="mt-1.5 leading-relaxed text-coffee-dark">{a.desire}</p>
              </div>
              <div className="rounded-card bg-clay/10 p-4">
                <p className="text-sm font-bold text-clay">Áp lực của họ</p>
                <p className="mt-1.5 leading-relaxed text-coffee-dark">{a.tension}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------- Mobile/Tablet: dạng dọc ---------- */}
      <div className="space-y-4 lg:hidden">
        {actors.map((act, i) => (
          <Reveal key={act.id} delay={i * 60}>
            <div className="rounded-card border border-coffee/10 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <StepCircle n={i + 1} className="h-11 w-11 text-base" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-coffee-dark">{act.name}</h3>
                  <p className="text-xs text-coffee/60">{act.role}</p>
                </div>
              </div>
              <PowerDots level={act.powerLevel} className="mt-3" />
              <div className="mt-3 space-y-2 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold text-coffee-dark">Họ làm gì: </span>
                  <span className="text-coffee/80">{act.contribution}</span>
                </p>
                <p>
                  <span className="font-semibold text-leaf">Họ cần gì: </span>
                  <span className="text-coffee/80">{act.desire}</span>
                </p>
                <p>
                  <span className="font-semibold text-clay">Áp lực: </span>
                  <span className="text-coffee/80">{act.tension}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Chốt ý */}
      <Reveal delay={120}>
        <div className="mt-8 rounded-card bg-coffee-dark p-7 text-cream sm:p-8">
          <h3 className="text-xl font-bold">Vậy ai giữ lại phần nhiều nhất?</h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-cream/80">{valueChainConclusion}</p>
        </div>
      </Reveal>
    </div>
  );
}
