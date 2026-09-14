import { Check } from "lucide-react";
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

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeader
                eyebrow="Placement governance"
                title="One coordinating body. One process."
                body="Corporate & Alumni Relations (CAR) coordinates placements and internships across every school."
                titleClassName="text-2xl sm:text-3xl lg:text-[2rem]"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
              {GOVERNANCE.map((section, i) => (
                <Reveal key={section.title} delay={(i % 2) * 70}>
                  <div className="border-t border-gold pt-5">
                    <h3 className="font-heading text-lg font-semibold text-heading">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy">
                      {section.body.split(". ").filter(Boolean).map((sentence) => (
                        <p key={sentence} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                          <span>{sentence}.</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="relative mt-16 w-full overflow-hidden bg-navy">
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
    </section>
  );
}
