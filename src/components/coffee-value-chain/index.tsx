"use client";

import { useCallback, useEffect, useState } from "react";
import { sections } from "./data";
import { Navbar } from "./Navbar";
import { PresentationMode } from "./PresentationMode";
import {
  CaseSection,
  ConclusionSection,
  HeroSection,
  PolicySection,
  StateRoleSection,
  TheorySection,
  UnitWarningSection,
  ValueChainSection,
} from "./sections";
import { AIDebateSection, CostBreakdown, QuizSection, ShockGame } from "./interactive";

export default function CoffeeValueChainSite() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [presenting, setPresenting] = useState(false);

  // Theo dõi section đang ở giữa khung nhìn
  useEffect(() => {
    const els = sections
      .map((s, i) => {
        const el = document.getElementById(s.id);
        return el ? { el, i } : null;
      })
      .filter((x): x is { el: HTMLElement; i: number } => x !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = els.find((x) => x.el === entry.target);
            if (match) setActiveIndex(match.i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((x) => io.observe(x.el));
    return () => io.disconnect();
  }, []);

  const goToId = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const goToIndex = useCallback(
    (index: number) => {
      const i = Math.max(0, Math.min(sections.length - 1, index));
      goToId(sections[i].id);
    },
    [goToId],
  );

  // Phím mũi tên điều khiển khi đang mở lời dẫn
  useEffect(() => {
    if (!presenting) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") goToIndex(activeIndex + 1);
      else if (e.key === "ArrowLeft") goToIndex(activeIndex - 1);
      else if (e.key === "Escape") setPresenting(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [presenting, activeIndex, goToIndex]);

  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar
        activeId={sections[activeIndex].id}
        onNav={goToId}
        onOpenPresentation={() => setPresenting(true)}
      />

      <main>
        <HeroSection onStart={() => goToId("case")} onSeeChain={() => goToId("value-chain")} />
        <CaseSection />
        <TheorySection />
        <ValueChainSection />
        <UnitWarningSection />
        <CostBreakdown />
        <ShockGame />
        <StateRoleSection />
        <PolicySection />
        <AIDebateSection />
        <QuizSection />
        <ConclusionSection
          onRetryQuiz={() => goToId("quiz")}
          onTryDebate={() => goToId("ai-debate")}
          onSeeChain={() => goToId("value-chain")}
        />
      </main>

      <footer className="border-t border-coffee/10 bg-coffee-dark px-6 py-12 text-center text-cream/70 lg:px-16">
        <p className="mx-auto max-w-2xl leading-relaxed">
          Một bài học nhỏ môn Kinh tế chính trị Mác - Lênin, kể về chuyện lợi ích được chia ra sao
          trong hành trình của một ly cà phê Việt.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-cream/45">
          Các con số trong phần mô phỏng chỉ để minh họa. Chính sách nhắc tới để liên hệ: Nghị định
          98/2018/NĐ-CP, Nghị định 55/2015/NĐ-CP và Quyết định 150/QĐ-TTg.
        </p>
      </footer>

      <PresentationMode
        open={presenting}
        activeIndex={activeIndex}
        onClose={() => setPresenting(false)}
        onGoTo={goToIndex}
      />
    </div>
  );
}
