import { HERO_STATS, TOTAL_STUDENTS } from "@/lib/placements-data";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { cn } from "cn";

export function StatsStrip() {
  return (
    <section aria-label="Placement statistics" className="bg-white">
      <div className="page-grid section-pad-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {HERO_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 70}
              className={cn(
                "py-8 lg:py-4",
                i % 2 === 1 && "border-l border-line pl-5 sm:pl-8",
                i % 2 === 0 && "pr-5 sm:pr-8",
                i >= 2 && "border-t border-line lg:border-t-0",
                i >= 2 && "lg:border-l lg:pl-8",
                i === 1 && "lg:border-l"
              )}
            >
              <p className="display-num text-[2.65rem] text-heading sm:text-5xl lg:text-[3.4rem]">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                />
              </p>
              <p className="mt-3 font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <hr className="mt-8 h-px w-full border-0 bg-line" />

        <Reveal>
          <div className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              A single, coordinated placement process across every school.
            </p>
            <p className="font-ui text-sm text-heading">
              <span className="display-num mr-2 text-xl text-gold">
                {TOTAL_STUDENTS.toLocaleString("en-IN")}
              </span>
              students currently eligible
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
