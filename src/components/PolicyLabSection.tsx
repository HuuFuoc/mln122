"use client";

import { useMemo, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Section from "./Section";
import MetricBar from "./MetricBar";
import { policies, baseline } from "@/data/policies";

const clamp = (n: number) => Math.max(0, Math.min(100, n));

export default function PolicyLabSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const chosen = policies.filter((p) => selected.includes(p.id));

  const metrics = useMemo(() => {
    let farmer = baseline.farmerIncome;
    let stability = baseline.chainStability;
    let priceUp = 0;
    let harmony = baseline.harmony;
    chosen.forEach((p) => {
      farmer += p.effects.farmerIncome;
      stability += p.effects.chainStability;
      priceUp += p.effects.consumerPrice;
      harmony += p.effects.harmony;
    });
    const consumerBenefit = clamp(baseline.consumerPrice - priceUp);
    farmer = clamp(farmer);
    stability = clamp(stability);
    harmony = clamp(harmony);
    const fairness = Math.round(
      0.4 * farmer + 0.3 * stability + 0.2 * consumerBenefit + 0.1 * harmony,
    );
    return { farmer, stability, consumerBenefit, harmony, fairness };
  }, [chosen]);

  // Bàn cân nghiêng: thu nhập nông dân càng thấp so với 55 thì càng nghiêng
  const tilt = Math.max(-16, Math.min(16, (55 - metrics.farmer) / 2.5));
  const beam = useSpring({
    transform: `rotate(${tilt}deg)`,
    config: { tension: 120, friction: 18 },
  });
  const leftPan = useSpring({
    transform: `translateY(${tilt * 1.4}px)`,
    config: { tension: 120, friction: 18 },
  });
  const rightPan = useSpring({
    transform: `translateY(${-tilt * 1.4}px)`,
    config: { tension: 120, friction: 18 },
  });

  return (
    <Section
      id="policy"
      tone="soft"
      title="Phòng thí nghiệm chính sách"
      subtitle="Chọn các biện pháp Nhà nước có thể dùng để giúp nông dân nhận phần lợi ích công bằng hơn. Quan sát bàn cân lợi ích và điểm hài hòa thay đổi."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Thẻ chính sách */}
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {policies.map((p) => {
              const on = selected.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => toggle(p.id)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    on
                      ? "border-leaf bg-leaf/10 shadow-md"
                      : "border-coffee/15 bg-white/70 hover:border-coffee/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-2xl">{p.emoji}</span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
                        on ? "bg-leaf text-white" : "bg-coffee/10 text-coffee/50"
                      }`}
                    >
                      {on ? "✓" : "+"}
                    </span>
                  </div>
                  <p className="mt-2 font-bold text-coffee-dark">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-coffee/70">{p.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bàn cân + chỉ số */}
        <div className="space-y-6">
          {/* Bàn cân lợi ích */}
          <div className="rounded-3xl border border-coffee/10 bg-white/80 p-6 shadow-md">
            <div className="relative mx-auto h-40 w-full max-w-[280px]">
              {/* trụ */}
              <div className="absolute left-1/2 top-6 h-28 w-1.5 -translate-x-1/2 bg-coffee/40" />
              <div className="absolute left-1/2 bottom-0 h-2 w-24 -translate-x-1/2 rounded-full bg-coffee/40" />
              {/* dầm cân */}
              <animated.div
                style={beam}
                className="absolute left-1/2 top-6 h-1.5 w-64 -translate-x-1/2 origin-center rounded-full bg-coffee"
              >
                {/* đĩa trái - nông dân */}
                <animated.div
                  style={leftPan}
                  className="absolute -left-2 top-1 flex h-14 w-20 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-leaf/15 text-center ring-1 ring-leaf/30"
                >
                  <span className="text-lg">🧑‍🌾</span>
                  <span className="text-[10px] font-bold text-leaf-dark">Nông dân</span>
                </animated.div>
                {/* đĩa phải - khâu sau */}
                <animated.div
                  style={rightPan}
                  className="absolute -right-2 top-1 flex h-14 w-20 translate-x-1/2 flex-col items-center justify-center rounded-xl bg-earth/15 text-center ring-1 ring-earth/30"
                >
                  <span className="text-lg">☕</span>
                  <span className="text-[10px] font-bold text-earth">Khâu sau</span>
                </animated.div>
              </animated.div>
            </div>
            <p className="mt-2 text-center text-xs text-coffee/60">
              {Math.abs(tilt) < 4
                ? "⚖️ Quan hệ lợi ích đang khá cân bằng"
                : tilt > 0
                  ? "Đang nghiêng về khâu sau, nông dân yếu thế"
                  : "Nông dân đã được nâng vị thế rõ rệt"}
            </p>
          </div>

          {/* Điểm hài hòa */}
          <div className="rounded-3xl bg-coffee-dark p-6 text-center text-cream">
            <p className="text-xs font-semibold uppercase tracking-wide text-earth-soft">
              Điểm hài hòa lợi ích
            </p>
            <p className="text-5xl font-extrabold">{metrics.fairness}</p>
            <p className="text-xs text-cream/60">/ 100</p>
          </div>

          {/* Chỉ số */}
          <div className="space-y-4 rounded-3xl border border-coffee/10 bg-white/80 p-6 shadow-md">
            <MetricBar label="Thu nhập nông dân" emoji="🧑‍🌾" value={metrics.farmer} color="#2e7d32" />
            <MetricBar label="Ổn định chuỗi" emoji="🔗" value={metrics.stability} color="#5b3719" />
            <MetricBar label="Giá hợp lý cho NTD" emoji="🙋" value={metrics.consumerBenefit} color="#c76a29" />
            <MetricBar label="Hài hòa lợi ích" emoji="⚖️" value={metrics.harmony} color="#c9a227" />
          </div>
        </div>
      </div>

      {/* Liên hệ chính sách thực tế */}
      {chosen.length > 0 && (
        <div className="mt-8 rounded-2xl border border-coffee/10 bg-cream-soft p-6">
          <h4 className="text-sm font-bold uppercase tracking-wide text-earth">
            Liên hệ chính sách thực tế ({chosen.length})
          </h4>
          <ul className="mt-3 space-y-2">
            {chosen.map((p) => (
              <li key={p.id} className="flex gap-2 text-sm text-coffee-dark">
                <span>{p.emoji}</span>
                <span>
                  <strong>{p.title}:</strong> {p.realPolicy}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
