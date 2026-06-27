"use client";

import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Section from "./Section";
import { quiz } from "@/data/quiz";

export default function QuizSection() {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[idx];

  const pick = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 >= quiz.length) {
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

  const [card, cardApi] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(14px)",
    config: { tension: 210, friction: 22 },
  }));
  useEffect(() => {
    cardApi.start({
      from: { opacity: 0, transform: "translateY(14px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
    });
  }, [idx, done, cardApi]);

  return (
    <Section
      id="quiz"
      tone="cream"
      title="Ai là người giữ cân bằng lợi ích?"
      subtitle="Quiz ôn tập nhanh các khái niệm: lợi ích kinh tế, quan hệ lợi ích và vai trò của Nhà nước."
    >
      <animated.div
        style={card}
        className="mx-auto max-w-2xl rounded-3xl border border-coffee/10 bg-white/80 p-6 shadow-md sm:p-8"
      >
        {!done ? (
          <>
            <div className="flex items-center justify-between text-sm font-semibold text-coffee/60">
              <span>
                Câu {idx + 1}/{quiz.length}
              </span>
              <span>Điểm: {score}</span>
            </div>
            <h3 className="mt-3 text-xl font-extrabold text-coffee-dark">{q.question}</h3>

            <div className="mt-5 space-y-2.5">
              {q.options.map((opt, i) => {
                const isAnswer = i === q.answer;
                const isChosen = i === chosen;
                let cls =
                  "border-coffee/15 bg-cream-soft hover:border-coffee/40 hover:bg-white";
                if (chosen !== null) {
                  if (isAnswer) cls = "border-leaf bg-leaf/15 text-leaf-dark";
                  else if (isChosen) cls = "border-red-400 bg-red-50 text-red-700";
                  else cls = "border-coffee/10 bg-cream-soft opacity-60";
                }
                return (
                  <button
                    key={i}
                    onClick={() => pick(i)}
                    disabled={chosen !== null}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${cls}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-xs font-bold text-coffee">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-coffee-dark">{opt}</span>
                    {chosen !== null && isAnswer && <span className="ml-auto">✓</span>}
                  </button>
                );
              })}
            </div>

            {chosen !== null && (
              <div className="mt-4 rounded-xl border-l-4 border-coffee bg-coffee/5 px-4 py-3 text-sm leading-relaxed text-coffee-dark">
                <strong>{chosen === q.answer ? "Chính xác! " : "Chưa đúng. "}</strong>
                {q.explain}
              </div>
            )}

            <button
              onClick={next}
              disabled={chosen === null}
              className="mt-5 w-full rounded-full bg-coffee px-6 py-3 font-semibold text-cream transition hover:bg-coffee-dark disabled:opacity-30"
            >
              {idx + 1 >= quiz.length ? "Xem kết quả" : "Câu tiếp theo →"}
            </button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-5xl">{score === quiz.length ? "🏆" : score >= quiz.length / 2 ? "👍" : "📚"}</p>
            <h3 className="mt-3 text-2xl font-extrabold text-coffee-dark">
              Bạn đúng {score}/{quiz.length} câu
            </h3>
            <p className="mt-2 text-coffee/70">
              {score === quiz.length
                ? "Tuyệt vời! Bạn đã nắm chắc lý thuyết quan hệ lợi ích kinh tế."
                : "Hãy xem lại phần Chuỗi lợi ích và Policy Lab để củng cố nhé."}
            </p>
            <button
              onClick={restart}
              className="mt-6 rounded-full bg-earth px-6 py-2.5 font-semibold text-white transition hover:bg-earth-soft"
            >
              ↺ Làm lại
            </button>
          </div>
        )}
      </animated.div>
    </Section>
  );
}
