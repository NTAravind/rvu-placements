import { ChevronDown } from "lucide-react";
import { GOVERNANCE, PROCESS } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function ProcessTimeline() {
  return (
    <ol className="relative mt-14 grid grid-cols-1 gap-0 lg:grid-cols-5">
      <div
        aria-hidden="true"
        className="absolute left-4 top-3 bottom-3 w-px bg-line lg:left-0 lg:right-0 lg:top-5 lg:bottom-auto lg:h-px lg:w-auto"
      />
      {PROCESS.steps.map((step) => (
        <li
          key={step.title}
          className="relative grid grid-cols-[2rem_1fr] gap-5 py-6 lg:grid-cols-1 lg:gap-0 lg:py-0 lg:pr-8"
        >
          <span className="relative z-10 mt-0.5 flex size-8 items-center justify-center bg-gold font-ui text-[11px] font-bold text-heading lg:mb-8">
            {step.step}
          </span>
          <div>
            <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-heading">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ReferencePolicies() {
  return (
    <div className="border-y border-line bg-cream-deep/50">
      <div className="page-grid">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 outline-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-3">
              <span className="eyebrow !text-muted-foreground">
                For reference
              </span>
              <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Placement Governance &amp; Student Eligibility
              </span>
            </span>
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>

          <div className="grid grid-cols-1 gap-x-10 gap-y-6 pb-7 sm:grid-cols-2">
            {GOVERNANCE.map((section) => (
              <div key={section.title} className="border-l-2 border-line pl-4">
                <h3 className="font-heading text-sm font-semibold text-navy/80">
                  {section.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="pb-7 font-ui text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
            Policies are reproduced for reference from the University placement
            charter.
          </p>
        </details>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white">
      <div className="page-grid section-pad">
        <Reveal>
          <SectionHeader
            eyebrow={PROCESS.eyebrow}
            title={PROCESS.headline}
            body={PROCESS.body}
          />
        </Reveal>

        <Reveal delay={80}>
          <ProcessTimeline />
        </Reveal>

        <Reveal>
          <hr className="my-16 h-px w-full border-0 bg-line lg:my-20" />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative w-full overflow-hidden bg-navy">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={PROCESS.video.src}
                title={PROCESS.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <ReferencePolicies />
      </Reveal>
    </section>
  );
}