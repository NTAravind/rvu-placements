import Image from "next/image";
import { INDUSTRY } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "cn";
import { ArrowUpRight } from "lucide-react";

export function Industry() {
  return (
    <section id="industry" className="scroll-mt-24 bg-white">
      <div className="page-grid section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeader
                eyebrow={INDUSTRY.eyebrow}
                title={INDUSTRY.headline}
                body={INDUSTRY.body}
              />
            </Reveal>

            <ol className="relative mt-12">
              <div
                aria-hidden="true"
                className="absolute left-[0.7rem] top-3 bottom-3 w-px bg-line"
              />
              {INDUSTRY.journey.map((step, i) => (
                <li
                  key={step.title}
                  className="relative grid grid-cols-[1.5rem_1fr] gap-5 py-5"
                >
                  <span className="relative z-10 mt-1.5 size-2.5 rounded-full bg-gold" />
                  <div>
                    <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-semibold text-heading">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={INDUSTRY.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8")}
            >
              {INDUSTRY.cta.label}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="relative aspect-[5/4] overflow-hidden bg-cream lg:sticky lg:top-28">
                <Image
                  src={INDUSTRY.image.src}
                  alt={INDUSTRY.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain p-4 sm:p-8"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
