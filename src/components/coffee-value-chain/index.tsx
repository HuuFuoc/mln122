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
import { AIDebateSection, PriceSimulator, QuizSection, ShockGame } from "./interactive";

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

  // Phím mũi tên điều khiển khi đang ở chế độ thuyết trình
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
        <HeroSection onStart={() => goToId("case")} onPresentation={() => setPresenting(true)} />
        <CaseSection />
        <TheorySection />
        <ValueChainSection />
        <UnitWarningSection />
        <PriceSimulator />
        <ShockGame />
        <StateRoleSection />
        <PolicySection />
        <AIDebateSection />
        <QuizSection />
        <ConclusionSection />
      </main>

      <footer className="border-t border-coffee/10 bg-coffee-dark px-6 py-10 text-center text-cream/70 lg:px-16">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed">
          Sản phẩm học tập môn Kinh tế chính trị Mác - Lênin. Chủ đề: Quan hệ lợi ích kinh tế
          trong chuỗi giá trị cà phê Việt Nam.
        </p>
        <p className="mt-2 text-xs text-cream/45">
          Tài liệu liên hệ: Nghị định 98/2018/NĐ-CP, Nghị định 55/2015/NĐ-CP, Quyết định
          150/QĐ-TTg. Số liệu trong simulator là minh họa.
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
