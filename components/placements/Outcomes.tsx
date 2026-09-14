import Image from "next/image";
import { OUTCOMES } from "@/lib/placements-data";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function SalaryDistribution() {
  return (
    <div>
      <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        Salary distribution by offer
      </p>
      <div className="relative mt-8 w-full overflow-hidden border border-line bg-white">
        <Image
          src={OUTCOMES.salaryImage.src}
          alt={OUTCOMES.salaryImage.alt}
          width={1618}
          height={726}
          sizes="(max-width: 1024px) 100vw, 80rem"
          className="h-auto w-full object-contain"
        />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Bar length reflects the number of offers in each compensation band — from
        ₹4 LPA minimum campus compensation to a ₹43.5 LPA highest package.
      </p>
    </div>
  );
}

export function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-24 bg-cream">
      <div className="page-grid section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeader
                eyebrow={OUTCOMES.eyebrow}
                title={OUTCOMES.headline}
              />
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
                {OUTCOMES.narrative.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="[&_span]:font-semibold [&_span]:text-heading"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <div className="border-t border-gold bg-white p-6 sm:p-8">
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {OUTCOMES.highlight.label}
                </p>
                <p className="display-num mt-3 text-6xl text-heading sm:text-7xl">
                  {OUTCOMES.highlight.unit}
                  {OUTCOMES.highlight.value}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {OUTCOMES.highlight.note}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={80}>
          <hr className="my-16 h-px w-full border-0 bg-line" />
          <SalaryDistribution />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-12 sm:grid-cols-3">
            {OUTCOMES.counters.map((counter) => (
              <div key={counter.label}>
                <p className="display-num text-4xl text-heading sm:text-5xl">
                  <CountUp
                    value={counter.value}
                    prefix={counter.prefix}
                    suffix={counter.suffix}
                  />
                </p>
                <p className="mt-3 max-w-[16rem] text-sm text-muted-foreground">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}