"use client";

import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Hiện nội dung mượt mà bằng react-spring khi cuộn vào tầm nhìn. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style = useSpring({
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0px)" : `translateY(${y}px)`,
    delay,
    config: { tension: 180, friction: 24 },
  });

  return (
    <animated.div ref={ref} style={style} className={className}>
      {children}
    </animated.div>
  );
}
