"use client";

import { useCallback, useEffect, useState } from "react";
import { Globals } from "@react-spring/web";
import { sections } from "@/data/sections";

export default function SideNav() {
  const [active, setActive] = useState(0);

  // Tôn trọng prefers-reduced-motion: tắt mọi animation react-spring toàn trang
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => Globals.assign({ skipAnimation: mq.matches });
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      Globals.assign({ skipAnimation: false });
    };
  }, []);

  // Theo dõi section đang hiển thị
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.5 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const goTo = useCallback((i: number) => {
    const target = sections[Math.max(0, Math.min(sections.length - 1, i))];
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Điều hướng bằng phím mũi tên phục vụ chế độ thuyết trình
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goTo(active + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(active - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const progress = ((active + 1) / sections.length) * 100;

  return (
    <>
      {/* Thanh tiến trình trên cùng (mobile + desktop) */}
      <div className="fixed inset-x-0 top-0 z-50 h-1.5 bg-coffee/10">
        <div
          className="h-full bg-gradient-to-r from-earth to-leaf transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Rail dọc bên trái, chỉ hiện từ lg trở lên */}
      <nav
        aria-label="Mục lục thuyết trình"
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="flex flex-col gap-1">
          {sections.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.id}>
                <button
                  onClick={() => goTo(i)}
                  className="group flex items-center gap-3"
                  aria-current={on ? "true" : undefined}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                      on
                        ? "scale-110 bg-coffee text-cream shadow-lg shadow-coffee/30"
                        : "bg-coffee/10 text-coffee/60 group-hover:bg-coffee/20"
                    }`}
                  >
                    {s.short}
                  </span>
                  <span className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap rounded-chip bg-coffee-dark/85 px-0 text-sm font-semibold text-cream opacity-0 backdrop-blur transition-all duration-300 group-hover:max-w-[240px] group-hover:px-3 group-hover:py-1 group-hover:opacity-100">
                    {s.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Nút prev/next chế độ thuyết trình */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <span className="hidden rounded-full bg-coffee-dark/80 px-3 py-1 text-xs font-medium text-cream backdrop-blur sm:inline">
          {sections[active].short} · {sections[active].label}
        </span>
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Phần trước"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-coffee text-cream shadow-lg transition hover:bg-coffee-dark disabled:opacity-30"
        >
          ↑
        </button>
        <button
          onClick={() => goTo(active + 1)}
          disabled={active === sections.length - 1}
          aria-label="Phần sau"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-coffee text-cream shadow-lg transition hover:bg-coffee-dark disabled:opacity-30"
        >
          ↓
        </button>
      </div>
    </>
  );
}
