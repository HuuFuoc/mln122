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
import { NoteCallout, Reveal, SectionShell } from "./ui";

const fmt = (n: number) => Math.round(n).toLocaleString("vi-VN") + "đ";
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

/* ===================== 6. PRICE SIMULATOR ====================== */
export function PriceSimulator() {
  const [percents, setPercents] = useState<number[]>(
    simulatorParts.map((p) => p.percent),
  );

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
      kicker="Mô phỏng tương tác"
      title="85.000đ đi đâu?"
      lead="Một ly cà phê bán lẻ gồm nhiều lớp chi phí và lợi ích. Kéo thanh trượt để thử phân phối lại; tổng luôn được chuẩn hóa về 100%."
    >
      <Reveal className="mb-8">
        <div className="relative aspect-[16/5] w-full overflow-hidden rounded-card border border-coffee/10 bg-coffee/5 shadow-sm">
          <Image
            src={imageMap.simulator}
            alt="Mô phỏng cơ cấu giá một ly cà phê"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Thanh tỉ lệ tổng hợp */}
      <Reveal>
        <div className="flex h-8 w-full overflow-hidden rounded-chip border border-coffee/10">
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

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Sliders */}
        <Reveal className="space-y-4">
          {simulatorParts.map((p, i) => (
            <div key={p.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-coffee-dark">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.label}
                </span>
                <span className="tabular-nums font-bold text-coffee">
                  {percents[i].toFixed(0)}% · {fmt((percents[i] / 100) * CUP_PRICE)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={60}
                value={Math.round(percents[i])}
                onChange={(e) => handleChange(i, Number(e.target.value))}
                className="mt-1 w-full accent-coffee"
                aria-label={p.label}
              />
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-semibold text-coffee/70">
              Tổng: {total.toFixed(0)}% · {fmt(CUP_PRICE)}
            </span>
            <button
              onClick={reset}
              className="rounded-chip border border-coffee/25 px-4 py-1.5 text-sm font-semibold text-coffee-dark transition hover:bg-coffee/5"
            >
              Đặt lại
            </button>
          </div>
        </Reveal>

        {/* Câu hỏi thuyết trình + note */}
        <Reveal delay={100} className="space-y-4">
          <div className="rounded-card border border-coffee/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-clay">
              Câu hỏi thuyết trình
            </p>
            <ul className="mt-3 space-y-3">
              {simulatorQuestions.map((q) => (
                <li key={q} className="flex gap-2 text-coffee-dark">
                  <span className="text-clay">→</span>
                  <span className="font-medium leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <NoteCallout>
            Đây là mô hình minh họa để hiểu quan hệ lợi ích, không phải báo cáo tài chính của bất
            kỳ doanh nghiệp cụ thể nào.
          </NoteCallout>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ====================== 7. SHOCK GAME ========================== */
const toneRow: Record<"down" | "up" | "neutral", string> = {
  down: "border-l-red-400 bg-red-50",
  up: "border-l-leaf bg-leaf/10",
  neutral: "border-l-coffee/30 bg-coffee/5",
};
const toneIcon: Record<"down" | "up" | "neutral", string> = {
  down: "▼",
  up: "▲",
  neutral: "■",
};
const toneText: Record<"down" | "up" | "neutral", string> = {
  down: "text-red-600",
  up: "text-leaf",
  neutral: "text-coffee/60",
};

export function ShockGame() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const scenario = shockScenarios.find((s) => s.id === activeId) ?? null;

  return (
    <SectionShell
      id="shock"
      tone="cream"
      kicker="Mini game"
      title="Cú sốc giá thế giới"
      lead="Chọn một tình huống thị trường để xem tác động lan tới từng chủ thể trong chuỗi không hề giống nhau."
    >
      <div className="flex flex-wrap gap-3">
        {shockScenarios.map((s) => {
          const on = s.id === activeId;
          return (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`rounded-card border px-4 py-3 text-left text-sm font-semibold transition ${
                on
                  ? "border-coffee bg-coffee text-cream shadow"
                  : "border-coffee/15 bg-white text-coffee-dark hover:border-coffee/40"
              }`}
            >
              <span className="mr-2">{s.emoji}</span>
              {s.label}
            </button>
          );
        })}
      </div>

      {scenario ? (
        <Reveal className="mt-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {scenario.impacts.map((im) => (
              <div
                key={im.actor}
                className={`rounded-card border border-coffee/10 border-l-4 bg-white p-4 ${toneRow[im.tone]}`}
              >
                <p className="flex items-center justify-between font-bold text-coffee-dark">
                  {im.actor}
                  <span className={`text-xs ${toneText[im.tone]}`}>{toneIcon[im.tone]}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-coffee/80">{im.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-card border-l-4 border-coffee bg-coffee-dark p-6 text-cream">
            <p className="text-sm font-bold uppercase tracking-wide text-cream/70">Kết luận</p>
            <p className="mt-2 leading-relaxed">{scenario.conclusion}</p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-8 rounded-card border border-dashed border-coffee/25 bg-white/60 p-10 text-center text-coffee/60">
          Hãy chọn một tình huống phía trên để xem phân tích tác động.
        </div>
      )}
    </SectionShell>
  );
}

/* ===================== 10. AI DEBATE =========================== */
type Message = { id: number; name: string; emoji: string; text: string };

export function AIDebateSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const nextId = useRef(0);

  const addRole = (roleId: string) => {
    const role = debateRoles.find((r) => r.id === roleId);
    if (!role) return;
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, name: role.name, emoji: role.emoji, text: role.argument },
    ]);
  };

  return (
    <SectionShell
      id="ai-debate"
      tone="blue"
      kicker="Ứng dụng AI"
      title="AI Debate: Tranh biện lợi ích kinh tế"
      lead="Chọn một vai để xem lập luận đại diện cho lợi ích của chủ thể đó. Khung hội thoại mô phỏng, không gọi API thật."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-steel/25 bg-steel/10 shadow-sm">
            <Image
              src={imageMap.aiDebate}
              alt="Tranh biện vai trò các chủ thể trong chuỗi cà phê"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {debateRoles.map((r) => (
              <button
                key={r.id}
                onClick={() => addRole(r.id)}
                className="rounded-chip border border-steel/30 bg-white px-3 py-1.5 text-sm font-semibold text-coffee-dark transition hover:bg-steel/10 active:translate-y-px"
              >
                {r.emoji} {r.name}
              </button>
            ))}
            {messages.length > 0 && (
              <button
                onClick={() => setMessages([])}
                className="rounded-chip px-3 py-1.5 text-sm font-semibold text-coffee/60 hover:text-coffee-dark"
              >
                Xóa hội thoại
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex min-h-[22rem] flex-col gap-3 rounded-card border border-steel/25 bg-white p-5 shadow-sm">
            {messages.length === 0 ? (
              <p className="m-auto max-w-sm text-center text-coffee/55">
                Chọn một vai bên trái để bắt đầu phiên tranh biện. Mỗi chủ thể sẽ trình bày lợi
                ích và mong muốn của mình.
              </p>
            ) : (
              messages.map((m) => (
                <div key={m.id} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-steel/15 text-lg">
                    {m.emoji}
                  </span>
                  <div className="rounded-card rounded-tl-sm bg-cream-light px-4 py-2.5">
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

  const pick = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (idx + 1 >= quizQuestions.length) {
      setDone(true);
    } else {
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
      kicker="Progress test"
      title="Kiểm tra nhanh kiến thức"
      lead="Năm câu hỏi ôn lại các khái niệm chính: lợi ích kinh tế, quan hệ lợi ích, mâu thuẫn lợi ích và vai trò Nhà nước."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-coffee/10 bg-coffee/5 shadow-sm">
            <Image
              src={imageMap.quiz}
              alt="Ôn tập kiến thức kinh tế chính trị"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-card border border-coffee/10 bg-white p-6 shadow-sm sm:p-8">
            {!done ? (
              <>
                <div className="flex items-center justify-between text-sm font-semibold text-coffee/60">
                  <span>
                    Câu {idx + 1}/{quizQuestions.length}
                  </span>
                  <span>Điểm: {score}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-coffee-dark">{q.question}</h3>
                <div className="mt-4 space-y-2.5">
                  {q.options.map((opt, i) => {
                    const isAnswer = i === q.answer;
                    const isChosen = i === chosen;
                    let cls = "border-coffee/15 bg-cream-light hover:border-coffee/40";
                    if (chosen !== null) {
                      if (isAnswer) cls = "border-leaf bg-leaf/10 text-leaf";
                      else if (isChosen) cls = "border-red-400 bg-red-50 text-red-700";
                      else cls = "border-coffee/10 bg-cream-light opacity-60";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => pick(i)}
                        disabled={chosen !== null}
                        className={`flex w-full items-center gap-3 rounded-card border px-4 py-3 text-left text-sm font-medium text-coffee-dark transition ${cls}`}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-xs font-bold text-coffee">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {chosen !== null && (
                  <div className="mt-4 rounded-card border-l-4 border-coffee bg-coffee/5 px-4 py-3 text-sm leading-relaxed text-coffee-dark">
                    <strong>{chosen === q.answer ? "Chính xác. " : "Chưa đúng. "}</strong>
                    {q.explain}
                  </div>
                )}
                <button
                  onClick={next}
                  disabled={chosen === null}
                  className="mt-5 w-full rounded-chip bg-coffee px-6 py-3 font-semibold text-cream transition hover:bg-coffee-dark disabled:opacity-30"
                >
                  {idx + 1 >= quizQuestions.length ? "Xem kết quả" : "Câu tiếp theo"}
                </button>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-4xl">{score >= 4 ? "🏆" : score >= 3 ? "👍" : "📚"}</p>
                <h3 className="mt-3 text-2xl font-extrabold text-coffee-dark">
                  Bạn đúng {score}/{quizQuestions.length} câu
                </h3>
                <p className="mt-2 text-coffee/70">
                  {score >= 4
                    ? "Rất tốt, bạn đã nắm chắc các khái niệm trọng tâm."
                    : "Hãy xem lại phần Chuỗi lợi ích và Vai trò Nhà nước để củng cố nhé."}
                </p>
                <button
                  onClick={restart}
                  className="mt-6 rounded-chip bg-clay px-6 py-2.5 font-semibold text-white transition hover:bg-clay/90"
                >
                  Làm lại
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
