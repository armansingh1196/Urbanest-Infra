"use client";

/**
 * ScaleDivider — the site's recurring signature: a surveyor's scale bar.
 * Long ticks mark even units, short ticks the halves, echoing the
 * measured, plot-by-plot way land gets surveyed before anything is built.
 */
export function ScaleDivider({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const ticks = Array.from({ length: 41 });

  return (
    <div className={`w-full flex items-center gap-4 select-none ${className}`}>
      {label && (
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 820 16"
        preserveAspectRatio="none"
        className="w-full h-4 overflow-visible"
        aria-hidden="true"
      >
        <line x1="0" y1="8" x2="820" y2="8" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
        {ticks.map((_, i) => {
          const x = i * 20.5;
          const isMajor = i % 5 === 0;
          return (
            <line
              key={i}
              x1={x}
              x2={x}
              y1={8}
              y2={isMajor ? 0 : 4}
              stroke="currentColor"
              strokeOpacity={isMajor ? 0.55 : 0.22}
              strokeWidth="1"
            />
          );
        })}
      </svg>
    </div>
  );
}
