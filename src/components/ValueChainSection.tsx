"use client";

import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Section from "./Section";
import { actors } from "@/data/actors";

const powerColor: Record<string, string> = {
  Thấp: "bg-red-100 text-red-700",
  "Trung bình": "bg-amber-100 text-amber-700",
  "Trung bình tới cao": "bg-orange-100 text-orange-700",
  Cao: "bg-emerald-100 text-emerald-700",
};

export default function ValueChainSection() {
  const [activeId, setActiveId] = useState(actors[0].id);
  const actor = actors.find((a) => a.id === activeId)!;

  const panel = useSpring({
    from: { opacity: 0, transform: "translateY(12px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 220, friction: 22 },
  });

  // Width tự động animate tới giá trị mới khi đổi chủ thể
  const bar = useSpring({
    width: `${actor.benefitShare}%`,
    from: { width: "0%" },
    config: { tension: 160, friction: 22 },
  });

  return (
    <Section
      id="chain"
      tone="soft"
      title="Bản đồ quan hệ lợi ích kinh tế"
      subtitle="Bấm vào từng chủ thể để xem họ đóng góp gì, chịu rủi ro gì, hưởng lợi ra sao và có quyền lực thị trường mạnh hay yếu."
    >
      {/* Hàng node của chuỗi */}
      <div className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3">
        {actors.map((a, i) => {
          const on = a.id === activeId;
          return (
            <div key={a.id} className="flex items-center">
              <button
                onClick={() => setActiveId(a.id)}
                className={`flex w-28 flex-col items-center gap-1.5 rounded-2xl border p-3 text-center transition-all sm:w-32 ${
                  on
                    ? "scale-105 border-coffee bg-coffee text-cream shadow-lg shadow-coffee/30"
                    : "border-coffee/15 bg-white/70 text-coffee-dark hover:border-coffee/40 hover:bg-white"
                }`}
              >
                <span className="text-3xl">{a.emoji}</span>
                <span className="text-sm font-bold leading-tight">{a.name}</span>
                <span
                  className={`text-[11px] leading-tight ${on ? "text-cream/70" : "text-coffee/55"}`}
                >
                  {a.tagline}
                </span>
              </button>
              {i < actors.length - 1 && (
                <span className="mx-0.5 hidden text-xl text-coffee/40 sm:inline">→</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Panel chi tiết */}
      <animated.div
        style={panel}
        className="mt-10 grid gap-6 rounded-3xl border border-coffee/10 bg-white/80 p-6 shadow-md sm:p-8 lg:grid-cols-3"
      >
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="text-5xl">{actor.emoji}</span>
            <div>
              <h3 className="text-2xl font-extrabold text-coffee-dark">{actor.name}</h3>
              <span
                className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${powerColor[actor.bargainingPower]}`}
              >
                Quyền lực thị trường: {actor.bargainingPower}
              </span>
            </div>
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-coffee/50">
            Mức hưởng lợi tương đối trong chuỗi
          </p>
          <div className="mt-2 h-4 overflow-hidden rounded-full bg-coffee/10">
            <animated.div
              style={bar}
              className="h-full rounded-full bg-gradient-to-r from-earth to-leaf"
            />
          </div>
          <p className="mt-1 text-right text-sm font-bold text-coffee">{actor.benefitShare}%</p>

          <div className="mt-5 rounded-xl bg-cream-soft p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-earth">Lợi ích nhận được</p>
            <p className="mt-1 text-sm leading-relaxed text-coffee-dark">{actor.benefit}</p>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold text-leaf-dark">✓ Đóng góp</p>
              <ul className="space-y-1.5">
                {actor.contribution.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-coffee/80">
                    <span className="text-leaf">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-red-600">⚠ Chi phí / rủi ro</p>
              <ul className="space-y-1.5">
                {actor.risks.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-coffee/80">
                    <span className="text-red-400">•</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border-l-4 border-coffee bg-coffee/5 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-wide text-coffee">
              Liên hệ lý thuyết
            </p>
            <p className="mt-1 text-sm italic leading-relaxed text-coffee-dark">{actor.theory}</p>
          </div>
        </div>
      </animated.div>
    </Section>
  );
}
