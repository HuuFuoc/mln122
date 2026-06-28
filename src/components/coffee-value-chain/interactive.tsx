"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  CUP_PRICE,
  debateRoles,
  imageMap,
  quizQuestions,
  shockScenarios,
  simulatorParts,
  simulatorQuestions,
} from "./data";
import { CTAButton, NoteCallout, Reveal, SectionShell } from "./ui";

const fmt = (n: number) => Math.round(n).toLocaleString("vi-VN") + "đ";
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

/* Ảnh bo góc dùng nội bộ */
function Img({
  src,
  alt,
  ratio,
  sizes,
}: {
  src: string;
  alt: string;
  ratio: string;
  sizes: string;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-card border border-coffee/10 bg-coffee/5 shadow-md`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

/* ===================== 6. COST BREAKDOWN ====================== */
export function CostBreakdown() {
  const [percents, setPercents] = useState<number[]>(simulatorParts.map((p) => p.percent));

  const handleChange = (index: number, raw: number) => {
    const newVal = clamp(raw, 0, 60);
    const otherSum = percents.reduce((s, v, i) => (i === index ? s : s + v), 0);
    const remaining = 100 - newVal;
    setPercents((prev) =>
      prev.map((v, i) => {
        if (i === index) return newVal;
        if (otherSum === 0) return remaining / (prev.length - 1);
        return (v / otherSum) * remaining;
      }),
    );
  };

  const reset = () => setPercents(simulatorParts.map((p) => p.percent));
  const total = useMemo(() => percents.reduce((s, v) => s + v, 0), [percents]);

  return (
    <SectionShell
      id="simulator"
      tone="light"
      title="85.000đ đi đâu?"
      lead="Con số này không chảy hết về một bên. Nó được chia cho nguyên liệu, chế biến, nhân công, mặt bằng, vận hành, thương hiệu và một phần lợi nhuận. Bạn thử kéo các thanh để hình dung xem nếu đổi cách chia thì sao."
    >
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-coffee/60">Tổng giá một ly</p>
            <p className="display text-5xl font-extrabold text-coffee-dark sm:text-6xl">
              {fmt(CUP_PRICE)}
            </p>
          </div>
          <CTAButton variant="secondary" onClick={reset}>
            Trả lại như ban đầu
          </CTAButton>
        </div>
        <div className="mt-5 flex h-9 w-full overflow-hidden rounded-chip border border-coffee/10">
          {simulatorParts.map((p, i) => (
            <div
              key={p.id}
              style={{ width: `${percents[i]}%`, backgroundColor: p.color }}
              className="h-full transition-[width] duration-300"
              title={`${p.label}: ${percents[i].toFixed(0)}%`}
            />
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.55fr_1fr]">
        <Reveal className="space-y-5">
          {simulatorParts.map((p, i) => (
            <div key={p.id}>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-semibold text-coffee-dark">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.label}
                </span>
                <span className="shrink-0 tabular-nums font-bold text-coffee">
                  {fmt((percents[i] / 100) * CUP_PRICE)}
                  <span className="ml-2 font-medium text-coffee/55">{percents[i].toFixed(0)}%</span>
                </span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-coffee/10">
                <div
                  className="h-full rounded-full transition-[width] duration-300"
                  style={{ width: `${percents[i]}%`, backgroundColor: p.color }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={60}
                value={Math.round(percents[i])}
                onChange={(e) => handleChange(i, Number(e.target.value))}
                className="mt-2 w-full accent-coffee"
                aria-label={`Điều chỉnh phần ${p.label}`}
              />
            </div>
          ))}
          <p className="text-sm font-semibold text-coffee/60">Cộng lại vẫn là {total.toFixed(0)}%</p>
        </Reveal>

        <Reveal delay={100} className="space-y-4">
          <Img
            src={imageMap.simulator}
            alt="Hình minh họa các lớp chi phí làm nên một ly cà phê"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="rounded-card border border-coffee/10 bg-white p-6 shadow-sm">
            <p className="font-bold text-coffee-dark">Thử nghĩ một chút</p>
            <ul className="mt-3 space-y-3">
              {simulatorQuestions.map((q) => (
                <li key={q} className="leading-relaxed text-coffee/80">
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <NoteCallout>
            Đây là mô phỏng để dễ hình dung, không phải bảng giá cố định cho mọi quán.
          </NoteCallout>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ====================== 7. SHOCK GAME ========================== */
const toneMeta: Record<
  "down" | "up" | "neutral",
  { row: string; icon: string; text: string; label: string }
> = {
  down: { row: "border-l-red-400 bg-red-50", icon: "▼", text: "text-red-600", label: "Chịu thiệt" },
  up: { row: "border-l-leaf bg-leaf/10", icon: "▲", text: "text-leaf", label: "Được lợi" },
  neutral: {
    row: "border-l-coffee/30 bg-coffee/5",
    icon: "■",
    text: "text-coffee/60",
    label: "Ít đổi thay",
  },
};

function VolatilityChart() {
  return (
    <svg
      viewBox="0 0 240 80"
      className="h-20 w-full"
      role="img"
      aria-label="Hình minh họa giá thị trường lên xuống thất thường"
    >
      <polyline
        fill="none"
        stroke="#d97706"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points="0,52 24,44 48,58 72,30 96,62 120,38 144,66 168,34 192,58 216,42 240,50"
      />
      {[52, 44, 58, 30, 62, 38, 66, 34, 58, 42, 50].map((y, i) => (
        <circle key={i} cx={i * 24} cy={y} r="2.5" fill="#7a4a28" />
      ))}
    </svg>
  );
}

export function ShockGame() {
  const [activeId, setActiveId] = useState<string | null>(shockScenarios[0].id);
  const scenario = shockScenarios.find((s) => s.id === activeId) ?? null;

  return (
    <SectionShell
      id="shock"
      tone="cream"
      title="Khi giá thế giới thay đổi, ai bị ảnh hưởng?"
      lead="Giá cà phê không chỉ do người bán và người mua trong nước quyết định. Thị trường thế giới, xuất khẩu, mùa vụ và chi phí vận hành đều có thể làm lợi ích các bên thay đổi. Bạn thử chọn một tình huống để xem."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4">
          <div className="rounded-card border border-coffee/10 bg-white p-5 shadow-sm">
            <p className="text-coffee/60">Giá thị trường thường lên xuống thất thường</p>
            <VolatilityChart />
          </div>
          <div className="space-y-2">
            {shockScenarios.map((s) => {
              const on = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  aria-pressed={on}
                  className={`w-full rounded-card border px-4 py-3 text-left font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${
                    on
                      ? "border-coffee bg-coffee text-cream shadow"
                      : "border-coffee/15 bg-white text-coffee-dark hover:border-coffee/40"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          {scenario && (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                {scenario.impacts.map((im) => {
                  const t = toneMeta[im.tone];
                  return (
                    <div
                      key={im.actor}
                      className={`rounded-card border border-coffee/10 border-l-4 bg-white p-4 ${t.row}`}
                    >
                      <p className="flex items-center justify-between font-bold text-coffee-dark">
                        {im.actor}
                        <span className={`flex items-center gap-1 text-xs ${t.text}`}>
                          <span aria-hidden>{t.icon}</span> {t.label}
                        </span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-coffee/80">{im.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-card border-l-4 border-clay bg-coffee-dark p-6 text-cream">
                <p className="font-bold text-clay">Điều rút ra</p>
                <p className="mt-2 leading-relaxed">{scenario.conclusion}</p>
              </div>
            </>
          )}
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ===================== 10. AI DEBATE =========================== */
type Message = { id: number; name: string; text: string };

export function AIDebateSection() {
  const [selected, setSelected] = useState(debateRoles[0].id);
  const [messages, setMessages] = useState<Message[]>([]);
  const nextId = useRef(0);

  const speak = () => {
    const role = debateRoles.find((r) => r.id === selected);
    if (!role) return;
    setMessages((prev) => [...prev, { id: nextId.current++, name: role.name, text: role.argument }]);
  };

  return (
    <SectionShell
      id="ai-debate"
      tone="dark"
      title="Thử tranh luận với AI"
      lead="Hãy chọn một vai trong chuỗi cà phê và thử bảo vệ lợi ích của bên đó. Bạn sẽ thấy mỗi bên đều có lý do riêng."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
        <Reveal className="space-y-5">
          <Img
            src={imageMap.aiDebate}
            alt="Hình minh họa một buổi tranh luận giữa các bên trong chuỗi cà phê"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div>
            <p className="mb-2 text-cream/70">Bạn muốn đứng ở vai nào?</p>
            <div className="flex flex-wrap gap-2">
              {debateRoles.map((r) => {
                const on = r.id === selected;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelected(r.id)}
                    aria-pressed={on}
                    className={`rounded-chip border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${
                      on ? "border-clay bg-clay text-white" : "border-cream/25 text-cream hover:bg-cream/10"
                    }`}
                  >
                    {r.self}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTAButton variant="accent" onClick={speak}>
                {messages.length === 0 ? "Bắt đầu tranh luận" : "Nghe thêm một góc nhìn"}
              </CTAButton>
              {messages.length > 0 && (
                <CTAButton
                  variant="ghost"
                  className="text-cream hover:bg-cream/10"
                  onClick={() => setMessages([])}
                >
                  Bắt đầu lại
                </CTAButton>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex min-h-[24rem] flex-col gap-3 rounded-card bg-cream p-5 shadow-lg">
            {messages.length === 0 ? (
              <p className="m-auto max-w-sm text-center text-coffee/55">
                Chọn một vai rồi bấm Bắt đầu tranh luận. Mỗi bên sẽ nói ra lợi ích và mong muốn của
                mình.
              </p>
            ) : (
              messages.map((m) => (
                <div key={m.id} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-steel/15 text-sm font-bold text-steel">
                    {m.name.charAt(0)}
                  </span>
                  <div className="rounded-card rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs font-bold text-steel">{m.name}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-coffee-dark">{m.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ======================== 11. QUIZ ============================= */
export function QuizSection() {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quizQuestions[idx];
  const total = quizQuestions.length;
  const progress = (done ? total : idx) / total;

  const pick = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (idx + 1 >= total) setDone(true);
    else {
      setIdx((x) => x + 1);
      setChosen(null);
    }
  };
  const restart = () => {
    setIdx(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  };

  return (
    <SectionShell
      id="quiz"
      tone="light"
      title="Thử xem bạn đã hiểu đến đâu"
      lead="Một vài câu hỏi ngắn để xem bạn đã nắm được mối quan hệ lợi ích trong chuỗi cà phê chưa. Không tính điểm gắt đâu, cứ thử thoải mái."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.4fr]">
        <Reveal className="hidden lg:block">
          <Img
            src={imageMap.quiz}
            alt="Hình minh họa cùng nhau ôn lại bài học về chuỗi cà phê"
            ratio="aspect-[4/5]"
            sizes="(max-width: 1024px) 0px, 35vw"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-card border border-coffee/15 bg-white p-6 shadow-md sm:p-8">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-coffee/70">
              <span>{done ? "Đã xong" : `Câu ${idx + 1} trên ${total}`}</span>
              <span>Đúng: {score}</span>
            </div>
            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-coffee/10">
              <div
                className="h-full rounded-full bg-clay transition-[width] duration-500"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            {!done ? (
              <>
                <h3 className="text-lg font-bold text-coffee-dark sm:text-xl">{q.question}</h3>
                <div className="mt-5 space-y-3">
                  {q.options.map((opt, i) => {
                    const isAnswer = i === q.answer;
                    const isChosen = i === chosen;
                    let cls = "border-coffee/15 bg-cream-light hover:border-coffee/40";
                    let mark: string | null = null;
                    if (chosen !== null) {
                      if (isAnswer) {
                        cls = "border-leaf bg-leaf/10";
                        mark = "✓ Đúng";
                      } else if (isChosen) {
                        cls = "border-red-400 bg-red-50";
                        mark = "✗ Chưa đúng";
                      } else cls = "border-coffee/10 bg-cream-light opacity-60";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => pick(i)}
                        disabled={chosen !== null}
                        className={`flex w-full items-center gap-3 rounded-card border-2 px-4 py-3.5 text-left text-sm font-medium text-coffee-dark transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay disabled:cursor-default ${cls}`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-xs font-bold text-coffee">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {mark && (
                          <span
                            className={`shrink-0 text-xs font-bold ${isAnswer ? "text-leaf" : "text-red-600"}`}
                          >
                            {mark}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {chosen !== null && (
                  <div className="mt-4 rounded-card border-l-4 border-coffee bg-coffee/5 px-4 py-3 text-sm leading-relaxed text-coffee-dark">
                    <strong>
                      {chosen === q.answer
                        ? "Chính xác. Bạn đã nắm được ý chính. "
                        : "Chưa đúng lắm. Hãy nhìn lại mối quan hệ giữa các bên trong chuỗi. "}
                    </strong>
                    {q.explain}
                  </div>
                )}

                <CTAButton
                  variant="primary"
                  onClick={next}
                  disabled={chosen === null}
                  className="mt-5 w-full"
                >
                  {idx + 1 >= total ? "Xem kết quả" : "Câu tiếp theo"}
                </CTAButton>
              </>
            ) : (
              <div className="py-6 text-center">
                <h3 className="text-2xl font-extrabold text-coffee-dark">
                  Bạn trả lời đúng {score} trên {total} câu
                </h3>
                <p className="mt-2 text-coffee/70">
                  {score >= 4
                    ? "Rất tốt, bạn đã nắm được ý chính của bài rồi."
                    : "Cũng ổn rồi. Bạn có thể xem lại phần hành trình hạt cà phê và vai trò Nhà nước để rõ hơn."}
                </p>
                <CTAButton variant="accent" onClick={restart} className="mt-6">
                  Thử lại từ đầu
                </CTAButton>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
