"use client";

import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Section from "./Section";
import MetricBar from "./MetricBar";
import { rounds, startMetrics, type GameMetrics } from "@/data/scenarios";

const clamp = (n: number) => Math.max(0, Math.min(100, n));

function applyEffects(m: GameMetrics, e: GameMetrics): GameMetrics {
  return {
    farmerIncome: clamp(m.farmerIncome + e.farmerIncome),
    chainStability: clamp(m.chainStability + e.chainStability),
    consumerPrice: clamp(m.consumerPrice + e.consumerPrice),
    harmony: clamp(m.harmony + e.harmony),
  };
}

export default function ShockGameSection() {
  const [step, setStep] = useState(0); // 0..rounds.length (cuối = kết quả)
  const [metrics, setMetrics] = useState<GameMetrics>(startMetrics);
  const [picked, setPicked] = useState<string | null>(null);

  const round = rounds[step];
  const finished = step >= rounds.length;

  const choose = (choiceId: string) => {
    const choice = round.choices.find((c) => c.id === choiceId)!;
    setPicked(choiceId);
    setMetrics((m) => applyEffects(m, choice.effects));
    setTimeout(() => {
      setPicked(null);
      setStep((s) => s + 1);
    }, 650);
  };

  const restart = () => {
    setStep(0);
    setMetrics(startMetrics);
    setPicked(null);
  };

  const harmony = metrics.harmony;
  const verdict =
    harmony >= 60
      ? { text: "Quan hệ lợi ích hài hòa: các bên cùng có lợi và chuỗi bền vững.", tone: "text-leaf-dark" }
      : harmony >= 35
        ? { text: "Tạm ổn, nhưng vẫn còn rủi ro mất cân bằng nếu thị trường biến động.", tone: "text-amber-700" }
        : { text: "Mất cân bằng: bên yếu thế (nông dân) chịu thiệt khi giá biến động.", tone: "text-red-600" };

  const [card, cardApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(16px)",
    config: { tension: 210, friction: 22 },
  }));
  useEffect(() => {
    cardApi.start({
      from: { opacity: 0, transform: "translateY(16px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
    });
  }, [step, cardApi]);

  return (
    <Section
      id="shock"
      tone="coffee"
      title="Cú sốc giá thế giới"
      subtitle="Nhập vai anh Khánh qua 3 mùa vụ. Mỗi lựa chọn tác động tới 4 chỉ số; hãy thử giữ cho quan hệ lợi ích hài hòa."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Khu vực sự kiện + lựa chọn */}
        <animated.div
          style={card}
          className="rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur sm:p-8"
        >
          {!finished ? (
            <>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cream/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-earth-soft">
                  {round.season} · {step + 1}/{rounds.length}
                </span>
                <span className="text-4xl">{round.emoji}</span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-cream">{round.event}</h3>
              <p className="mt-2 leading-relaxed text-cream/70">{round.detail}</p>

              <div className="mt-6 space-y-3">
                {round.choices.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => choose(c.id)}
                    disabled={picked !== null}
                    className={`w-full rounded-2xl border p-4 text-left transition-all disabled:cursor-default ${
                      picked === c.id
                        ? "border-leaf bg-leaf/20"
                        : "border-cream/15 bg-cream/5 hover:border-earth-soft hover:bg-cream/10"
                    }`}
                  >
                    <p className="font-bold text-cream">{c.label}</p>
                    <p className="mt-1 text-sm text-cream/60">{c.desc}</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-5xl">{harmony >= 60 ? "🌟" : harmony >= 35 ? "⚖️" : "🥀"}</p>
              <h3 className="mt-3 text-2xl font-extrabold text-cream">Kết thúc 3 mùa vụ</h3>
              <p className={`mt-2 font-semibold ${verdict.tone} bg-cream/90 mx-auto inline-block rounded-lg px-3 py-1`}>
                {verdict.text}
              </p>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/70">
                Nếu chỉ dựa vào thị trường tự phát, bên yếu thế dễ chịu thiệt khi giá biến động.
                Nhà nước cần tạo điều kiện pháp lý, tín dụng, thông tin và liên kết để nông dân
                không đứng một mình trong chuỗi giá trị.
              </p>
              <button
                onClick={restart}
                className="mt-6 rounded-full bg-earth px-6 py-2.5 font-semibold text-white transition hover:bg-earth-soft"
              >
                ↺ Chơi lại
              </button>
            </div>
          )}
        </animated.div>

        {/* Bảng chỉ số */}
        <div className="rounded-3xl border border-cream/15 bg-cream p-6">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-coffee">
            Chỉ số hiện tại
          </h4>
          <div className="space-y-4">
            <MetricBar label="Thu nhập nông dân" emoji="🧑‍🌾" value={metrics.farmerIncome} color="#2e7d32" />
            <MetricBar label="Ổn định chuỗi" emoji="🔗" value={metrics.chainStability} color="#5b3719" />
            <MetricBar label="Giá hợp lý cho NTD" emoji="🙋" value={metrics.consumerPrice} color="#c76a29" />
            <MetricBar label="Hài hòa lợi ích" emoji="⚖️" value={metrics.harmony} color="#c9a227" />
          </div>
        </div>
      </div>
    </Section>
  );
}
