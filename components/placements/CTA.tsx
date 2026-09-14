import { ArrowUpRight } from "lucide-react";

import { BRAND, CTA as CTA_DATA } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "cn";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.06]" />

        <div className="absolute -right-32 -top-32 size-[28rem] rounded-full border border-gold/10" />
        <div className="absolute -right-20 -top-20 size-[24rem] rounded-full border border-gold/[0.06]" />
      </div>

      <div className="page-grid relative section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main message */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-gold"
                />

                <p className="font-ui text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                  Recruit with RVU
                </p>
              </div>

              <h2 className="headline mt-6 max-w-4xl text-[3rem] leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[5rem]">
                Ready to build
                <span className="block text-gold">
                  your next team?
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-[1.75] text-white/70 sm:text-lg">
                {CTA_DATA.body}
              </p>
            </Reveal>
          </div>

          {/* Action / Contact */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-start lg:justify-end">
            <Reveal delay={100}>
              <a
                href={CTA_DATA.recruitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "gold",
                    size: "lg",
                  }),
                  "group min-h-12 px-7 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                )}
              >
                <span>{CTA_DATA.button}</span>

                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Contact information */}
              <div className="mt-10 w-full border-t border-white/15 pt-7">
                <p className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Placement Office
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  <a
                    href={`mailto:${BRAND.placementsEmail}`}
                    className="block w-fit text-white/85 transition-colors duration-200 hover:text-gold"
                  >
                    {BRAND.placementsEmail}
                  </a>

                  <a
                    href="tel:+918951179896"
                    className="block w-fit text-white/85 transition-colors duration-200 hover:text-gold"
                  >
                    {BRAND.phone}
                  </a>

                  <p className="max-w-sm pt-2 leading-relaxed text-white/60">
                    {CTA_DATA.office}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom detail */}
        <Reveal delay={180}>
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 lg:mt-20">
            <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
              Industry Partnerships
            </span>

            <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
              RV University
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}