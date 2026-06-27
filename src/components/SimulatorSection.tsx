"use client";

import { useMemo, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Section from "./Section";
import { costBreakdown, CUP_PRICE, farmerScenarios } from "@/data/simulator";

const fmt = (n: number) => n.toLocaleString("vi-VN") + "đ";

function CupSegment({
  item,
  pct,
  active,
  onHover,
}: {
  item: (typeof costBreakdown)[number];
  pct: number;
  active: boolean;
  onHover: (id: string | null) => void;
}) {
  const style = useSpring({
    height: `${pct}%`,
    from: { height: "0%" },
    config: { tension: 150, friction: 22 },
  });
  return (
    <animated.div
      style={{ ...style, backgroundColor: item.color }}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      className={`flex items-center justify-center text-[11px] font-bold text-white/90 transition-opacity ${
        active ? "opacity-100" : "opacity-85"
      }`}
      title={`${item.label}: ${fmt(item.amount)}`}
    >
      {pct > 9 ? item.emoji : ""}
    </animated.div>
  );
}

export default function SimulatorSection() {
  const [hover, setHover] = useState<string | null>(null);
  const [scenario, setScenario] = useState(farmerScenarios[0].id);

  const sc = farmerScenarios.find((s) => s.id === scenario)!;
  const farmerBase = costBreakdown.find((c) => c.id === "farmer")!.amount;
  const farmerValue = Math.round(farmerBase * sc.farmerMultiplier);

  const farmerBar = useSpring({
    width: `${(farmerValue / CUP_PRICE) * 100}%`,
    from: { width: "0%" },
    config: { tension: 170, friction: 22 },
  });

  const segments = useMemo(
    () => costBreakdown.map((c) => ({ ...c, pct: (c.amount / CUP_PRICE) * 100 })),
    [],
  );

  return (
    <Section
      id="simulator"
      tone="cream"
      title="85.000đ đi đâu?"
      subtitle="Giá một ly cà phê được chia cho rất nhiều khoản. Phần giá trị thực sự quay về tay nông dân có thể rất nhỏ so với giá bán cuối cùng."
    >
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Ly cà phê chia tầng */}
        <div className="mx-auto flex w-full max-w-[240px] flex-col items-center">
          <div className="relative h-[360px] w-[150px] overflow-hidden rounded-b-[60px] rounded-t-2xl border-4 border-coffee/30 bg-cream-soft shadow-inner">
            <div className="flex h-full w-full flex-col-reverse">
              {segments.map((s) => (
                <CupSegment
                  key={s.id}
                  item={s}
                  pct={s.pct}
                  active={hover === null || hover === s.id}
                  onHover={setHover}
                />
              ))}
            </div>
          </div>
          {/* quai ly */}
          <p className="mt-3 text-center text-sm font-bold text-coffee-dark">
            Tổng: {fmt(CUP_PRICE)}
          </p>
        </div>

        {/* Danh sách khoản mục */}
        <div>
          <ul className="space-y-2">
            {segments.map((s) => {
              const active = hover === null || hover === s.id;
              return (
                <li
                  key={s.id}
                  onMouseEnter={() => setHover(s.id)}
                  onMouseLeave={() => setHover(null)}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition-all ${
                    hover === s.id
                      ? "border-coffee/40 bg-white"
                      : "border-coffee/10 bg-white/60"
                  } ${active ? "opacity-100" : "opacity-50"}`}
                >
                  <span
                    className="h-4 w-4 shrink-0 rounded"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="flex-1 text-sm font-medium text-coffee-dark">
                    {s.emoji} {s.label}
                  </span>
                  <span className="text-sm font-bold text-coffee">{fmt(s.amount)}</span>
                  <span className="w-12 text-right text-xs text-coffee/50">
                    {s.pct.toFixed(0)}%
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
            ⚠️ Các con số chỉ là <strong>giả lập để học tập</strong>, không phải số liệu tài
            chính thật của Highland Coffee hay bất kỳ doanh nghiệp cụ thể nào. Cũng không thể so
            trực tiếp 40.000đ/kg (cà phê nhân) với 85.000đ/ly (thành phẩm) vì đây là hai đơn vị
            khác nhau.
          </p>
        </div>
      </div>

      {/* Kịch bản nâng vị thế nông dân */}
      <div className="mt-10 rounded-3xl border border-coffee/10 bg-white/80 p-6 shadow-md sm:p-8">
        <h3 className="text-lg font-extrabold text-coffee-dark">
          Nếu nông dân thay đổi vị thế thì sao?
        </h3>
        <p className="mt-1 text-sm text-coffee/70">
          Chọn kịch bản để thấy phần giá trị quay về vùng nguyên liệu thay đổi thế nào.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {farmerScenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setScenario(s.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                scenario === s.id
                  ? "bg-leaf text-white shadow"
                  : "bg-coffee/10 text-coffee-dark hover:bg-coffee/20"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm text-coffee/70">{sc.desc}</p>
            <div className="mt-3 h-5 overflow-hidden rounded-full bg-coffee/10">
              <animated.div
                style={farmerBar}
                className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-leaf to-leaf-dark pr-2 text-[11px] font-bold text-white"
              >
                {((farmerValue / CUP_PRICE) * 100).toFixed(1)}%
              </animated.div>
            </div>
          </div>
          <div className="rounded-2xl bg-leaf/10 px-5 py-3 text-center">
            <p className="text-xs font-semibold uppercase text-leaf-dark">Giá trị về nông dân</p>
            <p className="text-2xl font-extrabold text-leaf-dark">~{fmt(farmerValue)}/ly</p>
          </div>
        </div>
        <p className="mt-3 text-sm italic text-coffee/70">💡 {sc.takeaway}</p>
      </div>
    </Section>
  );
}
