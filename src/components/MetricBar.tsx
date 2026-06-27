"use client";

import { animated, useSpring } from "@react-spring/web";

type MetricBarProps = {
  label: string;
  emoji: string;
  /** 0-100 */
  value: number;
  color?: string;
};

export default function MetricBar({
  label,
  emoji,
  value,
  color = "#2e7d32",
}: MetricBarProps) {
  const v = Math.max(0, Math.min(100, value));
  const bar = useSpring({
    width: `${v}%`,
    config: { tension: 160, friction: 22 },
  });
  const num = useSpring({
    val: v,
    config: { tension: 160, friction: 22 },
  });

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm font-semibold text-coffee-dark">
        <span>
          {emoji} {label}
        </span>
        <animated.span className="tabular-nums text-coffee">
          {num.val.to((x) => Math.round(x))}
        </animated.span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-coffee/10">
        <animated.div
          style={{ ...bar, backgroundColor: color }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
}
