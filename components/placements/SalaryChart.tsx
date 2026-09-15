import { OUTCOMES } from "@/lib/placements-data";

/**
 * Salary distribution rendered as a real bar chart instead of the previous
 * flattened image. Bar lengths are proportional to the number of offers in
 * each compensation band (computed from `OUTCOMES.bands`, never hard-coded).
 * Bars animate in on scroll via the global `.bar-width` keyframe, which is
 * gated behind `.is-inview` so it also holds still under reduced motion.
 */
export function SalaryChart() {
  const bands = OUTCOMES.bands;
  const total = bands.reduce((sum, band) => sum + band.count, 0);
  const rows = bands.map((band) => ({
    ...band,
    pct: Math.round((band.count / total) * 1000) / 10,
  }));

  const ariaSummary = rows
    .map((row) => `${row.range}: ${row.offers} (${row.pct}%)`)
    .join("; ");

  return (
    <figure className="border border-line bg-white">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-4 sm:px-7">
        <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {OUTCOMES.chart.eyebrow}
        </p>
        <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {OUTCOMES.chart.axis}
        </p>
      </div>

      <figcaption className="sr-only">
        Salary distribution of placement offers across four compensation bands.
        {ariaSummary}
      </figcaption>

      <div className="px-5 py-7 sm:px-7">
        <ul className="space-y-6">
          {rows.map((row) => (
            <li key={row.range}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-ui text-xs font-semibold tracking-[0.06em] text-navy">
                  {row.range}
                </span>
                <span className="font-ui text-xs tabular-nums text-muted-foreground">
                  {row.offers}
                  <span className="hidden sm:inline"> · {row.pct}% of offers</span>
                </span>
              </div>
              <div
                role="img"
                aria-label={`${row.range} — ${row.offers}, ${row.pct}% of total offers`}
                className="mt-2.5 h-7 w-full bg-cream-deep"
              >
                <div
                  className="bar-width h-full min-w-1 bg-gold"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="border-t border-line px-5 py-4 text-xs leading-relaxed text-muted-foreground sm:px-7">
        {OUTCOMES.chart.footnote}
      </p>
    </figure>
  );
}