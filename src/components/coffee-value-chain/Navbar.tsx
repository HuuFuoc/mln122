"use client";

import { navItems } from "./data";

export function Navbar({
  activeId,
  onNav,
  onOpenPresentation,
}: {
  activeId: string;
  onNav: (id: string) => void;
  onOpenPresentation: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-coffee/10 bg-cream-light/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:px-16">
        <button
          onClick={() => onNav("hero")}
          className="flex items-center gap-2 text-left"
          aria-label="Về đầu trang"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coffee text-cream">
            ☕
          </span>
          <span className="hidden text-sm font-bold leading-tight text-coffee-dark sm:block">
            Chuỗi giá trị cà phê
            <span className="block text-[11px] font-medium text-coffee/60">
              Hài hòa lợi ích kinh tế
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const on = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className={`rounded-chip px-3 py-1.5 text-sm font-semibold transition-colors ${
                  on
                    ? "bg-coffee text-cream"
                    : "text-coffee/70 hover:bg-coffee/10 hover:text-coffee-dark"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          onClick={onOpenPresentation}
          className="shrink-0 rounded-chip bg-clay px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-clay/90 active:translate-y-px"
        >
          Thuyết trình
        </button>
      </div>

      {/* Liên kết cuộn ngang trên mobile */}
      <nav className="flex gap-1 overflow-x-auto px-4 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => {
          const on = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`shrink-0 rounded-chip px-3 py-1 text-xs font-semibold transition-colors ${
                on ? "bg-coffee text-cream" : "bg-coffee/10 text-coffee/70"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
